"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/sites/SiteHeader";
import SiteOverview from "@/components/sites/SiteOverview";
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

interface OverviewData {
  introduction: {
    title: string;
    description: string;
    values: Array<{
      title: string;
      description: string;
    }>;
    conclusion: string;
  };
  statistics: {
    total: number;
    categories: Array<{
      name: string;
      count: number;
    }>;
  };
  distribution: Array<{
    location: string;
    count: number;
  }>;
  generalInfo: string[];
}

export default function DiTichQuocGiaPage() {
  const [sites, setSites] = useState<Site[]>([]);
  const [overview, setOverview] = useState<OverviewData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lấy danh sách di tích
        const sitesResponse = await fetch("http://localhost:3000/sites");
        if (!sitesResponse.ok) {
          throw new Error("Không thể lấy dữ liệu di tích");
        }
        const allSitesData = await sitesResponse.json();
        
        // Lọc di tích cấp quốc gia dựa vào đường dẫn hình ảnh
        const nationalSites = allSitesData.filter((site: Site) => 
          site.image && site.image.includes("ditichquocgia")
        );
        setSites(nationalSites);

        // Lấy thông tin tổng quan về di tích cấp quốc gia
        const overviewResponse = await fetch("http://localhost:3000/sites/overview?type=quocgia");
        if (!overviewResponse.ok) {
          throw new Error("Không thể lấy dữ liệu tổng quan");
        }
        const overviewData = await overviewResponse.json();
        setOverview(overviewData);

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
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-amber-600"></div>
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
        title="Di Tích Cấp Quốc Gia" 
        description="Khám phá những di sản văn hóa quý giá được công nhận cấp quốc gia tại Trà Vinh"
        colorTheme="amber"
      />

      {/* Tổng quan */}
      {overview && (
        <SiteOverview overview={overview} colorTheme="amber" />
      )}

      {/* Danh sách di tích */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`${playfair.className} text-3xl font-bold mb-12 text-center`}>Danh Sách Di Tích Cấp Quốc Gia</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sites.map((site, index) => (
                <SiteCard 
                  key={site.id}
                  site={site}
                  colorTheme="amber"
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
