"use client";
import { useEffect, useState } from "react";

interface HistoryBannerProps {
  activeTab: string;
}

const bannerImages: Record<string, string> = {
  ancient: "/image/lichsu/banner/oceo.jpg",
  medieval: "/image/lichsu/banner/trungdai.jpg",
  modern: "/image/lichsu/banner/candai.jpg",
  contemporary: "/image/lichsu/banner/hiendai.jpg",
};

export default function HistoryBanner({ activeTab }: HistoryBannerProps) {
  const [currentImage, setCurrentImage] = useState(bannerImages[activeTab]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => {
      setCurrentImage(bannerImages[activeTab]);
      setFade(true);
    }, 300); // fade out duration

    return () => clearTimeout(timeout);
  }, [activeTab]);

  return (
    <div
      className={`relative w-full h-64 overflow-hidden rounded-lg transition-opacity duration-500 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={currentImage}
        alt="Lịch sử banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold drop-shadow-lg">
          Lịch Sử Trà Vinh
        </h1>
      </div>
    </div>
  );
}
