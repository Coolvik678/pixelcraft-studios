"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, MapPin, Award, ArrowRight, Sparkles, CheckCircle2, HeartHandshake, Clock, Sparkle } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-36 overflow-hidden gradient-subtle-bg">
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#0A7E8C]/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#10B981]/5 blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Copy & CTAs (7 cols) */}
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
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#0A7E8C] hover:bg-[#075963] text-white font-bold text-base shadow-lg shadow-[#0A7E8C]/20 hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group tracking-wide"
              >
                <span>Schedule a Visit</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-slate-300 text-slate-700 font-bold text-base hover:border-[#0A7E8C] hover:text-[#0A7E8C] transition-all flex items-center justify-center gap-2 relative overflow-hidden group tracking-wide"
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

          {/* Right Column: Sleek Asymmetric 2-Column Suite Restructure (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Shadow Layer */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#0A7E8C]/15 via-[#10B981]/15 to-transparent blur-2xl -z-10" />

            {/* Main Interactive Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/90 shadow-2xl relative overflow-hidden">
              
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                
                {/* Asymmetric Left Info (7 cols on sm) */}
                <div className="sm:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-[#10B981] text-[11px] font-bold inline-flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" /> Open Today
                    </span>
                  </div>

                  <div>
                    <h4 className="font-heading font-extrabold text-lg text-slate-900 leading-tight">
                      Dr. Chavhan's Suite
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">Multispeciality Desk</p>
                  </div>

                  <div className="space-y-2 text-xs font-semibold text-slate-700">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                      <Sparkle className="w-4 h-4 text-[#0A7E8C] flex-shrink-0" />
                      <span>Executive Consultation</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                      <span>Modern Mint & Marble</span>
                    </div>
                  </div>
                </div>

                {/* Asymmetric Right Visual Frame (5 cols on sm) */}
                <div className="sm:col-span-5 relative rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-auto sm:h-56 bg-slate-900 shadow-xl border border-white/20 group">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-85 group-hover:scale-110 transition-transform duration-700" 
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80')`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-[10px] font-bold text-white bg-slate-900/80 p-2 rounded-xl backdrop-blur-md border border-white/10 text-center">
                    Mint Suite Interior
                  </div>
                </div>

              </div>

              {/* Bottom Footer Chip */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#0A7E8C]" /> 10:00 AM – 9:00 PM Daily
                </span>
                <span className="font-bold text-[#0A7E8C]">Dr. Guru (MDS)</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
