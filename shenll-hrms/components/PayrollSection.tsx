"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronRight, ArrowRight, Check, Clock, Receipt } from "lucide-react";

export default function PayrollSection() {
  const shouldReduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Salary calculations",
    "Attendance-based payroll",
    "TDS / PF",
    "Deductions",
    "Payslips",
    "Approval workflows",
    "Payroll reports",
  ];

  return (
    <section className="section-padding overflow-hidden" style={{ background: "var(--color-white)" }}>
      <div className="container-xl" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Product UI Visual */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduce ? 0 : -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Background Accent */}
            <div 
              className="absolute -top-10 -left-10 w-[120%] h-[120%] rounded-full opacity-10 pointer-events-none blur-3xl"
              style={{ background: "radial-gradient(circle, var(--color-red) 0%, transparent 60%)" }}
            />
            
            <div 
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: "white",
                border: "1px solid var(--color-border)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              }}
            >
              {/* Fake UI Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50/50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-red-50 flex items-center justify-center">
                    <span className="text-red-500 font-bold">₹</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-800">Payroll Run: October</div>
                    <div className="text-xs text-gray-500">Processing 248 employees</div>
                  </div>
                </div>
                <div className="text-xs font-semibold px-2 py-1 rounded bg-green-50 text-green-600 border border-green-100">
                  Ready for Approval
                </div>
              </div>
              
              {/* Fake UI Content */}
              <div className="p-5">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="text-xs text-gray-500 mb-1">Gross Pay</div>
                    <div className="text-lg font-bold text-gray-800">₹42.8L</div>
                  </div>
                  <div className="p-3 rounded-xl bg-red-50 border border-red-100">
                    <div className="text-xs text-red-600 mb-1">Deductions</div>
                    <div className="text-lg font-bold text-red-700">₹4.2L</div>
                  </div>
                  <div className="p-3 rounded-xl bg-green-50 border border-green-100">
                    <div className="text-xs text-green-600 mb-1">Net Pay</div>
                    <div className="text-lg font-bold text-green-700">₹38.6L</div>
                  </div>
                </div>
                
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Employee Breakdown</div>
                
                <div className="space-y-3">
                  {[
                    { name: "Rahul Nair", role: "Engineering", gross: "₹1,20,000", net: "₹1,05,400" },
                    { name: "Priya Sharma", role: "Marketing", gross: "₹95,000", net: "₹84,200" },
                    { name: "Arjun Mehta", role: "Sales", gross: "₹1,45,000", net: "₹1,26,800" },
                  ].map((emp, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                          {emp.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-800">{emp.name}</div>
                          <div className="text-xs text-gray-500">{emp.role}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-gray-800">{emp.net}</div>
                        <div className="text-xs text-gray-400">Gross: {emp.gross}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Animated Connection Nodes */}
            <motion.div 
              className="absolute -right-6 top-1/3 flex flex-col gap-4 hidden lg:flex"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
               <motion.div 
                className="flex items-center gap-3 bg-white p-2 pr-4 rounded-full shadow-lg border border-gray-100"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               >
                 <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <Clock size={12} className="text-blue-600" />
                 </div>
                 <span className="text-xs font-semibold">Attendance</span>
               </motion.div>
               <motion.div 
                className="flex items-center gap-3 bg-white p-2 pr-4 rounded-full shadow-lg border border-gray-100 ml-8"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
               >
                 <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-red-600">₹</span>
                 </div>
                 <span className="text-xs font-semibold">Payroll</span>
               </motion.div>
               <motion.div 
                className="flex items-center gap-3 bg-white p-2 pr-4 rounded-full shadow-lg border border-gray-100 ml-16"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               >
                 <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <Receipt size={12} className="text-green-600" />
                 </div>
                 <span className="text-xs font-semibold">Payslip</span>
               </motion.div>
            </motion.div>

          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="badge badge-red mb-6 inline-flex uppercase">PAYROLL & ATTENDANCE</span>
            <h2 className="text-section-title mb-6" style={{ color: "var(--color-dark)" }}>
              Payroll that works from real workforce data.
            </h2>
            <p className="text-body-lg mb-8" style={{ color: "var(--color-secondary)" }}>
              Connect attendance, leave and employee information directly to payroll workflows for a more consistent and automated payroll experience.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "var(--color-red-soft)" }}>
                    <Check size={12} style={{ color: "var(--color-red)" }} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: "var(--color-dark)" }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            
            <a
              href="#platform"
              className="btn btn-primary group"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("platform")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Payroll
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
