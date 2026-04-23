const PHONE = "919022923544";

export const buildWhatsAppUrl = (text: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

export const defaultMessage =
  "Hi Om, I found Polkat Productions & Marketing and want to talk about ___.";

export const planPrefill = (planName: string, group: string, price: string) =>
  `Hi Om, I'm interested in the ${planName} ${group} plan (${price}). My business is ___.`;

export const servicePrefill = (service: string) =>
  `Hi Om, I'd like to talk about ${service} for my business.`;

export const workPrefill = (category: string) =>
  `Hi Om, I saw your ${category} work and want something similar.`;

export const formPrefill = (data: {
  name: string;
  business?: string;
  service: string;
  budget?: string;
  message?: string;
}) => {
  const lines = [
    `Hi Om, my name is ${data.name}.`,
    data.business && `Business: ${data.business}`,
    `Service: ${data.service}`,
    data.budget && `Budget: ${data.budget}`,
    data.message && `Message: ${data.message}`,
  ].filter(Boolean);
  return lines.join("\n");
};
// POLKAT-133: follow up on button active scale
