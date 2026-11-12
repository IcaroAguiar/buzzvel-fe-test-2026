# Luma · Buzzvel Front-End Challenge

A responsive implementation of the supplied Luma design, built with Next.js App Router, TypeScript and Tailwind CSS. It includes every visible section of the desktop and mobile frames.

## Run locally

Use Node.js 24 LTS and pnpm 12.18.0. No environment variables, API keys, database or external services are required.

```sh
npm install --global pnpm@12.18.0
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000. To check the production version:

```sh
pnpm build
pnpm start
```

## Structure and decisions

```text
app/page.tsx                 Server-rendered page composition
components/landing-sections  Static sections and local content
components/site-header      Responsive navigation and keyboard dismissal
components/preview-dialog   Native modal dialog, course information and focus return
components/contact-form     Browser validation and an explicit local confirmation
app/globals.css             Figma tokens, layout and responsive rules
public/images               Optimized imagery from the supplied design
tests/landing.spec.ts       Browser behavior, overflow and accessibility checks
```

- Static content stays in Server Components. Only the menu, course dialogs and contact form hydrate on the client. There is no state library, component framework or custom dialog/focus-trap implementation.
- The original hero and course photographs were exported from Figma, then encoded as WebP. The collage and avatar groups are image-only extracts; text and controls remain real HTML. `next/image` supplies responsive image variants, dimensions and lazy loading; static imports fingerprint the source files so updated crops cannot reuse stale image URLs. The hero is preloaded.
- Plus Jakarta Sans and Inter are bundled locally through Fontsource and `next/font/local`, with no runtime font request to Google. The build can run without access to a font CDN.
- Tailwind provides the theme, preflight and shared utilities. Component CSS keeps the measured layout and media rules in one place rather than repeating long utility strings.
- Native anchors, buttons, labels, validation and `<dialog>` provide keyboard behavior. Focus is visible, Escape dismisses the menu/dialog, headings and landmarks describe the page, and smooth scrolling respects reduced motion.
- Layouts use natural flow rather than fixed section heights. Desktop and mobile follow their respective compositions; tablet adapts the same content with smaller gutters and two-column category cards. Navigation collapses before the desktop links stop fitting.

## Demo behavior and design differences

Course buttons open a local preview; navigation reaches sections on this page. Log in, Terms, Privacy, Careers and Journal open an explicit demonstration notice instead of impersonating an account service or a policy page. Course/community navigation reaches the relevant sections. There are no dead `#` links or invented external services.

The contact form rejects missing, malformed and whitespace-only required input. Submission changes local UI state only and explicitly says that **nothing was saved or sent**. It does not persist personal data, call an API or send email. Controls intentionally omit serialization names: even a native submission before hydration or with JavaScript disabled cannot put personal fields into a GET URL. A no-script note explains the limitation; the separate email link opens the visitor's email application.

Two differences between the supplied frames are preserved: the mobile form uses Portuguese while the desktop form uses English, and the mobile steps read 01/02/03 while the desktop design repeats 01. A viewport subscription updates the form's copy without replacing its fields, preserving entered values across resizing. The server initially renders English; mobile Portuguese is applied after hydration. The English “Contact us” heading retains its own language annotation, as the supplied mobile frame mixes both languages.

Small muted labels were darkened from `#71798E` to `#656770` after the automated contrast check failed. Mobile inputs use 16px text to avoid automatic zoom in iOS. These are deliberate accessibility adjustments to the supplied visuals.

## Verification

```sh
pnpm lint
pnpm typecheck
pnpm build
pnpm exec playwright install chromium --with-deps
CI=1 pnpm test:e2e
```

Local macOS runs use installed Google Chrome; CI uses Playwright's pinned Chromium. The tests start a fresh production server on port 3348 and stop it afterward. An occupied port fails the run instead of silently reusing another build. One browser worker keeps memory use predictable. The GitHub Actions workflow runs lint, typecheck, build and the browser tests, and retains screenshots, traces on failure and the HTML report for 14 days.

Build workers are capped at two to bound memory use on smaller machines and keep local/CI verification predictable. This uses Next.js's experimental `cpus` setting in `next.config.ts`; the project pins Next's version and validates the production build. The limit trades some build parallelism for predictable memory use and does not limit request handling.

The browser tests exercise navigation and focus, course details, invalid and successful form states, absence of POST requests, runtime errors, and horizontal overflow at 320, 375, 402, 768, 1024, 1280 and 1440px. Axe checks the page and an open dialog against WCAG A/AA rules; this is a useful automated check, not a claim of complete accessibility compliance.

Full-page design snapshots were exported directly from Figma at 2×, then compared side by side with production browser captures at 1280px and 402px. The reference exports and challenge PDF remain local; generated evidence lives in the ignored `.artifacts/` directory. See [DESIGN.md](DESIGN.md), [the contract](docs/challenge.md) and [asset provenance](docs/assets.md).

Validation results and the independent review are recorded in [docs/verification.md](docs/verification.md).

## Process and AI disclosure

The implementation started by reading the challenge PDF, inventorying every visible section, exporting both complete Figma frames, inspecting typography/spacing and downloading the source imagery. A first working page was followed by browser tests and a desktop/mobile visual comparison. Fixes included image cropping, card spacing, small-label contrast and the frame-specific mobile content.

OpenAI GPT-6.1 Sol assisted with design inspection, implementation, tests and documentation. Claude Sonnet 5.5 and Claude Haiku 5.5 supplied parallel preliminary reviews. Their findings led to dialog-centering, focus-continuity, menu-dismissal and demo-destination fixes, plus more precise language tests. A fresh Claude Sonnet 5.5 session at high effort reviewed the complete diff and the full-page visual comparisons, finding no blocking issue. Findings are evaluated against source and browser evidence before changes are accepted; one predicted menu bug was rejected after a real browser regression passed on the unchanged implementation. Review outcomes and follow-up corrections are recorded in the verification document.

AI output is checked with TypeScript, lint, a production build, real browser interactions, automated accessibility checks and opened visual captures. No generated marketing imagery or substitute design was used.

Approximate effort: about 90 minutes of elapsed agent-assisted implementation, verification and review, excluding waiting for Figma access. This includes tool/model and local job-queue waits; it is not a claim of 90 minutes of manual coding.

## Scope and limitations

This is a recruitment demonstration using supplied sample content. There is no backend, enrollment, login, payment, analytics or message delivery. It has not been tested on a physical phone or with a screen reader; Chromium emulation does not establish Safari or real-device behavior. Exact raster equality across Figma, browsers and font-rendering environments is not asserted. Small spacing and font-rendering differences remain, including text wrapping and vertical alignment around the community collage; no pixel-equality score is claimed. There is no Lighthouse score or public deployment unless linked in the verification record.

Search indexing is disabled with `noindex, nofollow` metadata because this is a recruitment demo with sample content.

The design and its imagery belong to their respective owners and are used only for this supplied exercise. Full design exports are not included in the public repository. Source publication does not submit the recruitment form.
