"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X } from "lucide-react";
import { pricingPlans } from "@/data/pricing";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="section-padding bg-white" ref={ref}>
      <div className="container-xl max-w-6xl">
        <div className="text-center mb-16">
          <span className="badge badge-dark mb-6 inline-flex">PRICING</span>
          <h2 className="text-section-title text-gray-900 mb-6">
            Simple pricing for every stage of growth.
          </h2>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-semibold ${!isYearly ? "text-gray-900" : "text-gray-400"}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-8 rounded-full bg-gray-200 transition-colors focus:outline-none"
              style={{ background: isYearly ? "var(--color-red)" : "#E5E7EB" }}
              aria-label="Toggle billing period"
            >
              <div 
                className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-sm transition-transform ${isYearly ? "translate-x-7" : "translate-x-1"}`}
              />
            </button>
            <span className={`text-sm font-semibold ${isYearly ? "text-gray-900" : "text-gray-400"}`}>
              Yearly <span className="text-xs text-red-500 ml-1 bg-red-50 px-2 py-0.5 rounded-full">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 border ${
                plan.isPopular 
                  ? "border-red-500 shadow-xl shadow-red-500/10 ring-2 ring-red-500/20" 
                  : "border-gray-200 shadow-sm"
              } flex flex-col h-full`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 h-10">{plan.tagline}</p>
              </div>

              <div className="mb-8 pb-8 border-b border-gray-100">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {plan.priceNote}
                </div>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check size={18} className="text-green-500 shrink-0 mt-0.5" />
                    ) : (
                      <X size={18} className="text-gray-300 shrink-0 mt-0.5" />
                    )}
                    <span className={`text-sm ${feature.included ? "text-gray-700" : "text-gray-400"}`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className={`btn w-full justify-center ${
                  plan.ctaVariant === "primary" ? "btn-primary" :
                  plan.ctaVariant === "secondary" ? "btn-secondary" :
                  "btn-outline"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {plan.ctaLabel}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
