# landing-page-builder (Claude Code skill)

Builds conversion pages from the 7 ClickDose blueprints, styled from your visual references.

## Install

**All your projects on your own computer:** unzip so this folder sits at
`~/.claude/skills/landing-page-builder/` (the folder must contain `SKILL.md`).

**One repository (works in Claude Code on the web too):** put the folder at
`.claude/skills/landing-page-builder/` in the repo, then commit and push. Every
session opened on that repo will have it.

Restart Claude Code (or start a new session) after installing.

## Use

Run `/landing-page-builder`, or just ask, e.g.:
"Build a sales page for my product. Traffic is cold from Meta. Here's a screenshot of the look I want."

Then attach your visual references. Claude will pick a blueprint, show a
reference-to-page section map, build it, screenshot it on phone and desktop, run
the 10-check audit, push to a branch, and deploy to production only when you say so.
