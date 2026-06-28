"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Sparkles, Shield, Smile, Activity, Sparkle, ArrowRight, X, Check } from "lucide-react";

interface ServicesMatrixProps {
  onOpenBooking: () => void;
}

interface ServiceDetail {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  icon: any;
  highlights: string[];
  duration: string;
}

export default function ServicesMatrix({ onOpenBooking }: ServicesMatrixProps) {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const services: ServiceDetail[] = [
    {
      id: 1,
      title: "General & Preventive Dentistry",
      category: "Hygiene & Maintenance",
      description: "Comprehensive oral health examinations, ultrasonic scaling, cavity prevention, and pain-free restorative care.",
      longDescription: "Preventive care is the foundation of long-term oral hygiene. At Dr. Chavhan's Dental Clinic, we utilize digital intraoral cameras and gentle ultrasonic scaling technology to clean plaque, prevent gum disease, and identify early cavities before they cause discomfort.",
      icon: Shield,
      highlights: [
        "Ultrasonic Scaling & Polishing",
        "Digital Intraoral Diagnostic Scans",
        "Pain-free Tooth Composite Fillings",
        "Gum Health & Periodontal Maintenance"
      ],
      duration: "30 - 45 mins"
    },
    {
      id: 2,
      title: "Advanced Orthodontics & Aligners",
      category: "Smile Alignment",
      description: "Modern invisible clear aligners and precision ceramic braces tailored to align teeth discreetly and comfortably.",
      longDescription: "Achieve a perfectly straight smile without traditional metal discomfort. Dr. Guru specializes in advanced orthodontic planning, utilizing 3D digital smile simulation to design clear aligners that fit seamlessly into your daily lifestyle.",
      icon: Smile,
      highlights: [
        "Custom US-FDA Cleared Aligners",
        "Esthetic Ceramic & Self-Ligating Braces",
        "3D Digital Alignment Simulation",
        "Retainer & Post-Treatment Care"
      ],
      duration: "Custom Treatment Plan"
    },
    {
      id: 3,
      title: "Implantology & Prosthodontics",
      category: "Permanent Restorations",
      description: "Lifelong titanium dental implants, Zirconia crowns, and full-mouth rehabilitation engineered for natural bite force.",
      longDescription: "Replace missing teeth permanently with biocompatible titanium implants that look, feel, and function exactly like natural teeth. Designed with precision computer-guided surgical technique for rapid healing.",
      icon: Activity,
      highlights: [
        "Single & Multiple Tooth Implants",
        "High-Translucency Zirconia Crowns",
        "Bridges & Fixed Dentures",
        "Guided Bone Regeneration"
      ],
      duration: "45 - 60 mins"
    },
    {
      id: 4,
      title: "Cosmetic Dentistry & Smile Makeovers",
      category: "Aesthetic Excellence",
      description: "Laser teeth whitening, ultra-thin porcelain veneers, and cosmetic bonding designed to craft your dream aesthetic smile.",
      longDescription: "Enhance your confidence with a customized smile transformation. We analyze facial symmetry, tooth color, and gingival aesthetics to deliver radiant, natural-looking tooth whitening and porcelain veneer restorations.",
      icon: Sparkles,
      highlights: [
        "In-Office Laser Tooth Whitening",
        "Ultra-Thin Porcelain Veneers",
        "Diastema (Gap) Cosmetic Closure",
        "Enamel Micro-contouring"
      ],
      duration: "45 - 90 mins"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A7E8C]/10 text-[#0A7E8C] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkle className="w-3.5 h-3.5" /> Multispeciality Dental Focus
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            Comprehensive Dental Solutions in <span className="text-[#0A7E8C]">Aundh, Pune</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From routine preventive checkups to complex implant dentistry, our treatments combine clinical expertise with gentle patient-first care.
          </p>
        </div>

        {/* Responsive Grid Matrix */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                onClick={() => setSelectedService(service)}
                className="group relative rounded-2xl p-7 bg-slate-50 border border-slate-200/80 hover:border-[#0A7E8C]/50 hover:bg-white hover:shadow-2xl hover:shadow-[#0A7E8C]/10 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-white text-[#0A7E8C] group-hover:bg-[#0A7E8C] group-hover:text-white flex items-center justify-center shadow-sm border border-slate-200/60 group-hover:border-[#0A7E8C] transition-all duration-300 mb-6">
                    <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 mb-2 block">
                    {service.category}
                  </span>
                  
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-3 group-hover:text-[#0A7E8C] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#0A7E8C] group-hover:text-[#075963]">
                  <span>Learn Details & Pricing</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-100 p-6 sm:p-8"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
                {selectedService.category}
              </span>

              <h3 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                {selectedService.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {selectedService.longDescription}
              </p>

              <div className="mb-6">
                <h4 className="font-heading font-bold text-sm text-slate-900 uppercase tracking-wider mb-3">
                  Clinical Highlights & Care:
                </h4>
                <ul className="space-y-2">
                  {selectedService.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-slate-400 font-semibold block">Estimated Session</span>
                  <span className="text-xs font-bold text-slate-800">{selectedService.duration}</span>
                </div>

                <button
                  onClick={() => {
                    setSelectedService(null);
                    onOpenBooking();
                  }}
                  className="px-6 py-3 rounded-xl bg-[#0A7E8C] hover:bg-[#075963] text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
                >
                  Book This Treatment →
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
