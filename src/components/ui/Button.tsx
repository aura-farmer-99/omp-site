import { motion, useReducedMotion } from "motion/react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const reduce = useReducedMotion();

  const base =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 select-none active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-br from-gold-light via-gold to-gold-dark text-bg hover:shadow-[0_0_30px_rgba(197,144,66,0.25)] hover:brightness-110",
    secondary:
      "border border-hairline text-ivory hover:bg-gold/10 hover:border-gold/30",
  };

  const sizes = {
    sm: "h-10 px-5 text-sm",
    md: "h-12 px-7 text-base",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <motion.button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      {...(props as Record<string, unknown>)}
    >
      {children}
    </motion.button>
  );
}
