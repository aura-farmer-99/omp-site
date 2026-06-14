import { motion, useReducedMotion } from "motion/react";
import { Clapperboard, Megaphone, Globe } from "lucide-react";
import { services } from "../../content/services";
import { track } from "../../lib/analytics";

const icons = {
  production: Clapperboard,
  marketing: Megaphone,
  web: Globe,
};

const links = {
  production: { label: "See the work", href: "#work" },
  marketing: { label: "See packages", href: "#packages" },
  web: { label: "See packages", href: "#packages" },
};

export function Services() {
  const reduce = useReducedMotion();

  return (
    <section id="services" className="section-padding">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ivory tracking-tight mb-4">
            Everything your brand needs to be seen and remembered.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = icons[service.pillar];
            const link = links[service.pillar];
            return (
              <motion.div
                key={service.id}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: reduce ? 0 : i * 0.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className={`bg-bg-raise border border-hairline rounded-[24px] p-8 flex flex-col hover:border-gold/20 hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)] transition-all duration-300 ${
                  i === 0 ? "lg:row-span-2" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <Icon size={24} className="text-gold" />
                </div>

                <h3 className="font-display text-xl font-semibold text-ivory mb-3">
                  {service.title}
                </h3>

                <p className="text-muted text-sm leading-relaxed mb-6">
                  {service.summary}
                </p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {service.includes.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-sm text-muted"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={link.href}
                  onClick={() =>
                    track("service_click", { service: service.id })
                  }
                  className="text-gold text-sm font-medium hover:text-gold-light transition-colors"
                >
                  {link.label}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
// POLKAT-150: refine nav blur on scroll
