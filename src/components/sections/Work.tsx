import { useState, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Play, ExternalLink } from "lucide-react";

function YoutubeIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
import { reels, films, websites, youtubeChannel, instagramProfile } from "../../content/work";
import type { WorkItem } from "../../lib/schema";
import { ReelCard } from "../ui/ReelCard";
import { BrowserFrame } from "../ui/BrowserFrame";
import { buildWhatsAppUrl, workPrefill } from "../../lib/whatsapp";
import { track } from "../../lib/analytics";

export function Work() {
  const reduce = useReducedMotion();
  const [activeVideo, setActiveVideo] = useState<WorkItem | null>(null);
  const railRef = useRef<HTMLDivElement>(null);

  const scrollRail = (direction: "left" | "right") => {
    if (!railRef.current) return;
    const amount = direction === "left" ? -300 : 300;
    railRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="work" className="section-padding bg-bg-raise/30">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ivory tracking-tight mb-4">
            Recent reels, films, campaigns and websites.
          </h2>
        </motion.div>

        {/* Reels rail */}
        <div className="relative mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-xl font-semibold text-ivory">
              Reels
            </h3>
            <div className="flex items-center gap-3">
              <a
                href={instagramProfile.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("instagram_click", { location: "reels" })}
                className="text-muted hover:text-gold transition-colors text-sm flex items-center gap-1.5"
              >
                <ExternalLink size={14} />
                Instagram
              </a>
              <div className="hidden md:flex gap-2">
                <button
                  onClick={() => scrollRail("left")}
                  className="w-10 h-10 rounded-full border border-hairline flex items-center justify-center text-muted hover:text-ivory hover:border-gold/30 transition-all cursor-pointer"
                  aria-label="Scroll left"
                >
                  <ExternalLink size={16} className="rotate-180" />
                </button>
                <button
                  onClick={() => scrollRail("right")}
                  className="w-10 h-10 rounded-full border border-hairline flex items-center justify-center text-muted hover:text-ivory hover:border-gold/30 transition-all cursor-pointer"
                  aria-label="Scroll right"
                >
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>

          <div
            ref={railRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide -mx-6 px-6"
          >
            {reels.map((reel) => (
              <div key={reel.id} className="snap-start">
                <ReelCard
                  item={reel}
                  onPlay={(item) => {
                    setActiveVideo(item);
                    track("work_play", { id: item.id, group: "reel" });
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Films & campaigns with YouTube embeds */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-xl font-semibold text-ivory">
              Films & campaigns
            </h3>
            <a
              href={youtubeChannel.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("youtube_click", { location: "films" })}
              className="text-muted hover:text-gold transition-colors text-sm flex items-center gap-1.5"
            >
              <YoutubeIcon size={14} />
              YouTube
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {films.map((film, i) => (
              <motion.div
                key={film.id}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: reduce ? 0 : i * 0.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                <button
                  onClick={() => {
                    setActiveVideo(film);
                    track("work_play", { id: film.id, group: "film" });
                  }}
                  className="relative w-full aspect-video rounded-[20px] overflow-hidden group cursor-pointer border border-hairline"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-bg-card via-bg-raise to-bg-card" />
                  {film.video?.poster && (
                    <img
                      src={film.video.poster}
                      alt={film.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center border border-gold/30">
                      <Play size={20} className="text-gold-light ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-ivory font-medium text-sm text-left">
                      {film.title}
                    </p>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* YouTube embeds */}
          <div className="mt-8">
            <h4 className="text-muted text-sm font-medium mb-4">
              Latest from YouTube
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {youtubeChannel.videoIds.map((videoId, i) => (
                <div
                  key={i}
                  className="aspect-video rounded-[16px] overflow-hidden border border-hairline"
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`YouTube video ${i + 1}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <p className="text-muted text-xs mt-3">
              Update video IDs in{" "}
              <code className="text-gold/70">src/content/work.ts</code> with
              actual IDs from{" "}
              <a
                href={youtubeChannel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                @Ompolkat_patil
              </a>
            </p>
          </div>
        </div>

        {/* Websites */}
