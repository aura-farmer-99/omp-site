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
