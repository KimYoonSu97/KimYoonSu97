"use client";

import ProjectDetailLayout, {
  Section,
  ChallengeCard,
} from "@/src/components/ProjectDetailLayout";
import React, { useState } from "react";
import Image from "next/image";
import teamliteLogo from "@/public/image/teamlite-logo.png";
import Card from "@/src/components/portfolio/Card";
import Cafit from "@/src/components/portfolio/Cafit";
import TeamLite from "@/src/components/portfolio/TeamLite";
import Footer from "@/src/components/Footer";

const page = () => {
  return (
    <div className="w-dvw h-dvh overflow-y-scroll snap-y snap-mandatory no-scrollbar">
      <section className="w-full min-h-screen pt-30 pb-30">
        <div className="flex  flex-col gap-4 pr-20 pl-20">
          <Card
            title={"자동차 렌트/리스 종합 플랫폼 및 통합 어드민"}
            caption={
              "서비스 고도화 및 운영 효율화를 위한 앱 리팩토링 & 웹 구축"
            }
            period={"2024.4 ~ 2025.9 (1년 5개월)"}
            team={"FE 1명(본인), BE 1명, Designer 1명"}
            role={"앱 개발 100%, 웹 개발 100%"}
            image={<p>스타오토모빌</p>}
            page={<Cafit />}
          />

          <div className="w-full h-px bg-gray-400" />

          <Card
            title={"TeamLite : 사이드 프로젝트 팀을 위한 협업 SaaS"}
            caption={
              "Frontend부터 DevOps까지, 모노레포로 구축한 올인원 협업 도구"
            }
            period={"기간: 2025.12 ~ (진행 중)"}
            team={"1인 개발 (Full Stack)"}
            role={
              "목표: 사이드 프로젝트 팀의 일정/할일 관리 및 커뮤니케이션 효율화, 풀스택 아키텍처 학습"
            }
            image={
              <Image
                src={teamliteLogo}
                alt="teamlite"
                width={200}
                height={200}
              />
            }
            link={"https://teamlite.dpdns.org/login"}
            page={<TeamLite />}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};
// 자동차 렌트/리스 종합 플랫폼 및 통합 어드민
export default page;
