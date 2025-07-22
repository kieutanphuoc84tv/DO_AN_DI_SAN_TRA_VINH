import Image from "next/image";
import Link from "next/link";
import { playfair, lora } from "../Introduction";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface FeaturedItemProps {
  title: string;
  category: string;
  description: string;
  image: string;
  className?: string;
  size?: "small" | "large";
}

const FeaturedItem = ({
  title,
  category,
  description,
  image,
  className,
  size = "small",
}: FeaturedItemProps) => {
  return (
    // Refined card styling: subtle border, slightly stronger base shadow, hover border color
    <div
      className={`${className} group bg-white rounded-xl shadow-lg border border-orange-100/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-orange-300`}
    >
      <div
        className={`relative ${size === "large" ? "h-80 lg:h-96" : "h-56 lg:h-64"
          } overflow-hidden`}
      >
        <Image
          src={image && image.trim() !== "" ? image : "/image/logodhtravinh.png"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Adjusted gradient overlay for theme consistency */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        {/* Refined category badge */}
        <div className="absolute top-4 right-4 bg-orange-700 shadow-sm text-white px-4 py-1.5 text-sm font-medium rounded-full">
          {category}
        </div>
      </div>
      <div className="p-6 lg:p-8">
        <h4
          className={`${playfair.className} text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors`}
        >
          {title}
        </h4>
        {/* Slightly darker description text */}
        <p className={`${lora.className} text-gray-700 text-sm mb-6`}>
          {description}
        </p>
        <Link
          href="#"
          className="inline-flex items-center text-orange-600 group-hover:text-orange-700 font-medium text-sm transition-colors"
        >
          <span>Xem Chi Tiết</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 group-hover:translate-x-1 transition-transform"
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

const FeaturedSites = () => {
  const featuredSitesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!featuredSitesRef.current) return;
    // Animation cho các mục nổi bật
    const featuredItems =
      featuredSitesRef.current.querySelectorAll(".featured-item");
    gsap.fromTo(
      featuredItems,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featuredSitesRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  return (
    <div className="pb-16">
      <div className="flex justify-between items-center mb-16">
        <h3
          className={`${playfair.className} text-3xl md:text-4xl font-bold text-orange-800`}
        >
          Di Tích Tiêu Biểu
        </h3>
        <div className="hidden md:block h-[1px] flex-grow bg-orange-300/50 ml-8 mr-6"></div>
        <div className="flex gap-4">
          <Link
            href="/di-tich"
            className="text-orange-700 hover:text-orange-900 transition-colors text-sm md:text-base flex items-center gap-1 group bg-orange-50 px-3 py-1.5 rounded-full"
          >
            <span>Di tích Trà Vinh</span>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>

      <div
        ref={featuredSitesRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
      >
        {/* Item 1 */}
        <FeaturedItem
          title="Đền thờ Bác Hồ"
          category="Cấp Quốc Gia"
          description="Công trình văn hóa tâm linh trọng điểm với diện tích 5,4 ha, là biểu tượng của lòng thành kính và biết ơn của nhân dân Trà Vinh."
          image="/image/ditichquocgia/denthohochiminh.jpg"
          className="featured-item"
          size="small" // Changed from large to small for consistency
        />

        {/* Item 2 */}
        <FeaturedItem
          title="Ao Bà Om"
          category="Danh Thắng"
          description="Di tích danh thắng cấp quốc gia, là một trong những địa điểm du lịch nổi tiếng nhất của Trà Vinh."
          image="/image/ditichquocgia/aobaom.jpg"
          className="featured-item"
          size="small"
        />

        {/* Item 3 */}
        <FeaturedItem
          title="Chùa Ang"
          category="Di Tích Tôn Giáo"
          description="Ngôi chùa cổ mang đậm kiến trúc Khmer, là minh chứng cho sự giao thoa văn hóa đặc sắc."
          image="/image/ditichcaptinh/chuacha.jpg"
          className="featured-item"
          size="small"
        />

        {/* Item 4 */}
        {/* Removed as per user request */}

        {/* Item 5 */}
        {/* Removed as per user request */}
      </div>
    </div>
  );
};
export default FeaturedSites;
