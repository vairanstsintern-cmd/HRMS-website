"use client";

import { useRef } from "react";
import React from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import {
  Users,
  CreditCard,
  Clock,
  Package,
  UserPlus,
  FolderKanban,
  TrendingUp,
  Receipt,
  Headphones,
  BarChart3,
} from "lucide-react";
import { features } from "@/data/features";

const iconMap: Record<string, React.ElementType> = {
  Users,
  CreditCard,
  Clock,
  Package,
  UserPlus,
  FolderKanban,
  TrendingUp,
  Receipt,
  Headphones,
  BarChart3,
};

const tagColors: Record<string, { bg: string; text: string }> = {
  Foundation: { bg: "#FFF1F1", text: "#E53E3E" },
  Finance: { bg: "#ECFDF5", text: "#059669" },
  Workforce: { bg: "#EFF6FF", text: "#2563EB" },
  Operations: { bg: "#FFFBEB", text: "#D97706" },
  Talent: { bg: "#F0FDF4", text: "#16A34A" },
  Productivity: { bg: "#F5F3FF", text: "#7C3AED" },
  Growth: { bg: "#FFF7ED", text: "#EA580C" },
  Support: { bg: "#F0F9FF", text: "#0284C7" },
  Intelligence: { bg: "#FDF4FF", text: "#9333EA" },
};

export default function FeatureSection() {
  const shouldReduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="features"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="container-xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge badge-red mb-6 inline-flex">FEATURES</span>
          <h2
            className="text-section-title mb-4"
            style={{ color: "var(--color-dark)" }}
          >
            Powerful HR capabilities.
            <br />
            <span style={{ color: "var(--color-secondary)", fontWeight: 400 }}>
              One connected experience.
            </span>
          </h2>
          <p
            className="text-body-lg max-w-xl mx-auto"
            style={{ color: "var(--color-secondary)" }}
          >
            Every module is built to connect — so your HR data flows
            seamlessly across payroll, attendance, projects and more.
          </p>
        </motion.div>

        {/* Feature Grid - Asymmetric Layout */}
        <div className="space-y-6">
          {/* Row 1: 3 equal cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.slice(0, 3).map((feature, i) => {
              const Icon = iconMap[feature.icon];
              const tagColor = tagColors[feature.tag] || { bg: "#F5F5F5", text: "#666" };
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="card group"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: tagColor.bg }}
                    >
                      {Icon && <Icon size={22} style={{ color: tagColor.text }} />}
                    </div>
                    <span
                      className="text-xs font-bold tracking-wider uppercase px-2 py-1 rounded-full"
                      style={{ background: tagColor.bg, color: tagColor.text }}
                    >
                      {feature.tag}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "var(--color-dark)" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-body mb-5"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    {feature.description}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {feature.highlights.slice(0, 3).map((h, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-sm"
                        style={{ color: "var(--color-secondary)" }}
                      >
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                          style={{ background: tagColor.bg }}
                        >
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path
                              d="M1.5 4L3 5.5L6.5 2.5"
                              stroke={tagColor.text}
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Row 2: 2 equal cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.slice(3, 5).map((feature, i) => {
              const Icon = iconMap[feature.icon];
              const tagColor = tagColors[feature.tag] || { bg: "#F5F5F5", text: "#666" };
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="card group"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: tagColor.bg }}
                    >
                      {Icon && <Icon size={22} style={{ color: tagColor.text }} />}
                    </div>
                    <span
                      className="text-xs font-bold tracking-wider uppercase px-2 py-1 rounded-full"
                      style={{ background: tagColor.bg, color: tagColor.text }}
                    >
                      {feature.tag}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "var(--color-dark)" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-body mb-5"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    {feature.description}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {feature.highlights.slice(0, 5).map((h, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-sm"
                        style={{ color: "var(--color-secondary)" }}
                      >
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                          style={{ background: tagColor.bg }}
                        >
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path
                              d="M1.5 4L3 5.5L6.5 2.5"
                              stroke={tagColor.text}
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Row 3: 4 mini cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {features.slice(5).map((feature, i) => {
              const Icon = iconMap[feature.icon];
              const tagColor = tagColors[feature.tag] || { bg: "#F5F5F5", text: "#666" };
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
                  className="card group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: tagColor.bg }}
                  >
                    {Icon && <Icon size={18} style={{ color: tagColor.text }} />}
                  </div>
                  <h3
                    className="text-base font-bold mb-2"
                    style={{ color: "var(--color-dark)" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
