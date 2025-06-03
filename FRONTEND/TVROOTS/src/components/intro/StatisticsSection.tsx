import Link from "next/link";
import { playfair, lora } from "../Introduction";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface StatisticItemProps {
  number: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
  className?: string;
}

const StatisticItem = ({
  number,
  title,
  description,
  linkText,
  href,
  className,
}: StatisticItemProps) => {
  const countRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`${className} flex-shrink-0 w-80 md:w-auto bg-white p-8 lg:p-10 rounded-xl shadow-md border-t-4 border-orange-500 group hover:shadow-xl transition-all duration-300`}
    >
      <div className="flex justify-center mb-6">
        <div className="relative w-32 h-32 rounded-full flex items-center justify-center bg-orange-100">
          <svg
            viewBox="0 0 100 100"
            className="absolute top-0 left-0 w-full h-full"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#FECACA"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#EA580C"
              strokeWidth="8"
              strokeDasharray="283"
              strokeDashoffset="283"
              className="circle-progress"
            />
          </svg>
          <div
            ref={countRef}
            className="text-4xl font-bold text-orange-600 counter-value"
            data-number={number}
          >
            0
          </div>
        </div>
      </div>
      <h4
        className={`${playfair.className} text-xl font-semibold text-gray-800 mb-4 text-center`}
      >
        {title}
      </h4>
      <p className={`${lora.className} text-gray-600 text-sm mb-8 text-center`}>
        {description}
      </p>
      <div className="text-center">
        <Link
          href={href}
          className="inline-flex items-center text-orange-600 font-medium group-hover:text-orange-700 transition-colors"
        >
          <span>{linkText}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 group-hover:translate-x-1 transition-transform"
          >
            <path
              d="M3.33337 8H12.6667M12.6667 8L8.00004 3.33333M12.6667 8L8.00004 12.6667"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const StatisticsSection = () => {
  const statisticsSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!statisticsSectionRef.current) return;

    // Animation cho các mục thống kê
    const statItems =
      statisticsSectionRef.current.querySelectorAll(".stat-item");
    gsap.fromTo(
      statItems,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: statisticsSectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation cho các vòng tròn và số đếm
    const circles =
      statisticsSectionRef.current.querySelectorAll(".circle-progress");
    const counters =
      statisticsSectionRef.current.querySelectorAll(".counter-value");

    gsap.fromTo(
      circles,
      { strokeDashoffset: 283 },
      {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statisticsSectionRef.current,
          start: "top 85%",
          toggleActions: "restart none none reverse",
        },
      }
    );

    counters.forEach((counter) => {
      const targetValue = counter.getAttribute("data-number") || "0";
      const isPlus = targetValue.includes("+");
      const targetNum = parseInt(
        isPlus ? targetValue.replace("+", "") : targetValue
      );

      gsap.to(counter, {
        innerText: targetNum,
        duration: 2,
        ease: "power1.inOut",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: statisticsSectionRef.current,
          start: "top 85%",
          toggleActions: "restart none none reverse",
        },
        onUpdate: function () {
          const current = Math.floor(this.targets()[0].innerText);
          this.targets()[0].innerText = isPlus ? `${current}+` : current;
        },
      });
    });
  });

  return (
    <div className="mb-36">
      <div className="flex justify-between items-center mb-12">
        <h3
          className={`${playfair.className} text-2xl md:text-3xl font-bold text-orange-800`}
        >
          Di Tích Theo Thống Kê
        </h3>
        <div className="hidden md:block h-[1px] flex-grow bg-orange-300/50 ml-8"></div>
      </div>

      <div
        ref={statisticsSectionRef}
        className="flex md:grid md:grid-cols-3 overflow-x-auto gap-6 pb-6 md:pb-12 scroll-smooth no-scrollbar"
      >
        <StatisticItem
          number="26"
          title="Di Tích Cấp Tỉnh"
          description="Những di tích có giá trị văn hóa, lịch sử địa phương"
          linkText="Xem Chi Tiết"
          href="#di-tich-cap-tinh"
          className="stat-item  md:mt-16"
        />

        <StatisticItem
          number="18"
          title="Di Tích Cấp Quốc Gia"
          description="Được Bộ Văn hóa công nhận và bảo tồn"
          linkText="Xem Chi Tiết"
          href="#di-tich-cap-quoc-gia"
          className="stat-item"
        />

        <StatisticItem
          number="100+"
          title="Điểm Di Tích Lịch Sử"
          description="Các điểm di tích, danh thắng trên khắp tỉnh Trà Vinh"
          linkText="Xem Chi Tiết"
          href="#di-tich-tinh"
          className="stat-item md:mt-16"
        />
      </div>

      <style jsx global>{`
        .circle-progress {
          transition: stroke-dashoffset 1.5s ease;
          transform-origin: 50% 50%;
          transform: rotate(-90deg);
        }

        .counter-value {
          font-feature-settings: "tnum";
          font-variant-numeric: tabular-nums;
        }
      `}</style>
    </div>
  );
};

export default StatisticsSection;
