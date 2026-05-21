import { motion, useReducedMotion } from "motion/react";

interface SegmentedToggleProps {
  options: Array<{ value: string; label: string }>;
  value: string;
  onChange: (value: string) => void;
}

export function SegmentedToggle({
  options,
  value,
  onChange,
}: SegmentedToggleProps) {
  const reduce = useReducedMotion();

  return (
    <div
      className="inline-flex items-center bg-bg-card rounded-full p-1.5 border border-hairline"
      role="tablist"
    >
      {options.map((option) => {
        const isActive = option.value === value;
        return (
          <button
            key={option.value}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.value)}
            className="relative px-6 py-2.5 rounded-full text-sm md:text-base font-medium transition-colors duration-200 cursor-pointer"
          >
            {isActive && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gold-light via-gold to-gold-dark rounded-full"
                layoutId="toggleIndicator"
                transition={
                  reduce
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 300, damping: 30 }
                }
              />
            )}
            <span
              className={`relative z-10 ${
                isActive ? "text-bg" : "text-muted hover:text-ivory"
              }`}
            >
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
// POLKAT-142: refine footer link ordering
