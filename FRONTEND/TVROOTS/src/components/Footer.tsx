import Link from "next/link";
import Image from "next/image";
import { playfair, lora } from "./Introduction";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo và giới thiệu */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="TVRoots Logo"
                width={50}
                height={50}
                className="mr-3"
              />
              <h3 className={`${playfair.className} text-2xl font-bold text-orange-500`}>
                TVRoots
              </h3>
            </div>
            <p className={`${lora.className} text-gray-400 mb-6`}>
              TVRoots là dự án nhằm giới thiệu và bảo tồn các di tích lịch sử, văn hóa của tỉnh Trà Vinh, góp phần quảng bá du lịch và giá trị văn hóa đặc sắc của vùng đất này.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-red-600 p-2 rounded-full transition-colors"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-pink-600 p-2 rounded-full transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-400 p-2 rounded-full transition-colors"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Liên kết nhanh */}
          <div>
            <h3 className={`${playfair.className} text-xl font-bold mb-4 text-white`}>
              Liên Kết Nhanh
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-orange-500 transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  href="/di-tich"
                  className="text-gray-400 hover:text-orange-500 transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Di tích
                </Link>
              </li>
              <li>
                <Link
                  href="/di-tich-quoc-gia"
                  className="text-gray-400 hover:text-orange-500 transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Di tích cấp quốc gia
                </Link>
              </li>
              <li>
                <Link
                  href="/di-tich-cap-tinh"
                  className="text-gray-400 hover:text-orange-500 transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Di tích cấp tỉnh
                </Link>
              </li>
              <li>
                <Link
                  href="/du-lich"
                  className="text-gray-400 hover:text-orange-500 transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Du lịch
                </Link>
              </li>
              <li>
                <Link
                  href="/lich-su"
                  className="text-gray-400 hover:text-orange-500 transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Lịch sử
                </Link>
              </li>
              <li>
                <Link
                  href="/lien-he"
                  className="text-gray-400 hover:text-orange-500 transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Di tích tiêu biểu */}
          <div>
            <h3 className={`${playfair.className} text-xl font-bold mb-4 text-white`}>
              Di Tích Tiêu Biểu
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/di-tich/aobaom"
                  className="text-gray-400 hover:text-orange-500 transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Ao Bà Om
                </Link>
              </li>
              <li>
                <Link
                  href="/di-tich/chuaan"
                  className="text-gray-400 hover:text-orange-500 transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Chùa Âng
                </Link>
              </li>
              <li>
                <Link
                  href="/di-tich/chuagiaclinh"
                  className="text-gray-400 hover:text-orange-500 transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Chùa Giác Linh
                </Link>
              </li>
              <li>
                <Link
                  href="/di-tich/dinhlongduc"
                  className="text-gray-400 hover:text-orange-500 transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Đình Long Đức
                </Link>
              </li>
              <li>
                <Link
                  href="/di-tich/chuaco"
                  className="text-gray-400 hover:text-orange-500 transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Chùa Cò
                </Link>
              </li>
            </ul>
          </div>

          {/* Thông tin liên hệ */}
          <div>
            <h3 className={`${playfair.className} text-xl font-bold mb-4 text-white`}>
              Thông Tin Liên Hệ
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <FaMapMarkerAlt className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  Số 12, Đường Lê Thánh Tôn, Phường 2, TP. Trà Vinh, Tỉnh Trà Vinh
                </span>
              </li>
              <li className="flex">
                <FaPhone className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">(0294) 3851 123</span>
              </li>
              <li className="flex">
                <FaEnvelope className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@tvroots.vn</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className={`${lora.className}`}>
            © {currentYear} TVRoots. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
