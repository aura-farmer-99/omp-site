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
              rel="noopener noreferrer"
              onClick={() => track("cta_whatsapp", { location: "contact" })}
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark text-bg font-medium hover:shadow-[0_0_30px_rgba(197,144,66,0.25)] hover:brightness-110 transition-all duration-200 active:scale-[0.97]"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${contact.phoneDisplay.replace(/\s/g, "")}`}
              onClick={() => track("call_click", {})}
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-hairline text-ivory font-medium hover:bg-gold/10 hover:border-gold/30 transition-all duration-200"
            >
              <Phone size={18} />
              {contact.phoneDisplay}
            </a>
            <a
              href={`mailto:${contact.email}`}
              onClick={() => track("email_click", {})}
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-hairline text-ivory font-medium hover:bg-gold/10 hover:border-gold/30 transition-all duration-200"
            >
              <Mail size={18} />
              Email
            </a>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("instagram_click", {})}
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-hairline text-ivory font-medium hover:bg-gold/10 hover:border-gold/30 transition-all duration-200"
            >
              <InstagramIcon size={18} />
              Instagram
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            {submitted ? (
              <div className="bg-bg-card border border-hairline rounded-[24px] p-8 text-center">
                <CheckCircle size={48} className="text-gold mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold text-ivory mb-2">
                  WhatsApp opened
                </h3>
                <p className="text-muted mb-4">
                  If nothing happened, tap below to try again.
                </p>
                <a
                  href={buildWhatsAppUrl(
                    formPrefill({
