<!-- 6d3ae9c8-5ee4-4e66-8cf2-bb92e97ab4d2 9f6b54c2-f8c7-49e5-98ae-570d914f20e4 -->
# Windows 95 Portfolio Website

## Overview

Build a professional portfolio landing page with a Windows 95 aesthetic using React + Vite, optimized for Cloudflare Pages deployment. The design features draggable window frames with minimalist content.

## Technology Stack

- **React** with **Vite** for fast development and build
- **CSS** for Windows 95 styling (no external UI libraries)
- **Cloudflare Pages** compatible build output

## Design Specifications

- Windows 95 color scheme (gray gradients, beveled buttons, classic fonts)
- Draggable window-style containers for content sections
- Minimalist layout with clean spacing
- Professional appearance suitable for career use
- Responsive design for various screen sizes

## File Structure

```
website-personal/
├── index.html
├── package.json
├── vite.config.js
├── public/
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/
    │   ├── Window.jsx          # Draggable window component
    │   ├── About.jsx           # About section
    │   ├── Skills.jsx          # Skills section
    │   ├── Projects.jsx        # Projects section
    │   └── Contact.jsx         # Contact section
    └── styles/
        ├── App.css             # Content styles
        └── windows95.css       # Windows 95 theme styles
```

## Implementation Details

### Window Component (Window.jsx)

- Draggable window with title bar
- Minimize/maximize/close buttons (visual only)
- Windows 95-style beveled borders
- Content area for sections

### Main Sections

1. **About Window**: Brief bio and professional introduction
2. **Skills Window**: Technical skills and expertise
3. **Projects Window**: Notable projects/work
4. **Contact Window**: Contact information and links
   - Link to blog: https://blog.ajoshuasmith.com
   - Link to GitHub: https://github.com/ajoshuasmith

### Styling Approach

- Windows 95 color palette (#C0C0C0 grays, #000080 blue accents, teal desktop)
- MS Sans Serif / system font fallbacks
- Beveled button styles with inset/outset borders
- Window chrome with title bars and borders
- Subtle shadows and depth

### Cloudflare Pages Configuration

- Build command: `npm run build`
- Build output: `dist/`
- Node version: 18+ (specified in package.json)

## Content Placeholders

Initial content uses details from LinkedIn and résumé with employer names redacted:

- Name: Joshua Smith (ajoshuasmith)
- Role: Director of Technology, Service Manager, Senior Systems Engineer
- Skills: Leadership, automation, documentation, compliance
- Projects: Cloud workplace migrations, hypervisor modernization, process programs

## Development Workflow

1. Initialize Vite + React project
2. Create component structure
3. Implement Windows 95 CSS theme
4. Build draggable window component
5. Create content sections
6. Add links to blog and GitHub
7. Test locally and prepare for Cloudflare Pages deployment

### To-dos

- [x] Initialize Vite + React project with package.json and basic configuration
- [x] Build draggable Window component with Windows 95 styling and title bar
- [x] Create Windows 95 CSS theme with color palette, fonts, and button styles
- [x] Create About, Skills, Projects, and Contact section components
- [x] Add links to blog (blog.ajoshuasmith.com) and GitHub (github.com/ajoshuasmith)
- [x] Set up Cloudflare Pages configuration and build settings

