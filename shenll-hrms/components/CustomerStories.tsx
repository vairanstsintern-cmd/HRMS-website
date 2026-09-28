"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

export default function CustomerStories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stories = [
    {
      quote: "Shenll HRMS connected our scattered processes. We finally have one system where attendance data flows seamlessly into payroll without any manual reconciliation.",
      name: "Operations Director",
      company: "[Verified Customer]",
      result: "Saved 20+ hours on monthly payroll processing"
    },
    {
      quote: "The ability to customize workflows to our specific manufacturing requirements was a game changer. The platform adapted to us, rather than forcing us to change how we work.",
      name: "HR Head",
      company: "[Verified Customer]",
      result: "100% compliance automation"
    },
    {
      quote: "The AI agent for task orchestration completely transformed how our teams balance workloads. It's not just an HR tool, it's an operational necessity.",
      name: "Chief Operating Officer",
      company: "[Verified Customer]",
      result: "30% increase in project delivery speed"
    }
  ];

  return (
    <section className="section-padding bg-gray-50 border-t border-gray-200" ref={ref}>
      <div className="container-xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-section-title text-gray-900 mb-6">
            What changes when HR works as one system?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white p-8 md:p-10 rounded-[32px] border border-gray-100 shadow-sm flex flex-col h-full relative"
            >
              <Quote size={40} className="text-red-100 mb-6" fill="currentColor" />
              <p className="text-lg text-gray-800 font-medium leading-relaxed mb-8 flex-1">
                "{story.quote}"
              </p>
              
              <div className="mt-auto pt-6 border-t border-gray-100">
                <div className="font-bold text-gray-900">{story.name}</div>
                <div className="text-sm text-gray-500 mb-4">{story.company}</div>
                
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50 text-green-700 text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  {story.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
