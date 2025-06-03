"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import gsap from "gsap";
import { Playfair_Display } from "next/font/google";
import { useGSAP } from "@gsap/react";

// Khai báo font cho Navbar
const playfair = Playfair_Display({
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

type NavbarProps = {
  introCompleted: boolean;
};

const Navbar = ({ introCompleted }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navAnimationDone = useRef<boolean>(false);
  const navbarRef = useRef({
    logo: null as HTMLDivElement | null,
    button: null as HTMLButtonElement | null,
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Xử lý ẩn/hiện navbar khi cuộn với GSAP
  useGSAP(
    () => {
      // Tham chiếu đến các phần tử logo và nút menu
      if (logoRef.current && menuButtonRef.current) {
        navbarRef.current.logo = logoRef.current;
        navbarRef.current.button = menuButtonRef.current;
      }

      // Throttle function để giảm số lần gọi callback khi cuộn
      let lastTime = 0;
      const throttleTime = 100; // milliseconds
      let animationInProgress = false;

      // Biến để theo dõi hướng cuộn
      let isScrollingDown = false;

      // Xử lý sự kiện wheel để phát hiện hướng cuộn chính xác hơn
      const handleWheel = (e: WheelEvent) => {
        const now = Date.now();
        if (now - lastTime < throttleTime) return;
        lastTime = now;

        if (animationInProgress) return;

        // Sử dụng deltaY để xác định hướng cuộn (dương là xuống, âm là lên)
        isScrollingDown = e.deltaY > 0;

        // Xử lý ẩn hiện navbar
        if (logoRef.current && menuButtonRef.current) {
          // Ẩn navbar khi cuộn xuống
          if (isScrollingDown && isVisible) {
            animationInProgress = true;
            gsap.to([navbarRef.current.logo, navbarRef.current.button], {
              y: -50,
              opacity: 0,
              duration: 0.4,
              ease: "power3.out",
              stagger: 0.05,
              onComplete: () => {
                setIsVisible(false);
                animationInProgress = false;
              },
            });
          }
          // Hiện navbar khi cuộn lên
          else if (!isScrollingDown && !isVisible) {
            animationInProgress = true;
            gsap.to([navbarRef.current.logo, navbarRef.current.button], {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "back.out(1.7)",
              stagger: 0.1,
              onComplete: () => {
                setIsVisible(true);
                animationInProgress = false;
              },
            });
          }
        }
      };

      // Sử dụng wheel event thay vì scroll
      window.addEventListener("wheel", handleWheel, { passive: true });
      return () => window.removeEventListener("wheel", handleWheel);
    },
    { dependencies: [isVisible] }
  );

  // Animation cho Navbar sau khi intro hoàn tất
  useGSAP(
    () => {
      // Đảm bảo animation chỉ chạy một lần sau khi intro hoàn tất
      if (
        introCompleted &&
        logoRef.current &&
        menuButtonRef.current &&
        !navAnimationDone.current
      ) {
        // Đánh dấu là đã chạy animation để không chạy lại
        navAnimationDone.current = true;

        const tl = gsap.timeline();

        // Set ban đầu - QUAN TRỌNG: Set opacity: 0 ngay lập tức để ẩn các phần tử
        gsap.set([logoRef.current, menuButtonRef.current], {
          opacity: 0,
          y: -20,
        });

        // Animation hiện Navbar
        tl.to(logoRef.current, {
          startAt: { yPercent: -100 }, // Bắt đầu từ vị trí bên trên
          yPercent: 0, // Đảm bảo phần tử di chuyển đến vị trí cuối cùng
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
        }).to(
          menuButtonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.5"
        );
      }
    },
    { dependencies: [introCompleted] }
  );

  // Xử lý menu animation
  useGSAP(
    () => {
      if (!menuRef.current || !menuItemsRef.current || !menuButtonRef.current)
        return;

      // Timeline cho animation mượt hơn
      const tl = gsap.timeline();

      if (isOpen) {
        // Hiển thị menu trước khi animation
        gsap.set(menuRef.current, { display: "flex" });

        // Animation mở menu
        tl.fromTo(
          menuRef.current,
          {
            opacity: 0,
            clipPath: "circle(0% at calc(100% - 24px) 24px)",
          },
          {
            opacity: 1,
            clipPath: "circle(150% at calc(100% - 24px) 24px)",
            duration: 0.7,
            ease: "power3.inOut",
          }
        )
          .fromTo(
            menuButtonRef.current,
            { backgroundColor: "#ea580c", scale: 1 }, // màu orange-600
            {
              backgroundColor: "transparent",
              boxShadow: "none",
              scale: 1.2,
              duration: 0.3,
            },
            "-=0.4" // Bắt đầu trước khi hiệu ứng trước kết thúc
          )
          .fromTo(
            menuItemsRef.current.children,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.08,
              ease: "back.out(1.7)",
            },
            "-=0.3"
          );
      } else {
        // Animation đóng menu
        tl.to(menuButtonRef.current, {
          backgroundColor: "#ea580c", // trở lại màu orange-600
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          scale: 1,
          duration: 0.3,
        }).to(
          menuRef.current,
          {
            clipPath: "circle(0% at calc(100% - 24px) 24px)",
            opacity: 0,
            duration: 0.6,
            ease: "power3.inOut",
            onComplete: () => {
              gsap.set(menuRef.current, { display: "none" });
            },
          },
          "-=0.1"
        );
      }

      // Thêm hiệu ứng hover cho nút menu
      if (!isOpen && menuButtonRef.current) {
        menuButtonRef.current.addEventListener("mouseenter", () => {
          gsap.to(menuButtonRef.current, {
            backgroundColor: "#c2410c", // orange-700
            scale: 1.05,
            duration: 0.2,
          });
        });

        menuButtonRef.current.addEventListener("mouseleave", () => {
          gsap.to(menuButtonRef.current, {
            backgroundColor: "#ea580c", // orange-600
            scale: 1,
            duration: 0.2,
          });
        });
      }
    },
    { scope: menuRef, dependencies: [isOpen] }
  );

  return (
    <>
      {/* Logo ở góc trên trái - bỏ lớp CSS transition và thay bằng GSAP */}
      <div ref={logoRef} className="fixed top-4 left-4 z-40 opacity-0">
        <div
          className={`${playfair.className} text-orange-600 font-bold text-3xl md:text-4xl cursor-pointer tracking-wide relative group`}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <span className="transition-all duration-300 group-hover:text-orange-700">
            TVRoots
          </span>
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </div>
      </div>

      {/* Nút menu - bỏ lớp CSS transition và thay bằng GSAP */}
      <button
        ref={menuButtonRef}
        className={`fixed top-4 right-4 z-50 w-12 h-12 flex items-center justify-center bg-orange-500 text-white rounded-full shadow-lg focus:outline-none cursor-pointer overflow-hidden opacity-0 ${
          isOpen ? "scale-110" : ""
        }`}
        onClick={toggleMenu}
        aria-label={isOpen ? "Đóng menu" : "Mở menu"}
        style={{
          boxShadow: isOpen
            ? "none"
            : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* Hiệu ứng khi hover */}
        <span className="absolute w-0 h-0 rounded-full bg-orange-700 opacity-20 transform scale-0 group-hover:scale-100 transition-transform duration-1000 origin-center"></span>

        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transform transition-transform duration-300 hover:scale-125"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transition-transform duration-300 hover:scale-125"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Menu toàn màn hình */}
      <div
        ref={menuRef}
        className={`${playfair.className} fixed inset-0 bg-orange-600 z-40 flex-col justify-center items-center hidden overflow-hidden`}
        style={{
          transformOrigin: "top right",
        }}
      >
        {/* Hình trang trí */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-48 h-48 bg-orange-500 rounded-bl-full opacity-20"></div>
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-orange-500 rounded-tr-full opacity-20"></div>
        </div>

        <div
          ref={menuItemsRef}
          className="flex flex-col items-center justify-center h-full space-y-8 px-4"
        >
          <FullscreenNavLink href="/" onClick={toggleMenu}>
            TRANG CHỦ
          </FullscreenNavLink>
          <FullscreenNavLink href="#gioi-thieu" onClick={toggleMenu}>
            GIỚI THIỆU
          </FullscreenNavLink>
          <FullscreenNavLink href="/di-tich" onClick={toggleMenu}>
            DI TÍCH
          </FullscreenNavLink>
          <FullscreenNavLink href="/di-tich-quoc-gia" onClick={toggleMenu}>
            DI TÍCH CẤP QUỐC GIA
          </FullscreenNavLink>
          <FullscreenNavLink href="/di-tich-cap-tinh" onClick={toggleMenu}>
            DI TÍCH CẤP TỈNH
          </FullscreenNavLink>
          <FullscreenNavLink href="/du-lich" onClick={toggleMenu}>
            DU LỊCH
          </FullscreenNavLink>
          <FullscreenNavLink href="/lich-su" onClick={toggleMenu}>
            LỊCH SỬ
          </FullscreenNavLink>
          <FullscreenNavLink href="/lien-he" onClick={toggleMenu}>
            LIÊN HỆ
          </FullscreenNavLink>
        </div>
      </div>
    </>
  );
};

const FullscreenNavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      const link = linkRef.current;
      if (!link) return;

      // Hiệu ứng khi hover
      const handleMouseEnter = () => {
        gsap.to(link, {
          scale: 1.1,
          letterSpacing: "0.15em",
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(link, {
          scale: 1,
          letterSpacing: "normal",
          duration: 0.3,
          ease: "power2.in",
        });
      };

      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: linkRef, dependencies: [] }
  );

  const handleClick = (e: React.MouseEvent) => {
    // Chỉ xử lý đặc biệt nếu liên kết là anchor trong cùng trang
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Đóng menu trước khi cuộn
        onClick();

        // Cuộn đến phần tử mục tiêu
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    } else {
      // Đóng menu cho các liên kết thông thường
      onClick();
    }
  };

  return (
    <Link
      ref={linkRef}
      href={href}
      className="text-white font-bold text-2xl md:text-5xl transition-all duration-300 relative group cursor-pointer"
      onClick={handleClick}
    >
      <span className="relative">
        {children}
        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </span>
    </Link>
  );
};

export default Navbar;
