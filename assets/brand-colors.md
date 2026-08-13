# PM Vending brand colours

Reference for anything outside the website: signage, vehicle decals, print,
invoices, email signatures. The website reads these from
`src/styles/tokens.css`, so if a value changes here, change it there too.

## The palette

| Colour | Hex | RGB | Use |
| --- | --- | --- | --- |
| Charcoal | `#2E2E2E` | 46, 46, 46 | Dark backgrounds: the site header, footer, and dark sections |
| Logo charcoal | `#272727` | 39, 39, 39 | Inside the logo artwork only. Do not use as a background behind the logo. |
| Offwhite | `#F6F4F1` | 246, 244, 241 | Page background, and text on charcoal |
| Ink | `#1C1B1A` | 28, 27, 26 | Body text on light backgrounds |
| Brand orange | `#DC851F` | 220, 133, 31 | Buttons and filled shapes on light backgrounds |
| Accent orange | `#FFA737` | 255, 167, 55 | Orange on dark backgrounds, and the logo wordmark |
| Deep orange | `#9E6016` | 158, 96, 22 | Orange *text* on light backgrounds |

## Three rules worth knowing

**1. Brand orange is a fill, never text on white.** `#DC851F` on the offwhite
background measures 2.58:1, which fails accessibility standards and is genuinely
hard to read. Use it as a background with dark text on top (6.07:1), or use the
deep orange `#9E6016` when you need orange lettering on a light surface.

**2. Never put the logo on a charcoal background without using the reversed
version.** The logo's mark and the word "VENDING" are `#272727`. On a dark
background they disappear entirely and only the orange "PM" shows.

**3. On charcoal, use accent orange rather than brand orange.** `#FFA737`
reads at 7.01:1 against `#2E2E2E`; the darker `#DC851F` is noticeably muddier.

## Logo files

| File | Use |
| --- | --- |
| `logo.png` | Light backgrounds. Also the version search engines and social previews use. |
| `logo-on-dark.png` | Dark backgrounds. Charcoal parts recoloured to offwhite. |
| `logo_textonly.png` | Wordmark without the machine mark. Light backgrounds. |

`logo-on-dark.png` is generated from `logo.png`. If the logo is ever redrawn,
regenerate the reversed copy rather than editing it separately, so the two
cannot drift apart.

## Type

Headings are **Exo 2** (semibold, 600). Body text is **Inter** (regular 400,
medium 500, semibold 600). Both are free from Google Fonts.
