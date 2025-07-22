import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-64 md:h-96">
      <Image
        src="/image/ditichquocgia/aobaom.jpg"
        alt="Banner Image"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute top-4 left-4 z-50">
        <Image
          src="/image/logodhtravinh.png"
          alt="Logo"
          width={80}
          height={80}
          className="object-contain"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          Du Lịch Trà Vinh
        </h1>
      </div>
    </div>
  );
};

export default Banner;
