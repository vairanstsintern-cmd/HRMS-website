"use client";

import { useState, useRef } from "react";
import React from "react";
import { motion, AnimatePresence, useReducedMotion, useInView } from "framer-motion";
import { industries } from "@/data/industries";
import { Cpu, Factory, HardHat, Stethoscope, GraduationCap, Truck, Scissors, Briefcase, CheckCircle2 } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Cpu, Factory, HardHat, Stethoscope, GraduationCap, Truck, Scissors, Briefcase
};

export default function Industries() {
  const [activeId, setActiveId] = useState(industries[0].id);
  const shouldReduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const active = industries.find(i => i.id === activeId)!;

  return (
    <section id="industries" ref={ref} className="section-padding bg-white">
      <div className="container-xl">
        <div className="text-center mb-16">
          <span className="badge badge-dark mb-6 inline-flex">INDUSTRIES</span>
          <h2 className="text-section-title mb-4 text-gray-900">
            Built around the way your industry works.
          </h2>
          <p className="text-body-lg text-gray-500 max-w-2xl mx-auto">
            Shenll HRMS doesn't force a generic process on your business. Our modules adapt to the specific compliance, operational and workforce needs of your sector.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Industry Selector */}
          <div className="lg:col-span-4">
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
              {industries.map((ind) => {
                const Icon = iconMap[ind.icon];
                const isActive = ind.id === activeId;
                
                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveId(ind.id)}
                    className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all min-w-[200px] lg:min-w-0 ${
                      isActive 
                        ? "bg-gray-900 text-white shadow-lg shadow-gray-900/20" 
                        : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${isActive ? "bg-white/10" : "bg-white shadow-sm"}`}>
                      {Icon && <Icon size={20} className={isActive ? "text-white" : "text-gray-900"} />}
                    </div>
                    <span className="font-semibold text-sm lg:text-base">{ind.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Industry Content */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: shouldReduce ? 0 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: shouldReduce ? 0 : -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100 h-full flex flex-col"
              >
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{active.headline}</h3>
                  <p className="text-lg text-gray-600">{active.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 flex-1">
                  
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Key Workflows</h4>
                    <ul className="space-y-4">
                      {active.workflows.map((flow, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-red-500 shrink-0 mt-0.5" />
                          <span className="text-gray-700">{flow}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Recommended Modules</h4>
                    <div className="flex flex-wrap gap-2">
                      {active.keyModules.map((mod, i) => (
                        <span key={i} className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                          {mod}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-12 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                      <div className="text-xs text-gray-500 mb-2">Ready to see it in action?</div>
                      <div className="font-bold text-gray-900 mb-4">Get a demo tailored for {active.label.toLowerCase()}</div>
                      <a 
                        href="#contact" 
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="btn btn-outline w-full justify-center"
                      >
                        Book a Demo
                      </a>
                    </div>
                  </div>
                  
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
}
