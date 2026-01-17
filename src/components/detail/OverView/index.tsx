import { motion } from "framer-motion";
import React from "react";

const index = ({
  PROJECT_INFO,
}: {
  PROJECT_INFO: {
    title: string;
    period: string;
    role: string;
    tags: string[];
    summary: string;
  };
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
    >
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <span className="w-1 h-6 bg-slate-900 rounded-full"></span>
        프로젝트 개요
      </h3>
      <p className="text-slate-600 leading-relaxed text-lg">
        {PROJECT_INFO.summary}
      </p>
    </motion.section>
  );
};

export default index;
