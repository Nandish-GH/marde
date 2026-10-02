export function negotiate(accept) {
  if (!accept?.trim()) return 'html';
  const ranges = accept.toLowerCase().split(',').map((part, order) => {
    const [type, ...parameters] = part.trim().split(';').map(value => value.trim());
    const qParameter = parameters.find(value => value.startsWith('q='));
    const q = qParameter ? Number(qParameter.slice(2)) : 1;
    return { type, order, q: Number.isFinite(q) && q >= 0 && q <= 1 ? q : 0 };
  });
  function quality(type) {
    const matches = ranges.map(range => ({ ...range, specificity: range.type === type ? 2 : range.type === 'text/*' ? 1 : range.type === '*/*' ? 0 : -1 })).filter(range => range.specificity >= 0);
    matches.sort((a, b) => b.specificity - a.specificity || b.q - a.q || a.order - b.order);
    return matches[0]?.q || 0;
  }
  const html = quality('text/html'), md = quality('text/markdown');
  if (!html && !md) return null;
  return md > html ? 'markdown' : 'html';
}

export function bypass(request) {
  const url = new URL(request.url);
  return !['GET', 'HEAD'].includes(request.method) || /\.[^/]+$/.test(url.pathname) || url.pathname.startsWith('/_next/') || url.pathname.startsWith('/contacts/') || url.pathname === '/thank-you/' || request.headers.has('rsc') || request.headers.has('next-router-state-tree') || request.headers.has('next-router-prefetch') || url.searchParams.has('_rsc');
}

export function varyAccept(headers) {
  const values = (headers.get('Vary') || '').split(',').map(value => value.trim()).filter(Boolean);
  if (!values.some(value => ['accept', '*'].includes(value.toLowerCase()))) values.push('Accept');
  headers.set('Vary', values.join(', '));
}

export function createHandler(pages, originFetch = fetch) {
  function markdownResponse(request, path) {
    const page = pages[path];
    const headers = new Headers({ 'Vary': 'Accept', 'Cache-Control': 'no-store', 'Content-Type': 'text/markdown; charset=utf-8', Link: `</llms.txt>; rel="describedby", <${path}>; rel="canonical"` });
    if (!page) return new Response(request.method === 'HEAD' ? null : '# Page not found\n\nThe requested MARDE page does not exist. Find current information in [llms.txt](/llms.txt), the [sitemap](/sitemap.xml), or [Contact MARDE](/contact/).\n', { status: 404, headers });
    headers.set('ETag', page.etag);
    if (!page.index) headers.set('X-Robots-Tag', 'noindex, nofollow');
    else if (new URL(request.url).pathname.endsWith('/index.md')) headers.set('X-Robots-Tag', 'noindex, follow');
    const validators = (request.headers.get('If-None-Match') || '').split(',').map(value => value.trim().replace(/^W\//, ''));
    if (validators.includes(page.etag) || validators.includes('*')) return new Response(null, { status: 304, headers });
    return new Response(request.method === 'HEAD' ? null : page.body, { headers });
  }
  return async function handle(request) {
    if (!['GET', 'HEAD'].includes(request.method)) return originFetch(request);
    const canonical = new URL(request.url);
    if (['mardeinc.com', 'www.mardeinc.com'].includes(canonical.hostname) && (canonical.hostname === 'www.mardeinc.com' || canonical.protocol === 'http:')) {
      canonical.hostname = 'mardeinc.com'; canonical.protocol = 'https:';
      return new Response(null, { status: 308, headers: { Location: canonical.href, 'Cache-Control': 'no-store' } });
    }
    if (['GET', 'HEAD'].includes(request.method) && canonical.pathname.endsWith('/index.md')) {
      const path = canonical.pathname.slice(0, -'index.md'.length);
      if (pages[path]) return markdownResponse(request, path);
    }
    if (bypass(request)) return originFetch(request);
    const url = new URL(request.url);
    const path = url.pathname.endsWith('/') ? url.pathname : `${url.pathname}/`;
    const selected = negotiate(request.headers.get('Accept'));
    const headers = new Headers({ 'Vary': 'Accept', 'Cache-Control': 'no-store' });
    if (!selected) return new Response(request.method === 'HEAD' ? null : 'No acceptable representation. Request text/html or text/markdown.\n', { status: 406, headers: { ...Object.fromEntries(headers), 'Content-Type': 'text/plain; charset=utf-8' } });
    if (pages[path] && path !== url.pathname) {
      url.pathname = path;
      return new Response(null, { status: 308, headers: { ...Object.fromEntries(headers), Location: url.href } });
    }
    if (selected === 'html') {
      // The routed Worker fetches the configured GitHub Pages origin, not itself.
      const upstreamHeaders = new Headers(request.headers);
      for (const name of ['if-none-match', 'if-modified-since', 'range', 'if-range']) upstreamHeaders.delete(name);
      const upstream = await originFetch(new Request(request, { headers: upstreamHeaders }));
      const responseHeaders = new Headers(upstream.headers);
      varyAccept(responseHeaders);
      // Do not depend on CDN support for arbitrary Vary keys; variants never share a cache.
      responseHeaders.set('Cache-Control', 'no-store');
      const links = responseHeaders.get('Link');
      responseHeaders.set('Link', [links, pages[path] ? `<${path}index.md>; rel="alternate"; type="text/markdown"` : null, '</llms.txt>; rel="describedby"'].filter(Boolean).join(', '));
      return new Response(request.method === 'HEAD' ? null : upstream.body, { status: upstream.status, statusText: upstream.statusText, headers: responseHeaders });
    }
    return markdownResponse(request, path);
  };
}
