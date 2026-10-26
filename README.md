# Jasmin Dönicke — website editing guide

This is the **editable source** of the academic website. It uses Quarto plus HTML/CSS/JavaScript and is published through GitHub Pages at no subscription cost.

## Quick changes

| To change | Edit this file |
|---|---|
| Homepage introduction, research cards, featured papers, mini-timeline | `index.qmd` |
| Main homepage photograph and location caption | `index.qmd` (image path + caption) and `images/uni-gottingen-4064017271.jpg` (photograph) |
| All colors, fonts, widths, card layouts, mobile layout | `styles.css` |
| Complete publication list | `publications.qmd` |
| CV/education and career milestones | `about.qmd`, `timeline.qmd` |
| World atlas SVG points, groups, project filters | `atlas.qmd` |
| Collaborator names, institutional affiliation, shared paper URLs | `js/atlas.js` |
| Top navigation and site metadata | `_quarto.yml` |
| Structured author and DOI data | `seo/person.html`, `seo/publications.html` |
| Search access and discoverability | `robots.txt`, `sitemap.xml` |
| Original research spotlight | `research.qmd` |

The files have explanatory comments near their editable sections. In `styles.css`, edit the color variables in `:root`, especially `--phs-navy`, `--phs-paper`, `--phs-sky`, `--phs-coral`, `--phs-green`. Mobile styling lives in the `@media` rules at the bottom.

## How to edit without coding tools

1. On GitHub, switch to branch `main`.
2. Click a source file (such as `index.qmd`), then the **pencil** icon.
3. Change text between the existing HTML tags without removing the tags.
4. Click **Commit changes**.
5. Open GitHub **Actions → Build and publish academic website** to see the build progress.
6. When the workflow succeeds, refresh the public site.

The workflow uses Quarto to render the **source on `main`** into the **`gh-pages`** publishing branch. Do *not* edit generated HTML on `gh-pages`.

Locally, run `quarto preview` to preview changes, or `quarto render` to build. The site is static, so no Python is required.

## How to update publications

- Copy an existing table row in `publications.qmd`.
- Provide the title, correct publication status (published, manuscript, Stage 1 registered report), authors and DOI (if one exists).
- If adding a *published* paper, also copy and edit a JSON-LD `ScholarlyArticle` in `seo/publications.html`.
- To showcase the paper on the homepage, edit the featured paper list in `index.qmd` separately.

## How to change the atlas

This first edition is a curated, **schematic** illustration, *not* a complete geographically verified coauthor map.

- In `atlas.qmd` copy one SVG `<circle ... />` and change `cx` and `cy` for positioning; `data-person` must be unique.
- In `js/atlas.js`, add an entry with the same ID to the `collaborators` object.
- Set `data-project` to `mania`, `global`, or `babies`. If adding a new category, also add its filter button and publication rows in `atlas.qmd`.
- Use *verified manuscript affiliations* rather than assumed current residence, and avoid interpreting consortium coauthorship as proof of close direct collaboration.

## Domain and discoverability

**Current URL:** https://jasmindoe.github.io/populationhealth-science/

**Planned domain:** https://populationhealth.science/

When you are ready to connect the domain, set its DNS and add it in **GitHub Settings → Pages → Custom domain**. Then replace the old GitHub Pages URL with the custom-domain URL in `_quarto.yml`, `sitemap.xml`, `robots.txt`, and `seo/` metadata. Check HTTPS once the domain points at GitHub Pages. Until then, do not activate a `CNAME` file prematurely.

The site publishes human-readable HTML, crawler permissions, an XML sitemap and structured Person/ScholarlyArticle metadata. These improve machine readability, but cannot guarantee indexing by search engines or AI products.

## Notes

- The homepage hero shows the supplied photograph of the University of Göttingen's Great Hall. The statistical graph was removed at the site owner's request.
- The preview HTML in `preview/` was generated to review the draft; **Quarto pages** are the maintained source.
- The planned “What is population health science?” section is intentionally left for a later update.
- If the website fails to update, inspect the latest GitHub Actions run before editing `gh-pages`.
