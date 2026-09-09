# Session 2 implementation notes

The V2 public routes now use `components/v2/editorial.*`, with shared profile data/component and separate small route files. Explicit routes avoid the installed Next.js static-export development error for unknown catch-all parameters.

The product graphics are hand-authored SVG with CSS, derived from the broad form of the existing provisional concept illustrations. They remain labeled concepts; no final CAD or measured capabilities were available. Nexus and response-sequence visuals share existing lightweight React/CSS state. No new rendering dependency was installed.

Calendly's official iframe guide confirms use of the existing scheduling URL directly inside an iframe: https://calendly.com/help/how-to-embed-calendly-with-an-iframe . The iframe is only rendered inside an open Radix dialog. The provider's cookie notice is retained. QA verified real provider rendering without scheduling an appointment.

Commands used (with bundled Node 22+ path on this host):
- `node node_modules/next/dist/bin/next build`
- `node node_modules/eslint/bin/eslint.js .`
- `node node_modules/@playwright/test/cli.js test`
- `QA_BASE_URL=http://127.0.0.1:3001 node node_modules/@playwright/test/cli.js test`
- `QA_BASE_URL=http://127.0.0.1:3001 QA_OUTPUT=docs/qa/session2-export QA_WIDTHS=390,768,1440 node scripts/capture-session2.mjs`

Environment assignments above use shell-neutral notation; in PowerShell assign `$env:QA_BASE_URL` and the other values before running Node. `scripts/serve-export.mjs` serves the export locally on port 3001. Forms are intercepted in tests; no real messages or payments are sent.
