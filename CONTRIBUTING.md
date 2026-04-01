# Contributing Guide

## Branching Conventions

Every change must be done in its own branch. Every branch should contain changes for a **single ticket**.

**Always branch off `main`** when starting work on a new ticket. Do not branch off another branch unless you have a clear need.

### Branch Name Prefixes

| Type        | Prefix  | Example         |
|-------------|---------|-----------------|
| User Story  | `feat/` | `feat/AWS-101`  |
| Task        | `task/` | `task/BE-246`   |
| Bug         | `bug/`  | `bug/SE-357`    |
| Hot Fix     | `fix/`  | `fix/PROD-999`  |

### Rules

- **One ticket per branch** — do not bundle changes from multiple tickets.
  - Exception: multiple bugs sharing the same root cause may be fixed in one branch.
- After the prefix, add the **ticket ID** (e.g., `DE-2468`, `AWS-1357`).

### Quick Reference

```bash
# Start new work
git checkout main
git pull origin main
git checkout -b feat/GCP-101
```

---

## Final Commit Messages

This format applies to the **final commit message** before opening a pull request (after squashing your commits).

### Format

```
<TICKET-ID> Short description of what was achieved

- Bullet point explaining what the changes achieve
- Explain why you chose this approach
- Keep it concise
```

### Example

```
GCP-101 Add user authentication module

- Implement JWT-based auth flow with refresh tokens
- Use middleware pattern to keep route handlers clean
- Add rate limiting to login endpoint to prevent brute force
```

### Why?

A clean, consistent commit history gives us a direct correlation between **which ticket** was satisfied by **which code**. If you don't have a ticket, please create one to capture the "why" behind the change.

---

## Pull Requests

- Always **squash and merge**.
- Copy the final description (per the PR template) into the merge commit.
- Ensure all status checks pass before merging.
- See [docs/PR_REVIEW_GUIDE.md](docs/PR_REVIEW_GUIDE.md) for the review process.

---

## Review Timeline

- Reviews should be completed within **3 business days**.
- After 1 day with no feedback, ping the reviewer on the team channel or via DM.
- An automated reminder runs daily on the channel for open PRs.
- **Gemini code review** serves as the first layer — team member reviews are still expected.
