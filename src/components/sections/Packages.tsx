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
