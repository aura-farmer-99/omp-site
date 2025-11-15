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
