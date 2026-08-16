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
      )}

      {/* Bottom gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Play icon */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center border border-gold/30">
          <Play size={16} className="text-gold-light ml-0.5" />
        </div>
        {item.durationSec && (
          <span className="text-xs text-ivory/70 font-medium">
            {item.durationSec}s
          </span>
        )}
      </div>

      {/* Title */}
      <div className="absolute bottom-4 right-4 left-16">
        <p className="text-sm text-ivory font-medium text-left leading-tight">
          {item.title}
        </p>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-gold/20 rounded-[20px]" />
    </motion.button>
  );
}
// POLKAT-171: refine faq answer length
