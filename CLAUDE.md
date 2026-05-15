# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project Overview

An Elden Ring: Nightreign game guide website (nightreign.club). Built as a static content site with SEO optimization, dark/light theme, and bilingual support (EN/ZH).

## Commands

- `npm run dev` — Start dev server (localhost:3000)
- `npm run build` — Production build (catches type errors and page rendering issues)
- `npm run lint` — ESLint check
- No test framework is configured.

## Architecture

**Stack:** Next.js 16 + React 19 + Tailwind CSS 4 + TypeScript. No CMS or database — all content is hardcoded in page components.

**Routing:** Uses Next.js App Router. Guide pages live under `src/app/guides/{category}/` and Chinese translations under `src/app/zh/guides/{category}/`. Both share the same sidebar layout.

**Guide categories** are defined in `src/lib/guides.ts` — this is the single source of truth for navigation (Sidebar, Navbar mobile menu, GuideCard grid, sitemap). When adding a new category, add it here and the UI updates everywhere.

**Content pattern:** Each guide page is a standalone React component (not MDX). Pages use reusable article components from `src/components/article/` such as `TableOfContents`, `PhaseCard`, `TipBox`, `AttackTable`, `WeaknessChart`, `YouTubeEmbed`, etc. Wrap guide content in `<div className="guide-content">` to inherit typography styles from `globals.css`.

**Theme system:** Dark by default. Light mode toggled via `html.light` class (persisted to localStorage). Color tokens are CSS custom properties defined in `globals.css` — use semantic names like `text-foreground`, `bg-card`, `border-border`, `text-muted-foreground` rather than raw Tailwind colors.

**SEO:** Each page exports `metadata` with title, description, keywords, and OpenGraph tags. The sitemap (`src/app/sitemap.ts`) and robots.txt are auto-generated. High-priority pages must be added to `sitemap.ts` manually.

**Images:** Static images go in `public/images/guides/{category}/`. Reference with `/images/guides/bosses/gladius.jpg` etc. The `ImagePlaceholder` component exists as a placeholder — replace with `next/image` when adding real images.

**Resources directory:** `resources/` contains reference material (sources.md files with curated links, plus downloaded images from wikis). This is a working directory, not served by the website.

## Path Alias

`@/*` maps to `./src/*` (configured in tsconfig.json). Always use `@/components/...`, `@/lib/...` in imports.
