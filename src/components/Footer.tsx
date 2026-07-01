import { PilLogoDark } from "@/components/icons";
import {
  InstagramIcon,
  LinkedInIcon,
  FacebookIcon,
  ArrowRightIcon,
} from "@/components/icons";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const SITE_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "SPECIAL 20", href: "#special-20" },
  { label: "SERVICES", href: "#services" },
  { label: "CAREERS", href: "#" },
  { label: "CONTACT", href: "#" },
  { label: "PIL STARTER", href: "#" },
  { label: "PRIVACY & COOKIE", href: "#" },
  { label: "TERMS OF USE", href: "#" },
  { label: "CLIENTS", href: "#clients" },
];

const SERVICE_CATEGORIES = [
  {
    title: "STRATEGY . BRANDING",
    items: [
      "Creative Direction and Strategy",
      "Brand positioning and identity",
      "Strategic Consulting",
      "Cross Media Strategy",
    ],
  },
  {
    title: "CONTENT . EVENTS",
    items: [
      "Art Direction",
      "Experiential Design",
      "Photo and Video production",
      "Shooting Production management",
      "Events Planning and Management",
      "Logistics Management and Supply",
    ],
  },
  {
    title: "PR . DIGITAL PR",
    items: [
      "Public Relations",
      "Digital Pr",
      "Influencer Marketing",
      "Corporate Pr",
      "Media Strategy and Plan",
      "Media Monitoring and Analysis",
    ],
  },
  {
    title: "DIGITAL . TECH",
    items: [
      "Social Media management",
      "Website and E-commerce",
      "Paid Media and Performance Marketing",
      "Web marketing and SEO",
      "Digital Analytics",
    ],
  },
  {
    title: "AI . INTELLIGENT SYSTEMS",
    items: [
      "AI content production",
      "Web Marketing automation",
      "Chatbot and AI agents",
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-pil-black text-white">
      {/* Decorative top bar — animated blocks pattern */}
      <div className="h-16 md:h-20 bg-pil-dark overflow-hidden flex items-end">
        <div className="flex gap-[2px] w-full h-full items-end px-2">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="bg-white/10 flex-1"
              style={{
                height: `${20 + Math.sin(i * 0.5) * 30 + Math.random() * 20}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main footer content */}
      <div className="px-6 md:px-12 lg:px-16 py-12 md:py-16">
        {/* Row 1: Logo + Company info + Nav links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Logo and company info */}
          <div className="md:col-span-4">
            <PilLogoDark />
            <div className="mt-6 space-y-1 text-sm text-white/70">
              <p className="font-bold text-white text-sm">PIL SRL</p>
              <p>Via Carlo Botta, 8 20135 Milano (MI)</p>
              <p className="mt-3">
                phone{" "}
                <a href="tel:+390292885858" className="hover:text-white transition-colors">
                  +39 02 9288 5858
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@pilcommunication.com"
                  className="hover:text-white transition-colors"
                >
                  info@pilcommunication.com
                </a>
              </p>
            </div>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {SITE_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-bold uppercase tracking-wider text-white/70 hover:text-white transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/10 my-10 md:my-14" />

        {/* Row 2: Newsletter + Service categories */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white/90">
              Subscribe to our newsletter
            </h3>
            <div className="mt-4 flex items-center border-b border-white/30">
              <input
                type="email"
                placeholder="Email*"
                className="flex-1 bg-transparent py-3 text-sm text-white placeholder:text-white/40 outline-none"
              />
              <button className="text-white/60 hover:text-white transition-colors p-2">
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
            <p className="mt-4 text-[10px] text-white/40 leading-relaxed">
              By subscribing you accept the{" "}
              <a href="#" className="underline hover:text-white/60">
                privacy & cookie
              </a>{" "}
              policy and related terms.
            </p>
          </div>

          {/* Service categories */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
            {SERVICE_CATEGORIES.map((category) => (
              <div key={category.title}>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-white/90 mb-3">
                  {category.title}
                </h4>
                <ul className="space-y-1.5">
                  {category.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-[11px] text-white/50 hover:text-white/80 transition-colors leading-relaxed"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 md:px-12 lg:px-16 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/40">
            © 2026 PIL SRL All rights reserved. · P.iva 14097620968
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-white/40">Follow us</span>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <FacebookIcon className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-white/40 font-bold">PIL SRL</span>
            <LanguageSwitcher variant="dark" />
          </div>
        </div>
      </div>
    </footer>
  );
}
