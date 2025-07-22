"use client";
import { playfair, lora } from "@/components/Introduction";
import Image from "next/image";
import { FaLandmark } from "react-icons/fa";

export default function ModernPeriod() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-amber-100/50 history-item">
      <h2 className={`${playfair.className} text-3xl font-bold mb-8 text-amber-800 inline-flex items-center border-b-2 border-amber-200 pb-2`}>
        <FaLandmark className="mr-3 text-amber-600" />
        Thời kỳ cận đại
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div className="order-2 lg:order-1">
          <p className={`${lora.className} text-gray-700 mb-6 leading-relaxed`}>
            Thời kỳ cận đại tại Trà Vinh đánh dấu sự chuyển giao quan trọng trong lịch sử và văn hóa của vùng đất này. Đây là giai đoạn người Việt bắt đầu di cư và phát triển các hoạt động kinh tế, xã hội.
          </p>
          <p className={`${lora.className} text-gray-700 mb-6 leading-relaxed`}>
            Các công trình kiến trúc, nông nghiệp và phong trào kháng chiến đã góp phần tạo nên diện mạo đặc trưng của thời kỳ này.
          </p>
        </div>
        
        <div className="order-1 lg:order-2 relative h-[400px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/image/lichsu/candai/cho_tra_vinh_nam_xua.jpg"
            alt="Chợ Trà Vinh ngày xưa"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute bottom-0 p-4">
              <p className="text-white text-sm font-medium">Chợ Trà Vinh ngày xưa</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h3 className={`${playfair.className} text-2xl font-bold mb-5 text-amber-700`}>
          Kiến trúc và phát triển
        </h3>
        <p className={`${lora.className} text-gray-700 mb-5 leading-relaxed`}>
          Kiến trúc Pháp và sự phát triển nông nghiệp đóng vai trò quan trọng trong thời kỳ cận đại tại Trà Vinh.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-100 hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/image/lichsu/candai/kien_truc_phap.jpg"
                alt="Kiến trúc Pháp"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-amber-800 mb-1">Kiến trúc Pháp</h4>
              <p className="text-sm text-gray-600">Ảnh hưởng kiến trúc Pháp tại Trà Vinh</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-100 hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/image/lichsu/candai/phat_trien_nong_nghiep.jpg"
                alt="Phát triển nông nghiệp"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-amber-800 mb-1">Phát triển nông nghiệp</h4>
              <p className="text-sm text-gray-600">Sự phát triển nông nghiệp tại Trà Vinh</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-100 hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/image/lichsu/candai/phong_trao_khang_chien.jpg"
                alt="Phong trào kháng chiến"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-amber-800 mb-1">Phong trào kháng chiến</h4>
              <p className="text-sm text-gray-600">Các phong trào kháng chiến tại Trà Vinh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
