# PM Vending

Landing page for PM Vending, a snack and drink vending service for Chicagoland
workplaces. Static Astro site, no client-side JavaScript, deployed to GitHub Pages.

## Running it

```bash
npm install
npm run dev
```

| Command | Does |
| --- | --- |
| `npm run dev` | Dev server on http://localhost:4321 |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built output |
| `npm run check` | Astro and TypeScript diagnostics |

## Before going live

**The contact form is connected.** It posts natively to Formspree
(`xyegjbrb`, set in `src/data/site.ts`) and returns the visitor to `/thanks`.
No JavaScript is involved. Setting `formspreeId` back to `null` reverts the form
to a `mailto:` fallback.

**1. Point the domain before deploying.** This one matters more than it looks.
`astro.config.mjs` assumes `https://pmvends.com`, and that value is baked into
the form's `_next` field at build time. Deploying to a project page
(`username.github.io/repo`) without changing it means a visitor who submits the
form is redirected to an address that does not resolve. If the deployment URL is
not the apex domain, change `SITE_URL` and `base` in `astro.config.mjs` and the
sitemap line in `public/robots.txt`, then rebuild.

**2. Confirm the Formspree address.** Formspree emails a confirmation link
before it will forward submissions. Send one test enquiry after the first deploy
and check it arrives at `sales@pmvends.com`.

## Contact

Email only, by design. There is no phone number anywhere in the markup, so
nothing needs removing if one is added later.

| Address | Used for | Where it appears |
| --- | --- | --- |
| `sales@pmvends.com` | New enquiries | Every call to action, the contact section, the form fallback |
| `support@pmvends.com` | Existing customers | Footer only |

Support is kept out of the calls to action deliberately. The page exists to
generate new enquiries, and two competing addresses at the top would blunt that.

## Content rules

`src/data/site.ts` holds the confirmed business facts. Keep them there rather
than inline in components.

The page contains no testimonials, client names, logos, machine counts, years in
business, or pricing comparisons, because none of those have been substantiated.
Do not add them without something to back them up.

## Design system

Tokens live in `src/styles/tokens.css` and are the single source of truth for
colour, type, spacing, and motion. Components consume them through Tailwind
utilities rather than defining their own values.

One contrast constraint drives the colour system: the brand orange `#DC851F`
measures 2.58:1 against the offwhite background, so it cannot be used for text
or as a lone border on light surfaces. It is a fill colour. Two derived tokens
cover what it cannot:

| Token | Use | Ratio |
| --- | --- | --- |
| `--color-brand` | Fills, with `--color-brand-foreground` on top | 6.07:1 |
| `--color-brand-ink` | Orange text on light surfaces | 4.62:1 |
| `--color-accent` | Orange on the dark surface | 7.71:1 |

Sections marked `data-surface="dark"` swap the focus ring and link colours,
because the light-surface ink is invisible against charcoal.
