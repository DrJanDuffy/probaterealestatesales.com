# Contributing to Probate Real Estate Sales

Thank you for contributing. This document covers Git workflow and project conventions.

## Before Code Changes

Per project rules (Dr. Jan Duffy Real Estate Projects):

1. **Summarize** the task
2. **List assumptions**
3. **Provide plan**
4. **Wait for confirmation** before making changes

Never delete files or refactor without explicit approval.

## Branch Strategy

- `main` – Production-ready code
- `develop` – Integration branch (optional)
- `feature/<name>` – New features
- `fix/<name>` – Bug fixes
- `docs/<name>` – Documentation only

## Commit Conventions

Use clear, descriptive commit messages:

```
<type>: <short description>

[optional body]
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Examples:**
```
feat: add North Las Vegas location page
fix: resolve GSC page-with-redirect indexing
docs: add SEO audit checklist
chore: update dependencies
```

## Pull Request Process

1. Branch from `main` (or `develop` if used)
2. Keep PRs focused and small
3. Run `npm run lint:fix` and `npm run type-check` before pushing
4. Fill out the PR template
5. Request review

## Pre-Commit Checklist

- [ ] `npm run lint:fix` passes
- [ ] `npm run type-check` passes
- [ ] No sensitive data (keys, secrets) in commits
- [ ] `.env` and `.env.local` remain in `.gitignore`

## Project-Specific Notes

- **Agent:** Dr. Jan Duffy (never "Janet")
- **Phone:** (702) 830-9222 – verify for this site
- **IDX/MLS:** Do not modify `/components/idx/*` without approval
- **NAP:** Keep consistent with Google Business Profile
