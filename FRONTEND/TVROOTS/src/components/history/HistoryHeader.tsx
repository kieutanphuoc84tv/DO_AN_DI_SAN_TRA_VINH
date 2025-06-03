"use client";
import { playfair, lora } from "@/components/Introduction";
import { FaBook } from "react-icons/fa";
import Image from "next/image";

export default function HistoryHeader() {
  return (
    <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
      <Image
        src="/images/tra-vinh-panorama.jpg"
        alt="Trà Vinh qua các thời kỳ lịch sử"
        fill
        className="object-cover"
        priority
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 flex flex-col items-center justify-center text-center px-4">
        <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6`}>
          Lịch Sử Trà Vinh
        </h1>
        
        <div className="flex items-center justify-center mb-8">
          <div className="h-1 w-16 bg-amber-500 rounded-full mr-3"></div>
          <FaBook className="text-amber-500 text-2xl mx-2" />
          <div className="h-1 w-16 bg-amber-500 rounded-full ml-3"></div>
        </div>
        
        <p className={`${lora.className} text-white/90 text-lg md:text-xl max-w-3xl leading-relaxed`}>
          Khám phá hành trình lịch sử hàng nghìn năm của vùng đất Trà Vinh, từ thời kỳ cổ đại đến hiện đại với những dấu ấn văn hóa đặc sắc và di sản quý giá.
        </p>
      </div>
    </div>
  );
}
