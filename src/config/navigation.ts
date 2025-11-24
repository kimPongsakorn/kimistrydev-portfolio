export interface MenuItem {
  name: string;
  href: string;
  iconPath?: string;
  iconAlt?: string;
}

export const menuList: MenuItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Skills",
    href: "/skills",
  },
  {
    name: "Experience",
    href: "/experience",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const socialList: MenuItem[] = [
  {
    name: "GitHub",
    iconPath: "/icons/ic_github.svg",
    iconAlt: "GitHub",
    href: "https://github.com/kimisry",
  },
  {
    name: "LinkedIn",
    iconPath: "/icons/ic_linkedin.svg",
    iconAlt: "LinkedIn",
    href: "https://twitter.com/kimisry",
  },
];

export const brandConfig = {
  name: "KimisryDev",
  displayName: "<KimisryDev>",
  // สามารถเพิ่ม properties อื่นๆ ได้
  // href: "/",
  // logo: "/logo.png",
};

