# Luma · Buzzvel Front-End Challenge

A responsive implementation of the supplied Luma desktop and mobile designs using Next.js App Router, strict TypeScript and Tailwind CSS.

## Run locally

Requires Node.js 24 and pnpm 12.18.0. No environment variables or external services are needed.

```sh
npm install --global pnpm@12.18.0
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000. For a production server, run `pnpm build` then `pnpm start`.

## Structure and choices

```text
app/page.tsx              Composes the ten visible sections
app/globals.css           One set of theme tokens and browser defaults
components/landing/       Each section owns its layout and responsive rules
components/ui/            Typed buttons, container, headings and native preview dialog
public/images/            Supplied imagery; separate mobile community composition
tests/                    Browser behavior, accessibility and dialog isolation
```

Static sections render on the server. Only navigation, dialogs and the contact form need client state. Tailwind utilities keep layout, typography, breakpoints and interaction states with their owner; a small CSS Module draws the step connectors. Shared components cover repeated visual or behavioral patterns without turning the page into a configurable section renderer. Footer destinations use an explicit anchor/preview union.

Original hero/course photographs go through `next/image` once, with responsive sizes and a preloaded hero. The community uses `<picture>` with `getImageProps` to select the desktop or mobile composition. Image-only extracts preserve the supplied collage, avatars and quote mark; text and controls remain HTML. Inter and Plus Jakarta Sans are self-hosted through Fontsource and `next/font/local`.

## Demo behavior and deliberate differences

Navigation uses real section anchors. Course, account and policy controls open labeled local previews. The contact form validates required fields and email, then confirms locally that **nothing was saved or sent**. It has no backend or persistence. Controls omit serialization names so native submission before hydration cannot expose personal input in a GET URL; a no-script note points to the separate email link.

The design's differences are retained: Portuguese form copy and steps 01/02/03 on mobile, English copy and repeated step 01 on desktop. Resizing updates language without replacing fields or losing input/focus. English renders on the server before mobile hydration. Small muted labels are darkened to `#656770` for contrast; mobile inputs use 16px to avoid iOS zoom.

## Verification

```sh
pnpm typecheck
pnpm lint
pnpm build
pnpm test:e2e
```

Local browser tests use installed Google Chrome, start a fresh production server on port 3348 and stop it afterward. They cover navigation, keyboard/focus behavior, modal isolation, validation, local confirmation, no-JavaScript submission privacy, runtime errors, overflow from 320 to 1440px and selected Axe WCAG A/AA checks. There is no CI workflow. Build concurrency is capped at two with Next's experimental `cpus` setting to bound local memory use.

Complete Figma exports are compared with production captures at 1280 and 402px; tablet captures cover 768 and 1024px. The private references remain local. See [verification and review](docs/verification.md), [design measurements](DESIGN.md), [the challenge contract](docs/challenge.md) and [asset provenance](docs/assets.md).

## Process and AI disclosure

I led the exercise by setting priorities for fidelity and mobile behavior, obtaining access to the Figma, reviewing the implementation critically and directing corrections. My review challenged the oversized global stylesheet and insufficient component boundaries, required an adversarial review against the original requirements, requested concrete Figma-to-browser comparisons, and kept CI outside the exercise's scope.

I used OpenAI GPT-6.1 Sol to assist with design inspection, implementation, tests and documentation, and requested GPT-6 Astra to cross-check the requirements and delivered code. Earlier reviews also used Claude Sonnet 5.5 and Haiku 5.5. The corrective pass addressed dialog style isolation, section ownership and the distinct mobile collage. Outputs were checked against the source design, strict TypeScript, lint, production builds, browser interactions, automated accessibility checks and opened visual comparisons.

Approximate effort: several hours across candidate direction, assisted implementation, review, corrections and verification. This includes tool and job-queue waits and excludes the wait for Figma access; it is elapsed assisted work rather than an estimate of manual coding time.

## Scope and limitations

No enrollment, authentication, payment, analytics or message delivery is connected. No physical phone, Safari or screen-reader testing, Lighthouse score or deployment is claimed. Browser emulation and automated accessibility checks do not establish complete accessibility or real-device compatibility. Raster equality with Figma is not asserted; residual differences are recorded in the verification document.

The recruitment demo uses sample content and disables search indexing. Design and imagery belong to their respective owners; full design exports and the challenge PDF are not published. Publishing source does not submit the recruitment form.
