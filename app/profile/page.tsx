import React from "react";
import {
  Mail,
  Phone,
  Github,
  Calendar,
  Briefcase,
  GraduationCap,
  Code2,
  Users,
} from "lucide-react";
import Footer from "@/src/components/Footer";
import Link from "next/link";

const ProfilePage = () => {
  return (
    <div className="min-h-screen h-dvh overflow-y-scroll no-scrollbar">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-7">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[48px] font-bold mb-4">김윤수</h1>
          <p className="text-[24px] text-slate-600 mb-8">Frontend Developer</p>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <div className="flex items-center gap-3 text-slate-700">
              <Calendar className="w-5 h-5 text-slate-500" />
              <span className="text-sm">1997.01.27</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <Phone className="w-5 h-5 text-slate-500" />
              <span className="text-sm">010-3004-5854</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <Mail className="w-5 h-5 text-slate-500" />
              <a
                href="mailto:zkzk625@naver.com"
                className="text-sm hover:text-slate-900 transition-colors"
              >
                zkzk625@naver.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <Github className="w-5 h-5 text-slate-500" />
              <a
                href="https://github.com/KimYoonSu97"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-slate-900 transition-colors"
              >
                github.com/KimYoonSu97
              </a>
            </div>
          </div>

          {/* Philosophy */}
          <div className="bg-slate-50 border border-slate-200 p-8 mb-16">
            <h2 className="text-[28px] font-bold mb-6 text-slate-900">
              "가볍게 시작된 클릭이, 오래 머물고 싶은 경험이 되도록"
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                서비스의 가치에 공감하는 사용자의 시선과, 이를 기술로 실현하는
                엔지니어의 시선을 모두 갖추고 있습니다.
              </p>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  [실무: 깊이 있는 최적화와 아키텍처 경험]
                </h3>
                <p>
                  1년 9개월간 렌트/리스 플랫폼과 어드민 웹의 리드 개발을 맡아
                  React/Next.js 기반의 서비스를 주도했습니다. 특히 유지보수성과
                  확장성에 집중하여 기존 코드를 MVVM 패턴과 도메인 주도
                  설계(DDD) 관점으로 리팩토링하고, BFF(Backend For Frontend)
                  패턴을 도입해 클라이언트와 서버의 의존성을 획기적으로
                  낮췄습니다. 또한, 최근 토스 디자인 시스템(TDS)을 활용한 미니앱
                  개발을 통해 일관된 사용자 경험(UX)과 디자인 시스템의 중요성을
                  실무 레벨에서 체득했습니다.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  [성장: 프론트엔드를 넘어선 엔지니어링 확장]
                </h3>
                <p>
                  '프론트엔드의 한계는 없다'는 마인드로, 최근 사이드 프로젝트{" "}
                  <strong className="text-slate-900">'TeamLite'</strong>를 통해
                  풀스택 아키텍처를 직접 설계했습니다. Monorepo(Turborepo)
                  환경에서 Frontend(React)와 Backend(NestJS)를 통합 구축하고,
                  Docker와 AWS, GitHub Actions를 활용한 CI/CD 파이프라인까지
                  직접 구현하며 서비스의 전 과정을 리딩할 수 있는 역량을
                  확보했습니다.
                </p>
              </div>

              <p className="mt-6 text-slate-900 font-semibold">
                단순한 UI 구현을 넘어, 데이터의 흐름과 인프라 구조까지 이해하는
                '넓은 시야'로 팀의 문제를 주도적으로 해결하는 개발자가
                되겠습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="py-16 px-7 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[36px] font-bold mb-12 border-l-4 border-slate-500 pl-4">
            경력사항
          </h2>

          <div className="space-y-10">
            {/* Current Job */}
            <div className="bg-white border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-[24px] font-bold text-slate-900 mb-2">
                    (주) 스타오토모빌
                  </h3>
                  <p className="text-slate-600 font-semibold">
                    Frontend Developer
                  </p>
                </div>
                <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1">
                  2024.01 ~ 2025.09
                </span>
              </div>

              <p className="text-slate-700 mb-4 font-medium">
                차량 렌트리스 관련 앱 개발 및 어드민 웹 개발 (프론트엔드)
              </p>

              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>
                    React Native 기반 모바일 앱의 구조 개선 및 신규 기능 개발
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>
                    차량 리뷰 및 커뮤니티 등 신규 기능 개발 및 상태 관리 최적화
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>
                    Next.js 기반 어드민 웹 기획 및 개발 전담 (기획서 작성 포함)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>
                    사용자 피드백 기반의 UI/UX 개선 및 기능 최적화 반복 수행
                  </span>
                </li>
              </ul>
            </div>

            {/* Previous Job */}
            <div className="bg-white border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-[24px] font-bold text-slate-900 mb-2">
                    (주) 케이아트앤컴
                  </h3>
                  <p className="text-slate-600 font-semibold">
                    브랜드 개발 및 운영
                  </p>
                </div>
                <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1">
                  2021.09 ~ 2023.03
                </span>
              </div>

              <p className="text-slate-700 mb-4 font-medium">
                브랜드 개발 및 디자인, 제품 개발, 마케팅, 고객관리
              </p>

              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>
                    1인 운영으로 브랜드 런칭과 제품 개선, 고객 대응 등 전반적인
                    실무 수행
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>고객 피드백 기반의 제품 개선과 브랜딩 전략 수립</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-7">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[36px] font-bold mb-12 border-l-4 border-slate-500 pl-4">
            교육사항
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-[20px] font-bold text-slate-900 mb-2">
                    동양미래대학교
                  </h3>
                  <p className="text-slate-600">시각정보디자인과 졸업</p>
                </div>
                <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1">
                  2017.02 ~ 2022.02
                </span>
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-[20px] font-bold text-slate-900 mb-2">
                    스파르타코딩클럽 내일배움캠프
                  </h3>
                  <p className="text-slate-600">React 과정 (6기) 수료</p>
                </div>
                <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1">
                  2023.05 ~ 2023.09
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-7 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[36px] font-bold mb-12 border-l-4 border-slate-500 pl-4">
            실무 프로젝트
          </h2>

          <div className="space-y-10">
            {/* Project 1 */}
            <div className="bg-white border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all duration-300">
              <h3 className="text-[24px] font-bold text-slate-900 mb-4">
                🚗 자동차 렌트/리스 종합 플랫폼 앱 개발
              </h3>
              <p className="text-sm text-slate-500 mb-4">2024.10 ~ 2025.9</p>
              <div className="mb-4">
                <p className="text-xs text-slate-500 uppercase font-bold mb-2">
                  기술스택
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React Native",
                    "TypeScript",
                    "React Query",
                    "Redux",
                    "Styled-components",
                    "Firebase",
                    "Reanimated",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-slate-100 border border-slate-200 px-2 py-1 text-slate-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">▸</span>
                  <span>
                    앱 구조 리팩토링 (역할별 → MVVM + 도메인 기반 구조)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">▸</span>
                  <span>상태관리 최적화 (Redux + Context 분리 설계)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">▸</span>
                  <span>
                    견적 마법사 UI/로직 모듈화 (custom hook + atomic component
                    조합)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">▸</span>
                  <span>
                    useEffect → React Query 전환으로 로딩 및 중복 요청 개선
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">▸</span>
                  <span>Skeleton UI 도입으로 전체 UX 향상</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">▸</span>
                  <span>
                    신규 기능 개발: 차량 리뷰 시스템, 전문가 찾기 및 등록
                    시스템, 좌표 기반 기능 구현 등
                  </span>
                </li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="bg-white border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all duration-300">
              <h3 className="text-[24px] font-bold text-slate-900 mb-4">
                💻 어드민 웹 기획 및 개발
              </h3>
              <p className="text-sm text-slate-500 mb-4">2024.04 ~ 2024.10</p>

              <div className="mb-4">
                <p className="text-xs text-slate-500 uppercase font-bold mb-2">
                  기술스택
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js 14",
                    "TypeScript",
                    "Styled-components",
                    "Firebase",
                    "NextAuth",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-slate-100 border border-slate-200 px-2 py-1 text-slate-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">▸</span>
                  <span>기능 명세서 작성 및 사용자 인터뷰 기반 기획 참여</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">▸</span>
                  <span>
                    Next.js 기반 BFF 아키텍처 적용으로 API 통합 및 역할 분리
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">▸</span>
                  <span>
                    서버 컴포넌트 기반 데이터 패칭 및 UI 처리 로직 분리
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">▸</span>
                  <span>
                    다양한 라우터에서 동작 가능한 form action + 'use server'
                    방식 적용
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">▸</span>
                  <span>
                    실제 사용하는 운영진 대상 피드백 기반의 기능 개선 반복
                  </span>
                </li>
              </ul>
            </div>

            {/* Project 3 - TeamLite */}
            <div className="bg-white border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all duration-300">
              <h3 className="text-[24px] font-bold text-slate-900 mb-4">
                🚀 TeamLite: 협업 SaaS 프로젝트
              </h3>
              <p className="text-sm text-slate-500 mb-4">
                2025.12 ~ 진행 중 (Personal Project)
              </p>

              <div className="mb-4">
                <p className="text-xs text-slate-500 uppercase font-bold mb-2">
                  기술스택
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Turborepo",
                    "React (Vite)",
                    "NestJS",
                    "Prisma",
                    "PostgreSQL",
                    "Docker",
                    "AWS EC2",
                    "GitHub Actions",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-slate-100 border border-slate-200 px-2 py-1 text-slate-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">▸</span>
                  <span>
                    Turborepo 기반 모노레포 환경 구축 및 타입 공유 시스템 설계
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">▸</span>
                  <span>
                    React(Vite) + NestJS 풀스택 아키텍처 설계 및 역할 분리
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">▸</span>
                  <span>
                    Prisma ORM을 활용한 타입 안전성 확보 및 데이터베이스 스키마
                    관리
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">▸</span>
                  <span>
                    Docker 컨테이너화 및 GitHub Actions 기반 CI/CD 파이프라인
                    구축
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">▸</span>
                  <span>
                    AWS EC2 배포 및 Cloudflare를 통한 HTTPS 도메인 연결
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">▸</span>
                  <span>프로젝트 관리, 태스크 관리, 팀원 협업 기능 구현</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-16 px-7">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[36px] font-bold mb-12 border-l-4 border-slate-500 pl-4">
            강점 및 특징
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 p-6 hover:shadow-md hover:border-blue-300 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                빠른 도메인 이해
              </h3>
              <p className="text-sm text-slate-600">
                사용자 중심의 문제 정의 능력
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 hover:shadow-md hover:border-green-300 transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                UI/UX 완성도
              </h3>
              <p className="text-sm text-slate-600">세심한 구현 경험</p>
            </div>

            <div className="bg-white border border-slate-200 p-6 hover:shadow-md hover:border-purple-300 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                구조 설계
              </h3>
              <p className="text-sm text-slate-600">
                서비스 목적에 맞는 리팩토링 경험
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 hover:shadow-md hover:border-orange-300 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                커뮤니케이션
              </h3>
              <p className="text-sm text-slate-600">
                기획-디자인-개발 전 과정 아우르는 역량
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-7 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[36px] font-bold mb-12 border-l-4 border-slate-500 pl-4">
            협업툴 및 사용 기술
          </h2>

          <div className="bg-slate-50 border border-slate-200 p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold mb-3">
                  협업툴
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "Notion", "Figma", "Slack"].map((tool) => (
                    <span key={tool} className="text-sm text-slate-700">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <p className="text-xs text-slate-500 uppercase font-bold mb-3">
                  기술스택
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "React Native",
                    "Next.js",
                    "Nest.js",
                    "TypeScript",
                    "React Query",
                    "Redux",
                    "Firebase",
                    "Supabase",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="text-sm bg-white border border-slate-200 px-3 py-1 text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProfilePage;
