"use client";
import { playfair, lora } from "@/components/Introduction";
import Image from "next/image";
import { FaCalendarAlt, FaLandmark } from "react-icons/fa";

export default function AncientPeriod() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-amber-100/50 history-item">
      <h2 className={`${playfair.className} text-3xl font-bold mb-8 text-amber-800 inline-flex items-center border-b-2 border-amber-200 pb-2`}>
        <FaLandmark className="mr-3 text-amber-600" />
        Thời kỳ cổ đại
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div className="order-2 lg:order-1">
          <p className={`${lora.className} text-gray-700 mb-6 leading-relaxed`}>
            Trà Vinh là vùng đất có lịch sử hình thành và phát triển lâu đời. Theo các nghiên cứu khảo cổ học, khu vực này đã có dấu vết cư trú của con người từ thời kỳ Đồng Nai và Óc Eo (khoảng thế kỷ I-VII sau Công nguyên).
          </p>
          <p className={`${lora.className} text-gray-700 mb-6 leading-relaxed`}>
            Các di chỉ khảo cổ học đã phát hiện nhiều hiện vật như gốm sứ, công cụ bằng đồng, sắt và các tác phẩm nghệ thuật mang đậm phong cách văn hóa Óc Eo, chứng tỏ sự hiện diện của một nền văn minh phát triển tại khu vực này.
          </p>
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mt-8">
            <h3 className={`${playfair.className} text-xl font-semibold mb-4 text-amber-800 flex items-center`}>
              <FaCalendarAlt className="mr-2 text-amber-600" /> Niên đại quan trọng
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-2">
              <li><span className="font-semibold">Thế kỷ I-II:</span> Dấu hiệu đầu tiên của văn hóa Óc Eo xuất hiện tại khu vực Trà Vinh</li>
              <li><span className="font-semibold">Thế kỷ III-V:</span> Giai đoạn phát triển rực rỡ của văn hóa Óc Eo, với sự hình thành của các trung tâm thương mại và tôn giáo</li>
              <li><span className="font-semibold">Thế kỷ VI-VII:</span> Giai đoạn suy thoái của văn hóa Óc Eo, đánh dấu sự kết thúc của thời kỳ cổ đại tại Trà Vinh</li>
            </ul>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 relative h-80 lg:h-auto rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/image/lichsu/oceo/ban_do.jpg"
            alt="Bản đồ Trà Vinh thời kỳ cổ đại"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute bottom-0 p-4">
              <p className="text-white text-sm font-medium">Bản đồ Trà Vinh thời kỳ cổ đại</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h3 className={`${playfair.className} text-2xl font-bold mb-5 text-amber-700`}>
          Văn hóa Óc Eo tại Trà Vinh
        </h3>
        <p className={`${lora.className} text-gray-700 mb-5 leading-relaxed`}>
          Văn hóa Óc Eo được xem là một trong những nền văn minh rực rỡ nhất ở khu vực Đông Nam Á trong giai đoạn đầu Công nguyên. Tại Trà Vinh, các nhà khảo cổ học đã tìm thấy nhiều di tích và hiện vật liên quan đến văn hóa này, đặc biệt tại các khu vực như Long Hữu, Dù Lộng, và Lung Ngọc Hoàng.
        </p>
        <p className={`${lora.className} text-gray-700 mb-5 leading-relaxed`}>
          Những hiện vật này bao gồm các bức tượng, đồ trang sức, tiền xu, và các công cụ sinh hoạt hàng ngày. Điều này chứng tỏ rằng Trà Vinh đã từng là một phần của vương quốc Phù Nam cổ đại, với nền văn hóa phát triển cao.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-100 hover:shadow-lg transition-shadow">
            <div className="relative h-60">
              <Image
                src="/image/lichsu/oceo/do_gom.jpg"
                alt="Hiện vật Óc Eo"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-amber-800 mb-1">Đồ gốm Óc Eo</h4>
              <p className="text-sm text-gray-600">Hiện vật được tìm thấy tại khu vực Long Hữu</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-100 hover:shadow-lg transition-shadow">
            <div className="relative h-60">
              <Image
                src="/image/lichsu/oceo/tuong_hindu.jpg"
                alt="Hiện vật Óc Eo"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-amber-800 mb-1">Tượng thần Hindu</h4>
              <p className="text-sm text-gray-600">Phản ánh ảnh hưởng của văn hóa Ấn Độ</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-100 hover:shadow-lg transition-shadow">
            <div className="relative h-60">
              <Image
                src="/image/lichsu/oceo/tien_co.jpg"
                alt="Hiện vật Óc Eo"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-amber-800 mb-1">Tiền xu cổ</h4>
              <p className="text-sm text-gray-600">Chứng tỏ hoạt động thương mại phát triển</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
