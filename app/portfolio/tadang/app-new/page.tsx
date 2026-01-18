"use client";

import DetailPage from "@/src/components/detail/DetailPage";
import MockupApp from "@/src/components/detail/mockupApp";
import { Smartphone, FileCheck, Map } from "lucide-react";
import React from "react";
import app2 from "@/public/image/app2.png";
import Image from "next/image";
const PROJECT_INFO = {
  title: "차량 렌트/리스 플랫폼: 핵심 신규 기능 개발",
  period: "2024.11 - 2025.01",
  role: "Core Feature Developer",
  tags: [
    "React Native Reanimated",
    "WebView Bridge",
    "Kakao Map API",
    "Gesture Handler",
  ],
  summary:
    "정적인 정보 전달을 넘어, 사용자가 직접 상호작용하는 핵심 기능들을 구현했습니다. 네이티브 성능의 한계를 극복하는 60fps 애니메이션 최적화와 웹뷰-네이티브 하이브리드 지도 아키텍처를 통해 기술적 난이도가 높은 과제들을 해결했습니다.",
};

const SECTIONS = [
  {
    id: "interaction",
    icon: <Smartphone className="w-6 h-6 text-pink-600" />,
    title: "High-Performance Interaction: 손끝에 붙는 반응성",
    subtitle: "Reanimated 기반 제스처 주도형(Gesture-Driven) UI",
    description:
      "차량 평가 시스템은 사용자의 미세한 조작이 중요했습니다. JS 스레드 간섭 없이 UI 스레드에서 직접 애니메이션을 처리하여, 저사양 기기에서도 버벅임 없는 사용자 경험을 만들어냈습니다.",
    metrics: [
      { label: "애니메이션 프레임", value: "60fps 유지" },
      { label: "입력 지연(Input Lag)", value: "0ms 달성" },
    ],
    details: [
      "react-native-reanimated와 gesture-handler를 활용한 네이티브급 모션 구현",
      "드래그 앤 드롭 입력을 UI 스레드에서 직접 처리하여 퍼포먼스 병목 해결",
      "평가 로직(점수 계산/상태 동기화)을 커스텀 훅으로 분리하여 컴포넌트 복잡도 최소화",
    ],
  },
  {
    id: "map-architecture",
    icon: <Map className="w-6 h-6 text-blue-600" />,
    title: "Hybrid Map Architecture: 웹과 앱의 경계를 허물다",
    subtitle: "WebView-Native Bridge 최적화 및 전문가 찾기 서비스",
    description:
      "웹 기반의 지도(Map)와 네이티브 리스트(List)가 유기적으로 연동되어야 했습니다. 양방향 통신 구조를 최적화하여 지도가 로딩되자마자 마커가 즉시 표시되도록 지연 시간을 없앴습니다.",
    metrics: [
      { label: "거리 계산 처리", value: "Client-Side" },
      { label: "리스트 렌더링", value: "Real-time" },
    ],
    details: [
      "WebView(지도)와 Native(리스트) 간 브릿지(Bridge) 통신 최적화",
      "사용자 좌표 기반 거리 계산 및 정렬 알고리즘을 클라이언트에서 직접 처리",
      "서버 부하 없이 실시간 리스트 필터링 및 렌더링 구현",
    ],
  },
  {
    id: "utility-system",
    icon: <FileCheck className="w-6 h-6 text-green-600" />,
    title: "Modular Utility System: 복잡한 로직의 단순화",
    subtitle: "전문가 등록/검증 프로세스 및 폼 아키텍처",
    description:
      "복잡한 증빙 서류 첨부와 주소 검색 과정을 사용자가 쉽게 느낄 수 있도록 설계했습니다. 외부 API 연동 로직을 독립적인 유틸리티로 모듈화하여 유지보수성과 재사용성을 높였습니다.",
    metrics: [
      { label: "사용자 이탈", value: "방지 설계" },
      { label: "주소/좌표 변환", value: "모듈화 100%" },
    ],
    details: [
      "Kakao Map API 연동 및 주소-좌표 변환 로직을 순수 유틸리티 함수로 분리",
      "단계별 검증(Step Validation)이 적용된 순차적 폼 아키텍처 도입",
      "복합 입력 과정에서의 데이터 유실 방지 및 UX 흐름 개선",
    ],
  },
];

const page = () => {
  return (
    <div>
      <DetailPage
        PROJECT_INFO={PROJECT_INFO}
        SECTIONS={SECTIONS}
        mockup={
          <MockupApp
            image={
              <div className="w-full h-full">
                <Image src={app2} alt="app2" />
              </div>
            }
          />
        }
      />
    </div>
  );
};

export default page;
