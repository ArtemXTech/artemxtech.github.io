---
description: Create a clean pull request for new blog posts with single commit
argument-hint: "[optional: custom branch suffix]"
allowed-tools: [Bash, TodoWrite, Read, LS]
---

## Context
- **Current Branch:** !`git branch --show-current`
- **Git Status:** !`git status --porcelain`
- **Recent Commits:** !`git log --oneline -3`
- **Untracked Files:** !`git ls-files --others --exclude-standard`
- **Branch Suffix:** ${1:-blog-update}

## Your task
Create a clean pull request for new blog content following this workflow:

1. **Preparation Phase:**
   - Check current git status and identify new blog files
   - Ensure we're on the main branch (v4)
   - Create todo list to track progress

2. **Branch Creation:**
   - Create new branch with pattern: `content/${BRANCH_SUFFIX}`
   - Use provided suffix or default to "blog-update"

3. **Content Staging:**
   - Stage all new blog posts (markdown files in content/)
   - Stage any new assets (images in content/assets/)
   - Verify all files are properly staged

4. **Clean Commit:**
   - Create single commit with descriptive message following pattern:
     ```
     content: add [brief description of posts]
     
     - List key additions
     - Include asset mentions if applicable
     
     🤖 Generated with [Claude Code](https://claude.ai/code)
     
     Co-Authored-By: Claude <noreply@anthropic.com>
     ```

5. **PR Creation:**
   - Push branch to remote with upstream tracking
   - Create pull request with:
     - Clear title matching commit message
     - Summary section listing additions
     - Test plan confirming content works
   - Return PR URL for review

**Important constraints:**
- Only stage files in content/ directory (posts and assets)
- Create exactly ONE commit with all changes
- DO NOT merge automatically - leave for manual review
- Use descriptive commit messages that explain what content was added
- Follow existing commit message patterns from git history

**Success criteria:**
- Single clean commit in new branch
- All blog content properly staged and committed
- PR created and ready for review
- No merge conflicts or staging issues