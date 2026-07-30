# Prototype Instructions

Run the local server yourself and open the preview in the in-app browser. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

## Confirmed project decisions

- Use `referencia.png` as the composition and content reference, but normalize typography, spacing, and component scale.
- Use the user-provided `hero-video-2026.mp4` as the autoplaying, muted, looping hero artwork.
- Use `logo-grey.svg` in the light header and `logo-white.svg` in the dark footer.
- Render the company-logo strip as an auto-rotating carousel with generic placeholders until the real partner logos are supplied.
- The company-logo strip uses `#f7f7f6` and must move as a seamless, continuous infinite marquee without resetting visibly.
- Hero shortcut cards retain their original 210px desktop height, with no individual outlines or horizontal divider. Only the inset vertical separators are shortened to approximately 70% of the card height so they do not touch neighboring sections. Icons use `#45464E`, and arrows stay slightly emphasized.
- The company-logo strip has no heading or “ver todas” action and uses extra vertical breathing room around the marquee.
- “Inovação aplicada” cards share a neutral default treatment with pale technical graphics; blue is hover-only. Titles keep a consistent offset from their numbers, and the bottom row is reserved for the enlarged interactive arrow.
- “Governança compartilhada” presents the triple helix as a layered triangular diagram: a separate pale background asset, editable Phosphor icons and HTML copy, plus animated dashed bidirectional connections. Keep the copy and diagram vertically centered as a pair, with tighter section padding and the composed visual slightly reduced through its real layout width. Motion must respect `prefers-reduced-motion`.
- “Internacionalização” uses the user-provided `map.svg` as its visual base, with animated dashed routes connecting its yellow points.
- Publication images fill square media areas with a subtle `6px` radius, without a blue overlay or gray card outline. Source images containing a baked oval mask must be inset-cropped so no white rounded corners remain visible.
- On desktop, the four compact publication cards use two fixed 150px rows; their top and bottom edges align exactly with the featured card, whose height equals both rows plus the grid gap.
- Major sections enter with a subtle, one-time fade-and-rise transition as they reach the viewport; all motion must respect `prefers-reduced-motion`.
- The Tecnosinos ecosystem indicators count up once when their section becomes visible, preserving their exact Portuguese prefixes, suffixes, and thousands formatting.
- The header includes a compact Portuguese/English language switcher immediately before the “Quero fazer parte” CTA; on small screens it remains visible in the top-right header actions.
- “Publicações” in the main navigation and “Ver todas as publicações” on the home page open the dedicated `/publicacoes` archive; all publication cards may share one representative article route in this high-fidelity navigation mockup.
- The publications archive uses a large editorial hero, visible search/year/category controls, a navy featured story, and a responsive 3/2/1-column card grid. The article template uses a restrained reading column, sticky desktop table of contents, source imagery, tags, related stories, and the shared site header/footer.
- The representative internal-page set includes a searchable company directory (`/empresas`), a company profile (`/empresas/altus`), the Unitec journey (`/unitec`), and an open-innovation conversion page (`/inovacao-aberta`).
- Internal pages should demonstrate connected user journeys, not isolated static screens: directory filters update results, profile CTAs lead into innovation, Unitec exposes its modalities, and the innovation challenge form ends in an in-page success state.
- “Trabalhar no ecossistema” and every “Vagas no ecossistema” entry point lead to the searchable internal route `/vagas`, instead of anchoring back to the home-page careers section.
- “Estudar ou visitar” leads to `/estudar-ou-visitar`, which connects visits, activities and the dedicated `/programa-talentos` journey.
- The Programa Talentos page follows the established internal-page visual system and preserves the source program facts: active since 2011, aimed at 9th-grade, secondary and technical students, with park/lab/company visits, practical workshops, more than 4,000 participants and contact through `unitec@unisinos.br`.
- In the Talentos mega menu, “Programa Talentos” is the single entry for school-oriented activities; do not add a redundant “Atividades para escolas” item.
