"use client";

import DetailPage from "@/src/components/detail/DetailPage";
import MockupWeb from "@/src/components/detail/MockupWeb";
import { ClipboardList, Laptop2, ServerCog } from "lucide-react";
import React from "react";

const PROJECT_INFO = {
  title: "운영 관리 플랫폼 고도화: 기획부터 BFF 아키텍처까지",
  period: "2025.02 - 2025.04",
  role: "Frontend Developer",
  tags: [
    "Next.js App Router",
    "BFF Architecture",
    "Server Actions",
    "UX Research",
  ],
  summary:
    "현업 실무자의 목소리를 듣는 것부터 시작했습니다. 불필요한 업무 동선을 40% 단축시키는 UX 개선과 함께, Next.js의 기능을 100% 활용한 BFF(Backend For Frontend) 구조 및 Server Action 도입으로 개발 효율과 시스템 안정성을 동시에 잡았습니다.",
};

const SECTIONS = [
  {
    id: "workflow",
    icon: <ClipboardList className="w-6 h-6 text-pink-600" />,
    title: "Workflow Optimization: 현장의 목소리를 담다",
    subtitle: "현업 인터뷰 기반 UX/UI 개선 및 명세 구체화",
    description:
      "개발 시작 전, 운영진과의 심층 인터뷰를 통해 '진짜 문제'를 정의했습니다. 불필요한 클릭과 복잡한 동선을 파악하여 UI 흐름을 재설계하고, 상세한 기능 명세서를 통해 기획-디자인-개발 간의 오해를 사전에 차단했습니다.",
    metrics: [
      { label: "업무 처리 속도", value: "40% 향상" },
      { label: "커뮤니케이션 재작업률", value: "0% 수렴" },
    ],
    details: [
      "실무자 인터뷰를 통한 불필요한 클릭 수 파악 및 UI 동선 재설계",
      "정책(유효성, 권한)이 포함된 상세 명세서 작성으로 커뮤니케이션 비용 최소화",
      "사용자 중심의 워크플로우 최적화로 핵심 업무 효율 극대화",
    ],
  },
  {
    id: "bff",
    icon: <ServerCog className="w-6 h-6 text-blue-600" />,
    title: "BFF Architecture: 연결의 효율화",
    subtitle: "Next.js Route Handlers 기반 API Aggregation",
    description:
      "기존 모바일 앱용 API를 웹 환경에 맞게 재사용하기 위해 BFF(Backend For Frontend) 패턴을 도입했습니다. 클라이언트의 부담을 서버로 분산시키고, 민감한 정보 처리를 서버 사이드에서 수행하여 보안을 강화했습니다.",
    metrics: [
      { label: "신규 백엔드 개발 공수", value: "70% 절감" },
      { label: "보안 이슈(CORS/토큰)", value: "원천 차단" },
    ],
    details: [
      "웹 서버 계층에서 기존 API를 재조합(Aggregation)하여 백엔드 의존성 제거",
      "데이터 가공 로직을 서버로 위임하여 클라이언트 번들 사이즈 및 연산 부하 감소",
      "민감한 토큰 관리 및 API 호출을 서버 사이드에서 수행하여 보안성 강화",
    ],
  },
  {
    id: "server-action",
    icon: <Laptop2 className="w-6 h-6 text-yellow-600" />,
    title: "Code Productivity: 더 적은 코드로, 더 안전하게",
    subtitle: "Server Action 기반의 선언적 폼 시스템",
    description:
      "복잡한 비동기 로직과 useEffect 범람을 해결했습니다. 'use server'를 활용해 클라이언트와 서버의 경계를 허물고, 점진적 향상(Progressive Enhancement) 패턴으로 자바스크립트 로드 전에도 동작하는 견고한 폼 시스템을 구축했습니다.",
    metrics: [
      { label: "Boilerplate Code", value: "60% 제거" },
      { label: "폼 제어 로직", value: "중앙 집중화" },
    ],
    details: [
      "useEffect/fetch 래퍼 없이 Server Action 직접 바인딩으로 코드 간소화",
      "Progressive Enhancement 적용으로 JS 로드 전 폼 제출이 가능한 안정성 확보",
      "공통 헤더의 Submit 트리거를 각 페이지 Action과 동적 매핑(다형성 설계)",
    ],
  },
];

const page = () => {
  return (
    <div>
      <DetailPage
        PROJECT_INFO={PROJECT_INFO}
        SECTIONS={SECTIONS}
        mockup={<MockupWeb image={[<div>목업1</div>, <div>목업2</div>]} />}
      />
    </div>
  );
};

export default page;
