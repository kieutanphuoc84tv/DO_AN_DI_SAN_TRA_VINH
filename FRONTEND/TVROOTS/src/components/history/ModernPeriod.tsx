"use client";
import { playfair, lora } from "@/components/Introduction";
import Image from "next/image";
import { FaCalendarAlt, FaLandmark } from "react-icons/fa";

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
            Từ thế kỷ XVII đến đầu thế kỷ XX, Trà Vinh trải qua thời kỳ cận đại với nhiều biến động lịch sử quan trọng. Đây là giai đoạn người Việt bắt đầu di cư đến vùng đất này và dần dần hình thành nên một cộng đồng đa dân tộc, đa văn hóa.
          </p>
          <p className={`${lora.className} text-gray-700 mb-6 leading-relaxed`}>
            Dưới thời các chúa Nguyễn và triều đại nhà Nguyễn, Trà Vinh trở thành một phần của lãnh thổ Việt Nam. Vùng đất này được khai phá, phát triển nông nghiệp và hình thành nên các làng xã, thôn ấp với nền văn hóa đặc trưng của người Việt Nam.
          </p>
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mt-8">
            <h3 className={`${playfair.className} text-xl font-semibold mb-4 text-amber-800 flex items-center`}>
              <FaCalendarAlt className="mr-2 text-amber-600" /> Niên đại quan trọng
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-2">
              <li><span className="font-semibold">1698:</span> Chúa Nguyễn Phúc Chu sáp nhập vùng đất Trà Vinh vào lãnh thổ Đàng Trong</li>
              <li><span className="font-semibold">1732:</span> Thành lập đạo Trấn Biên, trong đó có Trà Vinh</li>
              <li><span className="font-semibold">1867-1954:</span> Trà Vinh dưới thời Pháp thuộc, hình thành tỉnh Trà Vinh</li>
            </ul>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 relative h-80 lg:h-auto rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/tra-vinh-can-dai.jpg"
            alt="Trà Vinh thời kỳ cận đại"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute bottom-0 p-4">
              <p className="text-white text-sm font-medium">Trà Vinh thời kỳ cận đại</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h3 className={`${playfair.className} text-2xl font-bold mb-5 text-amber-700`}>
          Thời kỳ Pháp thuộc
        </h3>
        <p className={`${lora.className} text-gray-700 mb-5 leading-relaxed`}>
          Năm 1867, Pháp chiếm đóng Nam Kỳ và Trà Vinh trở thành một tỉnh thuộc địa của Pháp. Dưới thời Pháp thuộc, Trà Vinh có nhiều thay đổi về hành chính, kinh tế và xã hội. Người Pháp xây dựng các công trình kiến trúc, phát triển hệ thống giao thông và thủy lợi.
        </p>
        <p className={`${lora.className} text-gray-700 mb-5 leading-relaxed`}>
          Thời kỳ này cũng chứng kiến sự phát triển của phong trào yêu nước và cách mạng tại Trà Vinh. Nhiều cuộc khởi nghĩa và phong trào đấu tranh của nhân dân đã nổ ra chống lại sự đô hộ của thực dân Pháp.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-100 hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/images/french-colonial.jpg"
                alt="Kiến trúc Pháp"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-amber-800 mb-1">Kiến trúc Pháp</h4>
              <p className="text-sm text-gray-600">Các công trình kiến trúc thời Pháp thuộc tại Trà Vinh</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-100 hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/images/agriculture-travinh.jpg"
                alt="Nông nghiệp Trà Vinh"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-amber-800 mb-1">Phát triển nông nghiệp</h4>
              <p className="text-sm text-gray-600">Hệ thống thủy lợi và canh tác lúa phát triển</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-100 hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/images/resistance-movement.jpg"
                alt="Phong trào kháng chiến"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-amber-800 mb-1">Phong trào kháng chiến</h4>
              <p className="text-sm text-gray-600">Các cuộc đấu tranh chống Pháp tại Trà Vinh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
