# Putting the site online (GitHub Pages)

No coding or command line. Everything happens in your web browser on github.com.
Takes about 10 minutes. Below, **USERNAME** means your GitHub username.

---

## 1. Create the repository

1. Go to **https://github.com** and sign in.
2. In the top-right corner, click the **+** button → **New repository**.
3. In **Repository name**, type exactly: `USERNAME.github.io`
   (for example, if your username is `taeyoungw`, type `taeyoungw.github.io`).
   This exact name is what gives you the short web address.
4. Choose **Public**.
5. Leave everything else as it is (don't add a README).
6. Click the green **Create repository** button.

## 2. Upload the website files

1. On the new, empty repository page, find the line
   *"…or create a new file or **uploading an existing file**"* and click **uploading an existing file**.
2. Open **File Explorer** and go to `C:\Users\adela\Portfolio Website`.
3. Click inside the folder, press **Ctrl + A** to select everything
   (the `assets`, `projects`, and `recipes` folders and all the files).
4. **Drag** the selection into the browser window, onto the box that says
   *"Drag files here to add them to your repository"*.
5. Wait until all files are listed (folders are uploaded too).
6. Scroll down and click the green **Commit changes** button.

> Check: the repository's main page should now list `index.html` at the top level —
> not inside another folder. If you see a single `Portfolio Website` folder instead,
> you dragged the folder itself; delete the repository (Settings → bottom of the page) and redo step 2,
> dragging the *contents* of the folder.

## 3. Turn on GitHub Pages

1. In your repository, click **Settings** (top bar, gear icon).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose **main** and folder **/ (root)**, then click **Save**.

## 4. Visit your site

1. Wait 1–3 minutes.
2. Refresh the **Settings → Pages** page. When it's ready, it shows
   **"Your site is live at https://USERNAME.github.io/"** with a **Visit site** button.
3. That address is your portfolio. Share it anywhere.

---

## Changing things later

**Edit text** (bio, news, a project description):
open the file on github.com → click the **pencil icon** (top right of the file) →
change the text → click **Commit changes…** → **Commit changes**.
The live site updates in about a minute. See `README.md` for which file holds what.

**Add a figure or photo:** open the `assets/figures` (or `assets/recipes`) folder on github.com →
**Add file → Upload files** → drag in the image → **Commit changes**.

**Replace your CV:** upload a new PDF named exactly `Resume_Taeyoung_Wang.pdf` into the `assets` folder.
GitHub replaces the old one.

## If something looks wrong

| Problem | Fix |
|---|---|
| "404 — There isn't a GitHub Pages site here" | Wait a few more minutes. Check the repository is named exactly `USERNAME.github.io` and that `index.html` is at the top level. |
| Old version still showing | Press **Ctrl + F5** to force-refresh. |
| An image doesn't show | File names are case-sensitive: `project-1-a.jpg`, not `Project-1-A.JPG`. |
| Page has no styling | Make sure `styles.css` was uploaded to the top level next to `index.html`. |
