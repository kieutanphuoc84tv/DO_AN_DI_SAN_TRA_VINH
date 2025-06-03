"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";
import { useRef, useState } from "react";
import gsap from "gsap";
import Introduction from "@/components/Introduction";

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const [introCompleted, setIntroCompleted] = useState(false);

  // Xử lý khi loader animation hoàn tất
  const handleLoaderComplete = () => {
    // Đánh dấu animation mở đầu đã hoàn thành
    setIntroCompleted(true);

    // Hiện nội dung
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          // Cho phép cuộn trang
          document.body.style.overflow = "";
          if (mainRef.current) {
            mainRef.current.style.overflow = "";
          }
        },
      });
    }
  };

  return (
    <>
      {/* Sử dụng component Loader mới */}
      <Loader onComplete={handleLoaderComplete} />

      {/* Nội dung chính */}
      <div ref={contentRef} className="opacity-0">
        <main ref={mainRef} className="min-h-screen bg-stone-50">
          <Navbar introCompleted={introCompleted} />
          <Hero introCompleted={introCompleted} />
          <Introduction />
          <Footer />
        </main>
      </div>
    </>
  );
}
