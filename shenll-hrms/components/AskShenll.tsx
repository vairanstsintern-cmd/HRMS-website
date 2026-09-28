"use client";

import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ArrowRight, UserCheck, FileText, Activity, Check } from "lucide-react";

export default function AskShenll() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const [phase, setPhase] = useState(0); // 0: Idle, 1: Typing, 2: Analyzing, 3: Result

  useEffect(() => {
    if (!inView) return;
    
    // Simulate the interaction sequence
    const t1 = setTimeout(() => setPhase(1), 800);
    const t2 = setTimeout(() => setPhase(2), 3500);
    const t3 = setTimeout(() => setPhase(3), 5500);
    
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [inView]);

  return (
    <section className="py-24" style={{ background: "var(--color-bg)" }}>
      <div className="container-md text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-section-title" style={{ color: "var(--color-dark)" }}>
            Ask your HR data <span style={{ color: "var(--color-red)" }}>anything.</span>
          </h2>
        </motion.div>

        {/* Chat UI Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-3xl p-6 md:p-10 text-left"
          style={{
            border: "1px solid var(--color-border)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.06)",
          }}
        >
          {/* User Input Query */}
          <div className="flex gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-gray-500">You</span>
            </div>
            <div className="flex-1 bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <p className="text-gray-700 text-lg relative">
                {phase >= 1 ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, ease: "linear" }}
                  >
                    "Show employees with attendance below 90% in the last 3 months."
                  </motion.span>
                ) : (
                  <span className="text-gray-300">Ask Shenll anything...</span>
                )}
                {phase === 1 && (
                  <motion.span 
                    animate={{ opacity: [1, 0, 1] }} 
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-1.5 h-5 bg-red-500 ml-1 translate-y-1"
                  />
                )}
              </p>
            </div>
          </div>

          {/* AI Response Area */}
          {(phase >= 2) && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-4"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "var(--color-red)" }}>
                <Sparkles size={16} className="text-white" />
              </div>
              
              <div className="flex-1">
                {/* Analyzing State */}
                {phase === 2 && (
                  <div className="bg-red-50/50 rounded-2xl p-5 border border-red-100/50">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div 
                        animate={{ rotate: 360 }} 
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full"
                      />
                      <span className="text-sm font-semibold text-red-600">Analyzing workforce data...</span>
                    </div>
                    <div className="space-y-2">
                      {["Employee records", "Attendance", "Leave", "Department", "Date range"].map((item, i) => (
                        <motion.div 
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.3 }}
                          className="flex items-center gap-2 text-xs text-gray-500"
                        >
                          <Check size={12} className="text-green-500" />
                          Checking {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Result State */}
                {phase === 3 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
                  >
                    <p className="text-gray-800 mb-6">Based on the attendance data from the last 3 months, here is the analysis:</p>
                    
                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                      <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-center">
                        <div className="flex justify-center mb-2"><UserCheck size={20} className="text-red-500" /></div>
                        <div className="text-2xl font-bold text-gray-800">23</div>
                        <div className="text-xs text-gray-500 mt-1">Employees Found</div>
                      </div>
                      <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-center">
                        <div className="flex justify-center mb-2"><Activity size={20} className="text-orange-500" /></div>
                        <div className="text-2xl font-bold text-gray-800">87.4%</div>
                        <div className="text-xs text-gray-500 mt-1">Attendance Average</div>
                      </div>
                      <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-center">
                        <div className="flex justify-center mb-2"><FileText size={20} className="text-blue-500" /></div>
                        <div className="text-sm font-bold text-gray-800 mt-2">Operations</div>
                        <div className="text-xs text-gray-500 mt-1">Highest Affected</div>
                      </div>
                    </div>
                    
                    <button className="flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-600 transition-colors">
                      View Detailed Report <ArrowRight size={14} />
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
