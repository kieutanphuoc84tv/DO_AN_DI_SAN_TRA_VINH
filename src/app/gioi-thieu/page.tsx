"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoPlayer from "@/components/VideoPlayer";
import Image from "next/image";
import Link from "next/link";
import { playfair, lora } from "@/components/Introduction";

export default function GioiThieuPage() {
  const [randomBanner, setRandomBanner] = useState("");

  // Mảng chứa các URL hình ảnh banner
  const bannerImages = [
    "/image/ditichquocgia/aobaom.jpg",
    "/image/ditichquocgia/chuaang.jpg",
    "/image/ditichquocgia/phuocminhcung.jpg",
    "/image/ditichquocgia/denthohochiminh.jpg",
    "/image/ditichcaptinh/nuongnuong.jpg",
    "/image/ditichcaptinh/chuabamom.jpg",
    "/image/ditichcaptinh/chuachongbat.jpg",
    "/image/VuonTraiCayCauKe.jpg",
    "/image/ChoNoiCauKe.jpg"
  ];

  // Chọn banner ngẫu nhiên khi component mount
  useEffect(() => {
    const getRandomBanner = () => {
      const randomIndex = Math.floor(Math.random() * bannerImages.length);
      return bannerImages[randomIndex];
    };

    setRandomBanner(getRandomBanner());
  }, []);

  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar introCompleted={true} />

      {/* Header Banner */}
      <div className="relative h-96 w-full overflow-hidden">
        {randomBanner && (
          <Image
            src={randomBanner}
            alt="Giới Thiệu Trà Vinh"
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className={`${playfair.className} text-4xl md:text-6xl font-bold mb-4`}>
              Giới Thiệu Trà Vinh
            </h1>
            <p className={`${lora.className} text-lg md:text-xl max-w-2xl mx-auto px-4`}>
              Khám phá vẻ đẹp và văn hóa độc đáo của tỉnh Trà Vinh
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20"></div>
      </div>

      {/* Video Section với viền mỏng */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className={`${playfair.className} text-3xl font-bold text-center mb-12`}>
            Video Giới Thiệu
          </h2>
          
          {/* Main Video với viền mỏng 1px */}
          <div className="mb-8">
            <VideoPlayer
              src="/videos/tra-vinh-intro.mp4"
              poster={randomBanner}
              title="Trà Vinh is a province in the Mekong Delta"
              className="h-96 md:h-[500px]"
            />
          </div>

          {/* Video Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="relative h-24 md:h-32 rounded-lg overflow-hidden border border-orange-200 hover:border-orange-400 transition-colors cursor-pointer">
              <Image
                src="/image/ditichquocgia/aobaom.jpg"
                alt="Ao Bà Om"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <p className="text-white text-xs md:text-sm font-medium text-center px-2">
                  Ao Bà Om - Danh lam thắng cảnh
                </p>
              </div>
            </div>

            <div className="relative h-24 md:h-32 rounded-lg overflow-hidden border border-orange-200 hover:border-orange-400 transition-colors cursor-pointer">
              <Image
                src="/image/ditichquocgia/chuaang.jpg"
                alt="Chùa Âng"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <p className="text-white text-xs md:text-sm font-medium text-center px-2">
                  Chùa Âng - Văn hóa Khmer
                </p>
              </div>
            </div>

            <div className="relative h-24 md:h-32 rounded-lg overflow-hidden border border-orange-200 hover:border-orange-400 transition-colors cursor-pointer">
              <Image
                src="/image/VuonTraiCayCauKe.jpg"
                alt="Vườn Trái Cây"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <p className="text-white text-xs md:text-sm font-medium text-center px-2">
                  Vườn trái cây Cầu Kè
                </p>
              </div>
            </div>

            <div className="relative h-24 md:h-32 rounded-lg overflow-hidden border border-orange-200 hover:border-orange-400 transition-colors cursor-pointer">
              <Image
                src="/image/ChoNoiCauKe.jpg"
                alt="Chợ Nổi"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <p className="text-white text-xs md:text-sm font-medium text-center px-2">
                  Chợ nổi Cầu Kè
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="text-center mb-8">
            <p className={`${lora.className} text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto`}>
              Trà Vinh là một tỉnh thuộc vùng Đồng bằng sông Cửu Long, nổi tiếng với nền văn hóa đa dạng, 
              kinh tế phát triển và những danh lam thắng cảnh tuyệt đẹp. Nơi đây là sự giao thoa hài hòa 
              giữa văn hóa Kinh, Khmer và Hoa, tạo nên một bản sắc văn hóa độc đáo và phong phú.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full transition-colors font-medium"
            >
              Quay lại Trang Chủ
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
