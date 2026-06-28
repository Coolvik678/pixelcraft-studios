"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, MapPin, Award, ArrowRight, Sparkles, CheckCircle2, HeartHandshake } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden gradient-subtle-bg">
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#0A7E8C]/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#10B981]/5 blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* 5-Star Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/80 shadow-sm mb-6">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-800 tracking-wide uppercase">
                5.0 Rated Multispeciality Clinic
              </span>
              <span className="text-xs text-slate-400 font-medium">• 41+ Verified Reviews</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.12] tracking-tight mb-6">
              Precision Care for Your <span className="bg-gradient-to-r from-[#0A7E8C] to-[#10B981] bg-clip-text text-transparent">Perfect Smile.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal">
              Experience world-class, 5.0-star rated multispeciality dental treatments in Aundh, Pune. Led by expert hands, powered by advanced technology.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#0A7E8C] to-[#075963] text-white font-bold text-base shadow-lg shadow-[#0A7E8C]/25 hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Schedule a Visit</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-300 text-slate-700 font-bold text-base hover:border-[#0A7E8C] hover:text-[#0A7E8C] transition-all flex items-center justify-center gap-2 relative overflow-hidden group"
              >
                <span>Explore Services</span>
              </a>
            </div>

            {/* Key Trust Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/70 w-full">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#0A7E8C] flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-700">100% Sterilized</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Aundh, Pune</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <Award className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Dr. Guru (MDS/BDS)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Clinic Architecture Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Geometric Framing Decor */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#0A7E8C]/20 via-[#10B981]/20 to-transparent blur-xl -z-10" />

            {/* Main Interactive Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white shadow-2xl relative overflow-hidden">
              {/* Header Badge in Card */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#10B981] flex items-center justify-center font-bold">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-slate-900">Dr. Chavhan's Suite</h4>
                    <p className="text-xs text-slate-500">Multispeciality Consultation Desk</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-[#10B981] text-[11px] font-bold">
                  Open Today
                </span>
              </div>

              {/* Clinic Desk Showcase Visual Box (Styled matching modern desk with marble & mint panels) */}
              <div className="relative rounded-xl bg-slate-900 overflow-hidden mb-6 aspect-[4/3] flex flex-col justify-between p-5 text-white group">
                {/* Background Styling mimicking marble & mint desk */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" 
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

                {/* Top Overlay Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-lg bg-white/20 backdrop-blur-md text-xs font-semibold text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-300" /> Executive Consultation Desk
                  </span>
                </div>

                {/* Bottom Card Overlay */}
                <div className="relative z-10">
                  <div className="p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
                    <div className="flex items-center justify-between text-xs font-medium text-emerald-200 mb-1">
                      <span>Modern Mint & Marble Interior</span>
                      <span>Digital Diagnostic UV Suite</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-tight">
                      Designed for patient tranquility, featuring ergonomic suites & advanced clinical diagnostics.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Chips */}
              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0A7E8C]" /> Lead Dentist: Dr. Guru (BDS, MDS)
                  </span>
                  <span className="text-slate-400 font-medium">Expert Endodontist</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> Daily Operating Hours
                  </span>
                  <span className="text-[#10B981] font-bold">10:00 AM – 9:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
