"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Playfair_Display, Lora } from "next/font/google";
import IntroHeader from "./intro/IntroHeader";
import HistoryCard from "./intro/HistoryCard";
import StatisticsSection from "./intro/StatisticsSection";
import FeaturedSites from "./intro/FeaturedSites";
import { useGSAP } from "@gsap/react";

// Khai báo font
export const playfair = Playfair_Display({
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

export const lora = Lora({
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const Introduction = () => {
  // Refs cho từng phần tử để áp dụng animation
  const sectionRef = useRef<HTMLDivElement>(null);

  // Sử dụng useGSAP cho tất cả animation
  useGSAP(
    () => {
      // Đăng ký plugin ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current) return;

      // Hiệu ứng di chuyển Introduction lên trên Hero và hiệu ứng từ nhỏ ra to, từ cong ra vuông
      gsap.from(sectionRef.current, {
        y: -200,
        scale: 0.8,
        borderRadius: 50,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top 20%",
          scrub: true,
        },
      });
      // Cleanup sẽ được tự động xử lý bởi useGSAP
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section
      ref={sectionRef}
      id="gioi-thieu"
      className="py-32 relative overflow-hidden z-20 bg-white"
    >
      {/* Lớp hiệu ứng nền */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50/70 to-stone-100/80 z-0"></div>

      {/* Hình trang trí nền */}
      <div className="absolute -right-24 top-20 w-64 h-64 rounded-full bg-orange-200/20 blur-3xl"></div>
      <div className="absolute -left-24 bottom-40 w-80 h-80 rounded-full bg-amber-100/30 blur-3xl"></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 max-w-7xl">
        {/* Phần giới thiệu */}
        <IntroHeader />

        {/* Thẻ lịch sử */}
        <HistoryCard />

        {/* Phần thống kê */}
        <StatisticsSection />

        {/* Di tích tiêu biểu */}
        <FeaturedSites />
      </div>
    </section>
  );
};

export default Introduction;
