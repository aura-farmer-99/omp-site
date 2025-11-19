import { motion, useReducedMotion } from "motion/react";
import { Play } from "lucide-react";
import type { WorkItem } from "../../lib/schema";

interface ReelCardProps {
  item: WorkItem;
  onPlay?: (item: WorkItem) => void;
}

export function ReelCard({ item, onPlay }: ReelCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.button
      onClick={() => onPlay?.(item)}
      className="relative flex-shrink-0 w-[240px] md:w-[280px] aspect-[9/16] rounded-[20px] overflow-hidden group cursor-pointer border border-hairline"
      whileHover={reduce ? undefined : { scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
    >
      {/* Poster / gradient placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-card via-bg-raise to-bg-card" />
      {item.video?.poster && (
        <img
          src={item.video.poster}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
