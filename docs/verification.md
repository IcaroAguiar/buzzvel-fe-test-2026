# Verification record

## Review baseline and corrections

The earlier iteration at `b239c78` had passed local checks and a Sonnet review. That approval did not establish that every design or architecture requirement was satisfied. A subsequent independent GPT-6 Astra review read the four-page challenge PDF, source at that exact commit, complete desktop/mobile comparisons and dialog captures, returning **REQUEST_CHANGES**.

| Baseline finding                                                                                                         | Corrective change                                                                                                      | Verification boundary                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Dialog headings inherit the featured section's mobile typography; footer focus inherits an almost-white outline on white | Dialog owns its typography; focus colors apply to footer triggers only                                                 | Browser regression reproduced both failures before correction; rerun on corrected production build |
| A 1,388-line global stylesheet couples sections and reusable controls                                                    | Theme/base only globally, section-owned Tailwind, shared typed UI primitives; local CSS only for decorative connectors | Source inspection and cross-host dialog regression                                                 |
| Footer behavior is inferred from display labels, with unused destinations                                                | Explicit anchor/preview discriminated union                                                                            | Source inspection and preview/navigation browser cases                                             |
| Mobile community reuses a taller desktop image                                                                           | Dedicated mobile composition and responsive picture sources                                                            | 402px Figma/browser comparison                                                                     |
| Tailwind is only nominal; color tokens duplicated                                                                        | Tailwind owns layout, typography, breakpoints and states; one theme token set                                          | Source inspection                                                                                  |
| Quote glyph and mobile step-02 color differ                                                                              | Source quote graphic and measured mobile shape colors                                                                  | Desktop/mobile visual comparison                                                                   |

CI was an implementation choice, not a challenge requirement, and has been removed at the candidate's direction. Verification remains local.

The course-photo concern was investigated rather than accepted as a crop change: aligned source comparisons support centered cover over stretched fill. The correction uses original photographs with one responsive optimization step to reduce compression loss; it does not distort the source photo to compensate for vertical layout offsets.

## Contract coverage

| Requirement                           | Implementation/evidence                                                                                      |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Next App Router, TypeScript, Tailwind | App Router, strict compiler options, section-owned utilities                                                 |
| All visible sections in order         | Header, hero, categories, featured course, steps, testimonial/stats, community, contact, CTA, footer         |
| Typed reusable components             | Buttons/links, container, headings, native dialog; explicit footer destination types                         |
| Mobile, tablet, desktop               | Dedicated frame compositions at 402/1280; overflow checks at 320/375/402/768/1024/1280/1440; tablet captures |
| Local interactions, no backend        | Anchors, mobile navigation, native dialog, validated local-only form                                         |
| Semantics, keyboard, images, metadata | Labeled landmarks/controls, Escape/focus behavior, image alternatives, page metadata, selected Axe checks    |
| Loading and reduced motion            | Responsive image optimizer, local fonts, hero preload, reduced-motion scrolling/transition behavior          |
| English README and disclosure         | Run/build commands, decisions, limits, effort and actual candidate/AI roles                                  |

## Corrective-pass execution

- Production build: passed with Next.js 16.4.6, static home page, two build workers.
- T0 corrective delta: PASS for conflict markers, secret scan, applicable Semgrep rules, strict typecheck and lint. No lockfile change; dependency vulnerability scanning was skipped. Binary assets are outside code scanning.
- The landing browser file passed on desktop/mobile: navigation, focus, form validation/reset, no transmission, no-JavaScript privacy, selected Axe rules and overflow at seven widths. Its two project-specific cases intentionally skip the other viewport.
- The new isolation regression first failed on mobile heading typography and footer focus color. A later run exposed outline-color animation during focus; button transitions now affect only background/border. The corrected isolation file passed in both projects. Only that failed file was rerun after the transition change; the complete suite was not rerun on that final styling delta.
- Opened all five desktop and seven mobile comparison bands, plus 768/1024px tablet overview captures. Desktop measures 1280×5718 against 1280×5691 (+27px); mobile measures 402×7834 against 402×7799 (+35px). Baseline differences were +44/+48px. Height differences are measurements, not a visual-quality score.
- All sections and frame-specific compositions remain present. Residuals include text rasterization/wrapping, small accumulated vertical offsets and CTA decoration geometry. Input typography and darkened muted labels are intentional accessibility differences.

The fresh GPT-6 Astra review of `3494274` returned **APPROVE**, with no blocking finding. It read the original PDF and complete source, opened all twelve comparison bands, both tablet overviews, course/policy dialogs and selected source slices. Architecture, TypeScript, Tailwind ownership, all sections, local interactions and the honest candidate/AI disclosure were accepted. The original course-crop suspicion was not confirmed; centered cover is supported.

Two low visual observations were accepted and corrected afterward: the mobile community asset now includes the entire bottom arc (362×340) with its reference interval above; testimonial author typography uses 16/14px and a 16px avatar gap. Production build, strict typecheck, changed-file lint, delta scanners and the affected landing browser file passed after those changes. The final community/author comparisons were opened again. Restoring the complete artwork increases mobile height compared with the intermediate 7809px capture; it is not trimmed to improve an aggregate height measurement.

The independent review did not rerun the author's commands or perform remote operations. No extra CI, deploy or form submission was added.

## Limits

No deployment or challenge-form submission has been performed. Physical phones, Safari, screen readers and Lighthouse remain unverified. Full reference exports and review artifacts remain in ignored local storage; public evidence contains implementation captures only. Full pixel equality is not asserted.
