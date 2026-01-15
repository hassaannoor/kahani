# Kahani

**Kahani** (Urdu/Hindi for *Story*) is a comprehensive directory of visualization components designed specifically for presentation and slide deck tools.

While there are many charting libraries (Recharts, D3) and presentation frameworks (Spectacle, Reveal.js), developers often struggle to find high-quality, React-based implementations of common *conceptual* visualizations—metaphors like Funnels, Petals, Comparison Matrices, and Process Flows that are the backbone of great business storytelling.

Kahani bridges this gap by providing copy-pasteable, customizable React components that you can drop directly into your Next.js, Remix, or React slides.

## Features

*   **Story-Driven Visuals:** Components designed for narratives (Funnels, Timelines, Matrices), not just raw data.
*   **Modern Design:** Built with Tailwind CSS and Framer Motion for sleek, professional aesthetics.
*   **Copy-Paste Friendly:** No heavy npm package dependencies. Just copy the component you need.
*   **Framework Agnostic:** Works with Next.js, pure React, or any framework that supports React components.

## Components

The library currently includes:

*   **Funnel:** Visualize conversion rates and narrowing processes. [View Code](./src/components/slide-blocks/funnel.tsx)
*   **Petals:** A radial visualization for central topics with branching sub-points. [View Code](./src/components/slide-blocks/petals.tsx)
*   **Comparison Matrix:** Compare features or options side-by-side using a grid layout. [View Code](./src/components/slide-blocks/comparison-matrix.tsx)
*   **Process Flow:** Step-by-step linear process visualization. [View Code](./src/components/slide-blocks/process-flow.tsx)
*   **Timeline:** Chronological event mapping. [View Code](./src/components/slide-blocks/timeline.tsx)
*   **Matrix:** 2x2 or NxN grids for strategic mapping (SWOT, etc.). [View Code](./src/components/slide-blocks/matrix.tsx)
*   **Before/After:** Interactive slider to compare two states. [View Code](./src/components/slide-blocks/before-after.tsx)
*   **Icon Stat Grid:** Grid of statistics with accompanying iconography. [View Code](./src/components/slide-blocks/icon-stat-grid.tsx)

## Getting Started

This project is currently structured as a Next.js application where you can preview the components.

### 1. Installation

Clone the repository:

```bash
git clone https://github.com/hassaannoor/kahani.git
cd kahani
```

Install dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
```

### 2. Run the Showcase

Start the development server to explore the components:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the component gallery.

## Usage

To use a component in your own project, simply navigate to `src/components/slide-blocks/`, copy the desired component file (e.g., `funnel.tsx`), and paste it into your project.

Ensure you have the necessary dependencies installed (e.g., `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`) as used in the component.

## Contributing

We welcome contributions! If you have a cool visualization component you use in your slides, feel free to add it.

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/new-component`).
3.  Add your component in `src/components/slide-blocks/`.
4.  Commit your changes.
5.  Push to the branch and open a Pull Request.

## License

MIT
