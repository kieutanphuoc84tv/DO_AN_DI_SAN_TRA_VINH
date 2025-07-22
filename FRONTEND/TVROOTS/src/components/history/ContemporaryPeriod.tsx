"use client";
import { playfair, lora } from "@/components/Introduction";
import Image from "next/image";
import { FaCalendarAlt, FaLandmark } from "react-icons/fa";

export default function ContemporaryPeriod() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-amber-100/50 history-item">
      <h2 className={`${playfair.className} text-3xl font-bold mb-8 text-amber-800 inline-flex items-center border-b-2 border-amber-200 pb-2`}>
        <FaLandmark className="mr-3 text-amber-600" />
        Thời kỳ hiện đại
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div className="order-2 lg:order-1">
          <p className={`${lora.className} text-gray-700 mb-6 leading-relaxed`}>
            Từ năm 1954 đến nay, Trà Vinh trải qua nhiều biến động lịch sử quan trọng. Sau hiệp định Genève, Trà Vinh thuộc về chính quyền Việt Nam Cộng Hòa. Trong thời kỳ chiến tranh, Trà Vinh là một trong những địa bàn hoạt động mạnh mẽ của cách mạng miền Nam.
          </p>
          <p className={`${lora.className} text-gray-700 mb-6 leading-relaxed`}>
            Sau ngày giải phóng miền Nam 30/4/1975, Trà Vinh trở thành một phần của nước Việt Nam thống nhất. Từ đó đến nay, Trà Vinh đã có những bước phát triển vượt bậc về kinh tế, văn hóa, xã hội, trở thành một tỉnh năng động của khu vực Đồng bằng sông Cửu Long.
          </p>
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mt-8">
            <h3 className={`${playfair.className} text-xl font-semibold mb-4 text-amber-800 flex items-center`}>
              <FaCalendarAlt className="mr-2 text-amber-600" /> Niên đại quan trọng
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-2">
              <li><span className="font-semibold">1954-1975:</span> Trà Vinh trong thời kỳ chiến tranh</li>
              <li><span className="font-semibold">30/4/1975:</span> Trà Vinh được giải phóng</li>
              <li><span className="font-semibold">1992:</span> Tái lập tỉnh Trà Vinh (tách từ tỉnh Cửu Long)</li>
              <li><span className="font-semibold">2000-nay:</span> Giai đoạn phát triển mạnh mẽ về kinh tế - xã hội</li>
            </ul>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 relative h-80 lg:h-auto rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/image/lichsu/hiendai/thanh_pho_tra_vinh.jpg"
            alt="Thành phố Trà Vinh"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute bottom-0 p-4">
              <p className="text-white text-sm font-medium">Trà Vinh hiện đại</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h3 className={`${playfair.className} text-2xl font-bold mb-5 text-amber-700`}>
          Phát triển kinh tế - xã hội
        </h3>
        <p className={`${lora.className} text-gray-700 mb-5 leading-relaxed`}>
          Trong những năm gần đây, Trà Vinh đã có những bước phát triển vượt bậc về kinh tế. Từ một tỉnh thuần nông, Trà Vinh đã chuyển dịch cơ cấu kinh tế theo hướng công nghiệp hóa, hiện đại hóa. Các khu công nghiệp, cụm công nghiệp được hình thành, thu hút nhiều dự án đầu tư trong và ngoài nước.
        </p>
        <p className={`${lora.className} text-gray-700 mb-5 leading-relaxed`}>
          Bên cạnh đó, Trà Vinh cũng chú trọng phát triển văn hóa, giáo dục, y tế và các lĩnh vực xã hội khác. Đặc biệt, tỉnh đã có nhiều chính sách hỗ trợ đồng bào dân tộc Khmer phát triển kinh tế, bảo tồn và phát huy bản sắc văn hóa dân tộc.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-100 hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/image/lichsu/hiendai/khu-cong-nghiep-long-duc.jpg"
                alt="Khu công nghiệp"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-amber-800 mb-1">Phát triển công nghiệp</h4>
              <p className="text-sm text-gray-600">Khu công nghiệp Long Đức - động lực phát triển kinh tế</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-100 hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/image/lichsu/hiendai/truong_dai_hoc_tra_vinh.jpg"
                alt="Trường Đại học Trà Vinh"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-amber-800 mb-1">Giáo dục phát triển</h4>
              <p className="text-sm text-gray-600">Trường Đại học Trà Vinh - trung tâm đào tạo của khu vực</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-100 hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/image/lichsu/hiendai/bao_ton_tra_vinh.jpg"
                alt="Bảo tồn Trà Vinh"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-amber-800 mb-1">Bảo tồn văn hóa</h4>
              <p className="text-sm text-gray-600">Hoạt động bảo tồn và phát huy văn hóa các dân tộc</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
