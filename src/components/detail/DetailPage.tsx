import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ProjectInfo {
  title: string;
  period: string;
  role: string;
  tags: string[];
  summary: string;
}
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

const DetailPage = ({
  PROJECT_INFO,
  SECTIONS,
  mockup,
}: {
  PROJECT_INFO: ProjectInfo;
  SECTIONS: SectionItem[];
  mockup: React.ReactNode;
}) => {
  return (
    <div className=" text-slate-900 ">
      <main className="max-w-7xl mx-auto px-6  pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 ">
          {/* Left Column: Sticky Image & Core Info */}
          <section className="lg:col-span-5 relative ">
            <div className="sticky top-40 flex flex-col gap-8 ">
              {/* Phone Mockup Placeholder */}
              {mockup}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[9/19] w-full max-w-[320px] mx-auto bg-slate-200 rounded-[3rem] shadow-2xl border-[8px] border-slate-900 overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-white">
                  <span className="text-sm">App Screen Image</span>
                </div>
              </motion.div> */}
              {/* <Image src="/your-app-screen.png" alt="App Screen" fill className="object-cover" /> */}

              {/* Project Title Block (Mobile view에서 상단으로 이동 가능) */}
              <div className="hidden lg:flex lg:flex-col lg:gap-4">
                <h2 className="text-3xl font-bold leading-tight text-slate-900">
                  {PROJECT_INFO.title}
                </h2>
                <p className="text-slate-500">{PROJECT_INFO.period}</p>
                <div className="flex flex-wrap gap-2">
                  {PROJECT_INFO.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-semibold text-slate-600 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Right Column: The Story Content */}
          <div className="lg:col-span-7 flex flex-col gap-20 ">
            {/* Mobile Title (Only visible on small screens) */}
            <div className="flex flex-col gap-4 lg:hidden mb-10">
              <h2 className="text-2xl font-bold leading-tight">
                {PROJECT_INFO.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {PROJECT_INFO.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Summary */}
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

            {/* Detail Sections */}
            <div className="flex flex-col gap-16 relative">
              {/* Vertical Line for timeline effect */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-100 hidden md:block" />

              {SECTIONS.map((section, index) => (
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

                  <div className="flex flex-col gap-6">
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

                    <p className="text-slate-600 leading-relaxed">
                      {section.description}
                    </p>

                    {/* Metrics Grid */}
                    {section.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-4">
                        {section.metrics.map((metric, idx) => (
                          <div
                            key={idx}
                            className="bg-slate-50 p-4 rounded-xl border border-slate-100"
                          >
                            <p className="text-xs text-slate-500 mb-1">
                              {metric.label}
                            </p>
                            <p className="text-xl font-bold text-pink-600">
                              {metric.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Bullet Points */}
                    <ul className="flex flex-col gap-3 pt-2">
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
              ))}
            </div>

            {/* Next Step CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="pt-10 flex justify-end"
            >
              <Link href="/portfolio">
                <button className="group flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all">
                  리스트 보러가기
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetailPage;
