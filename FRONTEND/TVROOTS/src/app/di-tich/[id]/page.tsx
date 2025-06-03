"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { playfair, lora } from "@/components/Introduction";
import { FaMapMarkerAlt, FaCalendarAlt, FaHistory, FaInfoCircle, FaArrowLeft } from "react-icons/fa";

interface SiteDetail {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  established: string;
  recognition: string;
  details: {
    history: string;
    culturalValue: string[];
    historicalValue: string[];
    services: string[];
    info: string[];
    mapUrl: string;
    directionsUrl: string;
  };
}

import React from "react";

export default function SiteDetailPage({ params }: { params: { id: string } }) {
  const [site, setSite] = React.useState<SiteDetail | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const id = params.id;
        const response = await fetch(`http://localhost:3000/sites/${id}`);
        
        if (!response.ok) {
          throw new Error("Không thể tải thông tin di tích");
        }
        
        const data = await response.json();
        setSite(data);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
        setError("Không thể tải thông tin di tích. Vui lòng thử lại sau.");
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchData();
    }
  }, [params]);

  if (loading) {
    return (
      <main className="min-h-screen bg-stone-50">
        <Navbar introCompleted={true} />
        <div className="flex justify-center items-center h-[calc(100vh-80px)]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      </main>
    );
  }

  if (error || !site) {
    return (
      <main className="min-h-screen bg-stone-50">
        <Navbar introCompleted={true} />
        <div className="container mx-auto px-4 py-16 text-center">
          <FaInfoCircle className="text-orange-500 text-5xl mx-auto mb-4" />
          <h1 className={`${playfair.className} text-3xl font-bold mb-4`}>
            {error || "Không tìm thấy di tích"}
          </h1>
          <p className={`${lora.className} text-gray-600 mb-8`}>
            Di tích bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
          </p>
          <Link
            href="/di-tich"
            className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Quay lại danh sách di tích
          </Link>
        </div>
      </main>
    );
  }

  const isSiteNational = site.image.includes("ditichquocgia");

  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar introCompleted={true} />

      {/* Hero section */}
      <div className="relative h-96 w-full">
        <Image
          src={`/images/${site.image}`}
          alt={site.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <div className="inline-block bg-orange-600 text-white text-sm px-3 py-1 rounded-full mb-4">
              {isSiteNational ? "Di tích cấp quốc gia" : "Di tích cấp tỉnh"}
            </div>
            <h1
              className={`${playfair.className} text-4xl md:text-5xl font-bold text-white mb-4`}
            >
              {site.name}
            </h1>
            <div className="flex flex-wrap gap-4 text-white">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                {site.location}
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2" />
                {site.established}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-orange-600">
              Trang chủ
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/di-tich" className="text-gray-500 hover:text-orange-600">
              Di tích
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-orange-600">{site.name}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2
                className={`${playfair.className} text-2xl font-bold text-gray-800 mb-4 flex items-center`}
              >
                <FaInfoCircle className="mr-2 text-orange-500" />
                Giới thiệu
              </h2>
              <p className={`${lora.className} text-gray-700 mb-6 leading-relaxed`}>
                {site.description}
              </p>

              <h2
                className={`${playfair.className} text-2xl font-bold text-gray-800 mb-4 flex items-center`}
              >
                <FaHistory className="mr-2 text-orange-500" />
                Lịch sử
              </h2>
              <p className={`${lora.className} text-gray-700 mb-6 leading-relaxed`}>
                {site.details.history}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3
                    className={`${playfair.className} text-xl font-bold text-gray-800 mb-4`}
                  >
                    Giá trị văn hóa
                  </h3>
                  <ul className="space-y-2">
                    {site.details.culturalValue.map((value, index) => (
                      <li
                        key={index}
                        className={`${lora.className} flex items-start`}
                      >
                        <span className="text-orange-500 mr-2">•</span>
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3
                    className={`${playfair.className} text-xl font-bold text-gray-800 mb-4`}
                  >
                    Giá trị lịch sử
                  </h3>
                  <ul className="space-y-2">
                    {site.details.historicalValue.map((value, index) => (
                      <li
                        key={index}
                        className={`${lora.className} flex items-start`}
                      >
                        <span className="text-orange-500 mr-2">•</span>
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2
                className={`${playfair.className} text-2xl font-bold text-gray-800 mb-4`}
              >
                Vị trí
              </h2>
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                {site.details.mapUrl ? (
                  <iframe
                    src={site.details.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    Bản đồ chưa được cập nhật
                  </div>
                )}
              </div>
              <div className="mt-4">
                <a
                  href={site.details.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  <FaMapMarkerAlt className="mr-2" />
                  Chỉ đường đến đây
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2
                className={`${playfair.className} text-xl font-bold text-gray-800 mb-4`}
              >
                Thông tin tham quan
              </h2>
              <ul className="space-y-4">
                {site.details.info.map((info, index) => (
                  <li
                    key={index}
                    className={`${lora.className} flex items-start pb-4 ${
                      index < site.details.info.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >
                    <span className="text-orange-500 mr-2">•</span>
                    {info}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2
                className={`${playfair.className} text-xl font-bold text-gray-800 mb-4`}
              >
                Dịch vụ
              </h2>
              <ul className="space-y-4">
                {site.details.services.map((service, index) => (
                  <li
                    key={index}
                    className={`${lora.className} flex items-start pb-4 ${
                      index < site.details.services.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >
                    <span className="text-orange-500 mr-2">•</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
