<!-- 6d3ae9c8-5ee4-4e66-8cf2-bb92e97ab4d2 28e37751-6df4-473b-99f6-d66b129c72f1 -->
# Single Browser Window Refresh

## Overview

Consolidate the portfolio into a single Windows 95-style browser window for improved usability on all devices while keeping the playful desktop/taskbar aesthetic.

## Technology Stack

- React + Vite (already in place)
- CSS-only theming (no external UI libs)
- Cloudflare Pages deployment via `npm run build` → `dist`

## Plan

1. **Layout Reset**
   - Remove multiple draggable windows.
   - Create one top-level `BrowserWindow` component with classic address bar, toolbar icons, and scrollable body.

2. **Taskbar Cleanup**
   - Remove the “Ready” clock-label and LinkedIn taskbar link while keeping Start + blog/GitHub shortcuts.

3. **Content Consolidation**
   - Stack About, Skills, Projects, and Contact sections inside the browser body.
   - Update email to `inquiry@ajoshuasmith.com`.
   - Remove certifications highlight and “Employer names intentionally redacted...” text.

4. **Responsive Polish**
   - Ensure the browser window fills width on mobile/tablet and centers with drop shadow on desktop.

5. **Verification**
   - Run lint/build to ensure no regressions; visually verify mobile/desktop behavior.

## Todos

- [ ] Implement single browser window layout replacing draggable windows
- [ ] Update taskbar links and remove Ready indicator
- [ ] Refresh content (email + text removals)
- [ ] Ensure responsive styling works across breakpoints
- [ ] Run lint/build once changes are complete

