"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Features", href: "#features" },
  { label: "AI", href: "#ai" },
  { label: "Mobile", href: "#mobile" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const sections = [
  "home",
  "platform",
  "features",
  "ai",
  "mobile",
  "industries",
  "pricing",
  "faq",
  "contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback(
    (href: string) => {
      setMobileOpen(false);
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ zIndex: "var(--z-nav)" }}
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg border-b border-[var(--color-border)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-xl">
          <nav
            className="flex items-center justify-between h-[72px]"
            aria-label="Primary navigation"
          >
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="flex items-center gap-2 shrink-0"
              aria-label="Shenll HRMS - Go to homepage"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--color-red)" }}
                >
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span
                  className="font-bold text-lg tracking-tight"
                  style={{ color: "var(--color-dark)" }}
                >
                  Shenll
                  <span style={{ color: "var(--color-red)" }}>HRMS</span>
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group"
                    style={{
                      color: isActive
                        ? "var(--color-red)"
                        : "var(--color-secondary)",
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    <span
                      className="absolute bottom-1 left-4 right-4 h-0.5 rounded-full transition-all duration-200 origin-left"
                      style={{
                        background: "var(--color-red)",
                        transform: isActive ? "scaleX(1)" : "scaleX(0)",
                      }}
                    />
                    {!isActive && (
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-transparent group-hover:bg-gray-200 transition-all duration-200" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="btn btn-primary"
                id="nav-book-demo-btn"
              >
                Book a Demo
                <ChevronRight size={16} />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="btn btn-primary btn-sm"
                id="nav-mobile-demo-btn"
              >
                Demo
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-lg transition-colors hover:bg-gray-100"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden"
              style={{ zIndex: 998 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl lg:hidden flex flex-col"
              style={{ zIndex: 999 }}
              aria-label="Mobile navigation"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-[var(--color-border)]">
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center"
                    style={{ background: "var(--color-red)" }}
                  >
                    <span className="text-white font-bold text-xs">S</span>
                  </div>
                  <span className="font-bold text-base">
                    Shenll<span style={{ color: "var(--color-red)" }}>HRMS</span>
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <div className="flex-1 overflow-y-auto p-6">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link, i) => {
                    const isActive =
                      activeSection === link.href.replace("#", "");
                    return (
                      <motion.li
                        key={link.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 + 0.1 }}
                      >
                        <a
                          href={link.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(link.href);
                          }}
                          className="flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200"
                          style={{
                            color: isActive
                              ? "var(--color-red)"
                              : "var(--color-text)",
                            background: isActive
                              ? "var(--color-red-soft)"
                              : "transparent",
                          }}
                        >
                          {link.label}
                          <ChevronRight
                            size={16}
                            className={`transition-colors ${
                              isActive
                                ? "text-red-500"
                                : "text-gray-300"
                            }`}
                          />
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              {/* Mobile CTA */}
              <div className="p-6 border-t border-[var(--color-border)]">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                  className="btn btn-primary w-full justify-center"
                  id="mobile-menu-demo-btn"
                >
                  Book a Live Demo
                  <ChevronRight size={16} />
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
