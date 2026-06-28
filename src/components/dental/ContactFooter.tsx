"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, Calendar, MessageCircle, Heart, Shield } from "lucide-react";

interface ContactFooterProps {
  onOpenBooking: () => void;
}

export default function ContactFooter({ onOpenBooking }: ContactFooterProps) {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-20 pb-12 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A7E8C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
        
        {/* Top Callout Banner */}
        <div className="bg-gradient-to-r from-[#0A7E8C] to-[#10B981] rounded-3xl p-8 sm:p-10 text-white mb-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-2">
              Instant Appointment Booking
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              Ready for a Healthier, Radiant Smile?
            </h3>
            <p className="text-emerald-50 text-sm mt-1 max-w-xl">
              Visit Dr. Chavhan's Multispeciality Dental Clinic in Aundh, Pune. Walk-ins and pre-booked appointments welcome.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-950 text-white font-bold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all flex-shrink-0 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-emerald-400" /> Book Visit Now
          </button>
        </div>

        {/* 3-Column Footer Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-800">
          
          {/* Left Column: Hours & Live Status (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> Open Daily (Mon - Sun)
              </span>
            </div>

            <h4 className="font-heading font-bold text-xl text-white">Operating Schedule</h4>
            
            <div className="bg-slate-800/60 rounded-2xl p-5 border border-slate-800 space-y-3 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-700/60">
                <span className="text-slate-400 font-medium">Monday – Sunday</span>
                <span className="font-bold text-white">10:00 AM – 9:00 PM</span>
              </div>
              <div className="flex items-center justify-between text-emerald-400 font-semibold pt-1">
                <span>Clinic Status:</span>
                <span className="flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> Active Desk Now
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pt-2">
              📍 Conveniently located near Bank of Maharashtra in Sanghvi Nagar, Aundh. Accessible ground floor consultation suites.
            </p>
          </div>

          {/* Center Column: Direct Contact & Telephones (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-xl text-white mb-2">Direct Contact Links</h4>

            <div className="space-y-3">
              <a
                href="tel:+918983821991"
                className="p-4 rounded-2xl bg-slate-800/60 hover:bg-slate-800 border border-slate-800 hover:border-[#0A7E8C] transition-all flex items-center gap-4 group block"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0A7E8C]/20 text-[#0A7E8C] flex items-center justify-center group-hover:bg-[#0A7E8C] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Primary Desk Line</span>
                  <span className="font-heading font-bold text-white text-base">+91 89838 21991</span>
                </div>
              </a>

              <a
                href="tel:+918975885746"
                className="p-4 rounded-2xl bg-slate-800/60 hover:bg-slate-800 border border-slate-800 hover:border-[#10B981] transition-all flex items-center gap-4 group block"
              >
                <div className="w-10 h-10 rounded-xl bg-[#10B981]/20 text-[#10B981] flex items-center justify-center group-hover:bg-[#10B981] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Alternate Consultation Line</span>
                  <span className="font-heading font-bold text-white text-base">+91 89758 85746</span>
                </div>
              </a>

              <a
                href="https://wa.me/918983821991"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" /> Instant WhatsApp Consultation →
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Map Widget Component (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-xl text-white mb-2">Clinic Location</h4>
            
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-800 relative h-48 group">
              {/* Styled Map Placeholder or Frame */}
              <iframe
                title="Dr. Chavhan Dental Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.261234567!2d73.805!3d18.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMzJzM2LjAiTiA3M8KwNDgnMTguMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.6) contrast(1.2)" }}
                allowFullScreen={false}
                loading="lazy"
                className="w-full h-full opacity-70 group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-slate-900/40 pointer-events-none" />
              
              <a
                href="https://maps.google.com/?q=Chanchal+Apartment+Bank+of+Maharashtra+Sanghvi+Nagar+Aundh+Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 left-3 right-3 bg-slate-900/90 hover:bg-[#0A7E8C] text-white text-xs font-bold p-2.5 rounded-xl backdrop-blur-md transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Navigation className="w-4 h-4" /> Get Google Directions
              </a>
            </div>

            <p className="text-[11px] text-slate-400 leading-normal">
              Chanchal Apartment, nearby Bank of Maharashtra, Sanghvi Nagar, Ward No. 8, Sadhu Vasvani Nagar, Aundh, Pune, Maharashtra 411007.
            </p>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Dr. Chavhan's Multispeciality Dental Clinic. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Aundh, Pune</span>
            <span>•</span>
            <span>Dr. Guru (BDS, MDS)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
