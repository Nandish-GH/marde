# Interaction polish — October 4, 2026

- Added a floating Scroll to top link after 500px of scrolling. It uses the site's smooth anchor scrolling, restores main-content focus, and hides when back at the top. Reduced-motion users get immediate scrolling.
- Added pink/purple/gold Instagram and cyan/red TikTok focus/hover treatments with fading backgrounds, icon highlights and small arrow movement.
- Switched Lenis to its continuous animation-frame integration, removing the event-triggered loop that could miss programmatic anchor scrolls. Kept native touch scrolling and dialog scroll prevention.
- Removed the header height change on scroll to avoid content movement. Added menu/overlay closing transitions and FAQ closing animation with an explicitly hidden collapsed state.
- Extended the global reduced-motion rule to disable CSS transitions and animations, alongside the existing JavaScript preference listener that destroys Lenis and resolves counters.
- Added the official [Stripe Buy Button](https://docs.stripe.com/payment-links/buy-button), using the project's existing public configuration. It loads only after opening payment options. The hosted payment link remains available if scripts are blocked or the embed fails. At 360px and below, the hosted page is offered instead of a card too wide for the screen.
- Updated the privacy explanation for the optional Stripe script and widget. No payment or third-party account setting was changed.

Manually verified the live Stripe widget, top scrolling, main-content focus, footer keyboard colors, menu dismissal, FAQ state changes, and layouts between 320px and 1440px. Added regression tests for top/focus behavior, blocked Stripe fallback and reduced-motion footer colors. Production build, lint and 27-route export verification pass. Final production browser regression: 96 passed, 4 device-specific skips, no failures. This includes reduced-motion, intro completion, keyboard navigation, contact recovery, responsive layouts and automated accessibility checks.

Screenshots: `tmp/feel-audit/08-social-colors.png` and `09-stripe-widget.png`. Changes remain local and are not deployed.
