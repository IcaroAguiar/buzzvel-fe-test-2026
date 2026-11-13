# Asset provenance

All page imagery comes from the supplied [Figma design](https://www.figma.com/design/G0zSf6gyynwzEusOCgm2CM/Buzzvel-FE---Test-2026).

- Hero original photograph: `dfd2b1e079b3cde57b7f8dd7324c6ca21839dbd5`.
- Course original photograph: `fc63af3622dbbc93f781fafdfc95a5b1442333b4`.
- The original JPGs are passed directly to Next's responsive optimizer at quality 90, avoiding a manually encoded WebP followed by a second lossy optimization. Centered `object-cover` matches the supplied photo boxes.
- Desktop community and avatar groups: image-only extracts from the 2× desktop export, encoded as WebP.
- Mobile community: its distinct 362×328 composition, extracted at 2× (724×656) from the mobile export and retained as PNG. Responsive picture sources select it independently from the taller desktop collage.
- Quote mark: a decorative image-only 32×32 extract at 2× from the desktop export. The quotation itself remains HTML.
- Fonts: Plus Jakarta Sans and Inter, distributed by Fontsource under their upstream open font licenses. Font packages retain the license notices.

Use is limited to the supplied recruitment exercise. No ownership or additional redistribution license is claimed. Full-page reference exports and the challenge PDF remain private and untracked.
