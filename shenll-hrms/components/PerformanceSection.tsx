"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, LayoutList, MessageSquare, LineChart, Link } from "lucide-react";

export default function PerformanceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const workflow = [
    { label: "Set Goals", icon: Target },
    { label: "Assign Work", icon: LayoutList },
    { label: "Track Progress", icon: LineChart },
    { label: "Review Performance", icon: MessageSquare },
    { label: "Measure Results", icon: Users },
  ];

  return (
    <section className="section-padding overflow-hidden bg-gray-50 border-y border-gray-100">
      <div className="container-xl" ref={ref}>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-section-title mb-4 text-gray-900">
            Connect people, projects and performance.
          </h2>
          <p className="text-body-lg text-gray-500">
            Performance isn't an annual event. It's a continuous process tied directly to the projects and tasks your teams complete every day.
          </p>
        </div>

        {/* Animated Workflow diagram */}
        <div className="relative max-w-4xl mx-auto py-12 overflow-hidden">
          
          {/* Connection Line - desktop only, behind grid */}
          <div className="absolute top-1/2 left-[5%] right-[5%] h-0.5 bg-gray-200 -translate-y-1/2 hidden md:block" />
          
          <motion.div 
            className="absolute top-1/2 left-[5%] h-0.5 bg-red-500 -translate-y-1/2 hidden md:block origin-left"
            style={{ right: "5%" }}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
            {workflow.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + (i * 0.2) }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-red-100 shadow-md flex items-center justify-center mb-4 relative group hover:border-red-300 transition-colors">
                    <Icon size={24} className="text-red-500" />
                    {/* Ripple effect */}
                    <motion.div 
                      className="absolute inset-0 rounded-full border border-red-500"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: [0, 1, 0], scale: [0.8, 1.4, 1.6] } : {}}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 + (i * 0.3) }}
                    />
                  </div>
                  <div className="text-sm font-bold text-gray-800 text-center px-2">{step.label}</div>
                  
                  {/* Mobile connector */}
                  {i < workflow.length - 1 && (
                    <div className="h-8 w-px bg-red-200 my-2 md:hidden" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tags */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {["Goals", "Reviews", "Ratings", "Projects", "Tasks", "Timesheets", "Reports"].map(tag => (
            <div key={tag} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 shadow-sm flex items-center gap-2">
              <Link size={12} className="text-gray-400" />
              {tag}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
