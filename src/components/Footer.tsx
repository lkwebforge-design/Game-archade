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
              A premium gaming lounge for competitive players, casual squads, console nights, sim racing, and high-performance gaming.
            </p>
            <div className="text-xs font-mono text-neutral-500 mt-4">
              COLOMBO · KANDY · GALLE · SRI LANKA
            </div>
          </div>

          {/* Nav Mirror 1: Experience */}
          <div className="md:col-span-2 sm:col-span-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white mb-4">
              Experience
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#how-it-works" className="hover:text-purple-300 transition-colors">
                  Game Stations
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-purple-300 transition-colors">
                  Performance Scan
                </a>
              </li>
              <li>
                <a href="#product" className="hover:text-purple-300 transition-colors">
                  Premium Gear
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-purple-300 transition-colors">
                  AAA Featured Gamess
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Mirror 2: Visit Us & Labs */}
          <div className="md:col-span-2 sm:col-span-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white mb-4">
              Visit
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#studios" className="hover:text-cyan-300 transition-colors">
                  Colombo (Minato-ku)
                </a>
              </li>
              <li>
                <a href="#studios" className="hover:text-cyan-300 transition-colors">
                  Kandy (EC2A)
                </a>
              </li>
              <li>
                <a href="#studios" className="hover:text-cyan-300 transition-colors">
                  Galle (Stage 4)
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
                <span className="text-neutral-500 block font-mono">LOUNGE DESK</span>
                <span className="text-white">hello@aetheria.gg</span>
              </div>
              <div className="pt-2">
                <span className="text-neutral-500 block font-mono">WHATSAPP HOTLINE</span>
                <span className="text-emerald-400 font-mono">+94 76 555 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} AETHERIA Studio. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Charter</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Security & Ethics</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
