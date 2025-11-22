"use client";

import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useEffect, useState } from "react";
interface MenuItem {
  name: string;
  href: string;
}

export default function HeadNavigation() {
  const menuList: MenuItem[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  const socialList: MenuItem[] = [
    {
      name: "GitHub",
      href: "https://github.com/kimisry",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/kimisry",
    },
  ];

  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Check initial theme on mount
  useEffect(() => {
    const body = document.body;
    setIsDark(body.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle("dark");
    setIsDark(body.classList.contains("dark"));
  };

  const themeIcon = isDark ? "🌙" : "☀️";

  const socialItems = socialList.map((social) => (
    <a
      key={social.name}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-4 hover:opacity-70 transition-opacity"
    >
      {social.name}
    </a>
  ));

  const menuItems = menuList.map((menu) => (
    <Link
      key={menu.name}
      href={menu.href}
      className="mx-4 hover:opacity-70 transition-opacity"
    >
      {menu.name}
    </Link>
  ));

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block rounded-full w-full px-8 py-4 bg-white/25 border-2 border-white/25 backdrop-blur-sm">
        <div className="flex flex-row items-center">
          <div className="basis-[15%] font-semibold">&lt;KimisryDev&gt;</div>
          <div className="basis-[65%] flex flex-row justify-start items-center">
            {menuItems}
          </div>
          <div className="basis-[20%] flex flex-row justify-end items-center">
            {socialItems}
            <button
              onClick={toggleTheme}
              className="ml-4 hover:opacity-70 transition-opacity"
              aria-label="Toggle theme"
            >
              {themeIcon}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="flex md:hidden rounded-full w-full px-8 py-4">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="font-semibold">&lt;KimisryDev&gt;</div>
          <div className="flex items-center gap-4">
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 200 
              }}
              className="fixed top-0 right-0 h-screen w-1/2 bg-white z-50 pt-4 will-change-transform md:hidden"
            >
              {/* ปุ่มปิด */}
              <div className="flex justify-end px-4 mb-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-2xl hover:opacity-70 transition-opacity"
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>
              
              <div className="flex flex-col gap-4 px-4">
                {menuList.map((menu) => (
                  <Link
                    key={menu.name}
                    href={menu.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:opacity-70 transition-opacity"
                  >
                    {menu.name}
                  </Link>
                ))}
                <div className="flex flex-row gap-4 pt-2">
                  {socialList.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="hover:opacity-70 transition-opacity"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
