"use client";
import Link from "next/link";
import { useRef } from "react";
import { playfair, lora } from "../Introduction";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const IntroHeader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      // Đăng ký plugin ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);

      if (!headingRef.current || !descriptionRef.current || !buttonRef.current)
        return;

      // Animation cho tiêu đề chính và mô tả
      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none none",
        },
      });

      introTl
        .fromTo(
          headingRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
        )
        .fromTo(
          descriptionRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          buttonRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="min-h-[100vh] flex items-start w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 relative -mt-20 lg:mt-0"
    >
      <div className="absolute left-0 bottom-24 w-40 h-40 opacity-20">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#ED8936"
            d="M42,-52.1C56.9,-45.5,73.2,-35.8,77.9,-22.5C82.5,-9.1,75.5,8,67,21.8C58.4,35.7,48.4,46.3,36.1,53.2C23.8,60.1,9.4,63.3,-5.3,69.2C-20,75.1,-40,83.8,-53.2,77.4C-66.5,71.1,-73,49.6,-77.1,29.4C-81.2,9.3,-82.9,-9.5,-77.5,-26.2C-72.1,-42.9,-59.5,-57.5,-44.6,-64.2C-29.7,-70.9,-12.5,-69.7,1.2,-71.2C14.9,-72.7,27,-58.7,42,-52.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="absolute right-10 bottom-32 w-48 h-48 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#D97706"
            d="M39.4,-65.3C51.2,-59.2,61.1,-48.9,67.1,-36.9C73.1,-24.9,75.3,-11.1,74.9,2.5C74.5,16.1,71.5,29.5,64.2,40.2C56.9,50.9,45.3,58.9,33,65.8C20.6,72.7,7.5,78.6,-5.7,77.6C-18.9,76.6,-32.2,68.9,-45.4,60.5C-58.6,52.1,-71.8,43,-77.2,30.7C-82.6,18.3,-80.3,2.6,-74.5,-10.4C-68.8,-23.4,-59.5,-33.7,-49,-43.3C-38.5,-52.9,-26.8,-61.8,-13.8,-65.9C-0.8,-70,12.5,-69.3,26,-67.7C39.4,-66.2,53.9,-63.7,63.7,-54.9C73.5,-46.1,77.7,-31,74.4,-19.2C71.1,-7.4,60.3,2.2,56.8,14.7C53.2,27.2,57,42.5,53.2,55.5C49.5,68.4,38.3,79,26.5,82.1C14.8,85.3,2.7,81.1,-8.6,76.5C-20,71.9,-30.7,66.9,-41.1,60.8C-51.6,54.6,-61.8,47.4,-66.4,37.7C-71,27.9,-69.9,15.7,-69.9,4.2C-69.9,-7.4,-71.1,-18.3,-67.2,-27.7C-63.3,-37.1,-54.3,-45,-44.3,-52C-34.3,-59.1,-23.2,-65.2,-10.8,-69.4C1.6,-73.5,15.4,-75.5,24.6,-70.8C33.8,-66.1,38.5,-54.6,39.4,-65.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="absolute left-1/4 bottom-28 w-24 h-24 opacity-15">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#D97706"
          strokeWidth="1"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      </div>

      <div className="lg:col-span-7 lg:col-start-1">
        <h2
          ref={headingRef}
          className={`${playfair.className} text-4xl md:text-5xl lg:text-7xl font-bold text-orange-800 leading-tight`}
        >
          <span className="inline-block">Giới Thiệu</span>{" "}
          <span className="text-orange-700 relative inline-block">
            Di Tích Lịch Sử
            <svg
              className="absolute -bottom-3 left-0 w-full h-3 text-orange-500"
              viewBox="0 0 100 10"
            >
              <path
                d="M0,5 Q25,0 50,5 T100,5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </span>{" "}
          <span className="inline-block">Trà Vinh</span>
        </h2>

        <div className="flex space-x-4 mb-8 mt-6">
          <div className="w-8 h-8 lg:w-12 lg:h-12 text-orange-600 opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" />
            </svg>
          </div>
          <div className="w-8 h-8 lg:w-12 lg:h-12 text-orange-500 opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z" />
            </svg>
          </div>
          <div className="w-8 h-8 lg:w-12 lg:h-12 text-amber-500 opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 lg:col-start-8 self-start lg:mt-48 -mt-10">
        <p
          ref={descriptionRef}
          className={`${lora.className} text-xl text-gray-700 mb-10 leading-relaxed pl-4 border-l-2 border-orange-300`}
        >
          Trà Vinh - vùng đất giàu bản sắc văn hóa của đồng bằng sông Cửu Long,
          nơi hội tụ và giao thoa của ba nền văn hóa Kinh - Khmer - Hoa. Với bề
          dày lịch sử hàng trăm năm, Trà Vinh tự hào sở hữu một kho tàng di sản
          văn hóa vật thể và phi vật thể đặc sắc.
        </p>

        <div className="ml-4">
          <Link
            ref={buttonRef}
            href="#khamphaditich"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-orange-700 text-white rounded-full hover:bg-orange-800 transition-all transform hover:translate-x-1 text-lg"
          >
            <span>Khám phá di tích</span>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>

        <div className="flex items-center mt-10 space-x-6 ml-4">
          <div className="flex items-center space-x-2 text-orange-700">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs lg:text-sm">Di tích cấp Quốc gia</span>
          </div>
          <div className="flex items-center space-x-2 text-orange-700">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span className="text-xs lg:text-sm">Văn hóa đa dạng</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroHeader;
