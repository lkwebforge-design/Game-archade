# 🎮 AETHERIA — Premium Gaming Lounge

> A premium gaming lounge experience built around high-performance PC gaming, console sessions, sim racing, squad nights, and immersive interactive features.

![AETHERIA Preview](https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80)

---

## ⚡ Features

- **Interactive Gaming Console & Runner Simulator**:
  - Live interactive runner with collision physics, sound effects, jump mechanics, and difficulty scaling.
  - Interactive state controls: toggle between `PAUSED` and `LIVE` telemetry streams.

- **Performance X-Ray Scanner**:
  - Draggable scanner experience that turns the lounge into a futuristic performance interface.
  - Real-time CSS polygon clip-path rendering with SVG vector graphics.

- **Gaming Gear Lab**:
  - Interactive gaming setup and performance dashboard showcasing the premium gear experience.

- **Synthesized Web Audio Engine**:
  - Deep A1 ambient drone and tactile feedback clicks, lasers, and scan chimes built entirely with the browser's native **Web Audio API** (0 external audio dependencies).

- **Featured Games Showcase**:
  - Filterable featured game experiences with detailed inspection modals.

- **Instant Session Builder**:
  - Interactive questionnaire that builds a ready-to-send WhatsApp booking request.

- **Lounge Locations**:
  - Location interface for Colombo, Kandy, and Galle gaming zones.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Audio**: Native HTML5 Web Audio API
- **Fonts**: Syne, Plus Jakarta Sans, JetBrains Mono

---

## 🚀 Quick Start

### 1. Clone or Download Repository
```bash
git clone https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
cd <REPO_NAME>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 📦 Build for Production

```bash
npm run build
```

The optimized static files will be generated in the `dist/` directory, ready to deploy to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

---

## 🌐 Deployment

### Deploy to Vercel
1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import this repository.
4. Framework Preset will auto-detect as **Vite**. Click **Deploy**!

### Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and import your GitHub repository.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy Site**!

---

## 📜 License

MIT License — Feel free to use and modify for personal and commercial projects.
