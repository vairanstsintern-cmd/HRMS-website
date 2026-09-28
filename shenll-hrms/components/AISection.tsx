"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Bot, LineChart, Code2 } from "lucide-react";

export default function AISection() {
  const shouldReduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const aiModules = [
    {
      title: "Workforce AI Agent",
      desc: "Find the right people for the right work. Skills + availability + workload + performance.",
      icon: Users,
    },
    {
      title: "Task Orchestration Agent",
      desc: "Turn priorities into action. Assign → Prioritize → Balance → Track.",
      icon: Bot,
    },
    {
      title: "Predictive Intelligence",
      desc: "Ask your workforce data anything. Natural language → Analysis → Report → Insight.",
      icon: LineChart,
    },
    {
      title: "Custom AI Agents",
      desc: "Build AI around your business. Workflows → Approvals → Automation → Decisions.",
      icon: Code2,
    },
  ];

  return (
    <section
      id="ai"
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--color-dark-bg)" }}
    >
      {/* Background Effects */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div 
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-red) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
      />

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span 
              className="badge mb-6 inline-flex"
              style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)", color: "var(--color-red-light)" }}
            >
              ADAPTIVE INTELLIGENCE ENGINE
            </span>
            <h2 
              className="text-section-title mb-6" 
              style={{ color: "var(--color-white)" }}
            >
              HR software that doesn&apos;t just automate. <br/>
              <span className="gradient-text-red">It thinks with your workflow.</span>
            </h2>
            <p 
              className="text-body-lg mb-10" 
              style={{ color: "var(--color-dark-muted)" }}
            >
              Shenll AI works around your business processes — helping teams assign work, generate insights, automate repetitive actions and make faster workforce decisions.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {aiModules.map((mod, i) => {
                const Icon = mod.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: shouldReduce ? 0 : 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="p-6 rounded-2xl border transition-colors hover:bg-white/5"
                    style={{ 
                      background: "rgba(255,255,255,0.02)",
                      borderColor: "rgba(255,255,255,0.05)" 
                    }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "rgba(229,62,62,0.15)" }}>
                      <Icon size={20} style={{ color: "var(--color-red-light)" }} />
                    </div>
                    <h3 className="text-sm font-bold mb-2 text-white">{mod.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{mod.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Visual Content: Node Graph / Abstract AI visual */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduce ? 1 : 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[600px] rounded-3xl border flex items-center justify-center overflow-hidden"
            style={{ 
              background: "rgba(255,255,255,0.02)",
              borderColor: "rgba(255,255,255,0.05)" 
            }}
          >
            {/* Center Core */}
            <div className="relative z-10 w-32 h-32 rounded-full flex items-center justify-center" style={{ background: "rgba(229,62,62,0.1)", border: "1px solid rgba(229,62,62,0.2)", boxShadow: "0 0 40px rgba(229,62,62,0.2)" }}>
              <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ background: "var(--color-red)" }}>
                <span className="text-white font-bold tracking-widest text-sm">SHENLL<br/>AI</span>
              </div>
            </div>

            {/* Orbital Rings */}
            {[1, 2, 3].map((ring) => (
              <motion.div 
                key={ring}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
                style={{ 
                  width: `${ring * 220}px`, 
                  height: `${ring * 220}px`,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 40 + ring * 10, repeat: Infinity, ease: "linear" }}
              >
                {/* Dots on rings */}
                {[...Array(ring * 2)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-red-500/50"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `translate(-50%, -50%) rotate(${(360 / (ring * 2)) * i}deg) translateY(-${ring * 110}px)`,
                    }}
                  />
                ))}
              </motion.div>
            ))}

            {/* Connecting lines / Data streams (CSS simulated) */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
              <path d="M 50% 50% L 20% 20%" stroke="var(--color-red)" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 50% 50% L 80% 30%" stroke="var(--color-red)" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 50% 50% L 70% 80%" stroke="var(--color-red)" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 50% 50% L 30% 70%" stroke="var(--color-red)" strokeWidth="1" strokeDasharray="4 4" />
            </svg>

            {/* Floating text labels */}
            <div className="absolute top-[20%] left-[15%] text-[10px] font-mono text-gray-400">DATA SYNC</div>
            <div className="absolute top-[30%] right-[15%] text-[10px] font-mono text-gray-400">PROCESSING</div>
            <div className="absolute bottom-[20%] right-[20%] text-[10px] font-mono text-gray-400">PREDICTION</div>
            <div className="absolute bottom-[30%] left-[15%] text-[10px] font-mono text-gray-400">ORCHESTRATION</div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
