import Link from "next/link";
import { Button } from "../ui/button";

export default function HeroSection() {
  const BannerOpenWork = ({ className }: { className?: string }) => {
    // สร้างข้อความซ้ำๆ (เช่น 20 รอบ) พร้อมตัวคั่นเท่ๆ
    const repeatCount = 5;
    const textContent = Array(repeatCount).fill("OPEN WORK").join("  •  ");

    return (
      <div className={`${className || ""} overflow-hidden pointer-events-none`}>
        <div className="w-full bg-green-500 dark:bg-green-800 text-white dark:text-gray-300 font-bold text-xs md:text-sm uppercase tracking-wider drop-shadow-lg py-1 whitespace-nowrap flex justify-center">
          {/* แสดงข้อความที่สร้างไว้ */}
          {textContent}
        </div>
      </div>
    );
  };
  return (
    <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-12 items-center justify-center">
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 justify-center items-center md:items-start md:w-1/2 text-center md:text-left">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-gray-500">Kim </span>
            <span className="text-gray-900  ">Pongsakorn Thammachai</span>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700  font-medium">
            Flutter Developer
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
            เปลี่ยนไอเดียเป็นแอปที่ใช้งานได้จริง
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            เน้น Code คุณภาพ, Performance ที่ลื่นไหล และ UX ที่ตอบโจทย์ผู้ใช้
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 w-full sm:w-auto">
            <Link href="/projects">
              <Button variant="outline">ดูผลงาน</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">ติดต่อ</Button>
            </Link>
          </div>
        </div>

        <div className="relative md:w-1/2 flex justify-center w-full sm:w-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src="/profile.png"
              alt="Kim Pongsakorn"
              className="w-full h-auto object-contain"
            />

            <BannerOpenWork
              // แก้จาก w-[150px] เป็น w-[300px] (ให้ยาวขึ้นมาก)
              // แล้วลองปรับ top กับ right ใหม่เพื่อดึงให้เข้ามุม
              className="absolute top-[30px] -right-[100px] w-[300px] rotate-45 z-10 flex justify-center pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
