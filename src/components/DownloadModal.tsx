import React, { useState } from 'react';
import { Download, FileCode, Check, Copy, X, FolderArchive, ArrowRight } from 'lucide-react';
import { sound } from '../utils/audio';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyPath = () => {
    sound.playBlip(600, 0.04);
    navigator.clipboard.writeText(`${window.location.origin}/aetheria-codebase.zip`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl rounded-3xl bg-[#0d0b24] border border-cyan-500/40 p-6 sm:p-8 text-neutral-100 shadow-[0_0_80px_rgba(6,182,212,0.3)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            sound.playBlip(400, 0.04);
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
          <FolderArchive className="w-4 h-4 text-cyan-400" />
          <span>Codebase Export Center</span>
        </div>

        <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
          Download Source Code
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          Select your preferred package format to download the complete codebase including all components, interactive SVG artwork, styles, and configurations.
        </p>

        {/* Download Options */}
        <div className="mt-6 space-y-3">
          {/* ZIP Option */}
          <a
            href="/aetheria-codebase.zip"
            download="aetheria-codebase.zip"
            onClick={() => sound.playLaser()}
            className="group flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-cyan-950/60 to-purple-950/60 border border-cyan-400/50 hover:border-cyan-300 transition-all hover:scale-[1.01] shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              </div>
              <div className="text-left">
                <div className="font-display font-bold text-base text-white flex items-center gap-2">
                  <span>Full Project ZIP Archive</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-400/20 text-cyan-300 font-semibold">
                    RECOMMENDED
                  </span>
                </div>
                <div className="text-xs text-neutral-400 font-mono mt-0.5">
                  aetheria-codebase.zip · Standard uncompressed tree
                </div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
          </a>

          {/* Tarball Option */}
          <a
            href="/aetheria-codebase.tar.gz"
            download="aetheria-codebase.tar.gz"
            onClick={() => sound.playLaser()}
            className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
                <FolderArchive className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-display font-bold text-base text-white">
                  Compressed Tarball (.tar.gz)
                </div>
                <div className="text-xs text-neutral-400 font-mono mt-0.5">
                  aetheria-codebase.tar.gz · Optimal for Linux / macOS
                </div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
          </a>

          {/* Markdown Reference Option */}
          <a
            href="/FULL_SOURCE_CODE.md"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playBlip(550, 0.03)}
            className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-400/50 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-300">
                <FileCode className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-display font-bold text-base text-white">
                  Unified Markdown Document
                </div>
                <div className="text-xs text-neutral-400 font-mono mt-0.5">
                  FULL_SOURCE_CODE.md · All files in one searchable doc
                </div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-pink-400 group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
          </a>
        </div>

        {/* Copy Direct URL */}
        <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-neutral-400">
            Direct Link to Zip:
          </span>
          <button
            onClick={handleCopyPath}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-cyan-300 hover:text-white transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Link Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Direct Download URL</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
