// Single registry for sitemap, agent directory, and negotiated representations.
// lastmod is a content revision, never the build or deployment timestamp.
export const publicRoutes = [
  { path: '/', title: 'MARDE Inc. — emergency-response robotics', lastmod: '2026-10-23' },
  ...[
    ['drone-aed-delivery-new-jersey', 'Drone AED delivery in New Jersey'],
    ['teleoperated-ground-robot-emergency-response', 'Teleoperated ground robots for EMS'],
    ['aed-delivery-before-ems-arrival', 'AED delivery before EMS arrival'],
    ['for-ems-agencies', 'Drone AED evaluation guide for EMS agencies'],
  ].map(([slug, title]) => ({ path: `/${slug}/`, title, lastmod: '2026-10-23' })),
  ...['technology', 'team', 'mission', 'support', 'faq', 'contact', 'privacy'].map(slug => ({ path: `/${slug}/`, title: `MARDE ${slug}`, lastmod: slug === 'faq' ? '2026-10-23' : slug === 'technology' ? '2026-10-15' : slug === 'contact' ? '2026-10-01' : '2026-09-14' })),
  ...['about', 'ems-partners', 'research', 'updates'].map(slug => ({ path: `/${slug}/`, title: `MARDE ${slug.replaceAll('-', ' ')}`, lastmod: ['about', 'updates'].includes(slug) ? '2026-10-15' : '2026-10-01' })),
  ...['air', 'ground', 'nexus', 'modules'].map(slug => ({ path: `/technology/${slug}/`, title: `MARDE ${slug}`, lastmod: '2026-10-15' })),
  ...['drone-aed-evidence', 'final-access', 'human-oversight', 'aviation-pathway', 'response-gap', 'evaluating-early-stage-partners'].map(slug => ({ path: `/research/${slug}/`, title: slug.replaceAll('-', ' '), lastmod: '2026-10-15' })),
  ...['nandish', 'snehi', 'aanya', 'arjun', 'saathvika'].map(slug => ({ path: `/${slug}/`, title: `MARDE team contact: ${slug}`, index: false })),
];
