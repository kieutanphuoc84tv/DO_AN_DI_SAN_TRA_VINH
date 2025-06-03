"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { playfair, lora } from "@/components/Introduction";
import { FaMapMarkerAlt, FaInfoCircle, FaHotel, FaUtensils, FaRoute } from "react-icons/fa";

interface TourSpot {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  category: string;
  highlights: string[];
}

export default function DuLichPage() {
  const [tourSpots, setTourSpots] = useState<TourSpot[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Mô phỏng việc tải dữ liệu từ API
    const fetchData = async () => {
      try {
        setLoading(true);
        // Dữ liệu mẫu cho các điểm du lịch
        const sampleData: TourSpot[] = [
          {
            id: "ao-ba-om",
            name: "Ao Bà Om",
            image: "/image/ditichquocgia/aobaom.jpg",
            description: "Ao Bà Om là một trong những địa điểm du lịch nổi tiếng nhất của Trà Vinh, thu hút nhiều du khách đến tham quan và nghỉ dưỡng.",
            location: "Phường 8, TP. Trà Vinh",
            category: "danh-lam",
            highlights: [
              "Khung cảnh thiên nhiên tuyệt đẹp",
              "Không gian yên tĩnh, mát mẻ",
              "Khu vực picnic lý tưởng"
            ]
          },
          {
            id: "chua-ang",
            name: "Chùa Âng",
            image: "/image/ditichquocgia/chuaang.jpg",
            description: "Chùa Âng là ngôi chùa Khmer cổ nổi tiếng với kiến trúc độc đáo và giá trị văn hóa lịch sử to lớn.",
            location: "Phường 8, TP. Trà Vinh",
            category: "tam-linh",
            highlights: [
              "Kiến trúc Khmer truyền thống",
              "Bảo tàng văn hóa Khmer",
              "Lễ hội Ok Om Bok hàng năm"
            ]
          },
          {
            id: "bien-ba-dong",
            name: "Biển Ba Động",
            image: "/image/ditichcaptinh/nuongnuong.jpg",
            description: "Biển Ba Động là bãi biển hoang sơ với bờ cát trắng mịn và hàng dừa xanh mát, là điểm đến lý tưởng cho du khách muốn tránh xa sự ồn ào.",
            location: "Huyện Duyên Hải, Trà Vinh",
            category: "bien",
            highlights: [
              "Bãi biển hoang sơ, ít người",
              "Hải sản tươi ngon",
              "Hoàng hôn tuyệt đẹp"
            ]
          },
          {
            id: "vuon-trai-cay",
            name: "Vườn Trái Cây Cầu Kè",
            image: "/image/VuonTraiCayCauKe.jpg",
            description: "Vườn trái cây Cầu Kè là điểm du lịch sinh thái nổi tiếng, nơi du khách có thể thưởng thức nhiều loại trái cây đặc sản của vùng đất Trà Vinh.",
            location: "Huyện Cầu Kè, Trà Vinh",
            category: "sinh-thai",
            highlights: [
              "Trái cây tươi ngon quanh năm",
              "Không gian xanh mát",
              "Trải nghiệm hái trái cây"
            ]
          },
          {
            id: "chua-hang",
            name: "Chùa Hang",
            image: "/image/ditichcaptinh/chuachongbat.jpg",
            description: "Chùa Hang là ngôi chùa cổ nằm trong hang động tự nhiên, tạo nên một không gian tâm linh độc đáo và huyền bí.",
            location: "Huyện Châu Thành, Trà Vinh",
            category: "tam-linh",
            highlights: [
              "Kiến trúc độc đáo trong hang động",
              "Không gian tâm linh yên tĩnh",
              "Cảnh quan thiên nhiên tuyệt đẹp"
            ]
          },
          {
            id: "cho-noi-cau-ke",
            name: "Chợ Nổi Cầu Kè",
            image: "/image/ChoNoiCauKe.jpg",
            description: "Chợ nổi Cầu Kè là nơi giao thương truyền thống trên sông nước, mang đậm bản sắc văn hóa sông nước miền Tây.",
            location: "Huyện Cầu Kè, Trà Vinh",
            category: "van-hoa",
            highlights: [
              "Trải nghiệm chợ nổi đặc trưng",
              "Ẩm thực đa dạng",
              "Giao lưu văn hóa địa phương"
            ]
          }
        ];
        
        setTourSpots(sampleData);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredSpots = tourSpots.filter((spot) => {
    const matchesFilter = filter === "all" || spot.category === filter;
    const matchesSearch = spot.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar introCompleted={true} />

      {/* Banner */}
      <div className="relative h-80 w-full">
        <Image
          src="/images/du-lich-banner.jpg"
          alt="Du lịch Trà Vinh"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h1
              className={`${playfair.className} text-4xl md:text-5xl font-bold text-white mb-4`}
            >
              Du Lịch Trà Vinh
            </h1>
            <p className={`${lora.className} text-white text-lg max-w-2xl mx-auto`}>
              Khám phá vẻ đẹp thiên nhiên, văn hóa và ẩm thực đặc sắc của vùng đất Trà Vinh
            </p>
          </div>
        </div>
      </div>

      {/* Thông tin du lịch */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <FaHotel className="text-4xl text-orange-500 mx-auto mb-4" />
            <h2 className={`${playfair.className} text-xl font-bold mb-3`}>Lưu Trú</h2>
            <p className={`${lora.className} text-gray-600 mb-4`}>
              Nhiều lựa chọn từ khách sạn cao cấp đến homestay mang đậm bản sắc địa phương.
            </p>
            <Link
              href="#"
              className="inline-block text-orange-600 hover:text-orange-700 font-medium"
            >
              Xem thêm
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <FaUtensils className="text-4xl text-orange-500 mx-auto mb-4" />
            <h2 className={`${playfair.className} text-xl font-bold mb-3`}>Ẩm Thực</h2>
            <p className={`${lora.className} text-gray-600 mb-4`}>
              Khám phá ẩm thực đặc trưng của Trà Vinh với nhiều món ngon hấp dẫn.
            </p>
            <Link
              href="#"
              className="inline-block text-orange-600 hover:text-orange-700 font-medium"
            >
              Xem thêm
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <FaRoute className="text-4xl text-orange-500 mx-auto mb-4" />
            <h2 className={`${playfair.className} text-xl font-bold mb-3`}>Tour Du Lịch</h2>
            <p className={`${lora.className} text-gray-600 mb-4`}>
              Các tour du lịch hấp dẫn giúp bạn khám phá trọn vẹn vẻ đẹp của Trà Vinh.
            </p>
            <Link
              href="#"
              className="inline-block text-orange-600 hover:text-orange-700 font-medium"
            >
              Xem thêm
            </Link>
          </div>
        </div>

        {/* Bộ lọc và tìm kiếm */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full ${
                filter === "all"
                  ? "bg-orange-600 text-white"
                  : "bg-orange-100 text-orange-800"
              }`}
            >
              Tất cả
            </button>
            <button
              onClick={() => setFilter("danh-lam")}
              className={`px-4 py-2 rounded-full ${
                filter === "danh-lam"
                  ? "bg-orange-600 text-white"
                  : "bg-orange-100 text-orange-800"
              }`}
            >
              Danh lam thắng cảnh
            </button>
            <button
              onClick={() => setFilter("tam-linh")}
              className={`px-4 py-2 rounded-full ${
                filter === "tam-linh"
                  ? "bg-orange-600 text-white"
                  : "bg-orange-100 text-orange-800"
              }`}
            >
              Du lịch tâm linh
            </button>
            <button
              onClick={() => setFilter("bien")}
              className={`px-4 py-2 rounded-full ${
                filter === "bien"
                  ? "bg-orange-600 text-white"
                  : "bg-orange-100 text-orange-800"
              }`}
            >
              Biển
            </button>
            <button
              onClick={() => setFilter("sinh-thai")}
              className={`px-4 py-2 rounded-full ${
                filter === "sinh-thai"
                  ? "bg-orange-600 text-white"
                  : "bg-orange-100 text-orange-800"
              }`}
            >
              Du lịch sinh thái
            </button>
            <button
              onClick={() => setFilter("van-hoa")}
              className={`px-4 py-2 rounded-full ${
                filter === "van-hoa"
                  ? "bg-orange-600 text-white"
                  : "bg-orange-100 text-orange-800"
              }`}
            >
              Du lịch văn hóa
            </button>
          </div>
          <div className="w-full md:w-auto">
            <input
              type="text"
              placeholder="Tìm kiếm điểm du lịch..."
              className="px-4 py-2 border border-gray-300 rounded-full w-full md:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Danh sách điểm du lịch */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpots.map((spot) => (
              <div
                key={spot.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={spot.image}
                    alt={spot.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-600 text-white text-xs px-2 py-1 rounded-full">
                    {spot.category === "danh-lam" && "Danh lam thắng cảnh"}
                    {spot.category === "tam-linh" && "Du lịch tâm linh"}
                    {spot.category === "bien" && "Biển"}
                    {spot.category === "sinh-thai" && "Du lịch sinh thái"}
                    {spot.category === "van-hoa" && "Du lịch văn hóa"}
                  </div>
                </div>
                <div className="p-4">
                  <h2
                    className={`${playfair.className} text-xl font-bold text-gray-800 mb-2`}
                  >
                    {spot.name}
                  </h2>
                  <p
                    className={`${lora.className} text-gray-600 text-sm mb-4 line-clamp-2`}
                  >
                    {spot.description}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <FaMapMarkerAlt className="mr-2 text-orange-500" />
                    {spot.location}
                  </div>
                  <h3 className={`${playfair.className} text-sm font-bold text-gray-700 mb-2`}>
                    Điểm nổi bật:
                  </h3>
                  <ul className="text-sm text-gray-600 mb-4">
                    {spot.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start mb-1">
                        <span className="text-orange-500 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/du-lich/${spot.id}`}
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

        {filteredSpots.length === 0 && !loading && (
          <div className="text-center py-12">
            <FaInfoCircle className="text-orange-500 text-4xl mx-auto mb-4" />
            <h3 className={`${playfair.className} text-2xl font-bold mb-2`}>
              Không tìm thấy điểm du lịch
            </h3>
            <p className={`${lora.className} text-gray-600`}>
              Không có điểm du lịch nào phù hợp với tiêu chí tìm kiếm của bạn.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}

