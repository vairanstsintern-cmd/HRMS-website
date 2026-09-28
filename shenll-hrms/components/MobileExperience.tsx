"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Smartphone, Check, ArrowRight } from "lucide-react";

export default function MobileExperience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activePersona, setActivePersona] = useState(0);

  const personas = [
    {
      id: "admin",
      role: "ADMIN",
      desc: "Manage the workforce",
      features: ["Workforce overview", "Approve payroll", "Global reports"],
      ui: (
        <div className="p-4 bg-gray-50 h-full">
          <div className="flex justify-between items-center mb-6">
            <div className="font-bold">Dashboard</div>
            <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs">AD</div>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
              <div className="text-xs text-gray-400">Present</div>
              <div className="text-lg font-bold text-green-600">242</div>
            </div>
            <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
              <div className="text-xs text-gray-400">On Leave</div>
              <div className="text-lg font-bold text-orange-500">6</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm mb-4">
            <div className="text-xs font-bold mb-3">Pending Approvals</div>
            <div className="space-y-3">
              {[1,2].map(i => (
                <div key={i} className="flex items-center justify-between">
                  <div className="text-xs">Payroll Run Oct</div>
                  <button className="text-[10px] bg-red-50 text-red-600 px-2 py-1 rounded">Approve</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: "manager",
      role: "TEAM LEAD",
      desc: "Manage teams and work",
      features: ["Approve leaves", "Assign tasks", "Team performance"],
      ui: (
        <div className="p-4 bg-gray-50 h-full">
          <div className="flex justify-between items-center mb-6">
            <div className="font-bold">My Team</div>
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">TL</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm mb-4">
            <div className="text-xs font-bold mb-3">Leave Requests</div>
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                <div>
                  <div className="text-xs font-semibold">Rahul N.</div>
                  <div className="text-[10px] text-gray-400">Sick Leave (2d)</div>
                </div>
                <div className="flex gap-1">
                  <div className="w-6 h-6 rounded bg-green-50 text-green-600 flex items-center justify-center text-xs">✓</div>
                  <div className="w-6 h-6 rounded bg-red-50 text-red-600 flex items-center justify-center text-xs">✕</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
             <div className="text-xs font-bold mb-2">Active Project: Q4 Launch</div>
             <div className="h-1.5 bg-gray-100 rounded-full w-full overflow-hidden">
               <div className="h-full bg-blue-500 w-[60%]"></div>
             </div>
          </div>
        </div>
      )
    },
    {
      id: "employee",
      role: "EMPLOYEE",
      desc: "Manage your work life",
      features: ["Mark attendance", "View payslips", "Log work"],
      ui: (
        <div className="p-4 bg-gray-50 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div className="font-bold">Home</div>
            <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs">ME</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm mb-4 flex flex-col items-center justify-center py-8">
            <div className="text-xs text-gray-400 mb-2">Current Status</div>
            <div className="text-xl font-bold mb-6">09:42 AM</div>
            <button className="w-32 h-32 rounded-full bg-red-50 text-red-600 border-4 border-red-100 flex items-center justify-center shadow-lg font-bold">
              Check In
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-auto">
            <div className="bg-white p-3 rounded-xl border border-gray-100 text-center text-xs font-semibold">Payslips</div>
            <div className="bg-white p-3 rounded-xl border border-gray-100 text-center text-xs font-semibold">Leave</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="mobile" ref={ref} className="section-padding" style={{ background: "var(--color-white)" }}>
      <div className="container-xl">
        <div className="text-center mb-16">
          <span className="badge badge-red mb-6 inline-flex">MOBILE EXPERIENCE</span>
          <h2 className="text-section-title mb-4" style={{ color: "var(--color-dark)" }}>
            HR for admins. <br/>
            <span style={{ color: "var(--color-secondary)", fontWeight: 400 }}>Simplicity for employees.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          
          {/* Personas Selector */}
          <div>
            <div className="space-y-4">
              {personas.map((p, i) => (
                <div 
                  key={p.id}
                  onClick={() => setActivePersona(i)}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${activePersona === i ? 'border-red-500 shadow-md bg-white' : 'border-gray-100 bg-gray-50 hover:bg-white hover:border-gray-200'}`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`text-xs font-bold px-2 py-1 rounded-full ${activePersona === i ? 'bg-red-50 text-red-600' : 'bg-gray-200 text-gray-500'}`}>
                      {p.role}
                    </div>
                    <div className="font-bold text-gray-800">{p.desc}</div>
                  </div>
                  
                  {activePersona === i && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="pt-2"
                    >
                      <ul className="space-y-2">
                        {p.features.map((f, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                            <Check size={14} className="text-green-500" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Phone Mockup */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div 
                className="w-[300px] h-[600px] bg-black rounded-[40px] p-2 relative shadow-2xl z-10"
                style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.15)" }}
              >
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-20"></div>
                  
                  {/* Status Bar Fake */}
                  <div className="h-10 w-full pt-3 px-5 flex justify-between items-center text-[10px] font-bold z-10 relative">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <span>LTE</span>
                    </div>
                  </div>

                  {/* UI Content injected based on active persona */}
                  <div className="absolute inset-0 pt-10">
                    {personas[activePersona].ui}
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black rounded-full z-20"></div>
                </div>
              </div>
              
              {/* Background Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-100 rounded-full blur-3xl opacity-50 -z-10 scale-125"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
