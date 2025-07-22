"use client";
import Image from "next/image";
import Link from "next/link";

export default function GioiThieuPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Banner Section */}
      <section
        className="relative h-[500px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/image/ditichquocgia/aobaom.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="absolute inset-0 animate-rgb-gradient bg-gradient-to-r from-red-600 via-yellow-400 to-pink-600 opacity-40 mix-blend-screen"></div>
          <h1 className="relative text-white text-5xl md:text-7xl font-bold drop-shadow-[0_0_10px_rgba(255,0,0,0.7),0_0_20px_rgba(255,255,0,0.7),0_0_30px_rgba(255,0,255,0.7)] z-10">
            GIỚI THIỆU
          </h1>
        </div>
      </section>

      <style jsx>{`
        @keyframes rgb-gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-rgb-gradient {
          background-size: 300% 300%;
          animation: rgb-gradient 10s ease infinite;
        }
      `}</style>

      {/* Introduction Text */}
      <section className="max-w-6xl mx-auto p-6 md:p-12 text-white drop-shadow-md">
        <p className="mb-6 text-lg leading-relaxed">
          Trà Vinh là một tỉnh ven biển thuộc đồng bằng sông Cửu Long, nổi bật với sự giao thoa văn hóa giữa người Kinh, Khmer và Hoa. Với lịch sử lâu đời cùng các công trình kiến trúc đặc sắc, Trà Vinh là nơi lưu giữ nhiều di tích văn hóa đặc sắc.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          Vùng đất này không chỉ có cảnh quan thiên nhiên tươi đẹp mà còn là nơi bảo tồn nhiều giá trị văn hóa phi vật thể độc đáo, phản ánh sự đa dạng và phong phú của các dân tộc sinh sống tại đây.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          Qua nhiều thế kỷ, Trà Vinh đã phát triển thành một trung tâm văn hóa và lịch sử quan trọng của khu vực đồng bằng sông Cửu Long, thu hút du khách trong và ngoài nước đến tham quan và tìm hiểu.
        </p>

        <h2 className="text-3xl font-semibold mb-8 mt-12">Một số địa điểm nổi bật:</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex space-x-6 items-center">
            <Image
              src="/image/ditichquocgia/aobaom.jpg"
              alt="Ao bà om"
              width={180}
              height={120}
              className="rounded-lg object-cover shadow-md"
            />
          <div className="bg-white p-6 rounded-lg shadow-lg border border-orange-300">
            <h3 className="text-black font-semibold mb-2">Ao bà om</h3>
            <p className="text-black">Danh thắng nổi tiếng với vẻ đẹp cổ kính và không gian xanh mát.</p>
          </div>
        </div>

        <div className="flex space-x-6 items-center">
          <Image
            src="/image/ditichcaptinh/chuabamom.jpg"
            alt="Chùa Ảng"
            width={180}
            height={120}
            className="rounded-lg object-cover shadow-md"
          />
          <div className="bg-white p-6 rounded-lg shadow-lg border border-orange-300">
            <h3 className="text-black font-semibold mb-2">Chùa Ảng</h3>
            <p className="text-black">Ngôi chùa Khmer cổ nhất ở Trà Vinh, mang đậm kiến trúc Khmer.</p>
          </div>
        </div>

        <div className="flex space-x-6 items-center">
          <Image
            src="/image/ditichtravinh/chua_hang.jpg"
            alt="Chùa Hang"
            width={180}
            height={120}
            className="rounded-lg object-cover shadow-md"
            unoptimized={true}
          />
          <div className="bg-white p-6 rounded-lg shadow-lg border border-orange-300">
            <h3 className="text-black font-semibold mb-2">Chùa Hang</h3>
            <p className="text-black">Ngôi chùa nổi bật với kiến trúc cổ kính, không gian yên bình và gắn liền với đời sống văn hóa tâm linh người dân Trà Vinh.</p>
          </div>
        </div>

        <div className="flex space-x-6 items-center">
          <Image
            src="/image/ditichquocgia/denthohochiminh.jpg"
            alt="Đền Thờ Bác"
            width={180}
            height={120}
            className="rounded-lg object-cover shadow-md"
          />
          <div className="bg-white p-6 rounded-lg shadow-lg border border-orange-100">
            <h3 className="text-black font-semibold mb-2">Đền Thờ Bác</h3>
            <p className="text-black">Nơi tưởng niệm Chủ tịch Hồ Chí Minh, nằm giữa không gian xanh mát, trang nghiêm và thanh tịnh.</p>
          </div>
        </div>
        </div>

        <section className="max-w-6xl mx-auto p-6 md:p-12">
          <div className="relative rounded-lg shadow-2xl p-1 animate-rgb-gradient border border-transparent bg-gradient-to-r from-red-600 via-yellow-400 to-pink-600">
            <video
              src="/videos/travinhflycam.mp4"
              controls
              autoPlay
              muted
              loop
              className="w-full rounded-lg shadow-[0_0_10px_rgba(255,0,0,0.7),0_0_20px_rgba(255,255,0,0.7),0_0_30px_rgba(255,0,255,0.7)]"
              style={{ width: "100%", height: "auto", objectFit: "cover", marginBottom: "2rem" }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <div className="mt-12 text-center">
          <Link href="/" className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition">
            Quay lại Trang Chủ
          </Link>
        </div>
      </section>
    </main>
  );
}
