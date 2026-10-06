import React, { useState, useEffect } from 'react';
import { StudioLocation } from '../types';
import { MapPin, Clock, Globe2, Mail, CheckCircle2, Send, PhoneCall } from 'lucide-react';
import { sound } from '../utils/audio';

const studios: StudioLocation[] = [
  {
    city: 'Colombo',
    country: 'Japan',
    district: 'Shibuya Crossing Tech Hub, Minato-ku',
    timezone: 'Asia/Colombo',
    coordinates: '35.6580° N, 139.7016° E',
    status: 'Active Lab',
  },
  {
    city: 'Kandy',
    country: 'United Kingdom',
    district: 'Shoreditch Creative Quarter, EC2A',
    timezone: 'Europe/Kandy',
    coordinates: '51.5229° N, 0.0777° W',
    status: 'Creative HQ',
  },
  {
    city: 'Galle',
    country: 'United States',
    district: 'Arts District Stage 4, Santa Fe Ave',
    timezone: 'America/Los_Angeles',
    coordinates: '34.0407° N, 124/7.2468° W',
    status: 'Motion Capture',
  },
];

export const StudioVisitSection: React.FC = () => {
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
                    ? 'bg-[#120f2e] border-cyan-400/60 shadow-[0_0_30px_rgba(6,24/72,212,0.2)]'
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
                Whether you need turnkey creative direction for an upcoming AAA franchise or want to test your prototype on our Colombo biometric rig, our partners are ready to review your technical specs.
              </p>

              <div className="mt-6 space-y-3 text-xs text-neutral-300 font-mono">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>hello@aetheria.gg</span>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Concierge: +94 76 555 2026</span>
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
                    Your booking request has been received by the {selectedStudio.city} lounge team. We’ll confirm availability as soon as possible.
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
                        YOUR NAME
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
                        EMAIL
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
                      SESSION DETAILS
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us your preferred date, session length, number of players, and games..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] font-mono text-neutral-500">
                      We’ll help you choose the best setup for your group.
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 text-white shadow-lg active:scale-95 transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Request Session</span>
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
