import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  MessageCircle,
  Phone,
  Mail,
  Send,
  CheckCircle,
} from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
import { contact } from "../../content/site";
import { faqs } from "../../content/faq";
import { Accordion } from "../ui/Accordion";
import { buildWhatsAppUrl, formPrefill } from "../../lib/whatsapp";
import { track } from "../../lib/analytics";
import { EnquiryForm } from "../../lib/schema";

const serviceOptions = [
  { value: "reels", label: "Reels" },
  { value: "editing", label: "Video editing" },
  { value: "social", label: "Social media" },
  { value: "ads", label: "Ads" },
  { value: "website", label: "Website" },
  { value: "not-sure", label: "Not sure" },
];

const budgetOptions = [
  { value: "<10k", label: "Under ₹10,000" },
  { value: "10-20k", label: "₹10,000 - ₹20,000" },
  { value: "20-35k", label: "₹20,000 - ₹35,000" },
  { value: "35k+", label: "₹35,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

export function Contact() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState<EnquiryForm>({
    name: "",
    business: "",
    service: "reels",
    budget: undefined,
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryForm, string>> = {};
    if (!form.name || form.name.length < 2) {
      newErrors.name = "Enter your name so Om knows who to reply to.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    track("lead_submit", {
      service: form.service,
      budget: form.budget,
    });

    const message = formPrefill({
      name: form.name,
      business: form.business,
      service: form.service,
      budget: form.budget,
      message: form.message,
    });

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-bg-raise/30">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ivory tracking-tight mb-6">
            Tell us what you're making.
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href={buildWhatsAppUrl("Hi Om, I'd like to talk about a project.")}
              target="_blank"
