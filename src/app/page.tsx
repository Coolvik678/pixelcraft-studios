"use client";

import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import VideoShowcase from "@/components/home/VideoShowcase";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import ReviewForm from "@/components/home/ReviewForm";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  useEffect(() => {
    // Prevent browser from restoring scroll position to the bottom of the page on refresh/load
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <VideoShowcase />
        <Services />
        <Portfolio />
        <Stats />
        <Testimonials />
        <ReviewForm />
        <WhyChooseUs />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
