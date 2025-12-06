import { motion, useReducedMotion } from "motion/react";
import { Clapperboard, Megaphone, Globe } from "lucide-react";
import { services } from "../../content/services";
import { track } from "../../lib/analytics";

const icons = {
  production: Clapperboard,
  marketing: Megaphone,
  web: Globe,
};

const links = {
  production: { label: "See the work", href: "#work" },
  marketing: { label: "See packages", href: "#packages" },
  web: { label: "See packages", href: "#packages" },
};

export function Services() {
  const reduce = useReducedMotion();

  return (
    <section id="services" className="section-padding">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ivory tracking-tight mb-4">
            Everything your brand needs to be seen and remembered.
