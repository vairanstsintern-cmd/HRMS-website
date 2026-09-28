"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Businesses" },
  { value: 99.9, suffix: "%", label: "Platform Availability", decimal: true },
];

const badges = [
  "Web + Mobile",
  "AI-Powered",
  "Secure Cloud",
  "Custom Workflows",
  "Multi-Module",
  "Scalable",
];

function AnimatedNumber({
  target,
  decimal = false,
  suffix = "",
}: {
  target: number;
  decimal?: boolean;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (shouldReduce) {
      setCount(target);
      return;
    }
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target, shouldReduce]);

  const display = decimal ? count.toFixed(1) : Math.floor(count).toLocaleString();

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function TrustBar() {
  const shouldReduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-12" style={{ background: "var(--color-white)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
      <div className="container-xl">
        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-bold tracking-widest uppercase mb-8"
          style={{ color: "var(--color-secondary)" }}
        >
          Built for modern workforce operations
        </motion.p>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div
                className="text-4xl font-bold tracking-tight"
                style={{ color: "var(--color-dark)" }}
              >
                <AnimatedNumber
                  target={stat.value}
                  decimal={stat.decimal}
                  suffix={stat.suffix}
                />
              </div>
              <div
                className="text-sm font-medium mt-1"
                style={{ color: "var(--color-secondary)" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {badges.map((badge, i) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
              className="badge"
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--color-red)" }}
              />
              {badge}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
