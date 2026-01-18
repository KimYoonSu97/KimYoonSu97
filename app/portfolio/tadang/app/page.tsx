"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Code2,
  Zap,
  Layers,
} from "lucide-react";
import DetailPage from "@/src/components/detail/DetailPage";
import MockupApp from "@/src/components/detail/mockupApp";
import app1 from "@/public/image/app1.png";

// --- 데이터 세팅 (사용자가 주신 내용을 구조화) ---
const PROJECT_INFO = {
  title: "차량 렌트/리스 종합 플랫폼\n앱 리팩토링",
  period: "2024.11 - 2025.01",
  role: "B2C 앱 최적화 및 리팩토링 리드",
  tags: ["React Native", "TypeScript", "DDD", "React Query", "Zod", "MVVM"],
  summary:
    "기존 화면 중심의 코드 구조를 도메인 주도 설계(DDD)와 MVVM 패턴으로 재설계하여 유지보수성을 극대화했습니다. 단순한 기능 구현을 넘어, 개발 생산성을 2배 높이고 사용자 경험(UX)을 수치적으로 개선한 기술적 도전기입니다.",
};

const SECTIONS = [
  {
    id: "architecture",
    icon: <Layers className="w-6 h-6 text-pink-600" />,
    title: "Architecture: 흩어진 퍼즐 맞추기",
    subtitle: "화면 중심에서 비즈니스 로직(Domain) 중심으로",
    description:
      "초기 스타트업 단계에서 빠르게 개발된 화면 종속적인 코드를 분리했습니다. DDD(Domain-Driven Design)를 도입하여 비즈니스 로직을 모듈화하고, MVVM 패턴으로 뷰와 로직의 책임을 명확히 했습니다.",
    metrics: [
      { label: "체감 개발 속도", value: "2배 향상" },
      { label: "View 코드 라인(LOC)", value: "40% 감소" },
    ],
    details: [
      "역할별(Layered) 구조에서 도메인 기반 모듈 구조로 변경하여 파일 탐색 시간 단축",
      "Model-View-ViewModel 도입으로 UI와 비즈니스 로직의 의존성 제거",
      "코드 책임 소재 명확화로 협업 시 컨텍스트 스위칭 비용 최소화",
    ],
  },
  {
    id: "state",
    icon: <Code2 className="w-6 h-6 text-blue-600" />,
    title: "State Management: 데이터의 흐름을 정리하다",
    subtitle: "Redux와 Context API의 적절한 역할 분담",
    description:
      "모든 상태를 전역으로 관리하던 비효율을 개선했습니다. 도메인 기능 단위로 상태 스코프(Scope)를 제한하고, 복잡한 차량 견적 데이터의 전달 과정을 단순화했습니다.",
    metrics: [{ label: "Props-Drilling", value: "6단계 → 1단계" }],
    details: [
      "차량 견적 기능: Context 생명주기를 활용해 이탈 시 데이터 자동 초기화 (미선택 오류 방지)",
      "Redux(서버 상태)와 Context(UI 상태) 분리 설계",
    ],
  },
  {
    id: "form",
    icon: <Zap className="w-6 h-6 text-yellow-600" />,
    title: "Efficiency: 반복되는 노동을 자동화하다",
    subtitle: "Schema-Driven UI & 설정 기반 렌더링",
    description:
      "앱 내 수많은 입력 폼을 매번 새로 만드는 것은 비효율적이었습니다. Zod 스키마를 활용해 유효성 검사 로직과 UI 렌더링을 분리하고, 설정값(Config)만으로 폼을 생성하는 시스템을 구축했습니다.",
    metrics: [
      { label: "신규 폼 개발 시간", value: "1시간 → 20분" },
      { label: "Boilerplate Code", value: "60% 제거" },
    ],
    details: [
      "useFormHandler 캡슐화 및 Atomic Input 컴포넌트 모듈화",
      "15개 이상의 입력 필드에 동일한 유효성 검사 규칙 100% 적용 (데이터 무결성 확보)",
      "UI 마크업 없이 객체 설정만으로 폼 렌더링 가능",
    ],
  },
  {
    id: "ux",
    icon: <TrendingUp className="w-6 h-6 text-green-600" />,
    title: "Performance & UX: 사용자를 기다리게 하지 않기",
    subtitle: "Server State 최적화 및 Skeleton UI",
    description:
      "사용자에게 '앱이 빠르다'는 느낌을 주기 위해 데이터 페칭 전략을 수정했습니다. React Query를 도입해 불필요한 네트워크 요청을 줄이고, 스켈레톤 UI로 시각적 대기 시간을 최적화했습니다.",
    metrics: [],
    details: [
      "useEffect 명령형 로직 → React Query 선언형 전환 (코드 50% 감소)",
      "Blocking 스피너 제거 및 Skeleton UI 적용으로 Layout Shift(덜컥거림) 방지",
    ],
  },
];

// --- 컴포넌트 ---

export default function PortfolioStoryPage() {
  return (
    <div>
      <DetailPage
        PROJECT_INFO={PROJECT_INFO}
        SECTIONS={SECTIONS}
        mockup={<MockupApp image={<Image src={app1} alt="app1"></Image>} />}
      />
    </div>
  );
}
