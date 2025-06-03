"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Playfair_Display, Lora } from "next/font/google";
import { useGSAP } from "@gsap/react";

type HeroProps = {
  introCompleted: boolean;
};

// Khai báo font
const playfair = Playfair_Display({
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

const lora = Lora({
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const Hero = ({ introCompleted }: HeroProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const accentRef = useRef<HTMLSpanElement>(null);
  const provinceRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const decorationLeftRef = useRef<HTMLDivElement>(null);
  const decorationRightRef = useRef<HTMLDivElement>(null);
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const scrollButtonRef = useRef<HTMLDivElement>(null);

  // Sử dụng useGSAP cho tất cả animation
  useGSAP(
    () => {
      // Đăng ký plugin ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);

      if (!introCompleted) return;

      if (
        !titleRef.current ||
        !subtitleRef.current ||
        !overlayRef.current ||
        !heroContainerRef.current ||
        !decorationLeftRef.current ||
        !decorationRightRef.current ||
        !scrollButtonRef.current
      )
        return;

      const tl = gsap.timeline();

      // Set ban đầu - ẩn hết tất cả các phần tử
      gsap.set(
        [
          overlayRef.current,
          titleRef.current,
          subtitleRef.current,
          decorationLeftRef.current,
          decorationRightRef.current,
          scrollButtonRef.current,
        ],
        { opacity: 0 }
      );

      // Hiệu ứng cho overlay
      tl.to(overlayRef.current, {
        opacity: 0.7,
        duration: 1,
        ease: "power2.out",
      })
        // Hiệu ứng cho các yếu tố trang trí
        .fromTo(
          [decorationLeftRef.current, decorationRightRef.current],
          { opacity: 0, scale: 0.8, x: (index) => (index === 0 ? -50 : 50) },
          {
            opacity: 0.9,
            scale: 1,
            x: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=0.7"
        )
        .fromTo(
          titleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.4)" },
          "-=0.4"
        )
        .fromTo(
          subtitleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.4"
        )
        .to(
          scrollButtonRef.current,
          { opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );

      // Thiết lập ScrollTrigger để pin Hero
      ScrollTrigger.create({
        trigger: heroContainerRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
      });

      // Cleanup sẽ được tự động xử lý bởi useGSAP
    },
    { scope: heroContainerRef, dependencies: [introCompleted] }
  );

  return (
    <div
      ref={heroContainerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Video toàn màn hình với object-position center */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover object-center z-0"
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ thẻ video.
      </video>

      {/* Lớp phủ tối với kết cấu giống giấy cũ */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black mix-blend-multiply opacity-0 z-10"
        style={{
          backgroundImage: "url('/images/texture-old-paper.png')",
          backgroundBlendMode: "overlay",
        }}
      ></div>

      {/* Yếu tố trang trí bên trái - hoa văn cổ */}
      <div
        ref={decorationLeftRef}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 w-24 h-64 opacity-0 z-20 hidden md:block"
        style={{
          backgroundImage: "url('/images/ornament-left.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Yếu tố trang trí bên phải - hoa văn cổ */}
      <div
        ref={decorationRightRef}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 w-24 h-64 opacity-0 z-20 hidden md:block"
        style={{
          backgroundImage: "url('/images/ornament-right.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Nội dung tiêu đề */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 md:px-8">
        <div className="text-center max-w-5xl">
          <h1
            ref={titleRef}
            className={`${playfair.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-8 leading-tight tracking-wide opacity-0`}
            style={{
              textShadow: "0px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            <span
              ref={accentRef}
              className="text-orange-400 inline-block relative"
            >
              Di Sản Văn Hóa
            </span>{" "}
            <span className="whitespace-nowrap">
              và{" "}
              <span
                ref={provinceRef}
                className="text-orange-500 inline-block relative font-extrabold"
              >
                Di Tích Lịch Sử
              </span>
            </span>
            <div className="text-orange-500 font-extrabold mt-1 md:mt-0">
              Trà Vinh
            </div>
          </h1>
          <p
            ref={subtitleRef}
            className={`${lora.className} text-sm sm:text-base md:text-xl lg:text-2xl text-gray-100 font-medium max-w-3xl mx-auto leading-relaxed opacity-0 px-2`}
            style={{
              fontStyle: "italic",
              textShadow: "0px 1px 3px rgba(0,0,0,0.6)",
            }}
          >
            Hành trình khám phá những dấu ấn lịch sử và kiến trúc đặc sắc của{" "}
            <span className="whitespace-nowrap">vùng đất Khmer Nam Bộ</span>
          </p>
        </div>
      </div>

      {/* Nút cuộn xuống */}
      <div
        ref={scrollButtonRef}
        className="absolute bottom-6 md:bottom-8 left-0 right-0 flex justify-center z-20 opacity-0"
      >
        <button
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          className="bg-orange-600 cursor-pointer hover:bg-orange-700 text-white rounded-full p-2 md:p-3 shadow-lg transition-colors duration-300 border border-orange-300 animate-bounce"
          aria-label="Cuộn xuống"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;
