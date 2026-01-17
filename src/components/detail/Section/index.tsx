import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import React from "react";

interface SectionItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  details: string[];
}

const index = ({ section, index }: { section: SectionItem; index: number }) => {
  return (
    <motion.div
      key={section.id}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1 }}
      className="relative md:pl-12"
    >
      {/* Icon Marker */}
      <div className="absolute left-0 top-0 w-8 h-8 bg-white border border-slate-200 rounded-full items-center justify-center hidden md:flex z-10 shadow-sm">
        {section.icon}
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">
            Part 0{index + 1}
          </h4>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            {section.title}
          </h3>
          <p className="text-lg font-medium text-slate-700">
            {section.subtitle}
          </p>
        </div>

        <p className="text-slate-600 leading-relaxed">{section.description}</p>

        {/* Metrics Grid */}
        {section.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-4">
            {section.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-4 rounded-xl border border-slate-100"
              >
                <p className="text-xs text-slate-500 mb-1">{metric.label}</p>
                <p className="text-xl font-bold text-pink-600">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Bullet Points */}
        <ul className="space-y-3 pt-2">
          {section.details.map((detail, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-slate-600 text-sm"
            >
              <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default index;
