"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { playfair, lora } from "@/components/Introduction";
import { FaMapMarkerAlt, FaCalendarAlt, FaInfoCircle, FaSearch } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface Site {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  established: string;
  recognitionDate: string;
  recognition: string;
}

export default function DiTichPage() {
  const [sites, setSites] = useState<Site[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  // Refs cho animation
  const headerRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const sitesRef = useRef<HTMLDivElement>(null);

  // Sử dụng GSAP cho animation
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }

    if (filterRef.current) {
      gsap.fromTo(
        filterRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: "power2.out",
          delay: 0.3 
        }
      );
    }

    if (sitesRef.current) {
      const siteItems = sitesRef.current.querySelectorAll('.site-item');
      gsap.fromTo(
        siteItems,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.5
        }
      );
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const sitesResponse = await fetch("http://localhost:3000/sites");
        const sitesData = await sitesResponse.json();
        setSites(sitesData);
      } catch (error) {
        setError("Lỗi khi tải dữ liệu");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

    const filteredSites = sites.filter((site) => {
      if (filter === "all") return true;
      if (filter === "quocgia" && site.image.includes("ditichquocgia")) return true;
      if (filter === "tinh" && site.image.includes("ditichcaptinh")) return true;
      return false;
    }).filter((site) =>
      site.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  if (error) {
    return (
      <main className="min-h-screen bg-stone-50">
        <Navbar introCompleted={true} />
        <div className="container mx-auto py-20 px-4">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Lỗi! </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-stone-50">
        <Navbar introCompleted={true} />
        <div className="container mx-auto py-20 px-4">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-600"></div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar introCompleted={true} />

      {/* Banner với gradient và hình ảnh nền */}
      <div className="relative py-24 bg-gradient-to-r from-orange-900 to-amber-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/images/texture-old-paper.png" 
            alt="Texture" 
            fill 
            className="object-cover mix-blend-multiply"
          />
        </div>
        <div className="absolute inset-0 z-0 opacity-30">
          <Image 
            src="/images/chua-ang.jpg" 
            alt="Di tích" 
            fill 
            className="object-cover object-center"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10" ref={headerRef}>
          <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6`}>
            Di Tích Lịch Sử <span className="text-orange-300">Trà Vinh</span>
          </h1>
          <p className={`${lora.className} text-lg md:text-xl text-orange-100 text-center max-w-3xl mx-auto`}>
            Khám phá những công trình kiến trúc, di tích lịch sử và văn hóa đặc sắc của vùng đất Trà Vinh
          </p>
        </div>
      </div>

      <div className="container mx-auto py-12 px-6">
        {/* Bộ lọc và tìm kiếm */}
        <div className="mb-12 p-6 bg-white rounded-xl shadow-md" ref={filterRef}>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setFilter("all")}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${filter === "all" ? "bg-orange-600 text-white shadow-md" : "bg-orange-50 text-orange-700 hover:bg-orange-100"}`}
              >
                Tất cả di tích
              </button>
              <button
                onClick={() => setFilter("quocgia")}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${filter === "quocgia" ? "bg-orange-600 text-white shadow-md" : "bg-orange-50 text-orange-700 hover:bg-orange-100"}`}
              >
                Cấp Quốc Gia
              </button>
              <button
                onClick={() => setFilter("tinh")}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${filter === "tinh" ? "bg-green-600 text-white shadow-md" : "bg-green-50 text-green-700 hover:bg-green-100"}`}
              >
                Cấp Tỉnh
              </button>
            </div>

            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Tìm kiếm di tích..."
                className="w-full px-5 py-3 pr-12 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Danh sách di tích */}
        {filteredSites.length === 0 ? (
          <div className="text-center py-12">
            <FaInfoCircle className="text-orange-500 text-4xl mx-auto mb-4" />
            <h3 className={`${playfair.className} text-2xl font-bold mb-2`}>
              Không tìm thấy di tích
            </h3>
            <p className={`${lora.className} text-gray-600`}>
              Không có di tích nào phù hợp với tiêu chí tìm kiếm của bạn.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSites
              .filter((site, index, self) => 
                index === self.findIndex((s) => s.id === site.id)
              )
              .map((site) => (
                <div
                  key={site.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={`/image/${site.image}`}
                      alt={site.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-orange-600 text-white text-xs px-2 py-1 rounded-full">
                      {site.image.includes("ditichquocgia")
                        ? "Cấp quốc gia"
                        : "Cấp tỉnh"}
                    </div>
                  </div>
                  <div className="p-4">
                    <h2
                      className={`${playfair.className} text-xl font-bold text-gray-800 mb-2`}
                    >
                      {site.name}
                    </h2>
                    <p
                      className={`${lora.className} text-gray-600 text-sm mb-4 line-clamp-2`}
                    >
                      {site.description}
                    </p>
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <FaMapMarkerAlt className="mr-2 text-orange-500" />
                      {site.location}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <FaCalendarAlt className="mr-2 text-orange-500" />
                      {site.established}
                    </div>
                    <Link
                      href={`/di-tich/${site.id}`}
                      className="inline-flex items-center text-orange-600 hover:text-orange-700"
                    >
                      <span>Xem chi tiết</span>
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        )}

        {filteredSites.length === 0 && !loading && (
          <div className="text-center py-12">
            <FaInfoCircle className="text-orange-500 text-4xl mx-auto mb-4" />
            <h3 className={`${playfair.className} text-2xl font-bold mb-2`}>
              Không tìm thấy di tích
            </h3>
            <p className={`${lora.className} text-gray-600`}>
              Không có di tích nào phù hợp với tiêu chí tìm kiếm của bạn.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
