"use client";

import Tetris from "@/components/Tetris";

const QUICK_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "CAREER", href: "/career" },
  { label: "CAREER APPLICATION", href: "/job-application" },
  { label: "CONTACT US", href: "/contact" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/nomina.creative/",
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
    href: "https://www.linkedin.com/company/nomina-indonesia/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6667 5.33337C11.7276 5.33337 12.7449 5.75481 13.4951 6.50495C14.2452 7.2551 14.6667 8.27251 14.6667 9.33337V14H12V9.33337C12 8.97975 11.8595 8.64061 11.6095 8.39056C11.3594 8.14052 11.0203 8.00004 10.6667 8.00004C10.3131 8.00004 9.97391 8.14052 9.72386 8.39056C9.47381 8.64061 9.33333 8.97975 9.33333 9.33337V14H6.66667V9.33337C6.66667 8.27251 7.08809 7.2551 7.83824 6.50495C8.58838 5.75481 9.60581 5.33337 10.6667 5.33337Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.00004 6H1.33337V14H4.00004V6Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.66671 4.00004C3.40309 4.00004 4.00004 3.40309 4.00004 2.66671C4.00004 1.93033 3.40309 1.33337 2.66671 1.33337C1.93033 1.33337 1.33337 1.93033 1.33337 2.66671C1.33337 3.40309 1.93033 4.00004 2.66671 4.00004Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.36 4.548C14.282 4.256 14.132 3.988 13.924 3.772C13.716 3.556 13.456 3.398 13.168 3.312C12.18 3.04 8 3.04 8 3.04C8 3.04 3.82 3.04 2.832 3.312C2.544 3.398 2.284 3.556 2.076 3.772C1.868 3.988 1.718 4.256 1.64 4.548C1.376 5.556 1.376 7.66 1.376 7.66C1.376 7.66 1.376 9.764 1.64 10.772C1.718 11.064 1.868 11.332 2.076 11.548C2.284 11.764 2.544 11.922 2.832 12.008C3.82 12.28 8 12.28 8 12.28C8 12.28 12.18 12.28 13.168 12.008C13.456 11.922 13.716 11.764 13.924 11.548C14.132 11.332 14.282 11.064 14.36 10.772C14.624 9.764 14.624 7.66 14.624 7.66C14.624 7.66 14.624 5.556 14.36 4.548Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.56 9.872V5.448L10.24 7.66L6.56 9.872Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1.33337H10C9.11595 1.33337 8.26814 1.68456 7.64302 2.30968C7.0179 2.9348 6.66671 3.78265 6.66671 4.66671V6.66671H4.66671V9.33337H6.66671V14.6667H9.33337V9.33337H11.3334L12 6.66671H9.33337V4.66671C9.33337 4.4899 9.40361 4.32033 9.52864 4.1953C9.65366 4.07028 9.82323 4.00004 10 4.00004H12V1.33337Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#121315",
        color: "#ffffff",
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* Decorative self-playing Tetris strip */}
      <div
        style={{
          width: "100%",
          height: "80px",
          backgroundColor: "#ffffff",
          overflow: "hidden",
        }}
      >
        <Tetris
          boardColor="transparent"
          gridColor="transparent"
          colors={["#FF3800"]}
          cellSize={15}
          gap={1}
          dropSpeed={2.5}
          movement={6}
        />
      </div>
      {/* Main footer content */}
      <div
        className="px-6 md:px-[60px] pt-20 md:pt-[160px] pb-10 md:pb-[35px] grid grid-cols-1 md:grid-cols-[4fr_5fr_3fr] gap-12 md:gap-0 items-start"
      >
        {/* Left column — Heading + Social */}
        <div className="flex flex-col justify-between md:pb-10">
          <h2
            style={{
              fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "clamp(45px, 8vw, 80px)",
              lineHeight: 1,
              letterSpacing: "-0.06em",
              color: "#ffffff",
              margin: 0,
              marginBottom: 30,
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
          <div style={{ display: "flex", alignItems: "center", gap: 3, flexWrap: "wrap" }}>
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
                  marginBottom: 8,
                  marginRight: 3,
                  transition: "background-color 0.25s ease",
                  flexShrink: 0,
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Center column — Quick Links */}
        <div className="md:pl-[150px] md:pr-[50px] md:pb-10">
          <h3
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "#ffffff",
              marginBottom: 25,
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
                backgroundColor: "#FF3203",
                display: "inline-block",
                flexShrink: 0,
                transform: "translateY(-1px)",
              }}
            />
            Quick links
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 0 }}>
            {QUICK_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = link.href;
                }}
                className="footer-quick-link"
                style={{
                  display: "inline-block",
                  padding: "13px 20px",
                  borderRadius: 20,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#ffffff",
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: "none",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  transition: "background-color 0.25s ease, color 0.25s ease",
                  textTransform: "uppercase",
                  marginBottom: 8,
                  marginRight: 8,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right column — Contact */}
        <div className="md:pl-5 pb-10 md:mb-[30px]">
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
                backgroundColor: "#FF3203",
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
            <p
              style={{
                color: "rgba(255, 255, 255, 0.85)",
                fontSize: 16,
                lineHeight: 1.5,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Jl. Kemang Utara X Jl. Melati No.2C,
              <br />
              RT.2/RW.1, Duren Tiga, Kec. Pancoran,
              <br />
              Kota Jakarta Selatan, DKI Jakarta 12760
            </p>
          </div>
        </div>
      </div>

      {/* Giant NOMINA text */}
      <div
        style={{
          overflow: "hidden",
          backgroundColor: "#121315",
          width: "100%",
        }}
      >
        <div
          style={{
            fontSize: "23vw",
            fontWeight: 900,
            color: "#FF3203",
            textAlign: "center",
            letterSpacing: "-0.03em",
            lineHeight: 0.8,
            fontFamily: "var(--tp-ff-clash-semibold, 'Clash Display', sans-serif)",
            whiteSpace: "nowrap",
            width: "100%",
            display: "block",
            margin: "0 auto",
          }}
        >
          NOMINA
        </div>
      </div>

      {/* Hover styles */}
      <style>{`
        .footer-social-icon:hover {
          background-color: #FF3203 !important;
        }
        .footer-quick-link:hover {
          background-color: #FF3203 !important;
          color: #ffffff !important;
        }
        .footer-contact-link:hover {
          color: #FF3203 !important;
        }
      `}</style>
    </footer>
  );
}
