# Pull Request Review Guide

A step-by-step guide on how to perform a thorough and constructive PR review.

---

## Pre-Review Checklist

Before diving into the code:

1. **Read the PR description** thoroughly.
2. **Check the Jira ticket** (linked in the PR) to understand context and requirements.
3. **Verify the PR template** — testing steps, screenshots, and checklist should be filled out.

---

## 1. Clone the PR Branch Locally

```bash
# Fetch latest branches
git fetch origin

# Check out the PR branch
git checkout <branch-name>

# Pull latest changes (if needed)
git pull origin <branch-name>
```

---

## 2. Test the Changes Locally

Follow the "Testing Steps" section of the PR:

```bash
npm install
npm run lint
npm test
npm run dev
```

Then:
- Navigate to the provided URL (e.g., `http://localhost:3000`).
- Confirm the described behavior works as intended.
- Validate accessibility, responsiveness, or performance if applicable.

---

## 3. Review the Code

| Check           | What to look for                                            |
|-----------------|-------------------------------------------------------------|
| **Clarity**     | Is the code readable and maintainable?                      |
| **Correctness** | Does it align with the Jira ticket and PR description?      |
| **Performance** | Could the code be optimized?                                |
| **Security**    | Are there any security implications?                        |
| **Tests**       | Are there sufficient and meaningful unit/integration tests? |

---

## 4. Add Comments and Feedback

Always leave at least **one positive comment**:

> "Great job abstracting this logic!"
> "Nice use of utility functions here — makes this really readable."

Include constructive feedback when applicable:
- Suggest improvements to naming, structure, or logic.
- Point out bugs or issues.
- Recommend adding comments or tests if something is unclear.
- **Be specific, kind, and actionable.**

---

## 5. General Feedback (Optional but Recommended)

Leave summary feedback at the bottom of the PR:

```markdown
### Looks Good
- Clear, readable code
- Behavior matches the Jira ticket
- Tests are passing and relevant

### Suggestions
- Consider renaming `X` for clarity
- Could add a unit test for the edge case in `Y`

### What I Liked
- Clean and modular implementation
- Great use of XYZ component to simplify the UI
```

---

## 6. Complete the Review

- **Approve** the PR if it is ready to merge.
- Or **request changes** with clear reasoning.
- Tag the author or team if needed.
- Ensure merge requirements are met (status checks, approvals).

---

## Reviewer Final Touches

Before giving the green light, confirm:

- [ ] PR passes lint/format checks
- [ ] Commit messages are clear and atomic
- [ ] Any environment variable changes are documented
- [ ] All screenshots and testing steps are present (for UI changes)

---

## Handling Gemini Feedback

Gemini code review serves as the **first automated layer** of review. However:

- It is **not a replacement** for human review.
- Always review Gemini's suggestions — some may be noise, some may catch real issues.
- If Gemini flags something you disagree with, leave a comment explaining why you chose your approach.
- Use Gemini feedback as a starting point, not the final word.

---

## Review Timeline Expectations

- Reviews should be completed within **3 business days**.
- After **1 day** without feedback, ping the reviewer on the team channel or via DM.
- A daily automation posts reminders on the channel for open PRs.
- Add reviewers to your PR proactively — don't wait for someone to pick it up.

---

## Final Reminder

Always **squash and merge** PRs, and copy-paste the final description into the merge commit.
