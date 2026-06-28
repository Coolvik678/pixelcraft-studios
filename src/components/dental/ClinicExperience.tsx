"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Sparkles, UserCheck, Stethoscope, Cpu, ShieldCheck, Smile } from "lucide-react";

export default function ClinicExperience() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const accordionItems = [
    {
      id: 0,
      title: "State-of-the-Art Digital X-Ray Diagnostic Equipment",
      icon: Cpu,
      content: "We utilize low-radiation high-resolution digital intraoral sensors and X-ray technology for instantaneous, pinpoint diagnostic accuracy during consultation."
    },
    {
      id: 1,
      title: "Patient-First Consultation & Gentle Care Policy",
      icon: Stethoscope,
      content: "Dr. Guru takes personal time with every patient to explain treatment steps clearly, address anxiety, and formulate comfortable, affordable treatment options."
    },
    {
      id: 2,
      title: "Strict 100% Sterilization & UV Sanitization Standards",
      icon: ShieldCheck,
      content: "All clinical instruments undergo multi-stage autoclaving and UV cabinet sterilization before every procedure to ensure sterile safety."
    },
    {
      id: 3,
      title: "Modern Clinical Restrooms & Patient Amenities",
      icon: Smile,
      content: "Equipped with immaculate, modern clinical restrooms and a peaceful, air-conditioned waiting room with modern mint-accented decor."
    }
  ];

  return (
    <section id="experience" className="py-28 lg:py-36 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Dr. Guru & Visual Suite Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Lead Dentist Spotlight Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white shadow-xl relative">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0A7E8C] to-[#10B981] text-white flex items-center justify-center font-heading font-extrabold text-2xl shadow-md flex-shrink-0">
                  DG
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-teal-100 text-[#0A7E8C] text-[11px] font-bold uppercase tracking-wider mb-1">
                    <UserCheck className="w-3.5 h-3.5" /> Highly Praised Specialist
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-slate-900">
                    Dr. Guru (Dr. Gurudev S. Chavhan)
                  </h3>
                  <p className="text-xs font-semibold text-[#0A7E8C]">
                    BDS, MDS (Endodontist & Aesthetic Dentist)
                  </p>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic bg-white/60 p-4 rounded-xl border border-slate-100">
                "Dr. Guru is widely recognized across Aundh and Pune for being extremely skilled, professional, knowledgeable, and genuinely caring. Every treatment is delivered with surgical precision and genuine warmth."
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200/60 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span>5.0 Verified Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0A7E8C]" />
                  <span>Root Canal Specialist</span>
                </div>
              </div>
            </div>

            {/* Clinic Environment Visual Collage Box */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-800 shadow-md group border border-white/20">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] font-bold text-white bg-slate-900/80 px-2.5 py-1 rounded-xl backdrop-blur-sm">
                  Mint Consultation Suite
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-800 shadow-md group border border-white/20">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] font-bold text-white bg-slate-900/80 px-2.5 py-1 rounded-xl backdrop-blur-sm">
                  Operatory Chair & UV Unit
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Feature Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-[#10B981] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" /> World-Class Standards
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-6">
              Why Patients Trust Our Multispeciality Care
            </h2>
            <p className="text-slate-600 text-base mb-8">
              We combine modern clinical infrastructure with uncompromised hygiene and transparent consultation to make your dental visit stress-free.
            </p>

            {/* Accordions */}
            <div className="space-y-4">
              {accordionItems.map((item) => {
                const Icon = item.icon;
                const isOpen = activeAccordion === item.id;
                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-white border-[#0A7E8C] shadow-lg shadow-[#0A7E8C]/5"
                        : "bg-white/70 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <button
                      onClick={() => setActiveAccordion(isOpen ? null : item.id)}
                      className="w-full p-5 flex items-center justify-between text-left gap-4"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isOpen ? "bg-[#0A7E8C] text-white" : "bg-slate-100 text-slate-700"
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-heading font-bold text-base sm:text-lg text-slate-900">
                          {item.title}
                        </h4>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                          isOpen ? "rotate-180 text-[#0A7E8C]" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-5 pt-0 pl-16 text-sm text-slate-600 leading-relaxed"
                      >
                        {item.content}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
