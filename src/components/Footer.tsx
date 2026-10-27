"use client";

import { navigateWithTransition } from "@/components/shared/PageTransition/PageTransition";

const QUICK_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "CAREER", href: "/career" },
  { label: "CAREER APPLICATION", href: "/job-application" },
  { label: "CONTACT US", href: "/contact" },
];

const OPEN_ROLES = [
  { label: "PROJECT MANAGER", href: "/career-project-manager" },
  { label: "PRODUCTION MANAGER", href: "/career-production-manager" },
  { label: "SALES & ACCOUNT MANAGER", href: "/career-sales-account-manager" },
  { label: "3D VISUALIZER", href: "/career-3d-visualizer" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/nominacreative/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5 1H4.5C2.567 1 1 2.567 1 4.5V11.5C1 13.433 2.567 15 4.5 15H11.5C13.433 15 15 13.433 15 11.5V4.5C15 2.567 13.433 1 11.5 1Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.8 7.559C10.887 8.142 10.787 8.737 10.516 9.26C10.245 9.782 9.815 10.206 9.289 10.471C8.763 10.736 8.167 10.828 7.586 10.734C7.004 10.641 6.467 10.366 6.051 9.95C5.634 9.533 5.36 8.996 5.266 8.415C5.172 7.833 5.265 7.237 5.529 6.711C5.794 6.185 6.218 5.756 6.741 5.485C7.264 5.213 7.859 5.114 8.441 5.2C9.035 5.288 9.586 5.565 10.01 5.99C10.435 6.415 10.712 6.965 10.8 7.559Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.85 4.15H11.857" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/nominacreative/home/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6667 5.33337C11.7276 5.33337 12.7449 5.75481 13.4951 6.50495C14.2452 7.2551 14.6667 8.27251 14.6667 9.33337V14H12V9.33337C12 8.97975 11.8595 8.64061 11.6095 8.39056C11.3594 8.14052 11.0203 8.00004 10.6667 8.00004C10.3131 8.00004 9.97391 8.14052 9.72386 8.39056C9.47381 8.64061 9.33333 8.97975 9.33333 9.33337V14H6.66667V9.33337C6.66667 8.27251 7.08809 7.2551 7.83824 6.50495C8.58838 5.75481 9.60581 5.33337 10.6667 5.33337Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.00004 6H1.33337V14H4.00004V6Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.66671 4.00004C3.40309 4.00004 4.00004 3.40309 4.00004 2.66671C4.00004 1.93033 3.40309 1.33337 2.66671 1.33337C1.93033 1.33337 1.33337 1.93033 1.33337 2.66671C1.33337 3.40309 1.93033 4.00004 2.66671 4.00004Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/nominaindonesia?locale=id_ID",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1.33337H10C9.11595 1.33337 8.26814 1.68456 7.64302 2.30968C7.0179 2.9348 6.66671 3.78265 6.66671 4.66671V6.66671H4.66671V9.33337H6.66671V14.6667H9.33337V9.33337H11.3334L12 6.66671H9.33337V4.66671C9.33337 4.4899 9.40361 4.32033 9.52864 4.1953C9.65366 4.07028 9.82323 4.00004 10 4.00004H12V1.33337Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

interface UnifiedFooterProps {
  bgColor?: string;
  className?: string;
}

export function Footer({ bgColor = "#121315", className = "" }: UnifiedFooterProps = {}) {
  return (
    <footer
      className={`nomina-unified-footer ${className}`.trim()}
      style={{
        position: "relative",
        zIndex: 2,
        backgroundColor: bgColor,
        color: "#f9f9f9",
        fontFamily: "var(--font-body), 'Aspekta', sans-serif",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Main footer content */}
      <div className="nomina-footer-main">
        {/* Left column — Heading + Social */}
        <div className="nomina-footer-col-left">
          <h2
            style={{
              fontFamily: "var(--font-heading), 'Nasalization', sans-serif",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "clamp(42px, 6.2vw, 76px)",
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              color: "#f9f9f9",
              margin: 0,
              marginBottom: 28,
            }}
          >
            Making
            <br />
            your
            <br />
            imagination
            <br />
            come true
          </h2>

          {/* Social icons */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href !== "#" ? "_blank" : undefined}
                rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="footer-social-icon"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 0.25s ease",
                  flexShrink: 0,
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Center column — Quick Links & Open Roles */}
        <div className="nomina-footer-col-center">
          <h3
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "#ffffff",
              marginBottom: 22,
              marginTop: 0,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
              gap: 9,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#fb5102",
                display: "inline-block",
                flexShrink: 0,
                transform: "translateY(-1px)",
              }}
            />
            Quick links
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 34 }}>
            {QUICK_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  navigateWithTransition(link.href);
                }}
                className="footer-quick-link"
                style={{
                  display: "inline-block",
                  padding: "12px 20px",
                  borderRadius: 20,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#ffffff",
                  fontSize: 13,
                  fontWeight: 500,
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                  lineHeight: 1,
                  transition: "background-color 0.25s ease, color 0.25s ease",
                  textTransform: "uppercase",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <h3
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "#ffffff",
              marginBottom: 22,
              marginTop: 0,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
              gap: 9,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#fb5102",
                display: "inline-block",
                flexShrink: 0,
                transform: "translateY(-1px)",
              }}
            />
            Open Roles
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {OPEN_ROLES.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  navigateWithTransition(link.href);
                }}
                className="footer-quick-link"
                style={{
                  display: "inline-block",
                  padding: "12px 20px",
                  borderRadius: 20,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#ffffff",
                  fontSize: 13,
                  fontWeight: 500,
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                  lineHeight: 1,
                  transition: "background-color 0.25s ease, color 0.25s ease",
                  textTransform: "uppercase",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right column — Contact */}
        <div className="nomina-footer-col-right">
          <h3
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "#ffffff",
              marginBottom: 20,
              marginTop: 0,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
              gap: 9,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#fb5102",
                display: "inline-block",
                flexShrink: 0,
                transform: "translateY(-1px)",
              }}
            />
            Contact
          </h3>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <a
              href="mailto:hello@nomina-creative.com"
              style={{
                color: "rgba(255, 255, 255, 0.85)",
                textDecoration: "none",
                fontSize: 16,
                lineHeight: 1.5,
                letterSpacing: "-0.02em",
                marginBottom: 10,
                transition: "color 0.2s ease",
              }}
              className="footer-contact-link"
            >
              hello@nomina-creative.com
            </a>
            <a
              href="tel:+6281912121777"
              style={{
                color: "rgba(255, 255, 255, 0.85)",
                textDecoration: "none",
                fontSize: 16,
                lineHeight: 1.5,
                letterSpacing: "-0.02em",
                marginBottom: 10,
                transition: "color 0.2s ease",
              }}
              className="footer-contact-link"
            >
              +62 819-1212-1777
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=-6.2562171,106.8246734"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(255, 255, 255, 0.85)",
                textDecoration: "none",
                fontSize: 16,
                lineHeight: 1.5,
                letterSpacing: "-0.02em",
                margin: 0,
                transition: "color 0.2s ease",
              }}
              className="footer-contact-link"
            >
              Jl. Kemang Utara X Jl. Melati No.2C,
              <br />
              RT.2/RW.1, Duren Tiga, Kec. Pancoran,
              <br />
              Kota Jakarta Selatan, DKI Jakarta 12760
            </a>
          </div>
        </div>
      </div>

      {/* Giant NOMINA wordmark — fills the full display width edge-to-edge */}
      <div
        style={{
          overflow: "hidden",
          backgroundColor: bgColor,
          width: "100%",
          padding: "14px 0 0 0",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            fontSize: "22.5vw",
            fontWeight: 900,
            color: "#fb5102",
            textAlign: "center",
            letterSpacing: "-0.02em",
            lineHeight: 0.75,
            fontFamily: "var(--font-heading), 'Nasalization', sans-serif",
            whiteSpace: "nowrap",
            margin: 0,
            userSelect: "none",
          }}
        >
          NOMINA
        </div>
      </div>

      {/* Unlayered scoped styles immune to Agntix * { padding: 0; margin: 0 } reset */}
      <style>{`
        .nomina-unified-footer .nomina-footer-main {
          display: grid !important;
          grid-template-columns: 1fr !important;
          gap: 36px !important;
          align-items: start !important;
          padding: 56px 24px 32px 24px !important;
          box-sizing: border-box !important;
          width: 100% !important;
        }
        .nomina-unified-footer .nomina-footer-col-left,
        .nomina-unified-footer .nomina-footer-col-center,
        .nomina-unified-footer .nomina-footer-col-right {
          padding: 0 !important;
          margin: 0 !important;
          box-sizing: border-box !important;
        }
        @media (min-width: 768px) {
          .nomina-unified-footer .nomina-footer-main {
            grid-template-columns: 4fr 5fr 3fr !important;
            gap: 0 !important;
            padding: 84px 60px 32px 60px !important;
          }
          .nomina-unified-footer .nomina-footer-col-left {
            padding-bottom: 24px !important;
          }
          .nomina-unified-footer .nomina-footer-col-center {
            padding-left: 90px !important;
            padding-right: 40px !important;
            padding-bottom: 24px !important;
          }
          .nomina-unified-footer .nomina-footer-col-right {
            padding-left: 20px !important;
            padding-bottom: 24px !important;
          }
        }
        @media (min-width: 1200px) {
          .nomina-unified-footer .nomina-footer-col-center {
            padding-left: 130px !important;
            padding-right: 48px !important;
          }
        }
        .footer-social-icon:hover {
          background-color: #fb5102 !important;
        }
        .footer-quick-link:hover {
          background-color: #fb5102 !important;
          color: #f9f9f9 !important;
        }
        .footer-contact-link:hover {
          color: #fb5102 !important;
        }
      `}</style>
    </footer>
  );
}
