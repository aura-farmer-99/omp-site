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
