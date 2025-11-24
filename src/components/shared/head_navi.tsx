"use client";

import { Switch } from "@/components/ui/switch";
import { brandConfig, menuList, socialList } from "@/config/navigation";
import { useTheme } from "@/hooks/use-theme";
import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./logo";

export default function HeadNavigation() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const { isDark, mounted, toggleTheme } = useTheme();

  const themeIcon = (
    <div className="flex items-center space-x-2">
      {mounted ? (
        <Switch
          id="theme-mode"
          checked={isDark}
          onCheckedChange={toggleTheme}
        />
      ) : (
        <div className="w-11 h-6 rounded-full bg-gray-300" /> // Placeholder with same size
      )}
    </div>
  );

  const socialItems = socialList.map((social) => (
    <a
      key={social.name}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-4 hover:opacity-70 transition-opacity "
    >
      {social.iconPath && (
        <img
          src={social.iconPath}
          alt={social.iconAlt}
          className="w-4 h-4"
          style={{
            filter: isDark ? "invert(1) brightness(2)" : undefined,
          }}
        />
      )}
    </a>
  ));

  const menuItems = menuList.map((menu, index) => {
    const isActive = pathname === menu.href;
    return (
      <motion.div
        key={menu.name}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <Link
          href={menu.href}
          className={`mx-4 hover:opacity-70 transition-opacity font-medium text-black dark:text-white ${
            isActive ? "underline underline-offset-4" : ""
          }`}
        >
          {menu.name}
        </Link>
      </motion.div>
    );
  });

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block rounded-full w-full px-8 py-4 bg-white/25 dark:bg-gray-800 border-2 border-white/25 dark:border-gray-500 backdrop-blur-sm ">
        <div className="flex flex-row items-center">
          <div className="basis-[15%]">
            <Logo text={brandConfig.displayName} />
          </div>
          <div className="basis-[65%] flex flex-row justify-start items-center overflow-x-auto">
            {menuItems}
          </div>
          <div className="basis-[20%] flex flex-row justify-end items-center">
            {socialItems}
            {themeIcon}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="flex md:hidden rounded-full w-full px-8 py-4">
        <div className="flex flex-row items-center justify-between w-full">
          <Logo text={brandConfig.displayName} />
          <div className="flex items-center gap-4 ">
            <div
              className="text-base leading-none"
              style={{ fontSize: "1.25rem", lineHeight: "1.5rem" }}
            >
              <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
            </div>
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
                stiffness: 200,
              }}
              className="fixed top-0 right-0 h-screen w-1/2 bg-white z-50 pt-4 will-change-transform md:hidden dark:bg-gray-800"
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

              <div className="flex flex-col gap-4 px-4 mt-12">
                {menuItems}
                <div className="flex flex-row gap-4">{socialItems}</div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
