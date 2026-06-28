"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, Calendar, MessageCircle } from "lucide-react";

interface ContactFooterProps {
  onOpenBooking: () => void;
}

export default function ContactFooter({ onOpenBooking }: ContactFooterProps) {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-20 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A7E8C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
        
        {/* Top Callout Banner */}
        <div className="bg-gradient-to-r from-[#0A7E8C] to-[#10B981] rounded-3xl p-8 sm:p-10 text-white mb-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-2">
              Book Your Appointment Now
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              Dr. Chavhan’s Multispeciality Dental Clinic
            </h3>
            <p className="text-emerald-50 text-sm mt-1 max-w-xl">
              Providing advanced, painless, and affordable dental care for the entire family in Aundh, Pune.
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
          
          {/* Column 1: Clinic & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-xl text-white mb-2">Clinic Timings</h4>
            
            <div className="bg-slate-800/60 rounded-2xl p-5 border border-slate-800 space-y-3 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-700/60">
                <span className="text-slate-400 font-medium">Monday – Sunday</span>
                <span className="font-bold text-white">10:00 AM to 9:00 PM</span>
              </div>
              <div className="flex items-center justify-between text-emerald-400 font-semibold pt-1">
                <span>Clinic Status:</span>
                <span className="flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" /> Open All Days
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pt-2">
              📍 Conveniently located near Bank of Maharashtra in Aundh, Pune.
            </p>
          </div>

          {/* Column 2: Direct Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-xl text-white mb-2">Contact Details</h4>

            <div className="space-y-3">
              <a
                href="tel:8983821993"
                className="p-4 rounded-2xl bg-slate-800/60 hover:bg-slate-800 border border-slate-800 hover:border-[#0A7E8C] transition-all flex items-center gap-4 group block"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0A7E8C]/20 text-[#0A7E8C] flex items-center justify-center group-hover:bg-[#0A7E8C] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Call Us Direct</span>
                  <span className="font-heading font-bold text-white text-base">8983821993</span>
                </div>
              </a>

              <a
                href="https://wa.me/918975889746"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-800/60 hover:bg-slate-800 border border-slate-800 hover:border-[#25D366] transition-all flex items-center gap-4 group block"
              >
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">WhatsApp Consultation</span>
                  <span className="font-heading font-bold text-white text-base">8975889746</span>
                </div>
              </a>
            </div>
          </div>

          {/* Column 3: Address & Location (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-xl text-white mb-2">Location & Address</h4>
            
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-800 relative h-44 group">
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
                href="https://maps.google.com/?q=Chanchal+Apartment+Near+Bank+of+Maharashtra+Aundh+Pune+411007"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 left-3 right-3 bg-slate-900/90 hover:bg-[#0A7E8C] text-white text-xs font-bold p-2.5 rounded-xl backdrop-blur-md transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Navigation className="w-4 h-4" /> Open Google Maps
              </a>
            </div>

            <p className="text-xs text-slate-400 leading-normal">
              Chanchal Apartment, Near Bank of Maharashtra, Aundh, Pune – 411007
            </p>
          </div>

        </div>

        {/* Bottom Rights & Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Dr. Chavhan’s Multispeciality Dental Clinic. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About Us</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#faqs" className="hover:text-white">FAQs</a>
            <a href="#contact" className="hover:text-white">Contact Us</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
