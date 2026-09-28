"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  return (
    <section id="contact" className="relative py-32 overflow-hidden" style={{ background: "var(--color-dark-bg)" }} ref={ref}>
      
      {/* Abstract Background Effects */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 rounded-full pointer-events-none blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, var(--color-red) 0%, transparent 70%)", transform: "translateY(50%)" }}
      />

      <div className="container-xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-display text-white mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">simplify</span> HR?
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 font-medium">
            One platform. Every employee. Every workflow. Powered by intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn btn-primary btn-lg group w-full sm:w-auto justify-center" id="final-demo-btn">
              Book a Live Demo
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button className="btn w-full sm:w-auto justify-center" style={{ background: "rgba(255,255,255,0.1)", color: "white" }} id="final-contact-btn">
              Talk to Sales
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating particles (CSS simulated) */}
      {!shouldReduce && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-red-500/50"
              initial={{ 
                x: `${Math.random() * 100}%`, 
                y: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1 
              }}
              animate={{ 
                y: [null, `${Math.random() * 100}%`],
                opacity: [null, 0.8, 0]
              }}
              transition={{ 
                duration: 10 + Math.random() * 10, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
