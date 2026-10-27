# DOCTYRA – ERPNext Team Portfolio

A single-page React portfolio for a three-member ERPNext development team (Dona, Fathima Rineesha, Jithu Krishnan P).
It runs entirely from local configuration data; no backend is required.

**Stack:** React 19, Vite, Lucide React, plain modern CSS (variables, Grid, Flexbox). No router, no animation library.

## Getting started

Prerequisites: Node.js 18+ and npm.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve dist/ locally
```

## Where to edit things

| What | File |
| --- | --- |
| Team name, monogram, tagline, SEO text, email / GitHub / LinkedIn | `src/config/siteConfig.js` |
| Team members | `src/data/team.js` |
| Projects | `src/data/projects.js` |
| Services / technologies | `src/data/services.js`, `src/data/technologies.js` |
| Process steps, principles, project-type options | `src/data/content.js` |
| Colors and theme tokens | `src/styles/variables.css` |

**Rebrand:** change `name` and `monogram` in `siteConfig.js` (logo and navbar/footer follow). Also update the `<title>`/Open Graph tags in `index.html`, `public/favicon.svg` and `public/og-image.svg`. For link previews, make `og:image` an absolute URL on your domain.

**Team:** replace the placeholder `specialization` and `bio`; set `image` (a URL or an imported file from `src/assets/images`) and `github` / `linkedin`. Empty values are hidden; with no image an initials avatar is shown.

**Projects:** the four entries are *illustrative concepts*, not real work. Replace them and set `isIllustrative: false`, a real `projectStatus`, and optionally `image` (screenshot – put files in `public/projects/` and use `/projects/name.png`), `liveUrl`, `githubUrl`. Empty links are hidden; a broken screenshot falls back to the generated preview. Category filter chips are generated from your data.

**Contact links:** fill `contact.email`, `contact.github`, `contact.linkedin`. They stay hidden while empty.

## Contact form & ERPNext integration

The form validates client-side, has a honeypot field and a minimum-fill-time check as spam protection, and shows loading / success / error states. **With no backend configured it does not send anything** and says so.

To connect it to an ERPNext site:

1. In a custom app on your ERPNext site, create an inquiry record type and a guest-allowed method, e.g.
   ```python
   import frappe
   from frappe.rate_limiter import rate_limit

   @frappe.whitelist(allow_guest=True, methods=["POST"])
   @rate_limit(limit=5, seconds=60 * 60)
   def submit_inquiry(name, email, projectType, message, company="", budget=""):
       frappe.get_doc({"doctype": "Website Inquiry", "full_name": name, "email": email,
                       "project_type": projectType, "message": message,
                       "company": company, "budget": budget}).insert(ignore_permissions=True)
   ```
2. Copy `.env.example` to `.env.local` and set `VITE_ERPNEXT_BASE_URL` (e.g. `https://erp.example.com`) and `VITE_ERPNEXT_CONTACT_METHOD` (e.g. `your_app.api.submit_inquiry`).
3. Allow the portfolio's origin via CORS on the ERPNext site (`allow_cors` in `site_config.json`).

Never put API keys or secrets in `VITE_` variables – they are public. The submission logic is isolated in `src/services/contactService.js`. Likewise `src/services/projectService.js` is the single place to swap local project data for `/api/resource/<DocType>` calls later.

## Deployment

Build with `npm run build` and serve `dist/`. The site is a single page with hash anchors, so no SPA fallback rewrite is needed.

- **Vercel / Netlify:** import the repo; build command `npm run build`, output directory `dist`.
- **Nginx:**
  ```nginx
  server {
    server_name example.com;
    root /var/www/portfolio/dist;
    index index.html;
    location / { try_files $uri $uri/ /index.html; }
    location /assets/ { expires 1y; add_header Cache-Control "public, immutable"; }
  }
  ```
- **Sub-path** (e.g. `/portfolio/`): build with `VITE_BASE_PATH=/portfolio/ npm run build` and serve `dist/` under that path. Update the `href="/favicon.svg"` and `/og-image.svg` references in `index.html` too if you need them under the sub-path.

If you later add React Router, keep the `try_files … /index.html` fallback (Nginx) or a `/* /index.html 200` rewrite (Netlify / Vercel).

## Structure

```
src/
  components/  reusable UI (Navbar, cards, ContactForm, WorkflowTimeline…)
  sections/    page sections
  data/        editable content    config/  site settings
  services/    contact + project data access
  hooks/       useActiveSection, useReveal, useProjects
  styles/      variables.css, global.css, responsive.css
```

## Notes

- Dark theme only (no light-mode toggle).
- Reduced-motion preferences are respected; the hero graphic is decorative and labelled as illustrative.
- Inter is loaded from Google Fonts; remove the `<link>` in `index.html` to fall back to system fonts.
