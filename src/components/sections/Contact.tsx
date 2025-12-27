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
