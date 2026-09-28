"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const problems = [
  "Manual Attendance",
  "Spreadsheet Payroll",
  "Email Approvals",
  "Scattered Employee Data",
  "Constant Follow-ups",
  "Delayed Reports",
];

export default function ProblemSection() {
  const shouldReduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="problem"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="container-lg text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="badge mb-6 inline-flex">THE PROBLEM</span>
          <h2
            className="text-section-title mb-6"
            style={{ color: "var(--color-dark)" }}
          >
            HR shouldn&apos;t feel like managing{" "}
            <br className="hidden md:block" />
            <span style={{ color: "var(--color-red)" }}>
              ten different systems.
            </span>
          </h2>
          <p
            className="text-body-lg max-w-xl mx-auto"
            style={{ color: "var(--color-secondary)" }}
          >
            When HR data is fragmented across tools, accuracy drops, teams
            slow down, and decisions get delayed.
          </p>
        </motion.div>

        {/* Problem Cards → Solution */}
        <div className="max-w-3xl mx-auto">
          {/* Fragmented Problems */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {problems.map((problem, i) => (
              <motion.div
                key={problem}
                initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative rounded-xl px-4 py-4 text-left group"
                style={{
                  background: "white",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div
                  className="w-2 h-2 rounded-full mb-3"
                  style={{ background: "rgba(229,62,62,0.3)" }}
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--color-text)" }}
                >
                  {problem}
                </span>
                {/* Crossed out line */}
                <div
                  className="absolute top-1/2 left-3 right-3 h-px opacity-20"
                  style={{ background: "var(--color-red)" }}
                />
              </motion.div>
            ))}
          </div>

          {/* Arrow Transition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div
              className="h-px flex-1"
              style={{ background: "var(--color-border)" }}
            />
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: "var(--color-red)", boxShadow: "var(--shadow-red)" }}
            >
              <ArrowRight size={20} className="text-white" />
            </div>
            <div
              className="h-px flex-1"
              style={{ background: "var(--color-border)" }}
            />
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="rounded-2xl p-8 text-center relative overflow-hidden"
            style={{
              background: "var(--color-dark)",
              border: "1px solid #222",
            }}
          >
            {/* Glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(229,62,62,0.15) 0%, transparent 70%)",
              }}
            />
            <span
              className="badge badge-dark mb-4 inline-flex"
              style={{ color: "var(--color-dark-muted)", borderColor: "#333" }}
            >
              THE SOLUTION
            </span>
            <h3
              className="text-subheading mb-3"
              style={{ color: "white" }}
            >
              One connected workforce platform.
            </h3>
            <p
              className="text-body max-w-lg mx-auto"
              style={{ color: "var(--color-dark-muted)" }}
            >
              Shenll HRMS brings together every HR function — from payroll and
              attendance to projects and AI insights — in a single, connected
              platform that adapts to your business.
            </p>

            {/* Module Dots */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {[
                "Core HR",
                "Payroll",
                "Attendance",
                "Projects",
                "Performance",
                "AI",
                "Reports",
                "Helpdesk",
              ].map((mod) => (
                <span
                  key={mod}
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(229,62,62,0.12)",
                    color: "rgba(229,62,62,0.9)",
                    border: "1px solid rgba(229,62,62,0.2)",
                  }}
                >
                  {mod}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
