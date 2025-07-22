"use client";
import { playfair, lora } from "@/components/Introduction";
import Image from "next/image";
import { FaCalendarAlt, FaLandmark } from "react-icons/fa";

export default function MedievalPeriod() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-amber-100/50 history-item">
      <h2 className={`${playfair.className} text-3xl font-bold mb-8 text-amber-800 inline-flex items-center border-b-2 border-amber-200 pb-2`}>
        <FaLandmark className="mr-3 text-amber-600" />
        Thời kỳ trung đại
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div className="order-2 lg:order-1">
          <p className={`${lora.className} text-gray-700 mb-6 leading-relaxed`}>
            Từ thế kỷ VII đến thế kỷ XVII, Trà Vinh trải qua thời kỳ trung đại với nhiều biến động lịch sử quan trọng. Đây là giai đoạn vùng đất này chịu ảnh hưởng sâu sắc của các nền văn hóa Chăm Pa và Khmer.
          </p>
          <p className={`${lora.className} text-gray-700 mb-6 leading-relaxed`}>
            Trong thời kỳ này, Trà Vinh là một phần của vương quốc Chăm Pa (thế kỷ VII-IX) và sau đó thuộc về đế chế Khmer (thế kỷ IX-XVII). Chính vì vậy, đến ngày nay, vùng đất này vẫn còn lưu giữ nhiều di sản văn hóa đặc sắc của người Khmer.
          </p>
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mt-8">
            <h3 className={`${playfair.className} text-xl font-semibold mb-4 text-amber-800 flex items-center`}>
              <FaCalendarAlt className="mr-2 text-amber-600" /> Niên đại quan trọng
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-2">
              <li><span className="font-semibold">Thế kỷ VII-IX:</span> Trà Vinh thuộc vương quốc Chăm Pa</li>
              <li><span className="font-semibold">Thế kỷ IX-XVII:</span> Trà Vinh thuộc đế chế Khmer, nhiều ngôi chùa Khmer được xây dựng</li>
              <li><span className="font-semibold">Thế kỷ XVII:</span> Người Việt bắt đầu di cư đến Trà Vinh, đánh dấu sự chuyển giao sang thời kỳ cận đại</li>
            </ul>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 relative h-80 lg:h-auto rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/image/lichsu/trungdai/chua_khmer.jpg"
            alt="Chùa Khmer cổ tại Trà Vinh"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute bottom-0 p-4">
              <p className="text-white text-sm font-medium">Chùa Khmer cổ tại Trà Vinh</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h3 className={`${playfair.className} text-2xl font-bold mb-5 text-amber-700`}>
          Ảnh hưởng văn hóa Khmer
        </h3>
        <p className={`${lora.className} text-gray-700 mb-5 leading-relaxed`}>
          Thời kỳ trung đại để lại dấu ấn sâu đậm của văn hóa Khmer tại Trà Vinh. Các ngôi chùa Khmer cổ kính như Âng, Kom Pong, Hang được xây dựng trong giai đoạn này và trở thành những di tích lịch sử, văn hóa quan trọng của tỉnh.
        </p>
        <p className={`${lora.className} text-gray-700 mb-5 leading-relaxed`}>
          Kiến trúc chùa Khmer tại Trà Vinh mang đậm phong cách Angkor với những họa tiết trang trí tinh xảo, các tượng thần Hindu và Phật giáo. Đây là minh chứng cho sự giao thoa văn hóa phong phú của vùng đất này.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-100 hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/image/lichsu/trungdai/chua_ang.jpg"
                alt="Chùa Âng"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-amber-800 mb-1">Chùa Âng</h4>
              <p className="text-sm text-gray-600">Một trong những ngôi chùa Khmer cổ nhất tại Trà Vinh</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-100 hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/image/lichsu/trungdai/dieu_khac.jpg"
                alt="Điêu khắc Khmer"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-amber-800 mb-1">Điêu khắc Khmer</h4>
              <p className="text-sm text-gray-600">Nghệ thuật điêu khắc tinh xảo của người Khmer</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-100 hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/image/lichsu/trungdai/ghe_ngo.jpg"
                alt="Lễ hội Khmer"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-amber-800 mb-1">Lễ hội truyền thống</h4>
              <p className="text-sm text-gray-600">Các lễ hội văn hóa Khmer vẫn được duy trì đến ngày nay</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
