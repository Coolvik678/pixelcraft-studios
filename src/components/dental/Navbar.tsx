"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar, Sparkles, PhoneCall } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "mr">("en");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9990] transition-all duration-300 ${
          isScrolled
            ? "glass-header py-3 shadow-md"
            : "bg-white/80 backdrop-blur-md py-4 border-b border-slate-100"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#0A7E8C] to-[#10B981] flex items-center justify-center text-white shadow-md shadow-[#0A7E8C]/20 transition-transform group-hover:scale-105">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8.5 2 6 4.5 6 7.5c0 3 1.5 5.5 2.5 8.5C9.3 18 10 22 12 22c2 0 2.7-4 3.5-6 1-3 2.5-5.5 2.5-8.5C18 4.5 15.5 2 12 2z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base sm:text-lg text-slate-900 leading-tight tracking-tight">
                {lang === "en" ? (
                  <>Dr. Chavhan's <span className="text-[#0A7E8C]">Dental</span></>
                ) : (
                  <>डॉ.चव्हाण'से <span className="text-[#0A7E8C]">डेंटल</span></>
                )}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <span>Multispeciality Clinic</span>
                <span className="w-1 h-1 rounded-full bg-[#10B981]" />
                <span className="text-[#0A7E8C]">Aundh, Pune</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#services" className="text-sm font-semibold text-slate-700 hover:text-[#0A7E8C] transition-colors">
              Services
            </a>
            <a href="#experience" className="text-sm font-semibold text-slate-700 hover:text-[#0A7E8C] transition-colors">
              Experience & Tech
            </a>
            <a href="#testimonials" className="text-sm font-semibold text-slate-700 hover:text-[#0A7E8C] transition-colors">
              Reviews (5.0 ★)
            </a>
            <a href="#contact" className="text-sm font-semibold text-slate-700 hover:text-[#0A7E8C] transition-colors">
              Clinic & Location
            </a>
          </nav>

          {/* Action Right */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher Button */}
            <button
              onClick={() => setLang(lang === "en" ? "mr" : "en")}
              className="px-2.5 py-1 rounded-lg border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-1"
              title="Toggle Language"
            >
              <span>🌐</span>
              <span>{lang === "en" ? "मराठी" : "English"}</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="btn-pulse px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0A7E8C] to-[#075963] text-white font-bold text-sm shadow-md shadow-[#0A7E8C]/20 hover:shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setLang(lang === "en" ? "mr" : "en")}
              className="px-2 py-1 rounded-lg border border-slate-200 text-xs font-bold text-slate-600"
            >
              {lang === "en" ? "मराठी" : "ENG"}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-800"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[65px] z-[9989] bg-white border-b border-slate-200 shadow-xl p-6 lg:hidden flex flex-col gap-5"
          >
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-slate-800 hover:text-[#0A7E8C] py-1 border-b border-slate-100"
            >
              Multispeciality Services
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-slate-800 hover:text-[#0A7E8C] py-1 border-b border-slate-100"
            >
              Clinic Experience & Equipment
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-slate-800 hover:text-[#0A7E8C] py-1 border-b border-slate-100"
            >
              Verified Reviews (5.0 ★)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-slate-800 hover:text-[#0A7E8C] py-1 border-b border-slate-100"
            >
              Hours & Map Location
            </a>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-xl bg-[#0A7E8C] text-white font-bold text-base shadow-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" /> Book Appointment Now
              </button>
              <a
                href="tel:+918983821991"
                className="w-full py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#0A7E8C]" /> Call Desk (+91 89838 21991)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
