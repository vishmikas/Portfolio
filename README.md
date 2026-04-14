# Dilum Samarathunga — Personal Portfolio

A scalable, high-performance personal portfolio built with Next.js 14 App Router, Tailwind CSS, and Framer Motion.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Code Highlighting**: react-syntax-highlighter
- **Fonts**: Syne (display) + DM Sans (body) + JetBrains Mono (code)


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
│   └── data.ts             # All portfolio data
│
└── public/
    └── Dilum_Vishmika_CV.pdf   # CV PDF
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
