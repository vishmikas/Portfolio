# Dilum Samarathunga — Personal Portfolio

A scalable, high-performance personal portfolio built with Next.js 14 App Router, Tailwind CSS, and Framer Motion.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Code Highlighting**: react-syntax-highlighter
- **Fonts**: Syne (display) + DM Sans (body) + JetBrains Mono (code)

## Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── globals.css         # Global styles + CSS variables
│   ├── page.tsx            # Home page (with splash screen)
│   ├── journey/
│   │   └── page.tsx        # Timeline page
│   ├── projects/
│   │   ├── page.tsx        # Projects grid with filter
│   │   └── [slug]/
│   │       ├── page.tsx            # Project detail (server)
│   │       └── ProjectDetailClient.tsx  # Animated detail (client)
│   ├── certificates/
│   │   └── page.tsx        # Certificates vault
│   ├── skills/
│   │   └── page.tsx        # Skills + Resume viewer
│   └── not-found.tsx       # 404 page
│
├── components/
│   ├── SplashScreen.tsx    # Animated intro screen
│   ├── Navbar.tsx          # Sticky nav with active indicator
│   ├── Footer.tsx          # Minimal footer
│   ├── sections/
│   │   └── Hero.tsx        # Home hero section
│   └── ui/
│       ├── ProjectCard.tsx  # Reusable project card
│       ├── DevLog.tsx       # Dev log with syntax highlighting
│       ├── Timeline.tsx     # Vertical journey timeline
│       ├── CertCard.tsx     # Certificate card
│       └── Section.tsx      # Page section wrapper
│
├── lib/
│   └── data.ts             # All portfolio data (single source of truth)
│
└── public/
    └── Dilum_Vishmika_CV.pdf   # Place your CV PDF here
```

## Adding Your CV

Place your CV PDF in the `public/` folder as `Dilum_Vishmika_CV.pdf`.
The download button and CV viewer will automatically use it.

## Updating Content

All content lives in `lib/data.ts`. To update:

- **Add a project**: Add to the `projects` array with a `devLogs` array
- **Add a timeline milestone**: Add to `timelineMilestones`
- **Add a certificate**: Add to `certificates`
- **Update skills**: Modify `skillCategories`
- **Change personal info**: Edit `personalInfo`

## Adding a New Project

```ts
// In lib/data.ts → projects array:
{
  id: "proj-6",
  slug: "my-new-project",      // URL: /projects/my-new-project
  title: "My New Project",
  tagline: "Short tagline",
  description: "Full description...",
  status: "ongoing",            // "completed" | "ongoing"
  featured: true,               // Shows on home page
  techStack: ["React", "Node.js"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",
  highlights: ["Key point 1", "Key point 2"],
  devLogs: [
    {
      id: "dl-6-1",
      date: "2025-01-01",
      status: "feature",        // "feature" | "fix" | "refactor" | "milestone" | "planning"
      title: "Initial Setup",
      description: "Started the project...",
      codeSnippet: {            // Optional
        language: "javascript",
        filename: "index.js",
        code: `console.log("Hello World")`
      }
    }
  ]
}
```

## Design System

CSS variables are defined in `app/globals.css`:

- `--bg` / `--bg-card` — Page and card backgrounds
- `--border` / `--border-strong` — Border colors
- `--text-primary/secondary/muted` — Typography hierarchy
- `--accent` — Primary dark accent (#0f172a)

Fonts:
- Display/Headings: Syne (`font-display` class)
- Body: DM Sans (`font-body` class)
- Code: JetBrains Mono (`font-code` class)
