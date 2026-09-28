"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight, ArrowDown, Users, Clock, CreditCard, TrendingUp, Zap } from "lucide-react";

const floatingCards = [
  {
    id: "payroll",
    label: "Payroll",
    value: "₹42.8L",
    sub: "Processed this month",
    icon: CreditCard,
    color: "#E53E3E",
    bg: "#FFF1F1",
    position: "left-top",
  },
  {
    id: "attendance",
    label: "Attendance",
    value: "96%",
    sub: "Team attendance rate",
    icon: Clock,
    color: "#059669",
    bg: "#ECFDF5",
    position: "right-top",
  },
  {
    id: "performance",
    label: "Performance",
    value: "92%",
    sub: "Average team score",
    icon: TrendingUp,
    color: "#7C3AED",
    bg: "#F5F3FF",
    position: "left-bottom",
  },
  {
    id: "ai-tasks",
    label: "AI Assistant",
    value: "12",
    sub: "Tasks auto-completed",
    icon: Zap,
    color: "#D97706",
    bg: "#FFFBEB",
    position: "right-bottom",
  },
];

const DashboardPreview = () => (
  <div
    className="relative rounded-2xl overflow-hidden"
    style={{
      background: "white",
      border: "1px solid var(--color-border)",
      boxShadow: "0 24px 80px rgba(0,0,0,0.12), 0 8px 32px rgba(0,0,0,0.08)",
    }}
  >
    {/* Browser Chrome */}
    <div
      className="flex items-center gap-2 px-4 h-10"
      style={{ background: "#F5F5F5", borderBottom: "1px solid #E8E8E8" }}
    >
      <div className="w-3 h-3 rounded-full bg-red-400" />
      <div className="w-3 h-3 rounded-full bg-yellow-400" />
      <div className="w-3 h-3 rounded-full bg-green-400" />
      <div
        className="flex-1 mx-4 h-5 rounded-md flex items-center px-2"
        style={{ background: "#E8E8E8" }}
      >
        <span className="text-xs text-gray-400">app.shenllhrms.com</span>
      </div>
    </div>

    {/* Dashboard Content */}
    <div style={{ background: "#FAFAFA" }}>
      {/* Top nav */}
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{ background: "white", borderBottom: "1px solid #F0F0F0" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-6 h-6 rounded-md"
            style={{ background: "var(--color-red)" }}
          />
          <span className="text-xs font-semibold text-gray-700">
            Workforce Overview
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-16 h-4 rounded-md bg-gray-100" />
          <div className="w-6 h-6 rounded-full bg-gray-100" />
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-3 p-4">
        {[
          { label: "Employees", value: "248", color: "#E53E3E", icon: "👥" },
          { label: "Attendance", value: "96%", color: "#059669", icon: "✓" },
          { label: "Payroll", value: "₹42.8L", color: "#7C3AED", icon: "₹" },
          { label: "Productivity", value: "92%", color: "#D97706", icon: "↑" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl p-3"
            style={{
              background: "white",
              border: "1px solid #F0F0EE",
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
            }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-400">{stat.label}</span>
              <span className="text-xs">{stat.icon}</span>
            </div>
            <div
              className="text-base font-bold"
              style={{ color: stat.color }}
            >
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Chart Area */}
      <div className="px-4 pb-4">
        <div
          className="rounded-xl p-4"
          style={{
            background: "white",
            border: "1px solid #F0F0EE",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-xs font-semibold text-gray-600">
                Attendance Overview
              </div>
              <div className="text-xs text-gray-400">Last 7 days</div>
            </div>
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
          {/* Fake Bar Chart */}
          <div className="flex items-end gap-1.5 h-16">
            {[70, 85, 78, 92, 88, 95, 96].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-sm transition-all"
                  style={{
                    height: `${(h / 100) * 48}px`,
                    background:
                      i === 6
                        ? "var(--color-red)"
                        : "rgba(229,62,62,0.15)",
                  }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-1">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <span key={i} className="text-xs text-gray-300 flex-1 text-center">
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Employee List Preview */}
      <div className="px-4 pb-5">
        <div
          className="rounded-xl p-4"
          style={{
            background: "white",
            border: "1px solid #F0F0EE",
          }}
        >
          <div className="text-xs font-semibold text-gray-600 mb-3">
            Recent Activity
          </div>
          {[
            { name: "Arjun Mehta", action: "Checked in", time: "09:02 AM", status: "active" },
            { name: "Priya Sharma", action: "Leave approved", time: "10:15 AM", status: "leave" },
            { name: "Rahul Nair", action: "Task completed", time: "11:30 AM", status: "done" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0"
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs text-white font-bold shrink-0"
                style={{
                  background:
                    item.status === "active"
                      ? "#059669"
                      : item.status === "leave"
                      ? "#D97706"
                      : "#7C3AED",
                }}
              >
                {item.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-gray-700 truncate">
                  {item.name}
                </div>
                <div className="text-xs text-gray-400">{item.action}</div>
              </div>
              <div className="text-xs text-gray-300 shrink-0">{item.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function Hero() {
  const shouldReduce = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 24 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
    }),
  };

  const floatAnim = (delay = 0) => ({
    y: shouldReduce ? [0, 0] : [0, -8, 0],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      delay,
    },
  });

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FAFAF8 0%, #F7F7F5 60%, #FFFFFF 100%)",
        paddingTop: "140px",
        paddingBottom: "80px",
        minHeight: "100vh",
      }}
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Red Glow */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(229,62,62,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container-xl relative">
        {/* Eyebrow + Headline */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="badge badge-red mb-6 inline-flex">
              <Zap size={10} />
              AI-POWERED HRMS FOR MODERN WORKFORCES
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="text-display mb-6"
            style={{ color: "var(--color-dark)" }}
          >
            Your People.{" "}
            <br className="hidden sm:block" />
            Your Processes.{" "}
            <span style={{ color: "var(--color-red)" }}>
              One Intelligent HR Platform.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="text-body-lg max-w-2xl mx-auto mb-10"
            style={{ color: "var(--color-secondary)" }}
          >
            Manage HR, payroll, attendance, projects, performance, expenses
            and employee operations from one flexible platform — enhanced
            with AI that adapts to the way your business works.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="#contact"
              id="hero-book-demo-btn"
              className="btn btn-primary btn-lg group"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book a Live Demo
              <ChevronRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#platform"
              id="hero-explore-btn"
              className="btn btn-outline btn-lg group"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("platform")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Shenll HRMS
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
          </motion.div>
        </div>

        {/* Product Visual */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="relative max-w-5xl mx-auto"
        >
          {/* Floating Cards - Desktop */}
          {floatingCards.map((card) => {
            const Icon = card.icon;
            const positions: Record<string, string> = {
              "left-top": "absolute -left-16 top-12 hidden xl:block",
              "right-top": "absolute -right-16 top-12 hidden xl:block",
              "left-bottom": "absolute -left-16 bottom-24 hidden xl:block",
              "right-bottom": "absolute -right-16 bottom-24 hidden xl:block",
            };
            const delays: Record<string, number> = {
              "left-top": 0,
              "right-top": 0.5,
              "left-bottom": 1,
              "right-bottom": 1.5,
            };
            return (
              <motion.div
                key={card.id}
                className={`${positions[card.position]} w-48 rounded-2xl p-4`}
                style={{
                  background: "white",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-card)",
                }}
                animate={floatAnim(delays[card.position])}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: card.bg }}
                  >
                    <Icon size={16} style={{ color: card.color }} />
                  </div>
                  <span className="text-xs font-semibold text-gray-600">
                    {card.label}
                  </span>
                </div>
                <div
                  className="text-xl font-bold"
                  style={{ color: card.color }}
                >
                  {card.value}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">{card.sub}</div>
                <div
                  className="mt-2 h-1 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${card.color} 0%, ${card.bg} 100%)`,
                    opacity: 0.4,
                  }}
                />
              </motion.div>
            );
          })}

          {/* Main Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <DashboardPreview />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={shouldReduce ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() =>
              document.getElementById("platform")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span
              className="text-xs font-medium tracking-wider uppercase"
              style={{ color: "var(--color-secondary)" }}
            >
              Explore
            </span>
            <ArrowDown
              size={18}
              style={{ color: "var(--color-secondary)" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
