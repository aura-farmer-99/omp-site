export const formatInr = (n: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);

export const formatPrice = (n: number, billing: "monthly" | "one-time") => {
  const formatted = formatInr(n);
  return billing === "monthly" ? `${formatted}/mo` : formatted;
};
