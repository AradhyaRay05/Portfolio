import React, { useState } from "react";
import { FadeIn } from "../components/ui";

const emailAddress = "aradhyaray05@gmail.com";
const encodedSubject = encodeURIComponent("Portfolio inquiry");
const encodedBody = encodeURIComponent("Hi Aradhya,\n\n");
const mailtoUrl = `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;
const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodedSubject}&body=${encodedBody}`;
const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${emailAddress}&subject=${encodedSubject}&body=${encodedBody}`;

const socials = [
  { name: "GitHub", url: "https://github.com/AradhyaRay05", icon: "↗" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rayaradhya",
    icon: "↗",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/muse_in_machines/",
    icon: "↗",
  },
  { name: "Email", url: mailtoUrl, icon: "✉" },
];

const ContactSection: React.FC = () => {
  const [showEmailOptions, setShowEmailOptions] = useState(false);
  const [copied, setCopied] = useState(false);

  const openEmailOptions = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setShowEmailOptions((current) => !current);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = mailtoUrl;
    }
  };

  return (
    <section
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10 sm:pb-14 md:pb-16"
      id="contact"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading section-heading section-heading--display mb-8 text-center uppercase sm:mb-12 md:mb-16">
            Let&apos;s Talk
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} y={30}>
          <p
            className="text-[#D7E2EA]/70 text-center font-light leading-relaxed max-w-xl mx-auto mb-12 sm:mb-16 md:mb-20"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
          >
            I&apos;m always open to discussing new projects, internship
            opportunities, research collaborations, or just having a
            conversation about AI and technology.
          </p>
        </FadeIn>

        <FadeIn delay={0.25} y={30}>
          <div className="mb-14 flex flex-col items-center justify-center gap-3 sm:mb-18 sm:flex-row md:mb-24">
            <a
              href={mailtoUrl}
              onClick={openEmailOptions}
              className="rounded-full font-medium uppercase tracking-widest text-white
                        px-10 py-4 sm:px-14 sm:py-5
                        text-sm sm:text-base md:text-lg
                        hover:scale-105 transition-transform duration-300"
              style={{
                background:
                  "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
                boxShadow:
                  "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
                outline: "2px solid white",
                outlineOffset: "-3px",
              }}
            >
              Get In Touch
            </a>
            <a
              href="/Aradhya%20Ray%20Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#D7E2EA]/25 px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#D7E2EA]/80 transition hover:border-[#D7E2EA]/55 hover:text-[#D7E2EA] sm:py-4"
            >
              View Resume
            </a>
            <a
              href="/Aradhya%20Ray%20Resume.pdf"
              download="Aradhya Ray Resume.pdf"
              className="rounded-full border border-[#D7E2EA]/25 px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#D7E2EA]/80 transition hover:border-[#D7E2EA]/55 hover:text-[#D7E2EA] sm:py-4"
            >
              Download Resume
            </a>
          </div>
        </FadeIn>

        {/* Social links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-16 sm:mb-20">
          {socials.map((social, i) => (
            <FadeIn key={social.name} delay={0.3 + i * 0.08} y={20}>
              <a
                href={social.url}
                onClick={social.name === "Email" ? openEmailOptions : undefined}
                target={social.name === "Email" ? undefined : "_blank"}
                rel={
                  social.name === "Email" ? undefined : "noopener noreferrer"
                }
                aria-expanded={
                  social.name === "Email" ? showEmailOptions : undefined
                }
                className="flex items-center justify-center gap-2
                                border border-[#D7E2EA]/20 rounded-2xl py-4
                                text-[#D7E2EA]/70 font-medium uppercase tracking-wider text-sm
                                hover:border-[#D7E2EA]/50 hover:text-[#D7E2EA] transition-all duration-300
                                hover:bg-[#D7E2EA]/5"
              >
                {social.name}
                <span className="text-sm opacity-70">{social.icon}</span>
              </a>
            </FadeIn>
          ))}
        </div>

        {showEmailOptions && (
          <FadeIn delay={0} y={12}>
            <div className="mx-auto mb-16 max-w-2xl rounded-3xl border border-[#D7E2EA]/12 bg-[#D7E2EA]/[0.04] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)] sm:p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#D7E2EA]/58">
                    Choose email app
                  </p>
                  <p className="mt-1 text-sm font-light text-[#D7E2EA]/68">
                    {emailAddress}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowEmailOptions(false)}
                  className="self-start rounded-full border border-[#D7E2EA]/15 px-3 py-1.5 text-sm font-semibold text-[#D7E2EA]/70 transition hover:border-[#D7E2EA]/40 hover:text-[#D7E2EA] sm:self-auto"
                >
                  Close
                </button>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-4">
                <a
                  href={mailtoUrl}
                  className="rounded-2xl border border-[#D7E2EA]/15 px-4 py-3 text-center text-sm font-semibold text-[#D7E2EA]/78 transition hover:border-[#D7E2EA]/45 hover:text-[#D7E2EA]"
                >
                  Mail app
                </a>
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-[#D7E2EA]/15 px-4 py-3 text-center text-sm font-semibold text-[#D7E2EA]/78 transition hover:border-[#D7E2EA]/45 hover:text-[#D7E2EA]"
                >
                  Gmail
                </a>
                <a
                  href={outlookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-[#D7E2EA]/15 px-4 py-3 text-center text-sm font-semibold text-[#D7E2EA]/78 transition hover:border-[#D7E2EA]/45 hover:text-[#D7E2EA]"
                >
                  Outlook
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="rounded-2xl border border-[#D7E2EA]/15 px-4 py-3 text-center text-sm font-semibold text-[#D7E2EA]/78 transition hover:border-[#D7E2EA]/45 hover:text-[#D7E2EA]"
                >
                  {copied ? "Copied" : "Copy email"}
                </button>
              </div>
            </div>
          </FadeIn>
        )}

        {/* Footer */}
        <FadeIn delay={0.6} y={10}>
          <div className="border-t border-[#D7E2EA]/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#D7E2EA]/58 text-sm font-light">
              © 2026 Aradhya Ray. Built with React & Framer Motion.
            </p>
            <p className="text-[#D7E2EA]/58 text-sm font-light">
              Kolkata, India
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactSection;
