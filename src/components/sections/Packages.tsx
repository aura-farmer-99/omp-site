import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  marketingPlans,
  websitePlans,
  marketingProjects,
  marketingAddOns,
  websiteAddOns,
  launchBundle,
} from "../../content/packages";
import { PackageCard } from "../ui/PackageCard";
import { SegmentedToggle } from "../ui/SegmentedToggle";
import { formatInr } from "../../lib/format";
import { buildWhatsAppUrl } from "../../lib/whatsapp";
import { track } from "../../lib/analytics";

type Group = "marketing" | "website";

export function Packages() {
  const [group, setGroup] = useState<Group>("marketing");
  const reduce = useReducedMotion();

  const plans = group === "marketing" ? marketingPlans : websitePlans;
  const projects =
    group === "marketing" ? marketingProjects : [];
  const addOns = group === "marketing" ? marketingAddOns : websiteAddOns;

  const handleGroupChange = (value: string) => {
    setGroup(value as Group);
    track("package_tab", { group: value });
  };

  return (
    <section id="packages" className="section-padding">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ivory tracking-tight mb-4">
            Clear pricing. Pick what you need, or ask for a custom plan.
          </h2>
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <SegmentedToggle
            options={[
              { value: "marketing", label: "Marketing & Promotions" },
              { value: "website", label: "Websites" },
            ]}
            value={group}
            onChange={handleGroupChange}
          />
        </div>

        {/* Plans */}
        <div
          key={group}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: reduce ? 0 : i * 0.1,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <PackageCard plan={plan} />
            </motion.div>
          ))}
        </div>

        {/* Single projects (marketing only) */}
        {projects.length > 0 && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: reduce ? 0 : 0.3 }}
            className="mb-12"
          >
            <h3 className="font-display text-xl font-semibold text-ivory mb-6">
              Single projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-bg-raise border border-hairline rounded-[20px] p-6 flex flex-col hover:border-gold/20 transition-all duration-300"
                >
                  <h4 className="text-ivory font-medium mb-1">
                    {project.name}
                  </h4>
                  <p className="text-muted text-sm mb-4">{project.tagline}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-gold font-display text-lg font-semibold">
                      {formatInr(project.priceInr)}
                    </span>
                    <a
                      href={buildWhatsAppUrl(project.whatsappPrefill)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted hover:text-gold transition-colors"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
