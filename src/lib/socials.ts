import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
  FaYoutube,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import { RiThreadsFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import type { IconType } from "react-icons";

export type SocialLink = {
  name: string;
  subtitle: string;
  href: string;
  icon: IconType;
  color: string;
  glow: string;
};

export const socials: SocialLink[] = [
  {
    name: "Instagram",
    subtitle: "See my world",
    href: "https://instagram.com/",
    icon: FaInstagram,
    color: "#E1306C",
    glow: "rgba(225,48,108,0.55)",
  },
  {
    name: "Threads",
    subtitle: "Thoughts & ideas",
    href: "https://threads.net/",
    icon: RiThreadsFill,
    color: "#EDEDED",
    glow: "rgba(237,237,237,0.35)",
  },
  {
    name: "GitHub",
    subtitle: "Check my code",
    href: "https://github.com/",
    icon: FaGithub,
    color: "#8CB4FF",
    glow: "rgba(140,180,255,0.5)",
  },
  {
    name: "LinkedIn",
    subtitle: "Let's connect",
    href: "https://linkedin.com/in/",
    icon: FaLinkedinIn,
    color: "#3B82F6",
    glow: "rgba(59,130,246,0.55)",
  },
  {
    name: "Telegram",
    subtitle: "Let's talk",
    href: "https://t.me/",
    icon: FaTelegramPlane,
    color: "#22D3EE",
    glow: "rgba(34,211,238,0.55)",
  },
  {
    name: "WhatsApp",
    subtitle: "Message me",
    href: "https://wa.me/",
    icon: FaWhatsapp,
    color: "#25D366",
    glow: "rgba(37,211,102,0.55)",
  },
  {
    name: "Facebook",
    subtitle: "Follow along",
    href: "https://facebook.com/",
    icon: FaFacebookF,
    color: "#1877F2",
    glow: "rgba(24,119,242,0.55)",
  },
  {
    name: "YouTube",
    subtitle: "Watch my videos",
    href: "https://youtube.com/@",
    icon: FaYoutube,
    color: "#FF0000",
    glow: "rgba(255,0,0,0.55)",
  },
  {
    name: "Email",
    subtitle: "Send a message",
    href: "mailto:hello@dil5hodbek.uz",
    icon: HiOutlineMail,
    color: "#F5A524",
    glow: "rgba(245,165,36,0.55)",
  },
];
