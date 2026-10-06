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

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} AETHERIA Studio. All international rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Charter</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Security & Ethics</a>
          </div>
        </div>\n      </div>\n    </footer>\n  );\n};\n