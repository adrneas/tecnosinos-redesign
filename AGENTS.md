# Prototype Instructions

Run the local server yourself and open the preview in the in-app browser. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

## Confirmed project decisions

- Use `referencia.png` as the composition and content reference, but normalize typography, spacing, and component scale.
- Use the user-provided `heroimg.png` directly for the hero artwork; do not recreate the masked image composition.
- Use `logo-grey.svg` in the light header and `logo-white.svg` in the dark footer.
- Render the company-logo strip as an auto-rotating carousel with generic placeholders until the real partner logos are supplied.
- The company-logo strip uses `#f7f7f6` and must move as a seamless, continuous infinite marquee without resetting visibly.
- Hero shortcut cards retain their original 210px desktop height, with no individual outlines or horizontal divider. Only the inset vertical separators are shortened to approximately 70% of the card height so they do not touch neighboring sections. Icons use `#45464E`, and arrows stay slightly emphasized.
- The company-logo strip has no heading or “ver todas” action and uses extra vertical breathing room around the marquee.
- “Inovação aplicada” cards share a neutral default treatment with pale technical graphics; blue is hover-only. Titles keep a consistent offset from their numbers, and the bottom row is reserved for the enlarged interactive arrow.
- “Governança compartilhada” presents the triple helix as a layered triangular diagram: a separate pale background asset, editable Phosphor icons and HTML copy, plus animated dashed bidirectional connections. The full visual is displayed at 85% of its original composed scale. Motion must respect `prefers-reduced-motion`.
- “Internacionalização” uses the user-provided `map.svg` as its visual base, with animated dashed routes connecting its yellow points.
- Publication images fill square media areas with a subtle `6px` radius, without a blue overlay or gray card outline. Source images containing a baked oval mask must be inset-cropped so no white rounded corners remain visible.
- Major sections enter with a subtle, one-time fade-and-rise transition as they reach the viewport; all motion must respect `prefers-reduced-motion`.
- The Tecnosinos ecosystem indicators count up once when their section becomes visible, preserving their exact Portuguese prefixes, suffixes, and thousands formatting.
