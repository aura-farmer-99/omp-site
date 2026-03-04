import { motion, useReducedMotion } from "motion/react";
import { Check } from "lucide-react";
import type { Plan } from "../../lib/schema";
import { formatPrice } from "../../lib/format";
import { buildWhatsAppUrl } from "../../lib/whatsapp";
import { track } from "../../lib/analytics";

interface PackageCardProps {
  plan: Plan;
}

export function PackageCard({ plan }: PackageCardProps) {
  const reduce = useReducedMotion();

  const handleClick = () => {
    track("package_select", { plan: plan.name, group: plan.group });
    window.open(buildWhatsAppUrl(plan.whatsappPrefill), "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      className={`relative rounded-[28px] p-8 flex flex-col ${
        plan.recommended
          ? "bg-bg-card border-2 border-gold/60 shadow-[0_0_40px_rgba(197,144,66,0.1)]"
          : "bg-bg-raise border border-hairline"
      }`}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
    >
      {plan.recommended && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark text-bg text-xs font-semibold px-4 py-1.5 rounded-full">
            Most popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-display text-2xl font-semibold text-ivory mb-1">
          {plan.name}
        </h3>
        <p className="text-muted text-sm">{plan.tagline}</p>
      </div>

      <div className="mb-6">
        <span className="font-display text-4xl font-bold text-ivory">
          {formatPrice(plan.priceInr, plan.billing)}
        </span>
        {plan.startingFrom && (
          <span className="text-muted text-sm ml-2">starting</span>
        )}
      </div>

      {plan.deliveryTime && (
        <p className="text-gold text-sm mb-4">Delivery: {plan.deliveryTime}</p>
      )}

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check size={16} className="text-gold mt-0.5 shrink-0" />
            <span className="text-muted text-sm leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleClick}
        className={`w-full h-12 rounded-full font-medium text-base transition-all duration-200 cursor-pointer active:scale-[0.97] ${
          plan.recommended
            ? "bg-gradient-to-br from-gold-light via-gold to-gold-dark text-bg hover:shadow-[0_0_30px_rgba(197,144,66,0.25)] hover:brightness-110"
            : "border border-hairline text-ivory hover:bg-gold/10 hover:border-gold/30"
        }`}
      >
        Choose this plan
      </button>
    </motion.div>
  );
}
// POLKAT-116: refine grain overlay opacity
