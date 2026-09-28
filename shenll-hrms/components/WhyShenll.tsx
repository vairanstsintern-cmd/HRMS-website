"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Settings, Maximize, Bot, Smartphone, Layers, ShieldCheck } from "lucide-react";

export default function WhyShenll() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  const benefits = [
    {
      title: "Flexible",
      desc: "Adapt workflows to your policies.",
      icon: Settings,
      size: "large"
    },
    {
      title: "Connected",
      desc: "One platform across HR operations.",
      icon: Layers,
      size: "medium"
    },
    {
      title: "AI-Powered",
      desc: "Automate repetitive work and generate insights.",
      icon: Bot,
      size: "large"
    },
    {
      title: "Mobile Ready",
      desc: "Employees stay connected anywhere.",
      icon: Smartphone,
      size: "medium"
    },
    {
      title: "Scalable",
      desc: "Built for growing organizations.",
      icon: Maximize,
      size: "medium"
    },
    {
      title: "Secure",
      desc: "Role-based access and secure cloud infrastructure.",
      icon: ShieldCheck,
      size: "large"
    }
  ];

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-section-title text-gray-900 mb-6">
            Built to fit your business — not force your business to fit software.
          </h2>
        </div>

        {/* Clean equal-height 2x3 responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col min-h-[200px] group hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-auto group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-gray-900" />
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
