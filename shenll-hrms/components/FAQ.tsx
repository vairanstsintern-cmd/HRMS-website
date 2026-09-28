"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqItems, faqCategories } from "@/data/faq";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0]);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredItems = faqItems.filter(item => item.category === activeCategory);

  return (
    <section id="faq" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-xl max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-section-title text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-body-lg text-gray-500">
            Everything you need to know about Shenll HRMS.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {faqCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat 
                  ? "bg-gray-900 text-white" 
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          {filteredItems.map((item) => {
            const isOpen = openItems[item.id];
            return (
              <div 
                key={item.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-red-50 text-red-500" : "bg-gray-50 text-gray-400"}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
        
        {/* Fallback for empty categories */}
        {filteredItems.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No FAQs available for this category yet.
          </div>
        )}
      </div>
    </section>
  );
}
