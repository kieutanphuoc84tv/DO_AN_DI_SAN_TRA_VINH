"use client";
import { useRef } from "react";
import gsap from "gsap";
import { Playfair_Display, Lora } from "next/font/google";
import { useGSAP } from "@gsap/react";

// Khai báo font
const playfair = Playfair_Display({
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

const lora = Lora({
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700"],
});

type LoaderProps = {
  onComplete: () => void;
};

const Loader = ({ onComplete }: LoaderProps) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const decorationLeftRef = useRef<HTMLDivElement>(null);
  const decorationRightRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (
        !loaderRef.current ||
        !logoRef.current ||
        !textRef.current ||
        !lineRef.current ||
        !subtitleRef.current ||
        !decorationLeftRef.current ||
        !decorationRightRef.current
      )
        return;

      // Ngăn cuộn trang trong quá trình animation
      document.body.style.overflow = "hidden";

      // Tạo timeline
      const tl = gsap.timeline({
        onComplete: () => {
          // Gọi callback khi animation hoàn tất
          setTimeout(() => {
            onComplete();
          }, 300);
        },
      });

      // Set trạng thái ban đầu
      gsap.set([decorationLeftRef.current, decorationRightRef.current], {
        opacity: 0,
        scale: 0.8,
      });

      gsap.set([textRef.current, lineRef.current, subtitleRef.current], {
        opacity: 0,
        y: 20,
      });

      // Animation chính
      tl.fromTo(
        decorationLeftRef.current,
        { opacity: 0, x: -50, scale: 0.8 },
        { opacity: 0.3, x: 0, scale: 1, duration: 1.2, ease: "power2.out" }
      )
        .fromTo(
          decorationRightRef.current,
          { opacity: 0, x: 50, scale: 0.8 },
          { opacity: 0.3, x: 0, scale: 1, duration: 1.2, ease: "power2.out" },
          "-=1"
        )
        .fromTo(
          textRef.current,
          { opacity: 0, scale: 0.9, y: -20 },
          { opacity: 1, scale: 1, y: 0, duration: 1, ease: "back.out(1.7)" },
          "-=0.7"
        )
        .fromTo(
          lineRef.current,
          { width: "0%", opacity: 0 },
          { width: "100%", opacity: 1, duration: 0.8, ease: "power2.inOut" },
          "-=0.5"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.3"
        )
        .to(logoRef.current, {
          delay: 1,
          y: -30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
        })
        .to(
          loaderRef.current,
          {
            yPercent: -100,
            duration: 1.2,
            ease: "power4.inOut",
          },
          "-=0.4"
        );

      return () => {
        document.body.style.overflow = "";
      };
    },
    { scope: loaderRef, dependencies: [onComplete] }
  );

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-orange-600 bg-gradient-to-br from-orange-600 to-orange-800 z-50 flex items-center justify-center overflow-hidden"
      style={{ transformOrigin: "bottom" }}
    >
      {/* Hoa văn trang trí bên trái */}
      <div
        ref={decorationLeftRef}
        className="absolute left-8 md:left-16 top-1/2 transform -translate-y-1/2 w-32 h-96 opacity-0"
        style={{
          backgroundImage: "url('/images/ornament-left.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Hoa văn trang trí bên phải */}
      <div
        ref={decorationRightRef}
        className="absolute right-8 md:right-16 top-1/2 transform -translate-y-1/2 w-32 h-96 opacity-0"
        style={{
          backgroundImage: "url('/images/ornament-right.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Hiệu ứng ánh sáng */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black opacity-30"></div>

      {/* Hiệu ứng kết cấu giấy cũ */}
      <div
        className="absolute inset-0 mix-blend-soft-light opacity-10"
        style={{
          backgroundImage: "url('/images/texture-old-paper.png')",
        }}
      ></div>

      {/* Logo chính */}
      <div
        ref={logoRef}
        className="relative text-white flex flex-col items-center max-w-3xl px-4"
      >
        <div
          ref={textRef}
          className={`${playfair.className} text-6xl md:text-7xl lg:text-7xl font-bold tracking-wider text-center mb-6 opacity-0`}
          style={{ textShadow: "0 4px 8px rgba(0,0,0,0.2)" }}
        >
          THE HERITAGE OF TRA VINH
        </div>

        {/* Đường gạch ngang */}
        <div
          ref={lineRef}
          className="h-1 bg-white opacity-0 shadow-lg w-36 md:w-48 mb-8"
        ></div>

        {/* Tiêu đề phụ */}
        <span
          ref={subtitleRef}
          className={`${lora.className} text-lg md:text-2xl mt-2 font-normal tracking-wider text-center opacity-0 text-orange-100`}
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
        >
          DI SẢN VĂN HÓA TRÀ VINH
        </span>
      </div>
    </div>
  );
};

export default Loader;
