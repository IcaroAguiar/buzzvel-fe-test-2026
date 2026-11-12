# Luma visual specification

The supplied Figma overrides generic design preferences. Preserve its composition,
copy, numbered cards, eyebrow labels, borders, illustration and colors exactly.
Do not redesign it. Only visible layers count; the source contains hidden template text.

## Tokens measured in Figma

- Primary: #3157F6; body/title foreground #171B2C; secondary foreground #656770.
- Warm surface: #F9F8F3; white #FFFFFF; pale blue #E2E8FF; CTA surface #FFF1C2.
- Display: Plus Jakarta Sans, weight 800. Section title 48px/56px, tracking -1.2px.
- Body: Inter, regular. Large body 18px/28px. Use self-hosted Latin font assets.
- Desktop width 1280px, inner gutters 80px, most section vertical padding 100px.
- Mobile width 402px, 20px horizontal gutters and generally 60px section padding.
- Header 70px. Desktop hero 720px with a 500×520px image and 24px image radius.

## Layout evidence

Desktop section boundaries, measured from the exported frame:
0–70 header; 70–790 hero; 790–1510.5 categories; 1510.5–2156.5 featured;
2156.5–2783.5 how-it-works; 2783.5–3308.5 testimonial;
3308.5–4030.5 community; 4030.5–4826.5 contact;
4826.5–5296.5 final CTA; 5296.5–5691.44 footer.

Use natural document flow; these numbers guide fidelity, not fixed page heights.
At mobile, image precedes hero text, buttons stack, categories stack, steps stack,
stats form a row, community image follows text, and contact form follows contact copy.

## Source imagery

Hero and course photos were downloaded through Figma's original-image controls.
The community collage and small avatar groups are extracted from the frame export;
they contain imagery only, not interface text. Their decorative composition is retained
as a single raster to preserve the exact supplied design. See docs/assets.md.

## Interaction scope

No animations or interactions should be claimed as Figma-defined unless observed.
Use simple hover/focus feedback and respect reduced motion. Never add decorative
effects that move the implementation away from the supplied frames.
