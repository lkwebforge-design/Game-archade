# AETHERIA Studio — Complete Source Code Export

This file contains the complete, production-ready source code for the AETHERIA interactive studio application.

---

## File: `/package.json`

```json
{
  "name": "react-example",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --port=3000 --host=0.0.0.0",
    "build": "vite build",
    "preview": "vite preview",
    "clean": "rm -rf dist server.js",
    "lint": "tsc --noEmit"
  },
  "dependencies": {
    "@google/genai": "^2.4.0",
    "@tailwindcss/vite": "^4.3.3",
    "@vitejs/plugin-react": "^6.1.1",
    "lucide-react": "^0.546.0",
    "react": "^19.0.1",
    "react-dom": "^19.0.1",
    "vite": "^8.3.0",
    "express": "^4.21.2",
    "dotenv": "^17.2.3",
    "motion": "^12.23.24"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@types/react": "^19.3.0",
    "@types/react-dom": "^19.3.0",
    "autoprefixer": "^10.4.21",
    "esbuild": "^0.25.0",
    "tailwindcss": "^4.3.3",
    "tsx": "^4.21.0",
    "typescript": "^7.0.2",
    "@types/express": "^4.17.21"
  }
}

```

---

## File: `/index.html`

```html
<!doctype html>
<html lang="en" class="dark scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AETHERIA — Next-Gen Interactive Worlds & Gaming Studio</title>
    <meta name="description" content="A premier creative technology studio engineering cinematic gaming realities, interactive telemetry systems, and digital world architecture." />
    
    <!-- OpenGraph Social Cards -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="AETHERIA — Next-Gen Interactive Worlds & Gaming Studio" />
    <meta property="og:description" content="A premier creative technology studio engineering cinematic gaming realities, interactive telemetry systems, and digital world architecture." />
    <meta property="og:site_name" content="AETHERIA Studio" />
    
    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="AETHERIA — Next-Gen Interactive Worlds & Gaming Studio" />
    <meta name="twitter:description" content="A premier creative technology studio engineering cinematic gaming realities, interactive telemetry systems, and digital world architecture." />

    <!-- Google Fonts: Syne (Display), Plus Jakarta Sans (Body), JetBrains Mono (Data/Code) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Syne:wght@600;700;800;900&display=swap" rel="stylesheet">

    <!-- Schema.org Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "AETHERIA Studio",
      "url": "https://aetheria.studio",
      "description": "Next-Gen Interactive Worlds, Realtime Engines & Biometric Gaming Intelligence.",
      "sameAs": [
        "https://twitter.com/aetheriastudio",
        "https://github.com/aetheriastudio"
      ],
      "knowsAbout": ["Interactive 3D", "Gaming Engines", "Biometric Telemetry", "Creative Technology"]
    }
    </script>
  </head>
  <body class="bg-[#070712] text-neutral-100 antialiased selection:bg-purple-500 selection:text-white overflow-x-hidden min-h-screen">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>


```

---

## File: `/metadata.json`

```json
{
  "name": "AETHERIA — Next-Gen Interactive Worlds & Gaming Studio",
  "description": "A premier creative technology studio engineering cinematic gaming realities, interactive telemetry systems, and digital world architecture.",
  "requestFramePermissions": [],
  "majorCapabilities": ["MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API"]
}

```

---

## File: `/vite.config.ts`

```typescript
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

```

---

## File: `/tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "experimentalDecorators": true,
    "useDefineForClassFields": false,
    "module": "ESNext",
    "types": ["vite/client"],
    "lib": [
      "ES2022",
      "DOM",
      "DOM.Iterable"
    ],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "isolatedModules": true,
    "moduleDetection": "force",
    "allowJs": true,
    "jsx": "react-jsx",
    "paths": {
      "@/*": [
        "./*"
      ]
    },
    "allowImportingTsExtensions": true,
    "noEmit": true
  }
}

```

---

## File: `/src/index.css`

```css
@import "tailwindcss";

@theme {
  --font-display: 'Syne', sans-serif;
  --font-sans: 'Plus Jakarta Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

:root {
  color-scheme: dark;
}

body {
  font-family: var(--font-sans);
  background-color: #070712;
  color: #f3f4f6;
  overflow-x: hidden;
}

h1, h2, h3, .font-display {
  font-family: var(--font-display);
}

.font-mono {
  font-family: var(--font-mono);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: #070712;
}
::-webkit-scrollbar-thumb {
  background: #23223f;
  border-radius: 9999px;
}
::-webkit-scrollbar-thumb:hover {
  background: #4338ca;
}

/* Glowing text & borders */
.glow-purple {
  text-shadow: 0 0 24px rgba(168, 85, 247, 0.45);
}

.glow-cyan {
  text-shadow: 0 0 20px rgba(6, 182, 212, 0.45);
}

.border-glow-purple {
  box-shadow: 0 0 25px -5px rgba(168, 85, 247, 0.25), inset 0 0 15px -3px rgba(168, 85, 247, 0.15);
}

.border-glow-cyan {
  box-shadow: 0 0 25px -5px rgba(6, 182, 212, 0.25), inset 0 0 15px -3px rgba(6, 182, 212, 0.15);
}

/* Cybernetic Grid Backdrop */
.cyber-grid {
  background-size: 40px 40px;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
}

.cyber-dots {
  background-image: radial-gradient(rgba(168, 85, 247, 0.15) 1px, transparent 0);
  background-size: 24px 24px;
}

/* Scanline overlay for screen and X-ray effects */
.scanlines {
  background: linear-gradient(
    rgba(18, 16, 38, 0) 50%, 
    rgba(0, 0, 0, 0.35) 50%
  ), linear-gradient(
    90deg,
    rgba(255, 0, 0, 0.03),
    rgba(0, 255, 0, 0.01),
    rgba(0, 0, 255, 0.03)
  );
  background-size: 100% 4px, 6px 100%;
}

```

---

## File: `/src/main.tsx`

```typescript
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);

```

---

## File: `/src/App.tsx`

```typescript
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { InsightsScannerSection } from './components/InsightsScannerSection';
import { ProductLabSection } from './components/ProductLabSection';
import { ShowcaseGallerySection } from './components/ShowcaseGallerySection';
import { WhatsAppCTASection } from './components/WhatsAppCTASection';
import { StudioLocationsSection } from './components/StudioLocationsSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ReelModal } from './components/ReelModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isReelOpen, setIsReelOpen] = useState<boolean>(false);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState<boolean>(false);

  const handleOpenWhatsAppHotline = () => {
    const text = encodeURIComponent(
      "Hello AETHERIA Studio! 👋 I would like to schedule a confidential discovery session."
    );
    window.open(`https://wa.me/15550198374?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative min-h-screen bg-[#070712] text-neutral-100 font-sans selection:bg-purple-500 selection:text-white">
      {/* Top Floating Navigation Bar */}
      <Navbar onOpenWhatsAppModal={handleOpenWhatsAppHotline} />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero Scene & Value Proposition */}
        <HeroSection onOpenReel={() => setIsReelOpen(true)} />

        {/* Section 2: How It Works & Interactive Gameplay Console */}
        <HowItWorksSection />

        {/* Section 3: Insights & The Signature Interactive Biometric X-Ray Scanner */}
        <InsightsScannerSection onOpenCaseStudy={() => setIsCaseStudyOpen(true)} />

        {/* Section 4: Product Lab & Digital Twin Telemetry Testing Stage */}
        <ProductLabSection onScheduleDemo={handleOpenWhatsAppHotline} />

        {/* Section 5: Flagship AAA Showcase & Portfolio */}
        <ShowcaseGallerySection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Section 6: WhatsApp High-Converting CTA & Project Pitch Builder */}
        <WhatsAppCTASection />

        {/* Section 7: Global Studios (Tokyo, London, LA) & Contact Desk */}
        <StudioLocationsSection />
      </main>

      {/* Quiet Luxury Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenWhatsApp={handleOpenWhatsAppHotline}
      />

      <ReelModal
        isOpen={isReelOpen}
        onClose={() => setIsReelOpen(false)}
      />

      <CaseStudyModal
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
        onOpenWhatsApp={handleOpenWhatsAppHotline}
      />

      {/* Quick WhatsApp Floating Concierge */}
      <WhatsAppFloatingButton />
    </div>
  );
}

```

---

## File: `/src/types/index.ts`

```typescript
export interface Project {
  id: string;
  title: string;
  category: 'game-direction' | 'realtime-3d' | 'biometric-ai' | 'virtual-production';
  categoryLabel: string;
  year: string;
  tagline: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  accentColor: string;
  featured: boolean;
}

export interface StudioLocation {
  city: string;
  country: string;
  district: string;
  timezone: string;
  coordinates: string;
  status: 'Active Lab' | 'Creative HQ' | 'Motion Capture';
}

export type ScannerLayer = 'bio' | 'neural' | 'skeletal' | 'streetwear';

```

---

## File: `/src/utils/audio.ts`

```typescript
// Web Audio API ambient synthesizer and tactile UI sound designer
class SoundManager {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;
  private ambientOsc1: OscillatorNode | null = null;
  private ambientOsc2: OscillatorNode | null = null;
  private ambientFilter: BiquadFilterNode | null = null;
  private masterGain: GainNode | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.initContext();
    this.isMuted = !this.isMuted;

    if (!this.isMuted) {
      this.startAmbient();
      this.playBlip(520, 0.1);
    } else {
      this.stopAmbient();
    }
    return !this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public playBlip(freq = 440, duration = 0.08, type: OscillatorType = 'sine') {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // AudioContext policy catch
    }
  }

  public playLaser() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(880, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.25);

      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.25);
    } catch {
      // Audio policy catch
    }
  }

  private startAmbient() {
    if (!this.ctx || !this.masterGain) return;

    try {
      // Warm, deep cinematic space pad
      this.ambientOsc1 = this.ctx.createOscillator();
      this.ambientOsc2 = this.ctx.createOscillator();
      this.ambientFilter = this.ctx.createBiquadFilter();

      this.ambientOsc1.type = 'sine';
      this.ambientOsc1.frequency.setValueAtTime(110, this.ctx.currentTime); // A2

      this.ambientOsc2.type = 'triangle';
      this.ambientOsc2.frequency.setValueAtTime(164.81, this.ctx.currentTime); // E3

      this.ambientFilter.type = 'lowpass';
      this.ambientFilter.frequency.setValueAtTime(450, this.ctx.currentTime);

      const padGain = this.ctx.createGain();
      padGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      padGain.gain.exponentialRampToValueAtTime(0.08, this.ctx.currentTime + 2.5);

      this.ambientOsc1.connect(this.ambientFilter);
      this.ambientOsc2.connect(this.ambientFilter);
      this.ambientFilter.connect(padGain);
      padGain.connect(this.masterGain);

      this.ambientOsc1.start();
      this.ambientOsc2.start();
    } catch {
      // Audio catch
    }
  }

  private stopAmbient() {
    try {
      if (this.ambientOsc1) {
        this.ambientOsc1.stop();
        this.ambientOsc1.disconnect();
        this.ambientOsc1 = null;
      }
      if (this.ambientOsc2) {
        this.ambientOsc2.stop();
        this.ambientOsc2.disconnect();
        this.ambientOsc2 = null;
      }
    } catch {
      // Audio catch
    }
  }
}

export const sound = new SoundManager();

```

---

## File: `/src/components/ArtworkElements.tsx`

```typescript
import React from 'react';

/**
 * High-fidelity Cyber Fantasy Hero Scene (Warrior & Cybernetic Phoenix)
 * Matches the dramatic composition and vibrant aesthetic in the reference video
 */
export const HeroSceneArtwork: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full min-h-[380px] sm:min-h-[480px] lg:min-h-[580px] flex items-center justify-center overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-b from-[#13112c]/90 via-[#0b0a1a]/95 to-[#070712] shadow-2xl ${className}`}>
      {/* Background celestial cosmic orbs & nebula glow */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 inset-x-0 h-48 bg-gradient-to-t from-[#070712] via-[#070712]/80 to-transparent z-10" />

      {/* SVG Canvas for Cyber Warrior and Celestial Cyber-Phoenix */}
      <svg
        viewBox="0 0 1200 680"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover z-0 select-none"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e1845" />
            <stop offset="40%" stopColor="#301e5e" />
            <stop offset="70%" stopColor="#4a154b" />
            <stop offset="100%" stopColor="#0d0c1f" />
          </linearGradient>

          <linearGradient id="phoenixBodyGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="30%" stopColor="#8b5cf6" />
            <stop offset="70%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>

          <linearGradient id="swordBladeGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>

          <linearGradient id="warriorCoatGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e1b4b" />
            <stop offset="60%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          <filter id="neonGlowCyan" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="neonGlowPink" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Sky / Horizon */}
        <rect width="1200" height="680" fill="url(#skyGrad)" opacity="0.6" />

        {/* Cosmic Moons / Orbs */}
        <circle cx="280" cy="160" r="48" fill="#e0e7ff" opacity="0.15" />
        <circle cx="280" cy="160" r="40" fill="#c7d2fe" opacity="0.25" />
        <circle cx="295" cy="148" r="32" fill="#1e1845" opacity="0.75" />

        <circle cx="940" cy="120" r="35" fill="#38bdf8" opacity="0.2" />
        <circle cx="940" cy="120" r="35" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 6" opacity="0.6" />
        <circle cx="975" cy="105" r="10" fill="#a855f7" opacity="0.5" />

        {/* Distant Mountain Ridges */}
        <polygon points="0,520 220,380 440,490 620,390 850,510 1100,360 1200,430 1200,680 0,680" fill="#181335" opacity="0.8" />
        <polygon points="0,560 310,440 560,540 820,430 1060,530 1200,470 1200,680 0,680" fill="#120e28" />

        {/* Bioluminescent Flora & Foreground Terrain */}
        <polygon points="0,600 350,560 700,590 1050,570 1200,590 1200,680 0,680" fill="#090814" />
        
        {/* Neon Bioluminescent Plants */}
        <g opacity="0.8">
          <circle cx="120" cy="590" r="6" fill="#38bdf8" filter="url(#neonGlowCyan)" />
          <path d="M120,620 Q115,605 120,590" stroke="#06b6d4" strokeWidth="2" fill="none" />
          <circle cx="180" cy="575" r="8" fill="#ec4899" filter="url(#neonGlowPink)" />
          <path d="M180,615 Q190,595 180,575" stroke="#ec4899" strokeWidth="2.5" fill="none" />
          <circle cx="780" cy="600" r="7" fill="#8b5cf6" />
          <circle cx="840" cy="580" r="10" fill="#38bdf8" filter="url(#neonGlowCyan)" />
          <path d="M840,630 Q830,605 840,580" stroke="#38bdf8" strokeWidth="2" fill="none" />
          <circle cx="920" cy="590" r="6" fill="#f43f5e" />
        </g>

        {/* CYBER WARRIOR (Left Foreground) */}
        <g id="warriorGroup">
          {/* Shadow */}
          <ellipse cx="230" cy="630" rx="90" ry="18" fill="#000000" opacity="0.6" />

          {/* Flowing Trenchcoat / Cape */}
          <path
            d="M 170 380 Q 120 460 100 550 C 130 580 180 570 210 540 C 230 490 220 430 210 390 Z"
            fill="url(#warriorCoatGrad)"
            stroke="#6366f1"
            strokeWidth="1.5"
          />

          {/* Legs & Armored Boots */}
          <path d="M 190 510 L 175 620 L 210 625 L 220 530 Z" fill="#0f172a" stroke="#334155" strokeWidth="2" />
          <path d="M 230 510 L 255 615 L 290 615 L 260 520 Z" fill="#1e293b" stroke="#475569" strokeWidth="2" />

          {/* Torso & Cybernetic Armor Rig */}
          <path
            d="M 185 360 L 255 350 L 265 470 L 180 480 Z"
            fill="#1e1e38"
            stroke="#818cf8"
            strokeWidth="2"
          />
          {/* Tactical Vest Straps & Emissive LED Rig */}
          <line x1="195" y1="370" x2="245" y2="460" stroke="#6366f1" strokeWidth="3" />
          <line x1="245" y1="370" x2="195" y2="460" stroke="#6366f1" strokeWidth="3" />
          <circle cx="220" cy="410" r="5" fill="#38bdf8" filter="url(#neonGlowCyan)" />

          {/* Shoulders & Arms */}
          <path d="M 170 370 Q 150 420 180 470" stroke="#334155" strokeWidth="18" strokeLinecap="round" />
          <path d="M 260 360 Q 295 400 320 440" stroke="#334155" strokeWidth="16" strokeLinecap="round" />

          {/* Head & Hair Profile */}
          <circle cx="215" cy="315" r="28" fill="#e2e8f0" opacity="0.9" />
          {/* Stylized hair blowing left */}
          <path
            d="M 210 290 C 170 280 140 310 120 340 C 150 330 180 335 205 320 Z"
            fill="#090d16"
          />
          {/* Visor / Optical implant */}
          <path d="M 225 312 L 245 314" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" filter="url(#neonGlowCyan)" />

          {/* The Energized Blade / Katana pointing towards creature */}
          <g transform="rotate(32 300 420)">
            {/* Hilt */}
            <rect x="290" y="415" width="45" height="10" rx="3" fill="#0f172a" stroke="#818cf8" strokeWidth="2" />
            <rect x="335" y="410" width="8" height="20" rx="2" fill="#6366f1" />
            {/* Glowing Blade */}
            <path
              d="M 345 418 L 560 417 Q 575 419 565 423 L 345 423 Z"
              fill="url(#swordBladeGrad)"
              filter="url(#neonGlowCyan)"
            />
          </g>
        </g>

        {/* CELESTIAL CYBER-PHOENIX / GUARDIAN (Right Side) */}
        <g id="phoenixCreature">
          {/* Creature Glow Aura */}
          <ellipse cx="940" cy="360" rx="160" ry="120" fill="#a855f7" opacity="0.18" filter="url(#neonGlowPink)" />

          {/* Large Spread Wings (Layer 1 - Back Wings) */}
          <path
            d="M 880 340 C 800 240 700 230 650 280 C 720 310 790 350 850 400 Z"
            fill="#4338ca"
            opacity="0.8"
          />
          <path
            d="M 980 340 C 1060 220 1180 200 1220 250 C 1140 290 1060 350 990 400 Z"
            fill="#4338ca"
            opacity="0.8"
          />

          {/* Layer 2 - Primary Feather Wings with glowing edges */}
          <path
            d="M 860 360 C 750 280 670 320 620 390 C 690 395 760 410 840 430 Z"
            fill="url(#phoenixBodyGrad)"
            stroke="#f43f5e"
            strokeWidth="3"
            filter="url(#neonGlowPink)"
          />
          <path
            d="M 990 360 C 1100 270 1190 310 1240 380 C 1170 390 1090 410 1010 430 Z"
            fill="url(#phoenixBodyGrad)"
            stroke="#38bdf8"
            strokeWidth="3"
            filter="url(#neonGlowCyan)"
          />

          {/* Feathers fringe details */}
          <g stroke="#ffffff" strokeWidth="2" opacity="0.6">
            <line x1="680" y1="360" x2="630" y2="400" />
            <line x1="720" y1="380" x2="670" y2="430" />
            <line x1="1160" y1="350" x2="1220" y2="390" />
            <line x1="1120" y1="375" x2="1170" y2="420" />
          </g>

          {/* Creature Body & Crest */}
          <ellipse cx="925" cy="380" rx="65" ry="85" fill="#1e1845" stroke="#8b5cf6" strokeWidth="3" />
          
          {/* Glowing Rune Core on Chest */}
          <polygon points="925,350 950,380 925,410 900,380" fill="#38bdf8" filter="url(#neonGlowCyan)" />
          <polygon points="925,360 940,380 925,400 910,380" fill="#ffffff" />

          {/* Head & Stylized Horns/Crest */}
          <circle cx="925" cy="285" r="45" fill="#13102b" stroke="#ec4899" strokeWidth="3" />
          
          {/* Horns */}
          <path d="M 895 265 C 870 215 840 210 825 220 C 850 250 885 260 895 270 Z" fill="#ec4899" />
          <path d="M 955 265 C 980 215 1010 210 1025 220 C 1000 250 965 260 955 270 Z" fill="#38bdf8" />

          {/* Luminous Glowing Eyes */}
          <ellipse cx="905" cy="285" rx="9" ry="6" fill="#38bdf8" filter="url(#neonGlowCyan)" />
          <ellipse cx="945" cy="285" rx="9" ry="6" fill="#38bdf8" filter="url(#neonGlowCyan)" />
          <circle cx="905" cy="285" r="3" fill="#ffffff" />
          <circle cx="945" cy="285" r="3" fill="#ffffff" />

          {/* Beak / Visor */}
          <polygon points="925,295 935,315 915,315" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />

          {/* Energy Beams & Floating Embers */}
          <circle cx="760" cy="300" r="4" fill="#38bdf8" filter="url(#neonGlowCyan)" />
          <circle cx="810" cy="240" r="3" fill="#ec4899" filter="url(#neonGlowPink)" />
          <circle cx="1060" cy="280" r="4" fill="#38bdf8" />
          <circle cx="1110" cy="330" r="5" fill="#f43f5e" filter="url(#neonGlowPink)" />
        </g>

        {/* Ambient floating HUD glyphs and telemetry markers */}
        <g opacity="0.4" stroke="#818cf8" strokeWidth="1" fill="none">
          <circle cx="600" cy="200" r="36" strokeDasharray="3 5" />
          <circle cx="600" cy="200" r="16" />
          <line x1="560" y1="200" x2="640" y2="200" />
          <line x1="600" y1="160" x2="600" y2="240" />
        </g>
      </svg>
    </div>
  );
};

/**
 * High-tech Streetwear Character + X-Ray Biometric Cyber-Skeleton
 * For the INSIGHTS interactive scanner component
 */
export const CharacterScanGraphic: React.FC<{
  scanPosition: number; // 0 to 100 percentage
  activeLayer: 'bio' | 'neural' | 'skeletal' | 'streetwear';
}> = ({ scanPosition, activeLayer }) => {
  return (
    <div className="relative w-full aspect-[4/5] max-w-[440px] mx-auto rounded-2xl overflow-hidden bg-gradient-to-b from-[#13112c] via-[#0b0a1a] to-[#070712] border border-purple-500/30 shadow-2xl">
      {/* Background Studio Grid & Ambient Lighting */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute inset-0 bg-radial from-purple-900/20 via-transparent to-transparent pointer-events-none" />

      {/* SVG Container with both Normal and Cyber-X-Ray layers clipped dynamically */}
      <svg
        viewBox="0 0 500 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain select-none relative z-10"
      >
        <defs>
          <filter id="heartGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Clip path for the X-Ray reveal based on scanPosition slider */}
          <clipPath id="scanClip">
            <rect
              x="0"
              y={(scanPosition / 100) * 450}
              width="500"
              height="200"
            />
          </clipPath>
        </defs>

        {/* ----------------- LAYER 1: BASE NORMAL CHARACTER (Streetwear Gamer) ----------------- */}
        <g id="normalCharacter">
          {/* Shadow */}
          <ellipse cx="250" cy="610" rx="140" ry="20" fill="#000000" opacity="0.6" />

          {/* Legs & Cargo Pants */}
          <path d="M 190 440 L 175 600 L 225 605 L 240 450 Z" fill="#1e1b4b" stroke="#312e81" strokeWidth="2" />
          <path d="M 260 450 L 275 605 L 325 600 L 310 440 Z" fill="#1e1b4b" stroke="#312e81" strokeWidth="2" />
          
          {/* Chunky Futuristic Sneakers */}
          <rect x="160" y="590" width="70" height="25" rx="8" fill="#0f172a" stroke="#6366f1" strokeWidth="2" />
          <rect x="270" y="590" width="70" height="25" rx="8" fill="#0f172a" stroke="#6366f1" strokeWidth="2" />
          <line x1="165" y1="605" x2="225" y2="605" stroke="#38bdf8" strokeWidth="3" />
          <line x1="275" y1="605" x2="335" y2="605" stroke="#38bdf8" strokeWidth="3" />

          {/* Tactical Vest / Chest Rig */}
          <path d="M 180 260 L 320 260 L 330 450 L 170 450 Z" fill="#f43f5e" opacity="0.85" />
          <rect x="195" y="290" width="110" height="140" rx="8" fill="#e11d48" stroke="#fda4af" strokeWidth="1.5" />
          
          {/* Tactical Pockets & Heavy Chrome Chain */}
          <rect x="205" y="340" width="40" height="40" rx="4" fill="#9f1239" stroke="#fda4af" strokeWidth="1" />
          <rect x="255" y="340" width="40" height="40" rx="4" fill="#9f1239" stroke="#fda4af" strokeWidth="1" />
          <path d="M 190 270 Q 250 320 310 270" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" strokeDasharray="3 8" />

          {/* Neck & Head */}
          <rect x="230" y="210" width="40" height="60" rx="8" fill="#fed7aa" />
          <circle cx="250" cy="180" r="55" fill="#fde68a" />

          {/* Anime Styled Vibrant Coral Hair */}
          <path
            d="M 190 180 C 170 120 200 90 250 90 C 300 90 330 120 310 180 C 330 150 350 190 330 210 C 310 180 300 230 270 200 C 250 220 230 200 210 220 C 190 200 170 220 190 180 Z"
            fill="#f43f5e"
            stroke="#fb7185"
            strokeWidth="3"
          />

          {/* Eyes & Cheek Blush & Expression */}
          <circle cx="225" cy="175" r="9" fill="#0f172a" />
          <circle cx="275" cy="175" r="9" fill="#0f172a" />
          <circle cx="228" cy="172" r="3" fill="#ffffff" />
          <circle cx="278" cy="172" r="3" fill="#ffffff" />
          <ellipse cx="210" cy="190" rx="10" ry="4" fill="#f43f5e" opacity="0.6" />
          <ellipse cx="290" cy="190" rx="10" ry="4" fill="#f43f5e" opacity="0.6" />
          {/* Confident Smile */}
          <path d="M 235 200 Q 250 212 265 200" stroke="#0f172a" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>

        {/* ----------------- LAYER 2: CYBERNETIC X-RAY / NEURAL LAYER (Revealed inside scanner box) ----------------- */}
        {activeLayer !== 'streetwear' && (
          <g id="cyberXrayLayer" clipPath="url(#scanClip)">
            {/* Dark translucent scanner viewport backdrop */}
            <rect x="40" y="0" width="420" height="650" fill="#0a122c" opacity="0.95" />
            <rect x="40" y="0" width="420" height="650" className="scanlines" opacity="0.4" />

            {/* Glowing Skeletal Bones / Cyber Chassis */}
            <g stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" opacity="0.9">
              {/* Skull Outline */}
              <circle cx="250" cy="180" r="50" fill="#0b1739" stroke="#38bdf8" strokeWidth="3" />
              {/* Eye Sockets */}
              <circle cx="230" cy="175" r="14" fill="#020617" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="270" cy="175" r="14" fill="#020617" stroke="#38bdf8" strokeWidth="2" />
              {/* Glowing Cyan Optical Pupils */}
              <circle cx="230" cy="175" r="5" fill="#38bdf8" filter="url(#cyanGlow)" />
              <circle cx="270" cy="175" r="5" fill="#38bdf8" filter="url(#cyanGlow)" />
              {/* Jaw Teeth grid */}
              <path d="M 235 205 L 265 205 M 240 212 L 260 212" stroke="#38bdf8" strokeWidth="3" />

              {/* Spine Column */}
              <line x1="250" y1="230" x2="250" y2="440" stroke="#06b6d4" strokeWidth="10" strokeDasharray="6 8" />

              {/* Ribcage Structure */}
              <path d="M 190 280 Q 250 300 310 280" fill="none" stroke="#38bdf8" strokeWidth="5" />
              <path d="M 180 310 Q 250 330 320 310" fill="none" stroke="#38bdf8" strokeWidth="5" />
              <path d="M 185 340 Q 250 360 315 340" fill="none" stroke="#38bdf8" strokeWidth="5" />
              <path d="M 195 370 Q 250 390 305 370" fill="none" stroke="#38bdf8" strokeWidth="5" />
              <path d="M 210 400 Q 250 420 290 400" fill="none" stroke="#38bdf8" strokeWidth="5" />
            </g>

            {/* Glowing Biometric Core Heart Reactor (Animates in place) */}
            <g id="heartCore">
              <circle cx="235" cy="320" r="28" fill="#f43f5e" opacity="0.4" filter="url(#heartGlow)" />
              {/* Stylized Heart Polygon */}
              <path
                d="M 235 305 C 235 295 215 295 215 310 C 215 325 235 340 235 345 C 235 340 255 325 255 310 C 255 295 235 295 235 305 Z"
                fill="#f43f5e"
                stroke="#ffffff"
                strokeWidth="2"
                filter="url(#heartGlow)"
              />
              {/* EKG pulse line across heart */}
              <path
                d="M 160 325 L 205 325 L 215 305 L 225 345 L 235 310 L 245 330 L 255 325 L 340 325"
                stroke="#38bdf8"
                strokeWidth="2.5"
                fill="none"
                filter="url(#cyanGlow)"
              />
            </g>

            {/* Neural Synapse Nodes (when activeLayer is neural or bio) */}
            {(activeLayer === 'neural' || activeLayer === 'bio') && (
              <g stroke="#a855f7" strokeWidth="1.5" opacity="0.8">
                <circle cx="250" cy="140" r="4" fill="#c084fc" filter="url(#cyanGlow)" />
                <circle cx="220" cy="150" r="3" fill="#c084fc" />
                <circle cx="280" cy="150" r="3" fill="#c084fc" />
                <line x1="250" y1="140" x2="220" y2="150" />
                <line x1="250" y1="140" x2="280" y2="150" />
                <line x1="220" y1="150" x2="230" y2="175" />
                <line x1="280" y1="150" x2="270" y2="175" />
              </g>
            )}

            {/* Pelvis & Hip Joints */}
            <path d="M 200 420 Q 250 450 300 420 L 290 460 Q 250 470 210 460 Z" fill="#0e7490" stroke="#38bdf8" strokeWidth="3" />
          </g>
        )}

        {/* ----------------- LAYER 3: HOLOGRAPHIC SCANNER FRAME HUD ----------------- */}
        <g id="scannerHudOverlay" transform={`translate(0, ${(scanPosition / 100) * 450})`}>
          {/* Scanner Window Border */}
          <rect
            x="45"
            y="0"
            width="410"
            height="200"
            rx="12"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="3"
            filter="url(#cyanGlow)"
          />

          {/* Scanner Corner Brackets */}
          <path d="M 45 25 L 45 0 L 70 0" stroke="#ffffff" strokeWidth="4" fill="none" />
          <path d="M 455 25 L 455 0 L 430 0" stroke="#ffffff" strokeWidth="4" fill="none" />
          <path d="M 45 175 L 45 200 L 70 200" stroke="#ffffff" strokeWidth="4" fill="none" />
          <path d="M 455 175 L 455 200 L 430 200" stroke="#ffffff" strokeWidth="4" fill="none" />

          {/* Scanner Horizontal Active Laser Bar */}
          <line
            x1="50"
            y1="100"
            x2="450"
            y2="100"
            stroke="#ffffff"
            strokeWidth="2"
            strokeDasharray="12 4"
            filter="url(#cyanGlow)"
          />

          {/* HUD Target Reticles & Telemetry Text */}
          <circle cx="85" cy="40" r="14" stroke="#38bdf8" strokeWidth="2" fill="none" />
          <circle cx="85" cy="40" r="3" fill="#38bdf8" />
          <text x="110" y="44" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
            BIO-CORE // SYNC 98.4%
          </text>

          <text x="320" y="44" fill="#ec4899" fontSize="11" fontFamily="monospace" fontWeight="600">
            PULSE: 78 BPM
          </text>

          <text x="110" y="175" fill="#a855f7" fontSize="11" fontFamily="monospace" fontWeight="600">
            NEURAL_LOAD: OPTIMAL
          </text>
          <text x="340" y="175" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
            LATENCY: 0.8ms
          </text>
        </g>
      </svg>
    </div>
  );
};

```

---

## File: `/src/components/Navbar.tsx`

```typescript
import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/audio';

interface NavbarProps {
  onOpenWhatsAppModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsAppModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleAudio = () => {
    const active = sound.toggleMute();
    setIsAudioActive(active);
  };

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Insights', href: '#insights' },
    { label: 'Product Lab', href: '#product' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Studios', href: '#studios' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0b0a1a]/90 backdrop-blur-xl border border-purple-500/25 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
            : 'bg-[#0e0c24]/50 backdrop-blur-md border border-white/10'
        }`}
      >
        {/* Zone 1: Single text element wordmark with subtle brand glyph */}
        <a
          href="#"
          className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg py-1"
          onClick={() => sound.playBlip(600, 0.05)}
        >
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M12 2L2 22h20L12 2zm0 6l5 10H7l5-10z" />
            </svg>
          </span>
          <span className="font-display font-extrabold tracking-tight text-xl bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent group-hover:to-purple-300 transition-colors">
            AETHERIA
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => sound.playBlip(480, 0.04)}
              className="relative hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-purple-400 after:to-cyan-400 hover:after:w-full after:transition-all after:duration-250"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Ambient Sound Toggle */}
          <button
            onClick={handleToggleAudio}
            title={isAudioActive ? 'Mute ambient soundscape' : 'Enable ambient soundscape'}
            aria-label={isAudioActive ? 'Mute ambient audio' : 'Enable ambient audio'}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            {isAudioActive ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span className="hidden sm:inline text-cyan-300">AUDIO ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
                <span className="hidden sm:inline text-neutral-400">AUDIO</span>
              </>
            )}
          </button>

          {/* WhatsApp Direct CTA */}
          <button
            onClick={() => {
              sound.playLaser();
              onOpenWhatsAppModal();
            }}
            className="group flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500 hover:text-neutral-950 transition-all duration-200 shadow-[0_0_15px_rgba(16,185,129,0.15)] active:scale-95 whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current text-emerald-400 group-hover:text-neutral-950 transition-colors" />
            <span>WhatsApp Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 hidden sm:inline opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => {
              sound.playBlip(400, 0.05);
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-full text-neutral-300 hover:text-white bg-white/5 border border-white/10"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl bg-[#0d0c22]/95 backdrop-blur-2xl border border-purple-500/30 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  sound.playBlip(500, 0.04);
                  setIsMobileMenuOpen(false);
                }}
                className="px-3 py-2 text-base font-medium text-neutral-200 hover:text-purple-300 hover:bg-purple-950/40 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenWhatsAppModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-emerald-500 text-neutral-950 hover:bg-emerald-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                Chat on WhatsApp
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

```

---

## File: `/src/components/HeroSection.tsx`

```typescript
import React, { useState } from 'react';
import { Play, Sparkles, ChevronDown, Activity, Cpu, ShieldCheck } from 'lucide-react';
import { HeroSceneArtwork } from './ArtworkElements';
import { sound } from '../utils/audio';

interface HeroSectionProps {
  onOpenReel: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenReel }) => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background cyber grid & radiant light fields */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[250px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Subtitle & Category Kicker */}
        <div className="flex items-center gap-3 text-xs sm:text-sm font-mono text-purple-300 mb-4 tracking-wider">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="uppercase font-semibold">Creative Technology & Interactive Worlds Studio</span>
          <span aria-hidden="true" className="text-neutral-600">/</span>
          <span className="text-neutral-400 hidden sm:inline">Tokyo · London · Los Angeles</span>
        </div>

        {/* Hero Title Lockup inspired by ELIXIR typography */}
        <div className="relative mb-6">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.9] text-white">
            <span className="block bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
              AETHERIA
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-neutral-300 max-w-3xl font-light leading-relaxed text-balance">
            We architect cinematic gaming realities and neural biometric engines that adapt digital worlds to human emotion.
          </p>
        </div>

        {/* CTAs and Interaction Points */}
        <div className="flex flex-wrap items-center gap-4 pt-2 pb-10">
          <button
            onClick={() => {
              sound.playLaser();
              onOpenReel();
            }}
            className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-full font-semibold text-sm text-neutral-950 bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-400 hover:opacity-95 transition-all shadow-[0_0_30px_rgba(168,85,247,0.35)] active:scale-95"
          >
            <span className="w-6 h-6 rounded-full bg-neutral-950/20 flex items-center justify-center">
              <Play className="w-3.5 h-3.5 fill-current text-neutral-950 ml-0.5" />
            </span>
            <span>Launch Studio Reel 2026</span>
          </button>

          <a
            href="#how-it-works"
            onClick={() => sound.playBlip(500, 0.05)}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/40 transition-all"
          >
            <span>Explore Architecture</span>
            <ChevronDown className="w-4 h-4 text-purple-400 animate-bounce" />
          </a>
        </div>

        {/* Marquee Key Art Graphic Composition (Warrior vs Cyber-Phoenix) */}
        <div className="relative mt-2">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 via-cyan-500/20 to-pink-500/30 rounded-3xl blur-xl opacity-75" />
          <HeroSceneArtwork />

          {/* Floating Telemetry Markers */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#080718]/80 backdrop-blur-md border border-white/10 text-xs font-mono text-neutral-300 z-20">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>RUNTIME: <strong className="text-white">UNREAL 5.5 + WEBGPU</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-purple-400" />
              <span>BIOMETRIC LATENCY: <strong className="text-emerald-400 tabular-nums">0.8ms</strong></span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-pink-400" />
              <span>COMMERCIAL PROJECTS: <strong className="text-white">42 SHIPPED</strong></span>
            </div>
          </div>
        </div>

        {/* Adjacency Proof Section: Real metrics from shipped titles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-8 border-t border-white/10 text-left">
          <div>
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-white tabular-nums tracking-tight">
              42M+
            </div>
            <div className="text-xs text-neutral-400 mt-1">Global Players Engaged</div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-cyan-400 tabular-nums tracking-tight">
              99.4%
            </div>
            <div className="text-xs text-neutral-400 mt-1">Biometric Immersion Fidelity</div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-purple-400 tabular-nums tracking-tight">
              18
            </div>
            <div className="text-xs text-neutral-400 mt-1">AAA & Indie Industry Laurels</div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-pink-400 tabular-nums tracking-tight">
              3
            </div>
            <div className="text-xs text-neutral-400 mt-1">Global Labs (TYO / LDN / LAX)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

```

---

## File: `/src/components/HowItWorksSection.tsx`

```typescript
import React, { useState, useEffect } from 'react';
import { Play, Pause, Gamepad2, Sliders, Zap, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/audio';

export const HowItWorksSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [difficultyMode, setDifficultyMode] = useState<'adaptive' | 'hardcore' | 'relaxed'>('adaptive');
  const [hapticLevel, setHapticLevel] = useState<number>(85);
  const [score, setScore] = useState(14820);
  const [playerX, setPlayerX] = useState(20);
  const [playerY, setPlayerY] = useState(0);

  // Live simulation tick when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setScore((prev) => prev + 15);
      setPlayerX((prev) => (prev > 80 ? 10 : prev + 2));
      // periodic jump simulation
      if (Math.random() > 0.7) {
        setPlayerY(25);
        setTimeout(() => setPlayerY(0), 400);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    sound.playBlip(isPlaying ? 350 : 650, 0.08);
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 bg-[#09081a] border-t border-b border-purple-500/20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 cyber-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with stylized logo pill */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-purple-300 bg-purple-950/60 border border-purple-500/40 mb-4 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <Gamepad2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Engine</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            HOW IT WORKS
          </h2>

          <p className="mt-3 text-lg sm:text-xl font-medium text-purple-300/90">
            Helping to Create Better Gaming Experiences
          </p>

          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed text-balance">
            Most games operate on static difficulty curves. Our engine constantly monitors player neurological focus, cardiovascular state, and input timing to dynamically adjust enemy behaviors, puzzle clarity, and emotional pacing before frustration sets in.
          </p>
        </div>

        {/* The Central Gaming Terminal Screen & Controller Rig (Inspired by frame 00:01 - 00:02) */}
        <div className="max-w-4xl mx-auto relative">
          {/* Decorative Lab Technologists / Gamers Silhouette Artwork */}
          <div className="relative rounded-2xl p-4 sm:p-8 bg-[#0d0c24] border border-purple-500/30 shadow-[0_0_50px_rgba(79,70,229,0.15)]">
            
            {/* Top Monitor Bar with Status Lights & Window Controls */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 font-medium text-white hidden sm:inline">AETHERIA-GAME-KERNEL // BUILD 5.5.2</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`} />
                  <span className={isPlaying ? 'text-emerald-400 font-semibold' : 'text-amber-400 font-semibold'}>
                    {isPlaying ? 'LIVE SIMULATION' : 'PAUSED'}
                  </span>
                </span>
                <span className="text-neutral-500 hidden sm:inline">|</span>
                <span className="tabular-nums hidden sm:inline">120 FPS // 0.8ms V-SYNC</span>
              </div>
            </div>

            {/* The Main Gameplay Screen Display */}
            <div className="relative aspect-[16/9] w-full bg-[#050510] rounded-xl overflow-hidden border border-white/15 shadow-inner">
              <div className="absolute inset-0 scanlines opacity-30 z-20 pointer-events-none" />

              {/* Game Viewport Canvas / Animation */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#181135] via-[#0f0c24] to-[#080718] p-6 flex flex-col justify-between z-10">
                {/* In-Game HUD overlay */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-4">
                    <div className="bg-black/60 px-3 py-1 rounded border border-white/10 text-white">
                      SCORE: <span className="text-cyan-400 font-bold tabular-nums">{score.toLocaleString()}</span>
                    </div>
                    <div className="bg-black/60 px-3 py-1 rounded border border-white/10 text-white hidden sm:block">
                      FLOW: <span className="text-purple-400 font-bold">96.8%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-400">BIOMETRIC TENSION:</span>
                    <div className="w-24 sm:w-36 h-2 bg-neutral-800 rounded-full overflow-hidden border border-white/10">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-300"
                        style={{ width: `${isPlaying ? 68 : 15}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Game World: Neon Grid Horizon & Obstacles */}
                <div className="relative h-40 w-full overflow-hidden flex items-end">
                  {/* Grid floor */}
                  <div className="absolute inset-x-0 bottom-0 h-16 cyber-grid opacity-40 border-t border-purple-500/40" />

                  {/* Cyber Runner Character */}
                  <div
                    className="absolute transition-all duration-150"
                    style={{
                      left: `${playerX}%`,
                      bottom: `${playerY + 12}px`,
                    }}
                  >
                    <div className="w-9 h-14 bg-gradient-to-t from-cyan-500 to-purple-400 rounded-t-lg relative shadow-[0_0_20px_rgba(6,182,212,0.8)] flex items-center justify-center">
                      <div className="w-6 h-2 bg-white rounded-full -mt-4 shadow-[0_0_8px_#ffffff]" />
                      <div className="absolute -bottom-2 inset-x-1 h-3 flex justify-between">
                        <div className="w-1.5 h-3 bg-cyan-300 rounded" />
                        <div className="w-1.5 h-3 bg-cyan-300 rounded" />
                      </div>
                    </div>
                  </div>

                  {/* Obstacles / Glowing Crystal Hazards */}
                  <div className="absolute right-1/4 bottom-3 w-6 h-12 bg-pink-500/80 rounded-t-md border-t-2 border-pink-300 shadow-[0_0_15px_rgba(244,63,94,0.6)]" />
                  <div className="absolute right-2/3 bottom-3 w-8 h-8 bg-purple-500/80 rotate-45 border border-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.6)]" />
                </div>

                {/* PAUSED Overlay (Matches frame 00:02 in the video!) */}
                {!isPlaying && (
                  <div className="absolute inset-0 bg-[#070614]/85 backdrop-blur-sm flex flex-col items-center justify-center z-30 animate-in fade-in duration-200">
                    <div className="px-6 py-2 rounded-xl bg-purple-950/80 border border-purple-400/50 shadow-[0_0_30px_rgba(168,85,247,0.4)] mb-3">
                      <span className="font-display font-black text-2xl sm:text-3xl tracking-widest text-white glow-purple">
                        PAUSED
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 font-mono">
                      Adaptive Telemetry Freeze · Press Resume to Test Loop
                    </p>
                  </div>
                )}
              </div>

              {/* Pause / Play Trigger Button Floating in Bottom Right */}
              <button
                onClick={togglePlay}
                className="absolute bottom-4 right-4 z-30 flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600/90 hover:bg-purple-500 text-white font-medium text-xs shadow-lg transition-transform active:scale-95"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current" />
                    <span>Pause Sim</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Resume Sim</span>
                  </>
                )}
              </button>
            </div>

            {/* Interactive Control Console Below the Screen */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs">
              {/* Difficulty Tuning Segmented Control */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-neutral-400 font-mono mb-2 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-purple-400" />
                  <span>DIFFICULTY CURVE</span>
                </div>
                <div className="flex gap-1">
                  {(['relaxed', 'adaptive', 'hardcore'] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => {
                        sound.playBlip(550, 0.03);
                        setDifficultyMode(mode);
                      }}
                      className={`flex-1 py-1.5 px-2 rounded-md font-mono text-[11px] capitalize transition-all ${
                        difficultyMode === mode
                          ? 'bg-purple-600 text-white font-semibold shadow-sm'
                          : 'text-neutral-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              {/* Haptic Latency Slider */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-neutral-400 font-mono mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>HAPTIC FORCE</span>
                  </span>
                  <span className="text-cyan-400 font-bold tabular-nums">{hapticLevel}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={hapticLevel}
                  onChange={(e) => setHapticLevel(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Dynamic Telemetry Status */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <div className="text-neutral-400 font-mono mb-1 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-pink-400" />
                  <span>NEURAL REACTION</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-display font-bold text-lg tabular-nums">
                    {difficultyMode === 'adaptive' ? '184ms' : difficultyMode === 'hardcore' ? '142ms' : '230ms'}
                  </span>
                  <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Synchronized
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Lab Caption with Researchers */}
            <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-400 border-t border-white/5">
              <span>Dual-channel haptic controller rig connected via telemetry bus</span>
              <span className="text-purple-300 font-mono">Compatible with Unreal Engine 5 & Unity 6</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

```

---

## File: `/src/components/InsightsScannerSection.tsx`

```typescript
import React, { useState } from 'react';
import { Eye, Heart, Brain, Bone, Activity, ArrowRight, ShieldAlert, Cpu } from 'lucide-react';
import { CharacterScanGraphic } from './ArtworkElements';
import { ScannerLayer } from '../types';
import { sound } from '../utils/audio';

interface InsightsScannerProps {
  onOpenCaseStudy: () => void;
}

export const InsightsScannerSection: React.FC<InsightsScannerProps> = ({ onOpenCaseStudy }) => {
  const [scanPosition, setScanPosition] = useState<number>(38); // 0 to 100 percentage
  const [activeLayer, setActiveLayer] = useState<ScannerLayer>('bio');

  const handleSliderChange = (val: number) => {
    setScanPosition(val);
    if (Math.abs(val % 10) < 2) {
      sound.playBlip(700 + val * 3, 0.02);
    }
  };

  const layers: { id: ScannerLayer; label: string; icon: React.ReactNode; desc: string }[] = [
    {
      id: 'bio',
      label: 'Cardiovascular Core',
      icon: <Heart className="w-3.5 h-3.5 text-rose-400" />,
      desc: 'Monitors real-time heart rate variability, adrenaline surges, and micro-stress reflexes.',
    },
    {
      id: 'neural',
      label: 'Neural Synapses',
      icon: <Brain className="w-3.5 h-3.5 text-purple-400" />,
      desc: 'Tracks frontal-lobe focus index, immersion depth, and dopamine feedback loops.',
    },
    {
      id: 'skeletal',
      label: 'Kinematic Chassis',
      icon: <Bone className="w-3.5 h-3.5 text-cyan-400" />,
      desc: 'Assesses tendon tension, grip pressure, and kinetic reaction latencies.',
    },
    {
      id: 'streetwear',
      label: 'Surface Mesh',
      icon: <Eye className="w-3.5 h-3.5 text-amber-400" />,
      desc: 'High-fidelity external character modeling with responsive cloth physics.',
    },
  ];

  return (
    <section id="insights" className="relative py-24 sm:py-32 bg-[#070614] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: The Interactive X-Ray Scanner Graphic (Col 1 to 6) */}
          <div className="lg:col-span-6 flex flex-col items-center">
            {/* The Character Visual with moving scanner HUD */}
            <div className="relative w-full max-w-[440px]">
              <CharacterScanGraphic scanPosition={scanPosition} activeLayer={activeLayer} />

              {/* Interactive Vertical Slider Controls */}
              <div className="mt-4 p-4 rounded-xl bg-[#0c0a22] border border-white/10 shadow-lg">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-300 mb-2">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Activity className="w-3.5 h-3.5" />
                    <span>SCANNER APERTURE DEPTH</span>
                  </span>
                  <span className="text-white font-bold tabular-nums">{scanPosition}% Y-AXIS</span>
                </div>
                
                <input
                  type="range"
                  min="5"
                  max="85"
                  value={scanPosition}
                  onChange={(e) => handleSliderChange(Number(e.target.value))}
                  aria-label="Adjust X-Ray Scanner depth"
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />

                <div className="flex justify-between text-[10px] font-mono text-neutral-500 mt-2">
                  <span>CRANIAL / NEURAL</span>
                  <span>CARDIO / CORE</span>
                  <span>KINETIC / CHASSIS</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Copywriting & Layer Tabs (Inspired by frame 00:03 - 00:05) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 mb-4 shadow-[0_0_15px_rgba(6,182,212,0.2)] w-fit">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>Biometric Deep Analytics</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
              INSIGHTS
            </h2>

            <p className="mt-3 text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
              Our Analytics Reveal What Happens Beneath The Surface
            </p>

            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              Every video game is unique, and player emotional investment cannot be evaluated by survey sheets or simple completion rates alone. Our biometric pipeline taps directly into physiological telemetry during live playthroughs to isolate exact moments of peak arousal, cognitive overload, and boredom.
            </p>

            {/* Interactive Layer Filter Buttons */}
            <div className="mt-6 space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                Select Diagnostic Layer:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {layers.map((layer) => (
                  <button
                    key={layer.id}
                    onClick={() => {
                      sound.playBlip(600, 0.04);
                      setActiveLayer(layer.id);
                    }}
                    className={`flex items-start gap-2.5 p-3 rounded-xl border text-left transition-all ${
                      activeLayer === layer.id
                        ? 'bg-purple-900/40 border-purple-400/60 shadow-[0_0_15px_rgba(168,85,247,0.25)]'
                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="p-1 rounded-lg bg-black/40 mt-0.5">{layer.icon}</div>
                    <div>
                      <div className="text-xs font-semibold text-white">{layer.label}</div>
                      <div className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1">{layer.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Live Reading Telemetry Metrics Box */}
            <div className="mt-6 p-4 rounded-xl bg-[#0d0c24] border border-white/10 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xs text-neutral-400 font-mono">PULSE RATE</div>
                <div className="font-display font-extrabold text-xl text-rose-400 mt-0.5 tabular-nums">
                  78 BPM
                </div>
                <div className="text-[10px] text-neutral-500 font-mono">Resting delta +6</div>
              </div>
              <div className="border-x border-white/10">
                <div className="text-xs text-neutral-400 font-mono">FOCUS INDEX</div>
                <div className="font-display font-extrabold text-xl text-purple-300 mt-0.5 tabular-nums">
                  94.2%
                </div>
                <div className="text-[10px] text-emerald-400 font-mono">Zone Flow State</div>
              </div>
              <div>
                <div className="text-xs text-neutral-400 font-mono">SYNC LATENCY</div>
                <div className="font-display font-extrabold text-xl text-cyan-400 mt-0.5 tabular-nums">
                  0.8ms
                </div>
                <div className="text-[10px] text-neutral-500 font-mono">Zero perceptible lag</div>
              </div>
            </div>

            {/* CTA Buttons (Case Study & Learn More) */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  sound.playLaser();
                  onOpenCaseStudy();
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all active:scale-95"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#product"
                onClick={() => sound.playBlip(480, 0.04)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <span>Explore Lab Hardware</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

```

---

## File: `/src/components/ProductLabSection.tsx`

```typescript
import React, { useState } from 'react';
import { Cpu, Activity, Glasses, Gauge, BarChart3, Check, ArrowRight, Laptop } from 'lucide-react';
import { sound } from '../utils/audio';

interface ProductLabProps {
  onScheduleDemo: () => void;
}

export const ProductLabSection: React.FC<ProductLabProps> = ({ onScheduleDemo }) => {
  const [selectedFeature, setSelectedFeature] = useState<number>(0);

  const features = [
    {
      title: 'Neural Bio-Feedback Loop',
      metric: '0.8ms Reaction Delta',
      description: 'Maps subconscious player arousal directly to game audio stems and particle density, heightening tension during boss encounters.',
      specs: ['1000Hz Optical Sampling', 'Bluetooth LE + USB-C', 'Zero Cloud Overhead'],
    },
    {
      title: 'Foveated Gaze Heatmapping',
      metric: '99.2% Focus Precision',
      description: 'Discovers where players genuinely focus their attention in dense AAA game scenes to guide level design and navigational cues.',
      specs: ['Sub-degree Eye Tracking', 'HUD Blindspot Detection', 'Pupillometry Stress Index'],
    },
    {
      title: 'Dynamic Difficulty Modulation (DDM)',
      metric: 'Zero Player Churn',
      description: 'Dynamically scales AI enemy aggression, resource drop rates, and environmental hints without the player ever noticing manual assistance.',
      specs: ['Seamless State Injection', 'Unreal Engine 5 Plugin', 'Deterministic Anti-Cheat Safe'],
    },
    {
      title: 'Esports Fatigue Forecasting',
      metric: '35m Advanced Notice',
      description: 'Alerts competitive coaching staff before micro-tremors, reaction deterioration, and cognitive exhaustion impact tournament performance.',
      specs: ['Kinematic Muscle Jitter', 'Oxygen Saturation Trend', 'Tournament Approved'],
    },
  ];

  return (
    <section id="product" className="relative py-24 sm:py-32 bg-[#09081a] border-t border-purple-500/20 overflow-hidden">
      {/* Background cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-pink-300 bg-pink-950/60 border border-pink-500/40 mb-4 shadow-[0_0_15px_rgba(244,63,94,0.2)]">
            <Cpu className="w-3.5 h-3.5 text-pink-400" />
            <span>Telemetry Hardware & SDK</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            PRODUCT LAB
          </h2>

          <p className="mt-3 text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Our AI Tracks User Metrics From Real World To Game
          </p>

          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl">
            A turnkey hardware sensor kit and native C++ game engine plugin that bridges biological reality with interactive entertainment.
          </p>
        </div>

        {/* Two-Column Lab Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Column 1: Feature Selectors (Col 1 to 5) */}
          <div className="lg:col-span-5 space-y-3">
            {features.map((feat, index) => (
              <div
                key={feat.title}
                onClick={() => {
                  sound.playBlip(500 + index * 50, 0.03);
                  setSelectedFeature(index);
                }}
                className={`p-5 rounded-2xl cursor-pointer transition-all duration-200 border ${
                  selectedFeature === index
                    ? 'bg-[#120f2e] border-purple-400/60 shadow-[0_0_25px_rgba(168,85,247,0.2)]'
                    : 'bg-[#0d0c22]/60 border-white/5 hover:bg-white/5 hover:border-white/15'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-base sm:text-lg text-white">
                    {feat.title}
                  </h3>
                  <span className="text-xs font-mono text-cyan-400 font-semibold tabular-nums">
                    {feat.metric}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                  {feat.description}
                </p>
                {selectedFeature === index && (
                  <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap gap-2">
                    {feat.specs.map((spec) => (
                      <span
                        key={spec}
                        className="text-[11px] font-mono text-purple-300 flex items-center gap-1"
                      >
                        <Check className="w-3 h-3 text-cyan-400" />
                        {spec}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Column 2: Digital Twin Laboratory Stage (Inspired by frame 00:06 - 00:07) (Col 6 to 12) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-[#0c0a24] border border-purple-500/30 p-6 sm:p-8 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-neutral-400">
                <span className="text-white font-semibold">LAB STATION #04 // TOKYO CORE</span>
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  REAL-TIME BIO-TELEMETRY SYNC
                </span>
              </div>

              {/* The Lab Stage Vector Art: Pedestal + Technologists */}
              <div className="relative aspect-[16/10] my-4 rounded-xl bg-gradient-to-b from-[#141038] to-[#070614] overflow-hidden flex items-center justify-center border border-white/10">
                <svg
                  viewBox="0 0 700 440"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full object-contain"
                >
                  <defs>
                    <radialGradient id="pedestalGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                      <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                  </defs>

                  {/* Telemetry Stage Pedestal (Concentric glowing rings) */}
                  <ellipse cx="350" cy="330" rx="190" ry="55" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="6 6" />
                  <ellipse cx="350" cy="330" rx="150" ry="42" fill="#1e1845" stroke="#38bdf8" strokeWidth="3" />
                  <ellipse cx="350" cy="330" rx="100" ry="28" fill="url(#pedestalGlow)" />
                  <ellipse cx="350" cy="330" rx="60" ry="16" fill="#38bdf8" opacity="0.6" />

                  {/* Vertical Telemetry Beams */}
                  <line x1="200" y1="330" x2="200" y2="120" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 8" opacity="0.4" />
                  <line x1="500" y1="330" x2="500" y2="120" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 8" opacity="0.4" />

                  {/* Floating Holographic Diagnostic Screens around Pedestal */}
                  <g transform="translate(110, 140)">
                    <rect width="110" height="70" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" opacity="0.9" />
                    <text x="12" y="24" fill="#38bdf8" fontSize="10" fontFamily="monospace">HEART RATE</text>
                    <text x="12" y="46" fill="#ffffff" fontSize="16" fontFamily="sans-serif" fontWeight="bold">84 BPM</text>
                    <line x1="12" y1="56" x2="98" y2="56" stroke="#f43f5e" strokeWidth="2" />
                  </g>

                  <g transform="translate(480, 140)">
                    <rect width="110" height="70" rx="8" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" opacity="0.9" />
                    <text x="12" y="24" fill="#a855f7" fontSize="10" fontFamily="monospace">FLOW INDEX</text>
                    <text x="12" y="46" fill="#ffffff" fontSize="16" fontFamily="sans-serif" fontWeight="bold">94.8%</text>
                    <line x1="12" y1="56" x2="98" y2="56" stroke="#38bdf8" strokeWidth="2" />
                  </g>

                  {/* Character on Pedestal */}
                  <g id="pedestalCharacter">
                    <ellipse cx="350" cy="328" rx="40" ry="10" fill="#000000" opacity="0.5" />
                    {/* Character Body in streetwear */}
                    <rect x="335" y="200" width="30" height="70" rx="6" fill="#f43f5e" stroke="#fda4af" strokeWidth="1" />
                    <path d="M 338 270 L 332 325 M 362 270 L 368 325" stroke="#1e1b4b" strokeWidth="8" strokeLinecap="round" />
                    <circle cx="350" cy="180" r="16" fill="#fed7aa" />
                    {/* Pink hair */}
                    <path d="M 336 180 C 330 160 340 150 350 150 C 360 150 370 160 364 180 Z" fill="#ec4899" />
                    {/* Handheld VR controller */}
                    <circle cx="320" cy="230" r="8" fill="#38bdf8" />
                  </g>

                  {/* Technologist 1 (Left, Lab Coat holding tablet) */}
                  <g id="scientistLeft">
                    <rect x="180" y="240" width="36" height="85" rx="8" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
                    <circle cx="198" cy="222" r="14" fill="#fed7aa" />
                    <rect x="185" y="325" width="10" height="40" fill="#1e293b" />
                    <rect x="201" y="325" width="10" height="40" fill="#1e293b" />
                    {/* Glowing tablet */}
                    <rect x="205" y="260" width="28" height="20" rx="3" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />
                  </g>

                  {/* Technologist 2 (Right, Lab Coat analyzing screen) */}
                  <g id="scientistRight">
                    <rect x="480" y="240" width="36" height="85" rx="8" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
                    <circle cx="498" cy="222" r="14" fill="#fed7aa" />
                    <rect x="485" y="325" width="10" height="40" fill="#1e293b" />
                    <rect x="501" y="325" width="10" height="40" fill="#1e293b" />
                    {/* Hologram tablet */}
                    <rect x="465" y="260" width="28" height="20" rx="3" fill="#a855f7" stroke="#ffffff" strokeWidth="1.5" />
                  </g>
                </svg>
              </div>

              {/* Lab Footer Actions */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-neutral-400">
                  Hardware Developer Kits shipping worldwide with pre-certified FCC & CE telemetry.
                </div>
                <button
                  onClick={() => {
                    sound.playLaser();
                    onScheduleDemo();
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs bg-cyan-400 hover:bg-cyan-300 text-neutral-950 transition-all shadow-md active:scale-95"
                >
                  <span>Request Hardware SDK Kit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

```

---

## File: `/src/components/ShowcaseGallerySection.tsx`

```typescript
import React, { useState } from 'react';
import { Project } from '../types';
import { ExternalLink, Layers, Sparkles, ChevronRight, Eye } from 'lucide-react';
import { sound } from '../utils/audio';

const projects: Project[] = [
  {
    id: 'chronoblade',
    title: 'ChronoBlade: Astral Divide',
    category: 'game-direction',
    categoryLabel: 'AAA Game Direction',
    year: '2026',
    tagline: 'Cyber-Samurai Action RPG with Real-Time Synaptic Pacing',
    description: 'A dark neo-Tokyo dystopian thriller where player adrenaline directly dictates combat speed, particle distortion, and enemy parry windows via biometric input.',
    metrics: [
      { label: 'Global Players', value: '4.2M' },
      { label: 'Combat Satisfaction', value: '98%' },
      { label: 'Engine Runtime', value: 'UE 5.5' },
    ],
    tags: ['Unreal Engine 5.5', 'Biometric DDM', 'Ray-Traced Audio'],
    accentColor: '#38bdf8',
    featured: true,
  },
  {
    id: 'nebuladrift',
    title: 'Nebula Drift: Hyperion',
    category: 'realtime-3d',
    categoryLabel: 'Realtime 3D Engine',
    year: '2025',
    tagline: 'Anti-Gravity Quantum Racing across Shattered Moons',
    description: 'Ultra-fast 240Hz physics engine featuring procedurally shifting cosmic courses that respond to the collective heartbeat of 16 networked competitors.',
    metrics: [
      { label: 'Peak Concurrency', value: '180K' },
      { label: 'Frame Pacing', value: '0.4ms' },
      { label: 'Award', value: 'GDC Tech Best' },
    ],
    tags: ['Custom C++ Physics', 'WebGPU', 'Haptic Spatial'],
    accentColor: '#ec4899',
    featured: true,
  },
  {
    id: 'sovereign',
    title: 'Aetheria: Sovereign Realms',
    category: 'biometric-ai',
    categoryLabel: 'Biometric AI Engine',
    year: '2026',
    tagline: 'Adaptive Living Ecosystem Powered by Neural Feedback',
    description: 'A mythical open-world MMORPG where wildlife, weather patterns, and mystical deities dynamically morph their mood based on player facial valence and stress telemetry.',
    metrics: [
      { label: 'Immersion Rating', value: '99.1%' },
      { label: 'AI NPC Trees', value: '12,000+' },
      { label: 'Telemetry Stream', value: '1.2GB/s' },
    ],
    tags: ['Spatial XR', 'Neural Agents', 'Dynamic Weather'],
    accentColor: '#a855f7',
    featured: false,
  },
  {
    id: 'valkyrie',
    title: 'Valkyrie Zero: Phantom Protocol',
    category: 'virtual-production',
    categoryLabel: 'Virtual Production',
    year: '2025',
    tagline: 'In-Camera VFX & Spatial Capture for Interactive Cinema',
    description: 'Engineered high-speed virtual camera tracking and LED stage spatial synchronization for a groundbreaking interactive psychological thriller.',
    metrics: [
      { label: 'Latency', value: '< 2 Frames' },
      { label: 'LED Volume', value: '360° Curve' },
      { label: 'Color Depth', value: '12-bit HDR' },
    ],
    tags: ['OptiTrack MoCap', 'LED Volumes', 'Live Shading'],
    accentColor: '#10b981',
    featured: false,
  },
];

interface ShowcaseGalleryProps {
  onSelectProject: (project: Project) => void;
}

export const ShowcaseGallerySection: React.FC<ShowcaseGalleryProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="showcase" className="relative py-24 sm:py-32 bg-[#070614] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
              FLAGSHIP ARCHITECTURE & PORTFOLIO
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
              PROVING GROUNDS
            </h2>
            <p className="mt-3 text-neutral-400 max-w-xl text-sm sm:text-base leading-relaxed">
              Curated AAA game direction, real-time spatial engines, and interactive telemetry deployed across international gaming franchises.
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional buttons with active states) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#0e0c24] rounded-xl border border-white/10 w-fit">
            {[
              { id: 'all', label: 'All Realities' },
              { id: 'game-direction', label: 'Game Direction' },
              { id: 'realtime-3d', label: 'Realtime 3D' },
              { id: 'biometric-ai', label: 'Biometric AI' },
              { id: 'virtual-production', label: 'Virtual Prod' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  sound.playBlip(520, 0.03);
                  setActiveFilter(tab.id);
                }}
                className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === tab.id
                    ? 'bg-purple-600 text-white font-semibold shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                sound.playLaser();
                onSelectProject(project);
              }}
              className="group relative rounded-2xl bg-[#0c0a22] border border-white/10 hover:border-purple-500/50 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]"
            >
              {/* Media Preview Stage with Dynamic Cinematic Art & HUD */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#070614] border-b border-white/10">
                {/* Visual artwork simulation for each project */}
                {project.id === 'chronoblade' && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0a081e] via-[#1a1438] to-[#2a1348] flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 cyber-grid opacity-30" />
                    {/* Glowing Blade Graphic */}
                    <svg viewBox="0 0 400 200" className="w-full h-full max-h-48 drop-shadow-[0_0_20px_#38bdf8]">
                      <line x1="50" y1="160" x2="350" y2="40" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" />
                      <line x1="50" y1="160" x2="350" y2="40" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="200" cy="100" r="30" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 6" fill="none" />
                      <circle cx="200" cy="100" r="6" fill="#38bdf8" />
                    </svg>
                  </div>
                )}

                {project.id === 'nebuladrift' && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#12071f] via-[#220a32] to-[#3b0844] flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 cyber-dots opacity-40" />
                    {/* Speed racer contour vector */}
                    <svg viewBox="0 0 400 200" className="w-full h-full max-h-48 drop-shadow-[0_0_20px_#ec4899]">
                      <path d="M 60 120 L 180 80 L 320 85 L 360 100 L 260 130 Z" fill="#ec4899" opacity="0.8" />
                      <line x1="20" y1="130" x2="260" y2="130" stroke="#ffffff" strokeWidth="3" strokeDasharray="10 8" />
                      <circle cx="340" cy="95" r="15" fill="#f43f5e" />
                    </svg>
                  </div>
                )}

                {project.id === 'sovereign' && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#080c1f] via-[#101b3b] to-[#1e144a] flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 cyber-grid opacity-30" />
                    {/* Mythical Rune & Portal */}
                    <svg viewBox="0 0 400 200" className="w-full h-full max-h-48 drop-shadow-[0_0_25px_#a855f7]">
                      <circle cx="200" cy="100" r="60" stroke="#a855f7" strokeWidth="3" fill="none" strokeDasharray="8 6" />
                      <polygon points="200,50 240,120 160,120" stroke="#38bdf8" strokeWidth="2" fill="none" />
                      <circle cx="200" cy="100" r="12" fill="#c084fc" />
                    </svg>
                  </div>
                )}

                {project.id === 'valkyrie' && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#041619] via-[#082a2f] to-[#0d1f3b] flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 cyber-grid opacity-30" />
                    {/* Spatial Capture Mesh */}
                    <svg viewBox="0 0 400 200" className="w-full h-full max-h-48 drop-shadow-[0_0_20px_#10b981]">
                      <rect x="120" y="40" width="160" height="120" stroke="#10b981" strokeWidth="2" fill="none" strokeDasharray="6 4" />
                      <circle cx="200" cy="100" r="35" stroke="#34d399" strokeWidth="2" fill="none" />
                      <line x1="80" y1="100" x2="320" y2="100" stroke="#10b981" strokeWidth="1" />
                    </svg>
                  </div>
                )}

                {/* Top Corner Unboxed Metadata (Zero pills, clean typography) */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-neutral-300 z-20">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10">
                    <span>{project.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-white font-semibold">{project.year}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>
              </div>

              {/* Card Content & Proof Adjacency */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-xs sm:text-sm font-medium text-cyan-300 mt-1">
                    {project.tagline}
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Quantified Impact Metrics (Tabular figures) */}
                <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-white/10 text-left">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display font-bold text-lg sm:text-xl text-white tabular-nums tracking-tight">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-neutral-500 font-mono mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Unboxed Tagline Row + Action affordance */}
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-neutral-400 font-mono">
                    {project.tags.map((t, idx) => (
                      <React.Fragment key={t}>
                        <span>{t}</span>
                        {idx < project.tags.length - 1 && <span aria-hidden="true">/</span>}
                      </React.Fragment>
                    ))}
                  </div>
                  <span className="text-purple-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold">
                    Inspect Architecture <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

```

---

## File: `/src/components/WhatsAppCTASection.tsx`

```typescript
import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

export const WhatsAppCTASection: React.FC = () => {
  const [projectScope, setProjectScope] = useState<string>('Biometric SDK Integration');
  const [platform, setPlatform] = useState<string>('PC / Console (Unreal 5)');
  const [studioName, setStudioName] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const whatsappNumber = '15550198374'; // Standard studio international contact line

  const buildWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello AETHERIA Studio! 👋\n\nI would like to discuss a project inquiry:\n- Studio / Team: ${
        studioName || 'Confidential Studio'
      }\n- Scope: ${projectScope}\n- Target Platform: ${platform}\n\nPlease let us know your current availability for a discovery session.`
    );
    return `https://wa.me/${whatsappNumber}?text=${text}`;
  };

  const handleLaunchWhatsApp = () => {
    sound.playLaser();
    window.open(buildWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = () => {
    sound.playBlip(600, 0.05);
    navigator.clipboard.writeText(buildWhatsAppUrl());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#09081a] border-t border-purple-500/20 overflow-hidden">
      {/* Radiant Glow Behind CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-emerald-600/10 via-purple-600/15 to-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-[#110f2d] to-[#0a091d] border border-purple-500/30 p-8 sm:p-12 lg:p-16 shadow-[0_0_80px_rgba(168,85,247,0.15)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Direct Agency Offer & Value Proposition */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 mb-4">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Direct Studio Access · WhatsApp Hotline</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
                Ready to Architect Your Next World?
              </h2>

              <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
                Connect directly with our Executive Creative Directors and Lead Engine Technologists via verified WhatsApp for zero-friction project scoping, NDA signing, and technical feasibility evaluations.
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Guaranteed 2-hour response window for verified publisher inquiries</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Direct technical dialogue with principal engineers, not sales reps</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <Sparkles className="w-5 h-5 text-purple-400 shrink-0" />
                  <span>Complimentary architecture review and hardware SDK allocation</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleLaunchWhatsApp}
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-bold text-sm bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-[0_0_30px_rgba(16,185,129,0.35)] transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Launch WhatsApp Direct Chat</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleCopyLink}
                  className="px-5 py-4 rounded-full font-medium text-xs text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  {copied ? 'Link Copied to Clipboard!' : 'Copy Direct Chat Link'}
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Brief Builder */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#080718] border border-white/10 shadow-inner">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <h3 className="font-display font-bold text-lg text-white">
                    Instant Project Brief Builder
                  </h3>
                  <span className="text-[11px] font-mono text-emerald-400 uppercase">
                    Auto-Formatted
                  </span>
                </div>

                <div className="mt-5 space-y-4 text-xs">
                  {/* Studio / Publisher Name */}
                  <div>
                    <label className="block text-neutral-400 font-mono mb-1.5">
                      STUDIO / PRODUCTION COMPANY
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Horizon Interactive / Riot Labs"
                      value={studioName}
                      onChange={(e) => setStudioName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>

                  {/* Primary Scope Selector */}
                  <div>
                    <label className="block text-neutral-400 font-mono mb-1.5">
                      PRIMARY SERVICE SCOPE
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        'Biometric SDK Integration',
                        'AAA Game Direction',
                        'Real-Time 3D World',
                        'Virtual Production / MoCap',
                      ].map((item) => (
                        <button
                          key={item}
                          onClick={() => {
                            sound.playBlip(540, 0.02);
                            setProjectScope(item);
                          }}
                          className={`p-2.5 rounded-xl border text-left font-medium transition-all ${
                            projectScope === item
                              ? 'bg-purple-600/30 border-purple-400 text-white shadow-sm'
                              : 'bg-white/5 border-white/5 text-neutral-400 hover:text-white'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Target Platform */}
                  <div>
                    <label className="block text-neutral-400 font-mono mb-1.5">
                      ENGINE & TARGET PLATFORM
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        'PC / Console (Unreal 5)',
                        'Spatial XR / VisionOS',
                        'Custom WebGPU / Mobile',
                      ].map((plat) => (
                        <button
                          key={plat}
                          onClick={() => {
                            sound.playBlip(560, 0.02);
                            setPlatform(plat);
                          }}
                          className={`p-2 rounded-xl border text-center font-medium transition-all text-[11px] ${
                            platform === plat
                              ? 'bg-cyan-600/30 border-cyan-400 text-white'
                              : 'bg-white/5 border-white/5 text-neutral-400 hover:text-white'
                          }`}
                        >
                          {plat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Preview Box */}
                  <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 font-mono text-[11px] text-neutral-300">
                    <div className="text-neutral-500 mb-1">Generated WhatsApp payload:</div>
                    <p className="line-clamp-2 italic text-neutral-400">
                      &quot;Inquiry for {studioName || 'Confidential Studio'}: {projectScope} on {platform}&quot;
                    </p>
                  </div>

                  {/* Send Button */}
                  <button
                    onClick={handleLaunchWhatsApp}
                    className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-400 hover:opacity-95 text-neutral-950 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Brief to WhatsApp Hotline</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

```

---

## File: `/src/components/StudioLocationsSection.tsx`

```typescript
import React, { useState, useEffect } from 'react';
import { StudioLocation } from '../types';
import { MapPin, Clock, Globe2, Mail, CheckCircle2, Send, PhoneCall } from 'lucide-react';
import { sound } from '../utils/audio';

const studios: StudioLocation[] = [
  {
    city: 'Tokyo',
    country: 'Japan',
    district: 'Shibuya Crossing Tech Hub, Minato-ku',
    timezone: 'Asia/Tokyo',
    coordinates: '35.6580° N, 139.7016° E',
    status: 'Active Lab',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    district: 'Shoreditch Creative Quarter, EC2A',
    timezone: 'Europe/London',
    coordinates: '51.5229° N, 0.0777° W',
    status: 'Creative HQ',
  },
  {
    city: 'Los Angeles',
    country: 'United States',
    district: 'Arts District Stage 4, Santa Fe Ave',
    timezone: 'America/Los_Angeles',
    coordinates: '34.0407° N, 118.2468° W',
    status: 'Motion Capture',
  },
];

export const StudioLocationsSection: React.FC = () => {
  const [selectedStudio, setSelectedStudio] = useState<StudioLocation>(studios[0]);
  const [times, setTimes] = useState<{ [key: string]: string }>({});
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Update real live studio clocks
  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      const updated: { [key: string]: string } = {};
      studios.forEach((s) => {
        updated[s.city] = new Intl.DateTimeFormat('en-US', {
          timeZone: s.timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now);
      });
      setTimes(updated);
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playLaser();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="studios" className="relative py-24 sm:py-32 bg-[#070614] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-purple-300 bg-purple-950/60 border border-purple-500/40 mb-4">
            <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Worldwide Studio Network</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            GLOBAL LABS & CONTACT
          </h2>

          <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Collaborating across physical timezones with fully outfitted biometric testing rigs, virtual production LED stages, and spatial audio mastering suites.
          </p>
        </div>

        {/* Global Studio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {studios.map((studio) => {
            const isSelected = selectedStudio.city === studio.city;
            return (
              <div
                key={studio.city}
                onClick={() => {
                  sound.playBlip(540, 0.03);
                  setSelectedStudio(studio);
                }}
                className={`p-6 sm:p-8 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#120f2e] border-cyan-400/60 shadow-[0_0_30px_rgba(6,182,212,0.2)]'
                    : 'bg-[#0c0a22] border-white/10 hover:border-white/20 hover:bg-[#0e0c28]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-4">
                    <span className="text-cyan-400 flex items-center gap-1.5 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      {studio.status}
                    </span>
                    <span className="text-neutral-400 font-bold tabular-nums">
                      {times[studio.city] || '--:--:--'}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl text-white">
                    {studio.city}
                  </h3>
                  <div className="text-sm font-medium text-purple-300 mt-0.5">
                    {studio.country}
                  </div>

                  <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
                    {studio.district}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span>{studio.coordinates}</span>
                  <span className="text-cyan-300">Inspect Node</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio Consultation Contact Form */}
        <div className="rounded-2xl bg-[#0c0a22] border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Direct Inquiries Info */}
            <div className="lg:col-span-5">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                SCHEDULE A LAB VISIT OR CALL
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                Initiate Confidential Discovery
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Whether you need turnkey creative direction for an upcoming AAA franchise or want to test your prototype on our Tokyo biometric rig, our partners are ready to review your technical specs.
              </p>

              <div className="mt-6 space-y-3 text-xs text-neutral-300 font-mono">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>direct@aetheria.studio</span>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Concierge: +1 (555) 019-8374</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-pink-400" />
                  <span>Selected Node: {selectedStudio.city} ({selectedStudio.coordinates})</span>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Form */}
            <div className="lg:col-span-7">
              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-purple-950/40 border border-purple-400/50 text-center animate-in fade-in duration-300">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3 animate-bounce" />
                  <h4 className="font-display font-bold text-xl text-white">
                    Transmission Received
                  </h4>
                  <p className="text-xs text-neutral-300 mt-2 max-w-md mx-auto">
                    Your discovery request has been routed to the {selectedStudio.city} studio lead. We will respond within 2 hours during active lab hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-full text-xs font-mono bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 mb-1">
                        YOUR NAME / TITLE
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Kenji Sato, Creative Director"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 mb-1">
                        WORK EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@publisher.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">
                      PROJECT PARAMETERS & TECHNICAL INQUIRY
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Outline target engine, platform, estimated timeframe, and key objectives..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] font-mono text-neutral-500">
                      Protected by standard mutual NDA protocol.
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 text-white shadow-lg active:scale-95 transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Request</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

```

---

## File: `/src/components/ProjectModal.tsx`

```typescript
import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, Check, MessageSquare, ArrowUpRight, Cpu, Layers } from 'lucide-react';
import { sound } from '../utils/audio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenWhatsApp: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenWhatsApp,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0c0a24] border border-purple-500/40 shadow-[0_0_80px_rgba(168,85,247,0.3)] p-6 sm:p-10 text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            sound.playBlip(400, 0.04);
            onClose();
          }}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
          <span>{project.categoryLabel}</span>
          <span aria-hidden="true">·</span>
          <span>Shipped {project.year}</span>
          <span aria-hidden="true">·</span>
          <span className="text-purple-400">Classified Case Study</span>
        </div>

        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          {project.title}
        </h2>

        <p className="mt-2 text-base sm:text-xl font-medium text-purple-300">
          {project.tagline}
        </p>

        {/* Visual Showcase Stage inside modal */}
        <div className="my-6 rounded-2xl aspect-[16/8] bg-gradient-to-tr from-[#08061a] via-[#161238] to-[#251042] border border-white/10 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-30" />
          <div className="relative z-10 text-center p-6">
            <Cpu className="w-12 h-12 text-cyan-400 mx-auto mb-3 animate-pulse" />
            <div className="font-display font-bold text-lg text-white">
              Interactive Runtime Telemetry Active
            </div>
            <div className="text-xs font-mono text-neutral-400 mt-1">
              Zero-latency neural pipeline integrated with Unreal Engine 5.5
            </div>
          </div>
        </div>

        {/* Architectural Overview */}
        <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
          <h3 className="font-display font-bold text-lg text-white">
            Architecture & Creative Strategy
          </h3>
          <p>{project.description}</p>
          <p>
            By integrating real-time bio-sensors into the game's core loop, the system dynamically scales enemy behavioral state machines, modulates volumetric fog density, and alters spatial auditory stems according to player autonomic stress.
          </p>
        </div>

        {/* Metrics Box */}
        <div className="my-6 p-6 rounded-2xl bg-white/5 border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <div className="text-xs text-neutral-400 font-mono">{m.label}</div>
              <div className="font-display font-black text-2xl sm:text-3xl text-white mt-1 tabular-nums">
                {m.value}
              </div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-mono text-purple-300 bg-purple-950/60 border border-purple-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-mono text-neutral-500">
            Confidential Client IP · Certified by AETHERIA Labs
          </span>

          <button
            onClick={() => {
              onClose();
              onOpenWhatsApp();
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-lg active:scale-95 transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Discuss Similar Architecture on WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

```

---

## File: `/src/components/ReelModal.tsx`

```typescript
import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, SkipForward } from 'lucide-react';
import { sound } from '../utils/audio';

interface ReelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReelModal: React.FC<ReelModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [progress, setProgress] = useState(35);

  const chapters = [
    { title: 'Neural Biometrics in Unreal Engine 5.5', duration: '0:45' },
    { title: 'Zero-G 240Hz High Speed Physics', duration: '1:12' },
    { title: 'Adaptive Open World Ecosystems', duration: '0:58' },
    { title: 'In-Camera VFX & LED Stage Integration', duration: '1:30' },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Simulated progress
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 200);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl rounded-3xl bg-[#09081a] border border-purple-500/40 shadow-[0_0_100px_rgba(168,85,247,0.35)] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0d0c24] border-b border-white/10 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping inline-block" />
            <span className="text-white font-bold tracking-wider">AETHERIA STUDIO REEL 2026 // 4K 60FPS</span>
          </div>
          <button
            onClick={() => {
              sound.playBlip(400, 0.04);
              onClose();
            }}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Cinematic Video Player Screen */}
        <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 scanlines opacity-25 pointer-events-none z-20" />

          {/* Animated Cinematic Canvas */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0520] via-[#1a0f3d] to-[#2c0d4a] flex items-center justify-center">
            {/* Dynamic Soundwave Bars Simulation */}
            <div className="flex items-center gap-1.5 h-32 opacity-75">
              {[40, 75, 20, 95, 60, 85, 30, 90, 65, 45, 80, 50, 90, 70, 35, 85].map((h, i) => (
                <div
                  key={i}
                  className="w-2.5 bg-gradient-to-t from-cyan-400 via-purple-500 to-pink-500 rounded-full transition-all duration-150"
                  style={{
                    height: isPlaying ? `${Math.min(100, h * (0.8 + Math.random() * 0.4))}%` : '20%',
                  }}
                />
              ))}
            </div>

            {/* Chapter Overlay */}
            <div className="absolute bottom-16 inset-x-8 text-left z-20">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                CHAPTER {currentChapter + 1} OF 4
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
                {chapters[currentChapter].title}
              </h3>
            </div>
          </div>

          {/* Center Play/Pause button on screen hover */}
          <button
            onClick={() => {
              sound.playBlip(isPlaying ? 300 : 600, 0.05);
              setIsPlaying(!isPlaying);
            }}
            className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:scale-110 transition-transform z-30 shadow-2xl"
          >
            {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
          </button>
        </div>

        {/* Video Scrubber & Controls */}
        <div className="p-4 sm:p-6 bg-[#0c0a22] border-t border-white/10">
          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden mb-4 cursor-pointer">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-white hover:text-cyan-400 transition-colors font-bold"
              >
                {isPlaying ? 'PAUSE' : 'PLAY'}
              </button>
              <button
                onClick={() => {
                  sound.playBlip(650, 0.04);
                  setCurrentChapter((prev) => (prev + 1) % chapters.length);
                  setProgress(0);
                }}
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <span>NEXT CHAPTER</span>
                <SkipForward className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-4 text-neutral-400">
              <span>BITRATE: <strong className="text-white">48 Mbps RAW</strong></span>
              <span>AUDIO: <strong className="text-cyan-400">DOLBY ATMOS 7.1.4</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

```

---

## File: `/src/components/CaseStudyModal.tsx`

```typescript
import React, { useEffect } from 'react';
import { X, Activity, Brain, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { sound } from '../utils/audio';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWhatsApp: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  isOpen,
  onClose,
  onOpenWhatsApp,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0b0a22] border border-cyan-500/40 shadow-[0_0_90px_rgba(6,182,212,0.25)] p-6 sm:p-10 text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => {
            sound.playBlip(400, 0.04);
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-xs font-mono text-cyan-400 mb-2">
          BIOMETRIC RESEARCH PAPER // REPORT #B-2026-X
        </div>

        <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
          Subconscious Immersion: Decoding Player Physiology in High-Stakes Gaming
        </h2>

        <p className="mt-3 text-base sm:text-lg text-purple-300">
          How real-time heart-rate variability and pupillometry predict rage-quits 4.2 minutes prior to session termination.
        </p>

        {/* Executive Findings Grid */}
        <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-rose-400 font-mono text-xs flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5" />
              <span>CARDIAC SPIKE</span>
            </div>
            <div className="font-display font-black text-3xl text-white mt-1 tabular-nums">
              +38 BPM
            </div>
            <div className="text-xs text-neutral-400 mt-1">Average delta during sudden death rounds</div>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-purple-400 font-mono text-xs flex items-center gap-1.5">
              <Brain className="w-3.5 h-3.5" />
              <span>COGNITIVE FLOW</span>
            </div>
            <div className="font-display font-black text-3xl text-white mt-1 tabular-nums">
              96.4%
            </div>
            <div className="text-xs text-neutral-400 mt-1">Sustained immersion with adaptive pacing</div>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-cyan-400 font-mono text-xs flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5" />
              <span>CHURN REDUCTION</span>
            </div>
            <div className="font-display font-black text-3xl text-white mt-1 tabular-nums">
              -42%
            </div>
            <div className="text-xs text-neutral-400 mt-1">Player retention increase across 100K cohort</div>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <h3 className="font-display font-bold text-lg text-white">Methodology & Trial Cohort</h3>
          <p>
            During a 6-month trial across 4,200 closed-beta testers playing <em>ChronoBlade: Astral Divide</em>, our telemetry SDK intercepted micro-fluctuations in blood volume pulse (BVP) and galvanic skin conductance (GSR) paired with 240Hz gamepad force sensing.
          </p>
          <p>
            When standard algorithmic engines failed to recognize player exhaustion, the AETHERIA Dynamic Difficulty Engine smoothly lowered ambient light contrast and softened enemy attack cadences without decreasing XP yields, resulting in dramatic retention gains.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-mono text-neutral-400">
            Full 34-page whitepaper available under NDA
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenWhatsApp();
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs bg-cyan-400 hover:bg-cyan-300 text-neutral-950 transition-all active:scale-95"
          >
            <span>Request Full Research PDF via WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

```

---

## File: `/src/components/Footer.tsx`

```typescript
import React from 'react';
import { sound } from '../utils/audio';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05040d] border-t border-white/10 text-neutral-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <a
              href="#"
              onClick={() => sound.playBlip(600, 0.04)}
              className="flex items-center gap-2 mb-4 group"
            >
              <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xs">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                  <path d="M12 2L2 22h20L12 2zm0 6l5 10H7l5-10z" />
                </svg>
              </span>
              <span className="font-display font-extrabold tracking-tight text-xl text-white group-hover:text-purple-300 transition-colors">
                AETHERIA
              </span>
            </a>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              Next-generation interactive worlds, real-time gaming engines, and biological telemetry architectures for visionaries.
            </p>
            <div className="text-xs font-mono text-neutral-500 mt-4">
              TOKYO · SHIBUYA HUB / LONDON · SHOREDITCH / LOS ANGELES · ARTS DISTRICT
            </div>
          </div>

          {/* Nav Mirror 1: Architecture */}
          <div className="md:col-span-2 sm:col-span-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white mb-4">
              Architecture
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#how-it-works" className="hover:text-purple-300 transition-colors">
                  Adaptive Kernel
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-purple-300 transition-colors">
                  Biometric Scanner
                </a>
              </li>
              <li>
                <a href="#product" className="hover:text-purple-300 transition-colors">
                  Hardware Lab SDK
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-purple-300 transition-colors">
                  AAA Showcases
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Mirror 2: Studios & Labs */}
          <div className="md:col-span-2 sm:col-span-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white mb-4">
              Locations
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#studios" className="hover:text-cyan-300 transition-colors">
                  Tokyo (Minato-ku)
                </a>
              </li>
              <li>
                <a href="#studios" className="hover:text-cyan-300 transition-colors">
                  London (EC2A)
                </a>
              </li>
              <li>
                <a href="#studios" className="hover:text-cyan-300 transition-colors">
                  Los Angeles (Stage 4)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300 transition-colors">
                  Book Session
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Mirror 3: Direct Inquiry */}
          <div className="md:col-span-3 sm:col-span-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-neutral-500 block font-mono">PUBLISHER DESK</span>
                <span className="text-white">direct@aetheria.studio</span>
              </div>
              <div className="pt-2">
                <span className="text-neutral-500 block font-mono">WHATSAPP HOTLINE</span>
                <span className="text-emerald-400 font-mono">+1 (555) 019-8374</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Zero-Fluff Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} AETHERIA Studio. All international rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/aetheria-codebase.zip"
              download="aetheria-codebase.zip"
              className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors flex items-center gap-1.5"
            >
              <span>Download Full Codebase (.ZIP)</span>
            </a>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <a
              href="/aetheria-codebase.tar.gz"
              download="aetheria-codebase.tar.gz"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>Download (.TAR.GZ)</span>
            </a>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Charter</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Security & Ethics</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

```

---

## File: `/src/components/WhatsAppFloatingButton.tsx`

```typescript
import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topic, setTopic] = useState('Game Direction & Production');
  const [customMsg, setCustomMsg] = useState('');

  const handleLaunch = () => {
    sound.playLaser();
    const text = encodeURIComponent(
      `Hi AETHERIA Studio! 👋 I'm reaching out regarding: ${topic}.\n${
        customMsg ? `Note: ${customMsg}` : 'Could you share your current availability?'
      }`
    );
    window.open(`https://wa.me/15550198374?text=${text}`, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Popover Launcher Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-[#0c0a24] border border-emerald-500/40 p-5 shadow-[0_0_50px_rgba(16,185,129,0.25)] text-neutral-100 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-display font-bold text-sm text-white">WhatsApp Studio Concierge</span>
            </div>
            <button
              onClick={() => {
                sound.playBlip(400, 0.04);
                setIsOpen(false);
              }}
              className="p-1 rounded-full text-neutral-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-neutral-300 mt-3 leading-relaxed">
            Connect directly with our Tokyo & London technical directors for instantaneous scoping.
          </p>

          <div className="mt-3 space-y-2">
            <label className="text-[11px] font-mono text-neutral-400 block">SELECT INQUIRY TOPIC:</label>
            <div className="flex flex-wrap gap-1.5">
              {[
                'Game Direction & Production',
                'Biometrics SDK License',
                'Studio Lab Tour',
                'Custom XR Engine',
              ].map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    sound.playBlip(550, 0.02);
                    setTopic(t);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                    topic === t
                      ? 'bg-emerald-500 text-neutral-950 font-bold'
                      : 'bg-white/5 text-neutral-300 hover:bg-white/10'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <textarea
              rows={2}
              placeholder="Optional notes or project timeline..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="w-full mt-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-emerald-400 resize-none"
            />
          </div>

          <button
            onClick={handleLaunch}
            className="w-full mt-4 py-2.5 rounded-xl font-bold text-xs bg-emerald-500 hover:bg-emerald-400 text-neutral-950 flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Open in WhatsApp</span>
          </button>
        </div>
      )}

      {/* Floating Circle Button */}
      <button
        onClick={() => {
          sound.playBlip(isOpen ? 400 : 700, 0.04);
          setIsOpen(!isOpen);
        }}
        aria-label="Open WhatsApp Quick Chat"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300 active:scale-90"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-cyan-400 border-2 border-[#070712] animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-cyan-400 border-2 border-[#070712]" />
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6 fill-current text-neutral-950 group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
};

```

