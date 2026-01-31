# Git Workflow

Best-practice Git setup for probaterealestatesales.com.

## Structure Overview

| File/Folder | Purpose |
|-------------|---------|
| `.gitattributes` | Line endings (LF), merge strategies, linguist overrides |
| `.gitignore` | Exclude build, env, cache, reports |
| `.editorconfig` | Consistent formatting across editors |
| `CONTRIBUTING.md` | Contribution guidelines |
| `.github/` | PR/issue templates |

## Branch Strategy

- **main** – Production; deployable at all times
- **feature/\*** – New features; branch from main
- **fix/\*** – Bug fixes; branch from main
- **docs/\*** – Documentation only

## Workflow

1. Pull latest: `git pull origin main`
2. Create branch: `git checkout -b feature/my-feature`
3. Make changes; commit with clear messages
4. Push: `git push origin feature/my-feature`
5. Open PR; request review

## Commit Conventions

- Use conventional commit types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- First line ≤ 72 chars
- Body optional; explain *why* not *what* when needed

## Pre-Commit Hooks (Optional)

For automated checks:

```bash
npm install -D husky lint-staged
npx husky init
```

Add to `package.json`:
```json
"lint-staged": {
  "*.{ts,tsx,js,jsx}": ["biome check --write"],
  "*.{json,md}": ["biome format --write"]
}
```

`.husky/pre-commit`:
```sh
npx lint-staged
```
