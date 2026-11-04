# T.M.M.V (N.S) Boy Scouts Website

The troop website is built as a static site and is split into three files:

- `index.html` — page content and forms
- `style.css` — layout, colours and responsive styling
- `script.js` — interactive features, translations, countdown and roster

## Publish with GitHub Pages

1. Open the repository **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Open the **Actions** tab and run **Deploy website to GitHub Pages** (or push a new commit).
4. When the workflow completes, the live URL appears in **Settings → Pages**.

A workflow is included at `.github/workflows/deploy.yml` to publish the root of the repository whenever changes are pushed to `main`.

## Join/enquiry form email

The form is configured to submit to `mrpiravin38@gmail.com` using FormSubmit. FormSubmit may send a one-time activation/confirmation email to that inbox the first time the form is used. Open that message and confirm the address before expecting submissions to arrive. The form is hosted on a third-party form service; do not request sensitive personal information from students.

## Website launch

The launch event is scheduled for **1 January 2027**. The homepage includes a live countdown.
