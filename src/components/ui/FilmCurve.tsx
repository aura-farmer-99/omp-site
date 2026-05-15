import { motion, useReducedMotion } from "motion/react";

export function FilmCurve() {
  const reduce = useReducedMotion();

  return (
    <div className="w-full overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E0C387" />
            <stop offset="50%" stopColor="#C59042" />
            <stop offset="100%" stopColor="#8A5F22" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,80 C240,20 480,100 720,60 C960,20 1200,100 1440,50"
          stroke="url(#goldGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.23, 1, 0.32, 1], delay: 0.5 }}
        />
        {/* Sprocket holes */}
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.circle
            key={i}
            cx={60 + i * 55}
            cy={60 + Math.sin(i * 0.8) * 20}
            r="3"
            fill="url(#goldGradient)"
            opacity={0.4}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 0.5, delay: 1 + i * 0.05 }}
          />
        ))}
      </svg>
    </div>
  );
}
// POLKAT-140: refine package card hover state
