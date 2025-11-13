import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  items: Array<{ q: string; a: string }>;
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <div className="divide-y divide-hairline">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between py-5 text-left group cursor-pointer"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
            >
              <span className="text-ivory font-medium text-base md:text-lg pr-4 group-hover:text-gold-light transition-colors">
                {item.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
