"use client";
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

interface Site {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  established: string;
  recognition: string;
}

interface SiteCardProps {
  site: Site;
  colorTheme: "amber" | "green";
  index: number;
}

export default function SiteCard({ site, colorTheme, index }: SiteCardProps) {
  const nameMapping: Record<string, string> = {
    "bananminhtinhtravinh": "Ba Nan Minh Tịnh (Trà Vinh)",
    "cancu": "Căn Cứ",
    "cansnom": "Căn Snom",
    "chroitansa": "Chroi Tansa",
    "chuabagiam": "Chùa Bà Giám",
    "chuabamom": "Chùa Bà Móm",
    "chuacha": "Chùa Cha",
    "chuachongbat": "Chùa Chống Bát",
    "chuaco": "Chùa Cô",
    "chualapang": "Chùa La Pang",
    "chualongthanh": "Chùa Long Thành",
    "dinhhoihuu": "Đình Hội Hữu",
    "dinhkhanhhung": "Đình Khánh Hưng",
    "dinhminhthuan": "Đình Minh Thuận",
    "dinhmyan": "Đình Mỹ An",
    "dinhphuduc": "Đình Phú Đức",
    "dinhphuocloc": "Đình Phước Lộc",
    "dongkhoimylong": "Đồng Khởi Mỹ Long",
    "huynhky": "Huỳnh Ký",
    "krapoumchhouk": "Krapoum Chhouk",
    "mieucontrung": "Miếu Cửu Trung",
    "mieutienvang": "Miếu Tiên Vàng",
    "mieuxubalaghi": "Miếu Xú Ba Laghí (hoặc kiểm tra lại chính tả nếu đây là tên gốc Khmer)",
    "nuongnuong": "Nuông Nuông",
    "omich": "Chùa Ô Mịch",
    "phnoompung": "Chùa Phnoompung",
    "phnosankethmay": "Phno San Kethmay (Phnom Sankethmay)",
    "phuocloc": "Chùa Phước Lộc",
    "phuoclong": "Chùa Phước Long",
    "phuocmy": "Chùa Phước Mỹ",
    "tarom": "Chùa Tarom",
    "thanhtinhthanhlong": "Thánh Tịnh Thanh Long",
    "thanlonghauthuong": "Thạnh Long Hậu Thượng",
    "trakhup": "Trà Khúp",
    "vellec": "Chùa Velle"
  };

  const colorClasses = {
    amber: {
      title: "text-amber-800",
      icon: "text-amber-600",
      hover: "hover:border-amber-400",
      shadow: "group-hover:shadow-amber-200/40"
    },
    green: {
      title: "text-green-800",
      icon: "text-green-600",
      hover: "hover:border-green-400",
      shadow: "group-hover:shadow-green-200/40"
    }
  };

  const colors = colorClasses[colorTheme];

  const displayName = nameMapping[site.name.toLowerCase()] || site.name;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/sites/${site.id}`}>
        <div className={`group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 ${colors.hover}`}>
          <div className="h-64 overflow-hidden relative">
            <Image
              src={site.image && site.image.trim() !== "" ? `/image/${site.image}` : "/image/logodhtravinh.png"}
              alt={displayName}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 p-4">
                <p className="text-white text-sm font-medium">Xem chi tiết</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h3 className={`text-xl font-semibold mb-2 ${colors.title} group-hover:underline decoration-2 underline-offset-2`}>
              {displayName}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{site.description || "Chưa có thông tin mô tả"}</p>
            <div className="flex items-center text-gray-500 mb-2">
              <FaMapMarkerAlt className={`mr-2 ${colors.icon}`} />
              <span>{site.location || "Chưa có thông tin địa điểm"}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <FaCalendarAlt className={`mr-2 ${colors.icon}`} />           
              <span>Công nhận: {site.recognition}</span>
            </div>
          </div>  
        </div>
      </Link>
    </motion.div>
  );
}
