# Taeyoung Wang — portfolio site

A plain HTML/CSS website. No tools or installs needed — you can edit everything
directly on github.com (open a file → pencil icon → edit → **Commit changes**).

To put it online the first time, follow **PUBLISHING.md**.

## Which file holds what

| What you see | File to edit |
|---|---|
| Home page: name, bio, interest tags, news, project cards | `index.html` |
| Each project's full page | `projects/…html` (one file per project) |
| Publications | `publications.html` |
| About me: education, honors, experience, toolkit | `about.html` |
| Recipes page (the cards) | `recipes.html` |
| Each recipe's full page | `recipes/…html` |
| Colours and fonts for the whole site | `styles.css` (top of the file) |
| Your CV | `assets/Resume_Taeyoung_Wang.pdf` |

Inside the files, look for comments in capitals like `<!-- BIO -->`, `<!-- NEWS -->`
or `<!-- EDIT -->` — they mark the parts meant to be changed. Only change the words
between the `<…>` tags, not the tags themselves.

## Common edits

**Add a news item** — in `index.html`, find `<!-- NEWS`. Copy one whole line that starts
with `<li><time>` and ends with `</li>`, paste it at the top of the list, and change the date and text.

**Change research-interest tags** — in `index.html`, find `<!-- RESEARCH INTEREST TAGS`.
Each `<li class="tag">…</li>` line is one tag.

**Add your profile photo** — upload it into the `assets` folder named exactly `profile.jpg`
(or `profile.png`). It fills the arched frame next to your name on the home page.
A portrait (taller than wide) works best.

**Add a figure to a project** — no editing needed. Upload an image into `assets/figures/`
named like `project-1-a.jpg` (see `assets/figures/README.txt` for the full list).
It appears on that project's page by itself. To change its caption, edit the text after
`<!-- CAPTION: project-1-a -->` in the project's file.

**Add a publication** — in `publications.html`, copy one `<li>…</li>` block and edit it.

## Adding a recipe

1. **Make the recipe page.** On github.com, open `recipes/_template.html`, click the
   **copy raw file** button (two overlapping squares, top right of the file).
   Go back to the `recipes` folder → **Add file → Create new file**.
   Name it after the dish, lowercase with dashes, e.g. `kimchi-fried-rice.html`.
   Paste, then replace the words next to each `<!-- EDIT -->` comment:
   the dish name (in two places), serving size and time, description, ingredients, and steps.
   Also change `your-dish.jpg` to `kimchi-fried-rice.jpg`. **Commit changes.**
2. **Add a photo (optional).** Upload it to `assets/recipes/` named `kimchi-fried-rice.jpg`.
3. **Add the card.** Open `recipes.html` and find `RECIPE CARD`. Copy the block between the
   two `=====` lines (from `<a class="card recipe-card"` to `</a>`), paste it just below the
   `===== ... to here` line, and change `your-dish` (twice), the dish name, and the tags.
   For your first recipe, also delete the "coming soon" card block below it
   (from `<div class="card recipe-card soon">` to its closing `</div>`).
   **Commit changes.**

## Fonts

- **Bagel Fat One** — the green name on the home page.
- **M PLUS Rounded 1c** — everything else.

Both load from Google Fonts.
