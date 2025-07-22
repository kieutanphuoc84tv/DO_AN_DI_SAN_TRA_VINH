"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/sites/SiteHeader";
import SiteCard from "@/components/sites/SiteCard";
import { motion } from "framer-motion";
import { playfair } from "@/components/Introduction";

interface Site {
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
    mapUrl?: string;
    directionsUrl?: string;
  };
}

export default function DiTichTraVinhPage() {
  const [sites, setSites] = useState<Site[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lấy danh sách tất cả di tích (cả cấp tỉnh và quốc gia)
        const sitesResponse = await fetch("http://localhost:3000/sites");
        if (!sitesResponse.ok) {
          throw new Error("Không thể lấy dữ liệu di tích");
        }
        const allSitesData = await sitesResponse.json();

        // Hiển thị tất cả các di tích, không lọc theo cấp
        setSites(allSitesData);
        setLoading(false);
      } catch (err) {
        setError("Đã xảy ra lỗi khi tải dữ liệu. Vui lòng thử lại sau.");
        setLoading(false);
        console.error(err);
      }
    };

    fetchData();
  }, []);

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

  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar introCompleted={true} />

      {/* Banner */}
      <SiteHeader 
        title="Di Tích Trà Vinh" 
        description="Khám phá những di tích lịch sử và văn hóa đặc sắc tại Trà Vinh"
        colorTheme="green"
      />

      {/* Danh sách di tích */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`${playfair.className} text-3xl font-bold mb-12 text-center`}>Danh Sách Di Tích Trà Vinh</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sites.map((site, index) => (
                <SiteCard 
                  key={site.id}
                  site={site}
                  colorTheme="green"
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
