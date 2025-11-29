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
