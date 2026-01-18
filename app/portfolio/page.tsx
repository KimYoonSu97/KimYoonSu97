"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// 프로젝트 데이터 정의
const PROJECTS = [
  {
    id: "01",
    category: "APP REFACTORING",
    title: "Architecture & DDD", // 리팩토링 프로젝트
    description: "역할별 코드 레이어에서 도메인 주도 설계로의 진화",
    tags: ["React Native", "Clean Architecture"],
    href: "/portfolio/tadang/app", // 상세페이지 경로 1
  },
  {
    id: "02",
    category: "APP FEATURE",
    title: "Interaction & Logic", // 신규 기능 프로젝트
    description: "60fps 제스처 UI와 하이브리드 지도 시스템",
    tags: ["Reanimated", "WebView Bridge"],
    href: "/portfolio/tadang/app-new", // 상세페이지 경로 2
  },
  {
    id: "03",
    category: "WEB ADMIN",
    title: "Admin & Workflow", // 어드민/BFF 프로젝트
    description: "현업 워크플로우 최적화 및 BFF 도입",
    tags: ["Next.js", "Server Action"],
    href: "/portfolio/tadang/admin", // 상세페이지 경로 3
  },
  // {
  //   id: "04",
  //   category: "PERSONAL PROJECT",
  //   title: "TeamLite Service", // 개인 프로젝트
  //   description: "팀 일정 및 협업 관리 SaaS",
  //   tags: ["Nest.js", "Monorepo"],
  //   href: "/portfolio/teamlite", // 상세페이지 경로 4
  // },
];

export default function ProjectNavigation() {
  return (
    <section className="w-full   px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-end justify-between border-b border-black pb-4"
        >
          <h2 className="text-sm font-bold tracking-widest text-gray-500">
            SELECTED WORKS
          </h2>
          <span className="text-sm font-medium text-black">2024 — 2026</span>
        </motion.div>

        {/* Project List */}
        <div className="flex flex-col">
          {PROJECTS.map((project, index) => (
            <Link key={project.id} href={project.href} className="group block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative py-12 border-b border-gray-200 transition-colors duration-500 hover:bg-gray-50 px-4 -mx-4 rounded-xl"
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-10">
                  {/* 01. Number & Category */}
                  <div className="w-full md:w-1/4 flex items-baseline gap-4">
                    <span className="text-sm font-mono text-gray-400 group-hover:text-pink-600 transition-colors">
                      {project.id}
                    </span>
                    <span className="text-xs font-bold tracking-widest text-gray-900 uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* 02. Big Title */}
                  <div className="w-full md:w-2/4">
                    <h3 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter group-hover:translate-x-2 transition-transform duration-300 ease-out">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-gray-500 text-sm md:text-base opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {project.description}
                    </p>
                  </div>

                  {/* 03. Icon & Tags (Desktop only) */}
                  <div className="hidden md:flex w-1/4 justify-end items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-right">
                      {project.tags.map((tag) => (
                        <div
                          key={tag}
                          className="text-xs text-gray-400 font-medium mb-1"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                    <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white group-hover:bg-black group-hover:border-black transition-colors">
                      <ArrowUpRight className="w-5 h-5 text-black group-hover:text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
