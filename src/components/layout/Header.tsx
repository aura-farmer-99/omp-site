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
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-2 text-sm text-muted hover:text-ivory rounded-full hover:bg-gold/5 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 text-muted hover:text-gold transition-colors cursor-pointer"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* WhatsApp button */}
        <a
          href={buildWhatsAppUrl(defaultMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("cta_whatsapp", { location: "header" })}
          className="hidden md:inline-flex items-center gap-2 ml-2 px-5 py-2.5 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark text-bg text-sm font-medium hover:shadow-[0_0_20px_rgba(197,144,66,0.25)] hover:brightness-110 transition-all duration-200 active:scale-[0.97]"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden ml-2 p-2 text-ivory hover:text-gold transition-colors cursor-pointer"
          aria-label="Toggle menu"
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu sheet */}
      {isMobileOpen && (
        <motion.div
          initial={reduce ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full mt-2 left-0 right-0 bg-bg-raise/95 backdrop-blur-md border border-hairline rounded-[20px] p-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-3 text-ivory hover:text-gold rounded-xl hover:bg-gold/5 transition-all"
              >
                {link.label}
              </a>
            ))}
            <hr className="border-hairline my-2" />
            <a
              href={`tel:${contact.phoneDisplay.replace(/\s/g, "")}`}
              className="px-4 py-3 text-muted hover:text-ivory rounded-xl hover:bg-gold/5 transition-all text-sm"
            >
              {contact.phoneDisplay}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="px-4 py-3 text-muted hover:text-ivory rounded-xl hover:bg-gold/5 transition-all text-sm"
            >
              {contact.email}
            </a>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-muted hover:text-ivory rounded-xl hover:bg-gold/5 transition-all text-sm"
            >
              Instagram
            </a>
            <a
              href={buildWhatsAppUrl(defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("cta_whatsapp", { location: "mobile_menu" })}
              className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark text-bg font-medium"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
// POLKAT-146: follow up on theme toggle icon
