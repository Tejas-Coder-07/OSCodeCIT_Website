# OSCode CIT Website

The official website for **OSCode CIT**, the Open Source Community at Cambridge Institute of Technology, Bengaluru. It introduces the community and its work, and shares events, projects, learning resources, achievements, and team information.

## Features

- Home page with community highlights and featured events
- Events page with upcoming and past event filters, photo albums, and event details
- Pages for projects, learning resources, hackathons, achievements, team, and departments
- Responsive layout with animated interface elements

## Tech Stack

- React 19 and Vite
- React Router
- Tailwind CSS 4
- Framer Motion
- Lucide React and React Icons

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Getting Started

```bash
git clone https://github.com/oscode-cit/OSCodeCIT_Website.git
cd OSCodeCIT_Website
npm install
npm run dev
```

Vite prints the local development URL in the terminal (typically `http://localhost:5173`).

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```text
public/                 Static images, event albums, logos, and video
src/
  components/           Shared UI, layout, and feature components
  context/              React context providers
  data/                 Event, project, team, and other page content
  pages/                Route-level page components
  styles/               Global styles
  App.jsx               Application routes
  main.jsx              Application entry point
```

Event content is maintained in `src/data/events.js`; event images are stored under `public/images/events/`.

## Contributing

Contributions are welcome. Open an issue to discuss a change, or submit a pull request with a clear description of the updates.

## Contact

For questions about the community or website, contact the OSCode CIT team through its official channels.
