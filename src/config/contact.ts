export interface ContactItem {
  name: string;
  href: string;
  iconPath?: string;
  iconAlt?: string;
  label?: string;
}

export const contactList: ContactItem[] = [
  {
    name: "LinkedIn",
    label: "Connect with me on LinkedIn",
    href: "https://www.linkedin.com/in/kimpsk/",
    iconPath: "/icons/ic_contact_linkedin.svg",
    iconAlt: "LinkedIn",
  },
  {
    name: "GitHub",
    label: "Connect with me on GitHub",
    href: "https://github.com/kimPongsakorn",
    iconPath: "/icons/ic_contact_github.svg",
    iconAlt: "GitHub",
  },
  
  {
    name: "Email",
    label: "kimpsk.work@gmail.com",
    href: "mailto:kimpsk.work@gmail.com",
    iconPath: "/icons/ic_contact_email.svg",
    iconAlt: "Email",
  },
];
