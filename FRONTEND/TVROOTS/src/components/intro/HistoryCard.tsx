import Link from "next/link";
import { useRef } from "react";
import { playfair, lora } from "../Introduction";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HistoryCard = () => {
  const historyCardRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!historyCardRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: historyCardRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      headingRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )
      .fromTo(
        contentRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(
        videoRef.current,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      );
  });

  return (
    <div
      ref={historyCardRef}
      className="min-h-[80vh] flex items-start w-full pb-20 relative"
    >
      <div className="absolute left-0 bottom-24 w-40 h-40 opacity-20">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#ED8936"
            d="M42,-52.1C56.9,-45.5,73.2,-35.8,77.9,-22.5C82.5,-9.1,75.5,8,67,21.8C58.4,35.7,48.4,46.3,36.1,53.2C23.8,60.1,9.4,63.3,-5.3,69.2C-20,75.1,-40,83.8,-53.2,77.4C-66.5,71.1,-73,49.6,-77.1,29.4C-81.2,9.3,-82.9,-9.5,-77.5,-26.2C-72.1,-42.9,-59.5,-57.5,-44.6,-64.2C-29.7,-70.9,-12.5,-69.7,1.2,-71.2C14.9,-72.7,27,-58.7,42,-52.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-12 text-center mb-8 lg:mb-16">
          <h2
            ref={headingRef}
            className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold text-orange-800 leading-tight`}
          >
            <span className="text-orange-700 relative inline-block">
              Lịch Sử Hình Thành
              <svg
                className="absolute -bottom-3 left-0 w-full h-3 text-orange-500"
                viewBox="0 0 100 10"
              >
                <path
                  d="M0,5 Q25,0 50,5 T100,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>{" "}
            <span className="inline-block">Tỉnh Trà Vinh</span>
          </h2>

          <div className="flex space-x-4 mt-6 justify-center">
            <div className="w-8 h-8 lg:w-10 lg:h-10 text-orange-600 opacity-80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" />
              </svg>
            </div>
            <div className="w-8 h-8 lg:w-10 lg:h-10 text-orange-500 opacity-80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z" />
              </svg>
            </div>
          </div>
        </div>

        <div
          ref={contentRef}
          className="lg:col-span-6 lg:col-start-1 self-center px-4 lg:px-12 flex flex-col justify-center"
        >
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-orange-700 uppercase bg-orange-100 rounded-full mb-6">
              Di sản văn hóa
            </span>
            <p
              className={`${lora.className} text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed pl-4 border-l-2 border-orange-300`}
            >
              Trải qua những thăng trầm vì bị chi phối bởi những quy luật kiến
              tạo địa chất cùng những lần &quot;biển tiến, biển lùi&quot;, vùng
              đất có tên gọi &quot;Trà Vang&quot; - tiền thân của tỉnh Trà Vinh
              sau này đã được hình thành từ lâu đời...
            </p>

            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center space-x-2 text-orange-700">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs lg:text-sm">Di tích cấp Quốc gia</span>
              </div>
              <div className="flex items-center space-x-2 text-orange-700">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span className="text-xs lg:text-sm">Văn hóa đa dạng</span>
              </div>
            </div>

            <div>
              <Link
                href="#chi-tiet-lich-su"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-orange-700 text-white rounded-full hover:bg-orange-800 transition-all transform hover:translate-x-1 text-lg"
              >
                <span>Đọc thêm</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div
          ref={videoRef}
          className="lg:col-span-6 lg:col-start-7 self-center"
        >
          <div className="relative h-80 sm:h-96 lg:h-[400px] xl:h-[450px] overflow-hidden rounded-xl shadow-xl">
            <div className="absolute inset-0 bg-orange-900/20 z-10"></div>
            <video
              id="historyVideo"
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src="/videos/tra-vinh-history.mp4" type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ thẻ video.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
