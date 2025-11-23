import { useState, useEffect } from "react";
import { motion, useReducedMotion, useScroll } from "motion/react";
import { Menu, X, MessageCircle, Sun, Moon } from "lucide-react";
import { brand, contact } from "../../content/site";
import { buildWhatsAppUrl, defaultMessage } from "../../lib/whatsapp";
import { track } from "../../lib/analytics";
import { useTheme } from "../../lib/theme";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Packages", href: "#packages" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setIsScrolled(scrollY.get() > 50);
    const unsub = scrollY.on("change", onScroll);
    return () => unsub();
  }, [scrollY]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    track("nav_click", { href });
  };

  return (
    <motion.header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? "top-2" : "top-4"
      }`}
      initial={reduce ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    >
      <nav
        className={`flex items-center gap-1 rounded-full border backdrop-blur-md transition-all duration-300 ${
          isScrolled
            ? "bg-bg-raise/90 border-hairline shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-bg-raise/70 border-hairline/50"
        } ${isScrolled ? "px-4 py-2" : "px-5 py-2.5"}`}
      >
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2 mr-2"
          onClick={() => handleNavClick("#top")}
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gold/30">
            <img
              src={brand.logo.mark}
              alt={brand.name}
              className="w-full h-full object-cover"
            />
          </div>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
