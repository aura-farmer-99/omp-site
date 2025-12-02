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
