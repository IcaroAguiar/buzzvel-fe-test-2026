# Challenge contract

Implement the supplied Luma landing page for Buzzvel's November 2026 Front-End Engineer challenge.

## Required

- Next.js App Router, TypeScript and Tailwind CSS.
- All visible sections in desktop and mobile designs, not hidden template layers.
- Design fidelity: typography, spacing, imagery and responsive composition.
- Responsive mobile, tablet and desktop layouts.
- Clear reusable components with typed props.
- Working interactions with local/mock data; no backend or CMS.
- Semantic HTML, keyboard access, descriptive images and page metadata.
- Efficient images/fonts/loading; reduced-motion support.
- Check desktop/mobile and run a production build before submission.
- Public GitHub source repository, README in English with install/run/build commands,
  key decisions, known gaps, approximate time spent and AI tools used/how output was checked.
- Disclose failing checks and known issues. Tests, Storybook, deployment and Lighthouse are optional.
- AI is permitted; the candidate must be able to explain the code.

## Reference

Figma: https://www.figma.com/design/G0zSf6gyynwzEusOCgm2CM/Buzzvel-FE---Test-2026

The supplied PDF is the delivery contract. Full frame exports were downloaded from Figma
and retained locally in `.artifacts/design/desktop@2x.png` and `mobile@2x.png`.
Desktop frame: 1280 × 5691.44 px (node 2:7).
Mobile frame: 402 × 7798.87 px (node 2:4195).

The PDF deadline is November 20, 2026; no cutoff time/time zone appeared in the invitation.
Submitting the recruitment form is a separate user action, not part of source publication.

## Visible sections

Header; Hero; Categories; FeaturedCourse; HowItWorks; Testimonial; Community;
Contact; FinalCTA; Footer.

## Behavior decisions

This is a single-page demonstration, not a course platform. Navigation and course CTAs
should reach meaningful sections or reveal local course details. Do not create dead
buttons, fictitious account services, invented course destinations or outbound mail sends.
Document demo-only behavior in README. The mobile menu must support keyboard controls,
Escape and closing after navigation. Contact validation and a local confirmation are
required; never imply a real message was delivered.

## Verification

Compare against references at 1280 and 402 px; also check 375, 768 and 1440 px for
overflow and usable layout. Exercise menu, links, course details and contact form through
the real browser. Include focused accessibility checks. A real phone remains unverified
unless actually tested; browser emulation does not prove physical touch/keyboard behavior.

## Review

One objective, one PR. Keep source simple; prefer server-rendered static sections and
small client islands. No unsafe TypeScript casts, non-null assertions or `any`.
No tests that merely mirror implementation, mock components or assert CSS class names.
Use T0 then the independent code-review policy; explicitly challenge both standards
and this contract. Do not claim visual parity based on build/test results alone.
