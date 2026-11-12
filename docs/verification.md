# Verification record

## Local evidence

- Production build: passed with Next.js 16.4.6 on Node.js 24.22.2, generating a static home page.
- Typecheck: passed with strict TypeScript and unchecked index access enabled.
- Browser file: passed using installed Chrome in desktop/mobile projects. Mobile navigation and the no-JavaScript fallback each run once in the appropriate project. Overflow assertions cover 320, 375, 402, 768, 1024, 1280 and 1440px. Keyboard, centered dialogs, focus return/reset, input and focus preservation across resizing, validation, local confirmation and absence of POST requests passed.
- The JavaScript-disabled regression first reproduced personal fields being serialized into a GET URL. After removing serialization names, native fallback navigation has neither query parameters nor a POST body. Browser validation and the JavaScript-enabled local confirmation still pass.
- Axe: no WCAG A/AA violations in the tested page, course, account and policy dialog states on either viewport.
- Design inspection: opened desktop/mobile full-page captures alongside the supplied frame exports. All sections are present and responsive composition follows both frames. There are minor rendering/spacing differences; no pixel-equality score is claimed.
- Impeccable mechanical detector: returned an empty findings array.
- Final T0: PASS, including typecheck, lint, browser tests and scanners. No new secrets, conflict markers, Semgrep findings or vulnerable dependencies reported. Source files and binary assets have different scanning coverage; the report lists skipped binaries.

The initial checks caught a lazy-image capture timeout, small-label contrast failures and a tablet grid that compressed text into a narrow column. They were corrected and the browser file passed. Lint found one anonymous-export warning in the PostCSS config; that configuration was changed to a named constant and rechecked separately.

## Independent review and CI

Two read-only preliminary reviews ran through the personal Claude provider: Sonnet 5.5 and Haiku 5.5, both at high effort. The author triaged every finding. Corrections include native dialog centering (reproduced before correction), stable confirmation/reset focus, disclosure dismissal after focus leaves or the viewport changes, explicit account/policy demo notices, exact language assertions, preservation of input and focus on resize, fresh test-server ownership and clearer documentation.

The English SSR fallback for the mobile form was intentionally retained and documented: a single form preserves the visitor's input. The English heading has its own language annotation. A preliminary concern about publishing incomplete review outcomes was dismissed because the record explicitly marked them pending; final outcomes are added only after execution. Local review-harness configuration is ignored rather than published.

The fresh Sonnet 5.5 high review of `c2361d7` opened every desktop/mobile comparison and both course-dialog captures. It returned **APPROVE_WITH_RESIDUAL_RISK**, with zero blocking findings and no actionable Spec failure. All sections, order, imagery, badges, frame-specific content and centered dialogs were confirmed. Residual differences include small accumulated vertical spacing, footer-column spacing, a slightly stronger step-02 icon color and the intentional input typography adjustment.

Five minor Standards observations were triaged: dialog-heading tracking was made explicit; confirmation copy no longer suggests retained data; the two-worker build limit and no-index metadata are documented; the Node engine now matches the tested Node 24 baseline. The predicted stale mobile menu after leaving the login dialog was not reproduced: the added desktop/mobile browser case passed against the unchanged implementation and verifies the menu is collapsed after navigation. No redundant navigation callback was added.

Follow-up checks, the delta review and GitHub Actions result will be recorded after they complete. No deployment or challenge-form submission has been performed.
