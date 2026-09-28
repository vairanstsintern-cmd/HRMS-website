"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const tabs = [
    "Dashboard",
    "Employees",
    "Attendance",
    "Payroll",
    "Projects",
    "Reports"
  ];

  // Placeholder images for the product UI. In a real app these would be actual high-res screenshots.
  const visuals = [
    { title: "Dashboard Overview", color: "bg-blue-50", accent: "bg-blue-500" },
    { title: "Employee Directory", color: "bg-green-50", accent: "bg-green-500" },
    { title: "Attendance Tracking", color: "bg-purple-50", accent: "bg-purple-500" },
    { title: "Payroll Processing", color: "bg-red-50", accent: "bg-red-500" },
    { title: "Project Management", color: "bg-orange-50", accent: "bg-orange-500" },
    { title: "Custom Reports", color: "bg-indigo-50", accent: "bg-indigo-500" }
  ];

  return (
    <section className="section-padding bg-gray-50 overflow-hidden" ref={ref}>
      <div className="container-xl">
        <div className="text-center mb-12">
          <h2 className="text-section-title text-gray-900 mb-4">See Shenll in action.</h2>
          <p className="text-body-lg text-gray-500">Explore the clean, intuitive interface that your team will actually want to use.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-2 p-1 bg-gray-200/50 rounded-xl">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                  activeTab === i 
                    ? "bg-white text-gray-900 shadow-sm" 
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Screen Visuals */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-[16/10] md:aspect-[16/9] rounded-2xl md:rounded-[32px] overflow-hidden border border-gray-200 shadow-2xl bg-white flex flex-col"
            >
              {/* Fake Browser Chrome */}
              <div className="h-12 border-b border-gray-100 flex items-center px-4 md:px-6 bg-gray-50 shrink-0">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="mx-auto text-xs font-medium text-gray-400">app.shenllhrms.com / {tabs[activeTab].toLowerCase()}</div>
              </div>
              
              {/* Fake Content Area */}
              <div className={`flex-1 ${visuals[activeTab].color} p-8 md:p-12 flex flex-col`}>
                
                {/* Header skeleton */}
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <div className="h-8 w-48 bg-white rounded-lg mb-2 shadow-sm"></div>
                    <div className="h-4 w-32 bg-white/50 rounded-md"></div>
                  </div>
                  <div className={`h-10 w-32 ${visuals[activeTab].accent} rounded-lg shadow-sm opacity-90`}></div>
                </div>
                
                {/* Body skeleton based on active tab */}
                {activeTab === 0 && ( // Dashboard
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
                    <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
                      <div className="h-40 bg-white rounded-xl shadow-sm w-full"></div>
                      <div className="flex-1 bg-white rounded-xl shadow-sm w-full"></div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-6">
                      <div className="h-24 bg-white rounded-xl shadow-sm w-full"></div>
                      <div className="h-24 bg-white rounded-xl shadow-sm w-full"></div>
                      <div className="flex-1 bg-white rounded-xl shadow-sm w-full"></div>
                    </div>
                  </div>
                )}
                
                {activeTab !== 0 && ( // List/Table view
                  <div className="bg-white rounded-xl shadow-sm flex-1 flex flex-col p-6">
                    <div className="flex justify-between mb-6">
                      <div className="h-8 w-64 bg-gray-100 rounded-lg"></div>
                      <div className="flex gap-2">
                        <div className="h-8 w-24 bg-gray-100 rounded-lg"></div>
                        <div className="h-8 w-24 bg-gray-100 rounded-lg"></div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="flex gap-4 items-center">
                          <div className="h-10 w-10 bg-gray-100 rounded-full shrink-0"></div>
                          <div className="h-4 w-1/4 bg-gray-100 rounded"></div>
                          <div className="h-4 w-1/4 bg-gray-100 rounded"></div>
                          <div className="h-4 w-1/4 bg-gray-100 rounded"></div>
                          <div className="h-8 w-20 bg-gray-50 rounded ml-auto"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Overlay Text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-white/60 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-gray-900 bg-white px-6 py-3 rounded-2xl shadow-xl">
                    {visuals[activeTab].title} Preview
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
