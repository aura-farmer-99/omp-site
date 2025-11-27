import { brand, contact } from "../../content/site";
import { buildWhatsAppUrl, defaultMessage } from "../../lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-bg-raise/50">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/30">
                <img
                  src={brand.logo.circle}
                  alt={brand.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-ivory">
                  {brand.name}
                </p>
                <p className="text-gold text-sm font-script text-lg">
                  {brand.tagline}
                </p>
              </div>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              {brand.descriptor}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-ivory font-medium mb-4">Quick links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-muted hover:text-gold transition-colors text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="text-muted hover:text-gold transition-colors text-sm"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  className="text-muted hover:text-gold transition-colors text-sm"
                >
                  Packages
                </a>
              </li>
