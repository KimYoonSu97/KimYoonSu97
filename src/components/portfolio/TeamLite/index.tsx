import {
  LayoutTemplate,
  Terminal,
  Database,
  GitBranch,
  ArrowDown,
  Bot,
  Calendar,
  MessageSquare,
} from "lucide-react";
import React from "react";
import ProjectDetailLayout, {
  Section,
  ChallengeCard,
} from "../../ProjectDetailLayout";
const index = () => {
  return (
    <ProjectDetailLayout
      title="TeamLite : 협업 SaaS 프로젝트"
      subtitle="Frontend부터 DevOps까지, 모노레포로 구축한 올인원 협업 도구"
      period="2025.12 ~ 진행 중"
      role="Full Stack (1인 개발)"
      team="Personal Project"
      tags={["Turborepo", "React", "NestJS", "Prisma", "Docker", "AWS EC2"]}
    >
      <Section title="Architecture & Tech Stack">
        <p className="text-slate-600 mb-8 leading-relaxed text-base">
          사이드 프로젝트 팀을 위한 협업 툴을 만들며 풀스택 아키텍처와 모노레포
          환경을 깊이 있게 학습했습니다. 확장성과 생산성을 최우선으로 고려하여
          기술 스택을 선정했습니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 bg-white border border-slate-200  hover:shadow-md hover:border-slate-300 transition-all duration-300 flex items-start gap-4">
            <LayoutTemplate className="w-6 h-6 text-blue-500 mt-1 shrink-0" />
            <div>
              <h5 className="font-bold text-slate-900 mb-1.5">Frontend</h5>
              <p className="text-sm text-slate-600 leading-relaxed">
                React (Vite), Tailwind CSS, Zustand, React Hook Form + Zod
              </p>
            </div>
          </div>
          <div className="p-5 bg-white border border-slate-200  hover:shadow-md hover:border-slate-300 transition-all duration-300 flex items-start gap-4">
            <Terminal className="w-6 h-6 text-red-500 mt-1 shrink-0" />
            <div>
              <h5 className="font-bold text-slate-900 mb-1.5">Backend</h5>
              <p className="text-sm text-slate-600 leading-relaxed">
                NestJS, Passport (JWT), PostgreSQL (Supabase)
              </p>
            </div>
          </div>
          <div className="p-5 bg-white border border-slate-200  hover:shadow-md hover:border-slate-300 transition-all duration-300 flex items-start gap-4">
            <Database className="w-6 h-6 text-green-500 mt-1 shrink-0" />
            <div>
              <h5 className="font-bold text-slate-900 mb-1.5">ORM & Type</h5>
              <p className="text-sm text-slate-600 leading-relaxed">
                Prisma ORM, Turborepo (Shared Type Packages)
              </p>
            </div>
          </div>
          <div className="p-5 bg-white border border-slate-200  hover:shadow-md hover:border-slate-300 transition-all duration-300 flex items-start gap-4">
            <GitBranch className="w-6 h-6 text-purple-500 mt-1 shrink-0" />
            <div>
              <h5 className="font-bold text-slate-900 mb-1.5">DevOps</h5>
              <p className="text-sm text-slate-600 leading-relaxed">
                GitHub Actions, Docker, AWS EC2, Cloudflare
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Key Engineering Challenges">
        <div className="space-y-8">
          {/* Challenge 1 */}
          <div className="bg-white border border-slate-200  p-6 hover:shadow-md hover:border-slate-300 transition-all duration-300">
            <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-7 h-7  bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">
                1
              </span>
              효율적인 모노레포 환경과 타입 공유
            </h4>
            <div className="ml-10">
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                프론트엔드와 백엔드 간의 데이터 타입 불일치를 원천 차단하기 위해{" "}
                <strong className="text-slate-900">Turborepo</strong>를
                도입했습니다.
                <code className="bg-slate-100 px-1.5 py-0.5  text-xs mx-1">
                  packages/types
                </code>
                패키지에서 Zod Schema를 정의하고, 이를 양쪽에서 import하여
                사용함으로써
                <strong className="text-slate-900"> Type-Safe</strong>한 개발
                환경을 구축했습니다.
              </p>
              <div className="bg-slate-50 -lg p-4 font-mono text-xs text-slate-700 border border-slate-200">
                <p className="text-purple-600">// packages/types/auth.ts</p>
                <p>export const LoginSchema = z.object(&#123;</p>
                <p className="pl-4">email: z.string().email(),</p>
                <p className="pl-4">password: z.string().min(8),</p>
                <p>&#125;)</p>
              </div>
            </div>
          </div>

          {/* Challenge 2: React로 수정됨 */}
          <div className="bg-white border border-slate-200  p-6 hover:shadow-md hover:border-slate-300 transition-all duration-300">
            <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-7 h-7  bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">
                2
              </span>
              React(CSR)와 NestJS의 명확한 역할 분리
            </h4>
            <div className="ml-10">
              <p className="text-slate-700 text-sm leading-relaxed mb-3">
                <strong className="text-slate-900">React (Vite)</strong>를
                활용하여 빠른 초기 빌드와 부드러운 페이지 전환(SPA)을
                구현했습니다. 로그인 UI관리 상태는 <strong>Zustand</strong>로
                관리하고, 서버 데이터는 <strong>React Query</strong>로 캐싱하여
                사용자 경험을 최적화했습니다.
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">
                비즈니스 로직은 전적으로{" "}
                <strong className="text-slate-900">NestJS</strong>로 위임하여
                프론트엔드를 가볍게 유지했으며, API 계층을 통해서만 데이터를
                주고받도록 설계하여 보안성을 높였습니다.
              </p>
            </div>
          </div>

          {/* Challenge 3 */}
          <div className="bg-white border border-slate-200  p-6 hover:shadow-md hover:border-slate-300 transition-all duration-300">
            <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-7 h-7  bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">
                3
              </span>
              Docker & CI/CD 자동화
            </h4>
            <div className="ml-10">
              <p className="text-slate-700 text-sm leading-relaxed">
                1인 개발환경의 효율을 위해 GitHub Actions로{" "}
                <strong className="text-slate-900">CI/CD 파이프라인</strong>을
                구축했습니다. 코드가 푸시되면 자동으로 Docker 이미지를 빌드하고,
                AWS EC2 인스턴스에 배포되어 즉시 반영됩니다. Cloudflare를 통해
                HTTPS 보안 도메인 연결까지 완료했습니다.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section title="Future Roadmap & Vision">
        <p className="text-slate-600 mb-8 leading-relaxed text-base">
          단순한 도구를 넘어, 팀의 생산성을 능동적으로 돕는{" "}
          <strong>'인텔리전트 협업 플랫폼'</strong>으로의 진화를 목표로 하고
          있습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Roadmap 1 : Real-time Chat */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 relative overflow-hidden group hover:border-blue-400 transition-colors duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <MessageSquare className="w-16 h-16 text-blue-600" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              Real-time Chat
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              <strong>Socket.IO</strong>를 활용하여 팀원 간의 실시간 의사소통
              환경을 구축합니다.
            </p>
            <ul className="text-xs text-slate-500 space-y-1.5 list-disc list-inside">
              <li>Room 기반 채널 관리</li>
              <li>메시지 읽음 처리 및 타이핑 인디케이터</li>
            </ul>
          </div>

          {/* Roadmap 2 : Smart Calendar */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 relative overflow-hidden group hover:border-green-400 transition-colors duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Calendar className="w-16 h-16 text-green-600" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-green-600" />
              Interactive Calendar
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              프로젝트 일정과 개인 할 일을 통합 관리하는{" "}
              <strong>스마트 캘린더</strong>를 구현합니다.
            </p>
            <ul className="text-xs text-slate-500 space-y-1.5 list-disc list-inside">
              <li>Drag & Drop 기반 일정 변경 UX</li>
              <li>개인/팀 일정 필터링 및 시각화</li>
              <li>마감 기한 임박 알림 시스템</li>
            </ul>
          </div>

          {/* Roadmap 3 : AI Agent */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 relative overflow-hidden group hover:border-purple-400 transition-colors duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Bot className="w-16 h-16 text-purple-600" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Bot className="w-5 h-5 text-purple-600" />
              AI Assistant (Agent)
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              자연어 명령으로 업무를 수행하는 <strong>AI 에이전트</strong>{" "}
              기능을 개발할 예정입니다.
            </p>
            <div className="bg-white p-3 rounded border border-slate-200 shadow-sm">
              <p className="text-xs text-slate-500 italic mb-2">
                "내일 오후 2시에 회의 일정 잡아줘"
              </p>
              <div className="flex justify-center">
                <ArrowDown className="w-4 h-4 text-slate-400 animate-bounce" />
              </div>
              <p className="text-xs font-mono text-purple-700 mt-1">
                🤖 CreateEvent(&#123; time: "14:00" &#125;)
              </p>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              * OpenAI Function Calling 활용
            </p>
          </div>
        </div>
      </Section>
    </ProjectDetailLayout>
  );
};

export default index;
