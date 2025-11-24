import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-12 items-center justify-center">
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 justify-center items-center md:items-start md:w-1/2 text-center md:text-left">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-gray-500">Kim </span>
            <span className="text-gray-900 dark:text-white">
              Pongsakorn Thammachai
            </span>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 font-medium">
            Flutter Developer
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
            เปลี่ยนไอเดียเป็นแอปที่ใช้งานได้จริง
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            เน้น Code คุณภาพ, Performance ที่ลื่นไหล และ UX ที่ตอบโจทย์ผู้ใช้
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 w-full sm:w-auto">
            <Link
              href="/projects"
              className="px-5 py-2.5 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base font-medium text-center"
            >
              ดูผลงาน
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm sm:text-base font-medium text-center"
            >
              ติดต่อ
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center w-full sm:w-auto">
          <img
            src="/profile.png"
            alt="Kim Pongsakorn"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-2xl shadow-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
