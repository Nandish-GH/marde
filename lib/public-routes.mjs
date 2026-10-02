// Single registry for sitemap, agent directory, and negotiated representations.
// lastmod is a content revision, never the build or deployment timestamp.
export const publicRoutes = [
  { path: '/', title: 'MARDE Inc. — emergency-response robotics', lastmod: '2026-10-01' },
  ...['technology', 'team', 'mission', 'support', 'faq', 'contact', 'privacy'].map(slug => ({ path: `/${slug}/`, title: `MARDE ${slug}`, lastmod: ['technology', 'faq', 'contact'].includes(slug) ? '2026-10-01' : '2026-09-14' })),
  ...['about', 'ems-partners', 'research', 'updates'].map(slug => ({ path: `/${slug}/`, title: `MARDE ${slug.replaceAll('-', ' ')}`, lastmod: '2026-10-01' })),
  ...['air', 'ground', 'nexus', 'modules'].map(slug => ({ path: `/technology/${slug}/`, title: `MARDE ${slug}`, lastmod: '2026-10-01' })),
  ...['drone-aed-evidence', 'final-access', 'human-oversight', 'aviation-pathway', 'response-gap', 'evaluating-early-stage-partners'].map(slug => ({ path: `/research/${slug}/`, title: slug.replaceAll('-', ' '), lastmod: '2026-10-01' })),
  ...['nandish', 'snehi', 'aanya', 'arjun', 'saathvika'].map(slug => ({ path: `/${slug}/`, title: `MARDE team contact: ${slug}`, index: false })),
];
