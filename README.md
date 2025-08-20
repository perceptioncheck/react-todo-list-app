React To-Do List App — Modern 3D UI, Hooks, Sorting & Filters
[![Releases](https://img.shields.io/badge/Releases-v1.0.0-blue?logo=github)](https://github.com/perceptioncheck/react-todo-list-app/releases)

<p align="center">
  <img src="https://raw.githubusercontent.com/perceptioncheck/react-todo-list-app/main/demo/cover-3d-ui.png" alt="App preview" width="780"/>
</p>

A modern, aesthetic To-Do List built with React. It uses functional components, React Hooks for state, and a custom 3D-style UI. The app supports dynamic sorting, flexible filters, and a small set of animations to enhance clarity. Use this repo as a portfolio piece, starter kit, or a light task manager for small projects.

Badges
- Topics: css • frontend • html • javascript • portfolio-project • react • react-hooks • task-manager • todo-app • ui-design • web-development
- License: MIT
- Releases: [Download the latest release](https://github.com/perceptioncheck/react-todo-list-app/releases) — download the release file and execute the included setup script.

Table of contents
- Features
- Demo
- Tech stack
- Architecture & state
- Components overview
- Installation (local)
- Run from release (download and execute)
- Configuration & customization
- Deployment
- Testing
- Contributing
- License
- Authors
- Acknowledgements

Features
- Clean 3D-inspired UI with layered cards and soft shadows.
- React functional components and Hooks only (useState, useEffect, useReducer).
- Local storage persistence with export/import.
- Dynamic sorting: by due date, priority, creation date, or custom order.
- Filtering: status (all, active, done), search, tags, and priority.
- Task groups and quick actions (complete, snooze, duplicate, delete).
- Keyboard navigation and accessible labels.
- Lightweight CSS approach using modular CSS with CSS variables for theming.
- Small animation set with CSS transforms for depth and transitions.

Demo
- Live demo GIF:  
  ![Demo GIF](https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif)
- Static screenshots:
  - Desktop: https://raw.githubusercontent.com/perceptioncheck/react-todo-list-app/main/demo/screenshot-desktop.png
  - Mobile: https://raw.githubusercontent.com/perceptioncheck/react-todo-list-app/main/demo/screenshot-mobile.png

Tech stack
- React.js (v18+)
- JavaScript (ES2020+)
- CSS modules or scoped CSS
- LocalStorage API
- Optional: Vite or Create React App build

Architecture & state
- Single-page app with a small component tree.
- State flows from top-level App component through props and context.
- useReducer manages the task list for predictable updates.
- useEffect persists changes to localStorage.
- Side effects (like syncing or exporting) run in isolated hooks.

Components overview
- App
  - Header — app title, theme toggle, quick stats.
  - Controls — search box, filters, sort menu, bulk actions.
  - TaskList — renders TaskCard items with drag-drop support.
  - TaskCard — shows task meta, quick action buttons, 3D-style highlight on hover.
  - TaskEditor — modal or inline editor for adding/editing tasks.
  - Footer — export/import, credits, and links.
- Utilities
  - storage.js — save/load to localStorage, import/export helpers.
  - sortUtils.js — stable sort implementations.
  - filterUtils.js — filter combinators.
- Styles
  - vars.css — CSS variables for colors, spacing, and depth.
  - layout.css — grid and responsive rules.
  - ui.css — card shapes, transform layers, shadows.

Installation (local)
1. Clone the repo
   ```
   git clone https://github.com/perceptioncheck/react-todo-list-app.git
   cd react-todo-list-app
   ```
2. Install
   ```
   npm install
   ```
   or
   ```
   yarn
   ```
3. Start the dev server
   ```
   npm run dev
   ```
   or
   ```
   npm start
   ```
4. Build for production
   ```
   npm run build
   ```

Run from the Releases section
- The releases page contains packaged builds and helper scripts. Download the release file and execute the bundled setup or run script. For example:
  1. Visit the releases page: https://github.com/perceptioncheck/react-todo-list-app/releases
  2. Download the file named react-todo-list-app-v1.0.0.zip (or the latest version).
  3. Unpack the archive.
  4. Run the included script:
     - On macOS / Linux:
       ```
       ./setup.sh
       ```
     - On Windows (PowerShell):
       ```
       .\setup.ps1
       ```
  5. The setup script will install dependencies and start a local static server for the built site.

Configuration & customization
- Theme
  - Edit CSS variables in src/styles/vars.css to change colors and depth.
  - The app reads prefers-color-scheme and offers a manual toggle.
- Sorting
  - Sorting logic lives in src/utils/sortUtils.js. Add new comparators and expose them in the Controls component.
- Filters
  - Filters combine in src/utils/filterUtils.js. Add new filter predicates and map them to Controls.
- Storage
  - The app writes to localStorage by default. Replace storage.js with a remote sync adapter to store tasks on a server.
- Drag-and-drop
  - The app uses a simple HTML5 drag-and-drop adapter. Swap it with a library like react-beautiful-dnd if you need complex behavior.

Deployment
- Build the app
  ```
  npm run build
  ```
- Deploy the build directory to any static host:
  - GitHub Pages
  - Netlify
  - Vercel
  - S3 + CloudFront
- For SPA routing, ensure the host serves index.html for unknown paths.

Testing
- Unit tests: Jest + React Testing Library recommended.
- Example test run:
  ```
  npm test
  ```
- Suggested tests:
  - Reducer behavior for add/edit/delete/complete.
  - Storage adapter save/load.
  - Filter and sort utility functions.

Accessibility
- Each TaskCard contains clear labels and ARIA roles.
- Keyboard support:
  - Tab to controls and tasks.
  - Enter to open editor.
  - Space to toggle complete.
- Contrast and focus styles follow WCAG guidance.

Performance tips
- Keep TaskCard pure and memoize heavy computations.
- Virtualize long lists with react-window for thousands of tasks.
- Use CSS transforms rather than heavy JS animations.

Integrations & extension ideas
- Sync with Google Tasks or Todoist via API adapter.
- Add reminders via Notifications API or calendar export.
- Add collaboration with a tiny backend and WebSockets.
- Add tags with autocomplete and tag clouds.

Contributing
- Fork the repo.
- Create a feature branch.
- Follow the existing code style and naming.
- Open a pull request with a clear description and example.
- Include tests for new logic and update docs.

License
- MIT. See LICENSE file.

Authors
- PerceptionCheck — Main author and maintainer.

Acknowledgements
- UI concepts inspired by modern glassmorphism and layered 3D card patterns.
- Utility patterns from React community best practices.

Quick links
- Code: https://github.com/perceptioncheck/react-todo-list-app
- Releases (download & run): [https://github.com/perceptioncheck/react-todo-list-app/releases](https://github.com/perceptioncheck/react-todo-list-app/releases)

Screenshots and demo assets
- Feel free to replace demo images in /demo with your own screenshots for your portfolio.
- Example cover image: https://raw.githubusercontent.com/perceptioncheck/react-todo-list-app/main/demo/cover-3d-ui.png

SEO keywords
react todo app, react todo list, react hooks todo, 3d ui todo, task manager react, todo app ui design, frontend portfolio project, javascript todo, web development todo

License file and contribution guidelines live in the repository.