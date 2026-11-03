# Jasmin Dönicke — website editing guide

This is the **editable source** of the academic website. It uses Quarto plus HTML/CSS/JavaScript and is published through GitHub Pages at no subscription cost.

## Quick changes

| To change | Edit this file |
|---|---|
| Homepage science explanation, introduction, research cards, atlas teaser, latest-work list | `index.qmd` |
| Main homepage photograph and location caption | `index.qmd` (image path + caption) and `images/uni-gottingen-4064017271.jpg` (photograph) |
| All colors, fonts, widths, card layouts, mobile layout | `styles.css` |
| Research areas and publication list | `research.qmd` |
| CV/education and career milestones | `about.qmd`, `timeline.qmd` |
| World atlas SVG points, groups, project filters | `atlas.qmd` |
| Collaborator names, institutional affiliation, shared paper URLs | `js/atlas.js` |
| Top navigation and site metadata | `_quarto.yml` |
| Structured author and DOI data | `seo/person.html`, `seo/publications.html` |
| Search access and discoverability | `robots.txt`, `sitemap.xml` |
| In-depth mania-trajectories study | `mania-trajectories.qmd` |

The homepage editorial theme is grouped at the **end of `styles.css`** under `EDITORIAL HOMEPAGE V3` so you can easily change its cream, sage, blue, peach, and pine colors. The decorative leaf drawing is `images/botanical-filigree.svg`; it is only an ornament, not text. Change the four discipline questions and research-card text directly in `index.qmd`. The homepage map shows selected illustrative links and does not yet represent all collaborators.\n\nThe files have explanatory comments near their editable sections. In `styles.css`, edit the color variables in `:root`, especially `--phs-navy`, `--phs-paper`, `--phs-sky`, `--phs-coral`, `--phs-green`. Mobile styling lives in the `@media` rules at the bottom.

## How to edit without coding tools

1. On GitHub, switch to branch `main`.
2. Click a source file (such as `index.qmd`), then the **pencil** icon.
3. Change text between the existing HTML tags without removing the tags.
4. Click **Commit changes**.
5. Open GitHub **Actions → Build and publish academic website** to see the build and deploy progress.
6. When the workflow succeeds, refresh the public site.

The workflow renders Quarto source on `main` into `_site` and deploys the resulting HTML directly with GitHub Pages Actions. **Set GitHub → Settings → Pages → Build and deployment → Source to GitHub Actions**. Do not edit `_site` or legacy generated HTML on `gh-pages`.

Locally, run `quarto preview` to preview changes, or `quarto render` to build. The site is static, so no Python is required.

## How to update publications

- Edit or copy a publication entry in `research.qmd` (including its research-area labels).
- Provide the title, correct publication status (published, manuscript, Stage 1 registered report), authors and DOI (if one exists).
- If adding a *published* paper, also check the optional JSON-LD `ScholarlyArticle` metadata in `seo/publications.html`.
- To showcase the paper on the homepage, edit the featured paper list in `index.qmd` separately.

## How to change the atlas

This first edition is a curated, **schematic** illustration, *not* a complete geographically verified coauthor map.

- In `atlas.qmd` copy one SVG `<circle ... />` and change `cx` and `cy` for positioning; `data-person` must be unique.
- In `js/atlas.js`, add an entry with the same ID to the `collaborators` object.
- Set `data-project` to `mania`, `global`, or `babies`. If adding a new category, also add its filter button and publication rows in `atlas.qmd`.
- Use *verified manuscript affiliations* rather than assumed current residence, and avoid interpreting consortium coauthorship as proof of close direct collaboration.

## Domain and discoverability

**Preferred domain after DNS setup:** https://populationhealth.science/

**Current GitHub Pages fallback:** https://jasmindoe.github.io/populationhealth-science/

Domain metadata is prepared on a separate branch. Before merging it, set **GitHub repository Settings → Pages → Custom domain** to `populationhealth.science` and configure the Porkbun DNS records: four apex `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, plus a `www` CNAME to `jasmindoe.github.io`. Do not remove MX or unrelated TXT records. The site deploys via GitHub Actions, so GitHub controls the custom-domain setting; a `CNAME` file alone does not configure it. Once DNS resolves and HTTPS is available, enable **Enforce HTTPS**, merge the branch, and verify the apex and `www` redirects.

The site publishes human-readable HTML, crawler permissions, an XML sitemap and structured Person/ScholarlyArticle metadata. These improve machine readability, but cannot guarantee indexing by search engines or AI products.

## Notes

- The homepage hero shows the supplied photograph of the University of Göttingen's Great Hall. The statistical graph was removed at the site owner's request.
- The preview HTML in `preview/` was generated to review the draft; **Quarto pages** are the maintained source.
- The planned “What is population health science?” section is intentionally left for a later update.
- If the website fails to update, inspect the latest GitHub Actions run before editing `gh-pages`.

## Homepage editing (current simplified version)

The homepage in `index.qmd` is deliberately plain **Quarto Markdown**, without nested HTML. This fixes the previous problem where raw HTML tags appeared as visible code on the website. Text is readable by search engines and easy to edit directly on GitHub.

- Change visible wording directly in `index.qmd`.
- Main photograph: `images/uni-gottingen-4064017271.jpg`. The Markdown image line is near the top of `index.qmd`.
- To add a heading, begin a line with `##` or `###`.
- To add a link, use `[visible label](page.html)`.
- Styling can be revisited later. The old unused `phs-v3` styles remain in `styles.css` but are not needed to read the simplified homepage.
- Publication and collaboration lists are still curated; do not assume manuscript PDFs or complete collaborator counts have been verified.
