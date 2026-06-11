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
              {hero.statement}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href={buildWhatsAppUrl(defaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("cta_whatsapp", { location: "hero" })}
                className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark text-bg font-medium text-base hover:shadow-[0_0_30px_rgba(197,144,66,0.25)] hover:brightness-110 transition-all duration-200 active:scale-[0.97]"
              >
                {hero.primaryCta}
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center h-12 px-7 rounded-full border border-hairline text-ivory font-medium text-base hover:bg-gold/10 hover:border-gold/30 transition-all duration-200 active:scale-[0.97]"
              >
                {hero.secondaryCta}
              </a>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="font-script text-2xl text-gold/80"
            >
              {brand.tagline}
            </motion.p>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="relative">
              {/* Gold ring behind */}
              <div className="absolute -inset-3 rounded-[32px] border border-gold/20" />
              {/* Photo */}
              <div className="relative w-[300px] h-[375px] md:w-[360px] md:h-[450px] lg:w-[400px] lg:h-[500px] rounded-[28px] overflow-hidden">
                <img
                  src={hero.photo}
                  alt={hero.photoAlt}
                  className="w-full h-full object-cover object-[50%_30%]"
                  fetchPriority="high"
                />
                {/* Bottom fade into bg */}
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-bg to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Film curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <FilmCurve />
      </div>
    </section>
  );
}
// POLKAT-149: refine pricing footnote
