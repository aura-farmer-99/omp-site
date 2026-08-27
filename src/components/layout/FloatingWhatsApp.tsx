import { useState, useEffect } from "react";
import { motion, useReducedMotion, useScroll } from "motion/react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, defaultMessage } from "../../lib/whatsapp";
import { track } from "../../lib/analytics";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  useEffect(() => {
    const onScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      const contactSection = document.getElementById("contact");
      const contactTop = contactSection?.offsetTop ?? Infinity;
      const currentScroll = scrollY.get();

      setVisible(
        currentScroll > heroHeight && currentScroll < contactTop - 200
      );
    };
    const unsub = scrollY.on("change", onScroll);
    return () => unsub();
  }, [scrollY]);

  if (!visible) return null;

  return (
    <motion.a
      href={buildWhatsAppUrl(defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("cta_whatsapp", { location: "floating" })}
      className="fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark text-bg shadow-[0_8px_30px_rgba(197,144,66,0.3)]"
      initial={reduce ? false : { scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </motion.a>
  );
}
// POLKAT-175: follow up on reel rail scroll snap
