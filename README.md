# Luma · Buzzvel Front-End Challenge

My implementation of the Luma landing page from the supplied Figma design, built with Next.js App Router, TypeScript and Tailwind CSS.

## Getting started

Use Node.js 24 and pnpm 12.18.0. The project doesn't need environment variables or a backend.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000. To run a production build:

```sh
pnpm build
pnpm start
```

## Approach

I focused on getting the desktop and mobile layouts close to the design while keeping the code easy to follow. Each section has its own component, with shared buttons, headings, layout containers and a preview dialog. Most of the page renders on the server; the menu, dialogs and contact form use client-side state.

The photos come from the supplied design. Images use Next.js optimization, and fonts are served locally. The community collage has separate desktop and mobile versions because their compositions differ in Figma.

The page is a working demo rather than a complete course platform. Navigation leads to page sections, course buttons open local previews, and the contact form validates input before showing a confirmation. Nothing is stored or sent.

I kept the small content differences between the supplied layouts, including the Portuguese form on mobile and the different step numbering. I also made secondary text slightly darker for contrast and used larger input text on mobile to avoid automatic zoom on iOS.

## Checks

```sh
pnpm typecheck
pnpm lint
pnpm build
pnpm test:e2e
```

The browser tests use a local installation of Google Chrome. They cover navigation, keyboard access, previews, form validation and responsive layout, along with automated accessibility checks. Desktop and mobile captures were compared with the original Figma frames, and the tablet layouts were checked too.

I haven't tested on a physical phone, in Safari or with a screen reader. Small text-rendering and spacing differences remain. There is no backend, login, enrollment or message delivery.

## Process and AI assistance

I set the priorities for the exercise and reviewed the result against Figma, asking for refinements to the component structure, typography and mobile layout. Those reviews were an important part of reaching the final version.

I used Codex (GPT-6.1 Sol) to help with implementation, tests and documentation, with GPT-6 Astra and Claude providing additional reviews. The generated work was checked through design comparisons, browser tests, type checking, lint and production builds.

Time spent: several hours across implementation, review and refinements, excluding the wait for access to the design.

Further details are in the [verification notes](docs/verification.md) and [asset credits](docs/assets.md). The design and imagery belong to their respective owners and are used here for this recruitment exercise.
