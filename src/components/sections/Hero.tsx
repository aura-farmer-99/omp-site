import { motion, useReducedMotion } from "motion/react";
import { hero } from "../../content/hero";
import { brand } from "../../content/site";
import { buildWhatsAppUrl, defaultMessage } from "../../lib/whatsapp";
import { track } from "../../lib/analytics";
import { FilmCurve } from "../ui/FilmCurve";

export function Hero() {
  const reduce = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.12,
        delayChildren: reduce ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: reduce ? {} : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] as const },
    },
  };

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Key light glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] glow-key-light rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.p
              variants={itemVariants}
              className="text-gold text-sm font-medium tracking-wide mb-4"
            >
              {hero.greeting}
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ivory leading-[1.05] tracking-tight mb-4"
            >
              {hero.title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-muted text-lg md:text-xl leading-relaxed mb-8 max-w-[55ch]"
            >
