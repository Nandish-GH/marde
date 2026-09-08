# MARDE V2 — focused research

Reviewed September 8, 2026. Research was time-boxed before implementation.

- [Apple](https://www.apple.com/iphone/): one understandable idea per chapter, copy tied to visual explanation. Adopt narrative clarity, not its type or page layouts.
- [Airbound](https://www.airbound.com/): hardware purpose is established early, with product explanation following. Browser content reviewed; screenshot capture timed out.
- [Anduril](https://www.anduril.com/): serious system framing; source was JS-heavy and text extraction was limited. No assets or code copied.
- [Zipline](https://www.zipline.com/): relate robotics to useful real-world outcomes without forcing visitors through engineering detail first.
- [Figure](https://www.figure.ai/): restrained language and deliberate product hierarchy.
- [Varda](https://www.varda.com/): editorial contrast and clear hardware/company framing.

Design decisions: use an original role diagram rather than a speculative finalized aircraft, alternate graphite system scenes and warm editorial chapters, give all four subsystems equal weight, disclose development stage near the story, use readable concept controls, keep the operator central, and make touch/keyboard interactions equivalent.

Tool decision: existing Next 16.3.1 / React 19 / TypeScript; CSS Modules; existing Lenis 1.3.26 (MIT) for desktop smoothing; Anime.js 4.5.0 (MIT) for numbers; browser WAAPI for entry motion; Radix for accessible dialogs/accordions. Installed framework docs and current [Lenis](https://github.com/darkroomengineering/lenis) / [Anime](https://animejs.com/documentation/) documentation reviewed. No copied component code and no new animation, WebGL, registry or 3D dependencies. Existing current packages have the needed capabilities; no upgrades justified in Session 1.

Rejected: neon dashboards, pretend telemetry, full-screen scroll locks, repeated rounded cards, cloned layouts, and speculative product photography.

Source correction: [CARES 2024 Annual Report, p. 37](https://beta.mycares.net/sitepages/uploads/2025/2024_flipbook/inc/html/37.html) distinguishes 6.4-minute first-responder and 7.6-minute EMS response. The older metrics-summary graphic labels 6.4 differently; the V2 brief and detailed annual report govern. Use the metrics summary for the 50.2% unwitnessed statistic only.
