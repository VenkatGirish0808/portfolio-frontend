// src/components/Footer.tsx

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Github, Linkedin, Mail, ExternalLink, ArrowUp } from "lucide-react";
import Certification from "./Certification";

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const wireframeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const wireframe = wireframeRef.current;

    if (!footer || !wireframe) return;

    // Create animated wireframe lines
    const lines = wireframe.querySelectorAll(".wireframe-line");
    lines.forEach((line, index) => {
      gsap.fromTo(
        line,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 0.3,
          duration: 2,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
          },
        }
      );
    });

    // Animate social icons
    const socialIcons = footer.querySelectorAll(".social-icon");
    socialIcons.forEach((icon, index) => {
      gsap.fromTo(
        icon,
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/VenkatGirish0808",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/s-venkat-girish-77b167276/",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:venkatgirish007@gmail.com",
      color: "hover:text-green-400",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Animated Wireframe Background */}
      <div ref={wireframeRef} className="absolute inset-0 opacity-10">
        <div className="wireframe-line absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        <div className="wireframe-line absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        <div className="wireframe-line absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        <div className="wireframe-line absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        <div className="wireframe-line absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>

        <div className="wireframe-line absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
        <div className="wireframe-line absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
        <div className="wireframe-line absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
        <div className="wireframe-line absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
        <div className="wireframe-line absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-12 items-center">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                SVG
              </span>
              Portfolio
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Building the future with code, one project at a time. Always
              excited to work on innovative solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-6">Connect With Me</h4>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon p-3 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-current`}
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {["About", "Education", "Projects", "Certificates", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="block text-slate-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link}
                  </a>
                )
              )}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 mx-auto md:ml-auto md:mr-0"
              >
                <ArrowUp size={16} />
                Back to Top
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Layout (always open) */}
        <div className="md:hidden text-center">
          <div className="mb-6 space-y-6">
            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Connect With Me</h4>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-icon p-3 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-current`}
                      aria-label={social.name}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-col gap-3">
                {["About", "Education", "Projects", "Certificates", "Contact"].map(
                  (link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-slate-400 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  )
                )}
                <button
                  onClick={scrollToTop}
                  className="flex items-center justify-center gap-2 text-slate-400 hover:text-white transition-colors duration-300"
                >
                  <ArrowUp size={16} />
                  Back to Top
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 Full-Stack Developer Portfolio. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>🇮🇳 Built with 💻 in India</span>
              <span className="mx-2">•</span>
              <span className="flex items-center gap-1">
                Powered by SVG
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
