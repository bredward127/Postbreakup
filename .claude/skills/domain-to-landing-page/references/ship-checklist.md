# Ship checklist (repo, hosting, domain)

Lessons from real builds. Run the "before" checks in Step 1 and the rest in Step 7.

## Before building
- [ ] **Repo visibility.** If the repo is public, paid assets (PDFs, downloads, full course text) are free to anyone. Ask the user to make it private *before* the first push, or keep paid files out of git (e.g. object storage).
- [ ] **Which hosting project owns the domain?** List projects and their domains. The page must deploy to *that* project. Don't create a new project for a domain that's already attached elsewhere.
- [ ] **Is that project git-linked, and to which repo?** A project linked to this repo will build on every push. Know its **production branch** (often `main`), so you know which pushes go live.
- [ ] **Framework setting.** A project created by CLI upload may have no framework set. Set it (e.g. Next.js) before relying on git builds.
- [ ] **Canonical host.** Check whether the apex redirects to `www` (or the other way round) and use that host for `metadataBase`, the sitemap and canonical URLs.
- [ ] **Branch rules.** Work on the assigned branch. Pushing to the production branch needs the user's explicit OK *in this conversation*.

## Preview
- [ ] Push the working branch; confirm a **preview** (not production) deployment reaches READY on the right project.
- [ ] If the preview is behind SSO or blocked from the sandbox, say so. Don't claim you've viewed it.
- [ ] Payment env vars (e.g. `NEXT_PUBLIC_PAYPAL_CLIENT_ID`, `PAYPAL_CLIENT_SECRET`, `PAYPAL_ENV`) are set on the **same** project. Public client IDs are inlined at build, so redeploy after setting them.

## Production (only after the user says go)
- [ ] Deploy via the production branch or by promoting the preview.
- [ ] Confirm READY and that the domain serves the new build (the previous production deployment remains available as a rollback).
- [ ] Ask the user to place one real test purchase end to end.
- [ ] Remove or disable any duplicate projects you created, so every push doesn't build twice.
