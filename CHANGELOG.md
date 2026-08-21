# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### [Added]
- PocketBase integration for job applications:
  - Created automated setup script `scripts/setup-pocketbase.mjs` to configure `job_applications` collection on PocketBase.
  - Added Next.js Server Action `src/actions/submit-application.ts` for secure server-side form submission with CV file uploads.
  - Implemented dynamic job categorization linking career openings (`/career-account-executive`, `/career-3d-designer`) to `/job-application?jobId=...`.
  - Refactored `ApplicationForm.tsx` with position dropdown, client validation, file selection feedback, and loading/success states.
  - Added PocketBase helper `src/lib/pocketbase.ts`.
- Implemented `TeamMobileCoverflow` component featuring a Smooth 3D Coverflow carousel tailored for mobile viewports with touch swipe gestures, pagination indicators, and clear member name & role typography overlays.
- Integrated responsive layout switcher in `TeamSection` maintaining the original 2-column grid and GSAP cursor hover preview on desktop while rendering the 3D Coverflow on mobile screens (< 769px).
- Refined `TeamMobileCoverflow` card dimensions to 16:10 landscape aspect ratio (`280px` x `175px`) to preserve natural image proportions and prevent photo cropping on mobile devices.
- Added top clearance padding (`paddingTop: 28px`, `height: cardHeight + 120`) and enhanced section spacing to prevent 3D perspective cards and badge corners from being clipped by container overflow.
- Integrated AI Context System (`llms.txt`, `BRAIN.md`, `CHANGELOG.md`, `AGENTS.md`) for persistent cross-session memory and context synchronization.
- Created `llms.txt` navigation map for LLMs and agent tooling.
- Created `BRAIN.md` as dynamic persistent memory tracking current context, active brainstorming, and architectural decisions.

### [Changed]
- Migrated Hero section background video from local 36MB static asset (`/videos/special20-showreel-1080.mp4`) to Cloudinary CDN URL (`https://res.cloudinary.com/v764bbhk/video/upload/v1787297781/special20-showreel-1080.mp4`) for fast edge streaming, lower bandwidth consumption, and enhanced initial load performance.

### [Fixed]
- Resolved ESLint `react-hooks/set-state-in-effect` warning in `TeamMobileCoverflow.tsx` by deriving the clamped active slide index directly during render.
- Added defensive DOM existence checks for `.tp-gsap-bg`, `.tp-bounce`, and `.tp-brand-inner-item img` in `src/hooks/useGsapAnimation.ts` to eliminate browser console warnings (`GSAP target not found` / `Element not found`) on `/contact` and other routes.
- Added responsive `sizes` prop (`(max-width: 768px) 250px, (max-width: 1366px) 305px, (max-width: 1440px) 324px, 432px`) to `<Image fill>` in `Skiper30.tsx` portfolio gallery to eliminate Next.js missing sizes warnings and prevent downloading oversized full-viewport images.
- Updated CTA link in `AboutSection` ("NOMINA: More, than just") to point directly to `/about`.
- Updated CTA link in `ClientsSection` ("We Have Collaborated With") to point directly to `/portfolio`.
- Standardized uppercase naming convention for `BRAIN.md` and updated import pointers across `AGENTS.md` and agent rule files (`.clinerules`, `.continue/rules/project.md`, `.amazonq/rules/project.md`, `.github/copilot-instructions.md`).

### [Removed]
- Removed `EN` / `ID` language switcher from `HeroSection`, `Navbar`, and `StaggeredMenu`.
- Removed circular floating `N` badge widget from the bottom left corner of `HeroSection`.

## [0.3.1] - 2026-03-29

### Fixed
- `sync-agent-rules.sh` failing to resolve `@file` imports on Windows due to CRLF line endings — platform instruction files now correctly inline the Inspection Guide content

## [0.3.0] - 2026-03-29

### Added
- Multi-URL support for `/clone-website` — clone multiple sites in a single command with parallel processing and isolated output
- CI quality gates via GitHub Actions — automated lint, typecheck, and build on every push and PR
- `npm run typecheck` and `npm run check` scripts for local quality validation
- `.gitattributes` for cross-platform line ending normalization
- `.nvmrc` to pin Node.js 20 for contributor consistency

### Changed
- Streamlined PR template — removed redundant checklist items and screenshots section
- Improved project description and README — clearer use cases, limitations, and modern wording
- Refined documentation and agent rules across all platforms for clarity and consistency
- Fixed CRLF handling in `sync-skills.mjs` for reliable Windows operation

### Removed
- Outdated use case from README documentation

## [0.2.0] - 2026-03-28

### Added
- Multi-platform AI agent support: Claude Code, Codex CLI, OpenCode, GitHub Copilot, Cursor, Windsurf, Gemini CLI, Cline/Roo Code, Continue, Amazon Q, Augment Code, Aider
- Platform-specific instruction files and `/clone-website` skill for each supported agent
- `scripts/sync-agent-rules.sh` to regenerate platform instruction files from AGENTS.md
- `scripts/sync-skills.mjs` to regenerate `/clone-website` skill across all platforms
- GEMINI.md for Gemini CLI configuration
- Supported Platforms table in README
- "Updating for Other Platforms" documentation section in README

### Changed
- README now describes the project as multi-agent (Claude Code recommended, not required)
- AGENTS.md updated with sync script reminders

## [0.1.1] - 2026-03-28

### Added
- Bug report and feature request issue templates
- Pull request template with checklist
- CHANGELOG.md following Keep a Changelog format
- Package.json metadata (description, repository, homepage, keywords, engines)

### Fixed
- LICENSE copyright holder now attributed to JCodesMore

## [0.1.0] - 2026-03-28

### Added
- Initial template scaffold for website reverse-engineering with Claude Code
- `/clone-website` skill for full-site cloning pipeline
- `/build-from-spec` and `/customize` skills
- Parallel builder agents with git worktree isolation
- Chrome MCP integration for design token extraction
- Comprehensive inspection guide and project structure documentation
- Next.js 16 + shadcn/ui + Tailwind CSS v4 base scaffold
- MIT license
- README with badges, demo section, quick start, and star history

[Unreleased]: https://github.com/JCodesMore/ai-website-cloner-template/compare/v0.3.1...HEAD
[0.3.1]: https://github.com/JCodesMore/ai-website-cloner-template/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/JCodesMore/ai-website-cloner-template/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/JCodesMore/ai-website-cloner-template/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/JCodesMore/ai-website-cloner-template/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/JCodesMore/ai-website-cloner-template/releases/tag/v0.1.0
