"use client";
import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { playfair, lora } from "@/components/Introduction";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaYoutube, FaInstagram, FaPaperPlane } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function LienHePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  
  // Refs cho animation
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  
  // Sử dụng GSAP cho animation
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
    
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          ease: "power2.out",
          delay: 0.3 
        }
      );
    }
    
    if (contactInfoRef.current) {
      const infoItems = contactInfoRef.current.querySelectorAll('.info-item');
      gsap.fromTo(
        infoItems,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.5
        }
      );
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError("");

    try {
      // Giả lập gửi dữ liệu form
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form data:", formData);
      
      // Đặt lại form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError("Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar introCompleted={true} />

      {/* Banner với gradient và hình ảnh nền */}
      <div className="relative py-24 bg-gradient-to-r from-green-900 to-emerald-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/images/texture-old-paper.png" 
            alt="Texture" 
            fill 
            className="object-cover mix-blend-multiply"
          />
        </div>
        <div className="absolute inset-0 z-0 opacity-30">
          <Image 
            src="/images/contact-bg.jpg" 
            alt="Liên hệ" 
            fill 
            className="object-cover object-center"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10" ref={headerRef}>
          <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6`}>
            Liên Hệ <span className="text-green-300">Với Chúng Tôi</span>
          </h1>
          <p className={`${lora.className} text-lg md:text-xl text-green-100 text-center max-w-3xl mx-auto`}>
            Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn về di tích lịch sử và văn hóa Trà Vinh
          </p>
        </div>
      </div>

      <div className="container mx-auto py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Form liên hệ */}
          <div className="lg:col-span-2">
            <form 
              ref={formRef}
              onSubmit={handleSubmit} 
              className="bg-white rounded-xl shadow-lg p-8 border border-green-100/50"
            >
              <h2 className={`${playfair.className} text-2xl font-bold mb-6 text-gray-800 flex items-center`}>
                <FaPaperPlane className="text-green-600 mr-3" />
                Gửi Tin Nhắn Cho Chúng Tôi
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">
                  Tiêu đề
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                  Nội dung
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                  {submitError}
                </div>
              )}

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                  Tin nhắn của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ lại với bạn sớm.
                </div>
              )}

              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 disabled:bg-gray-400 font-medium shadow-md hover:shadow-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
              </button>
            </form>
          </div>

          {/* Thông tin liên hệ */}
          <div ref={contactInfoRef}>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-green-100/50 info-item">
              <h2 className={`${playfair.className} text-2xl font-bold mb-6 text-gray-800`}>
                Thông Tin Liên Hệ
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Địa chỉ:</h3>
                    <p className="text-gray-600">
                      Số 126, Đường Nguyễn Thiện Thành, Khóm 4, Phường 5, Thành phố Trà Vinh, Tỉnh Trà Vinh
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Điện thoại:</h3>
                    <p className="text-gray-600">(+84) 294 3855 246</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email:</h3>
                    <p className="text-gray-600">info@tvroots.vn</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100/50 info-item">
              <h2 className={`${playfair.className} text-2xl font-bold mb-6 text-gray-800`}>
                Kết Nối Với Chúng Tôi
              </h2>

              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  <FaYoutube className="text-xl" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 text-white p-4 rounded-full hover:bg-pink-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  <FaInstagram className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bản đồ */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-green-100/50">
          <h2 className={`${playfair.className} text-2xl font-bold mb-6 text-gray-800`}>
            Vị Trí Của Chúng Tôi
          </h2>

          <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.841518408633!2d106.34232661428291!3d10.029938975103008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a6a5749b3497b5%3A0x517566aa0c4b5241!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBUcsOgIFZpbmg!5e0!3m2!1svi!2s!4v1651475352271!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
