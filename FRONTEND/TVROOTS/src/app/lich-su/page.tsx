"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HistoryHeader from "@/components/history/HistoryHeader";
import HistoryTabs from "@/components/history/HistoryTabs";
import AncientPeriod from "@/components/history/AncientPeriod";
import MedievalPeriod from "@/components/history/MedievalPeriod";
import ModernPeriod from "@/components/history/ModernPeriod";
import ContemporaryPeriod from "@/components/history/ContemporaryPeriod";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function LichSuPage() {
  const [activeTab, setActiveTab] = useState("ancient");
  const [loading, setLoading] = useState(false);
  
  // Refs cho animation
  const headerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Sử dụng GSAP cho animation
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
    
    if (tabsRef.current) {
      gsap.fromTo(
        tabsRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: "power2.out",
          delay: 0.3 
        }
      );
    }
    
    if (contentRef.current) {
      const contentItems = contentRef.current.querySelectorAll('.history-item');
      gsap.fromTo(
        contentItems,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.5
        }
      );
    }
  });

  // Hiệu ứng loading khi chuyển tab
  const handleTabChange = (tab: string) => {
    setLoading(true);
    setTimeout(() => {
      setActiveTab(tab);
      setLoading(false);
    }, 300);
  };

  return (
    <main className="min-h-screen bg-amber-50/30">
      <Navbar introCompleted={true} />
      
      <div ref={headerRef}>
        <HistoryHeader />
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div ref={tabsRef} className="mb-12">
          <HistoryTabs activeTab={activeTab} setActiveTab={handleTabChange} />
        </div>
        
        <div ref={contentRef} className="transition-opacity duration-300" style={{ opacity: loading ? 0.5 : 1 }}>
          {activeTab === "ancient" && <AncientPeriod />}
          {activeTab === "medieval" && <MedievalPeriod />}
          {activeTab === "modern" && <ModernPeriod />}
          {activeTab === "contemporary" && <ContemporaryPeriod />}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
