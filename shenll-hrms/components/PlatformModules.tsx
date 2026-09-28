"use client";

import { useState, useRef } from "react";
import React from "react";
import { motion, AnimatePresence, useReducedMotion, useInView } from "framer-motion";
import { ChevronRight, Users, CreditCard, Clock, FolderKanban, TrendingUp, Receipt, Package, BarChart3, Headphones } from "lucide-react";
import { platformModules } from "@/data/platform";

const iconMap: Record<string, React.ElementType> = {
  Users,
  CreditCard,
  Clock,
  FolderKanban,
  TrendingUp,
  Receipt,
  Package,
  BarChart3,
  Headphones,
};

export default function PlatformModules() {
  const [activeId, setActiveId] = useState(platformModules[0].id);
  const shouldReduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const active = platformModules.find((m) => m.id === activeId)!;

  return (
    <section
      id="platform"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--color-white)" }}
    >
      <div className="container-xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="badge badge-red mb-6 inline-flex">PLATFORM</span>
          <h2
            className="text-section-title"
            style={{ color: "var(--color-dark)" }}
          >
            Everything your workforce needs.
            <br />
            <span style={{ color: "var(--color-secondary)", fontWeight: 400 }}>
              Connected in one place.
            </span>
          </h2>
        </motion.div>

        {/* Module Tab Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="horizontal-scroll mb-8"
        >
          <div className="flex gap-2 pb-2" style={{ minWidth: "max-content" }}>
            {platformModules.map((module) => {
              const Icon = iconMap[module.icon];
              const isActive = module.id === activeId;
              return (
                <button
                  key={module.id}
                  onClick={() => setActiveId(module.id)}
                  id={`platform-tab-${module.id}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 border"
                  style={{
                    background: isActive ? "var(--color-red)" : "var(--color-white)",
                    color: isActive ? "white" : "var(--color-secondary)",
                    borderColor: isActive ? "var(--color-red)" : "var(--color-border)",
                    boxShadow: isActive ? "var(--shadow-red)" : "none",
                  }}
                  aria-pressed={isActive}
                >
                  {Icon && <Icon size={15} />}
                  {module.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Active Module Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: shouldReduce ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduce ? 0 : -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            {/* Text Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                {(() => {
                  const Icon = iconMap[active.icon];
                  return (
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: "var(--color-red-soft)",
                      }}
                    >
                      {Icon && (
                        <Icon size={22} style={{ color: "var(--color-red)" }} />
                      )}
                    </div>
                  );
                })()}
                <div>
                  <span
                    className="text-xs font-bold tracking-wider uppercase"
                    style={{ color: "var(--color-red)" }}
                  >
                    {active.label}
                  </span>
                </div>
              </div>

              <h3
                className="text-subheading mb-4"
                style={{ color: "var(--color-dark)" }}
              >
                {active.headline}
              </h3>

              <p
                className="text-body mb-6"
                style={{ color: "var(--color-secondary)" }}
              >
                {active.description}
              </p>

              {/* Feature List */}
              <ul className="flex flex-col gap-3 mb-8">
                {active.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "var(--color-red-soft)" }}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M2 5L4 7L8 3"
                          stroke="var(--color-red)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span
                      className="text-body"
                      style={{ color: "var(--color-text)" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                id={`platform-cta-${active.id}`}
                className="btn btn-outline group"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {active.ctaLabel}
                <ChevronRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </div>

            {/* Visual Card */}
            <div>
              <div
                className="rounded-2xl p-8 relative overflow-hidden"
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  minHeight: "360px",
                }}
              >
                {/* Module Visual Mockup */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold" style={{ color: "var(--color-dark)" }}>
                      {active.label} Overview
                    </span>
                    <div
                      className="text-xs font-semibold px-2 py-1 rounded-full"
                      style={{
                        background: "var(--color-red-soft)",
                        color: "var(--color-red)",
                      }}
                    >
                      Live
                    </div>
                  </div>

                  {/* Fake data rows */}
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-xl p-3"
                      style={{
                        background: "white",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg shrink-0"
                        style={{
                          background:
                            i === 0
                              ? "var(--color-red-soft)"
                              : `hsl(${i * 60}, 60%, 94%)`,
                        }}
                      />
                      <div className="flex-1">
                        <div
                          className="h-2.5 rounded-full mb-1.5"
                          style={{
                            background: "#E8E8E8",
                            width: `${60 + i * 8}%`,
                          }}
                        />
                        <div
                          className="h-2 rounded-full"
                          style={{
                            background: "#F0F0F0",
                            width: `${40 + i * 6}%`,
                          }}
                        />
                      </div>
                      <div
                        className="w-16 h-6 rounded-full shrink-0"
                        style={{
                          background:
                            i % 3 === 0
                              ? "var(--color-red-soft)"
                              : i % 3 === 1
                              ? "#ECFDF5"
                              : "#F5F3FF",
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Corner accent */}
                <div
                  className="absolute bottom-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(229,62,62,0.08) 0%, transparent 70%)",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
