import React from "react";
import ProjectDetailLayout, {
  ChallengeCard,
  Section,
} from "../../ProjectDetailLayout";
import mvvmAsis from "@/public/image/mvvm-asis.png";
import mvvmTobe from "@/public/image/mvvm-tobe.png";
import Image from "next/image";
import Mvvm from "./Mvvm";
import Redux from "./Redux";

const index = () => {
  return (
    <ProjectDetailLayout
      title="자동차 렌트/리스 종합 플랫폼"
      subtitle="레거시 청산부터 BFF 아키텍처 도입까지, 실무 중심의 서비스 고도화"
      period="2024.4 ~ 2025.9 (1년 5개월)"
      role="Frontend Lead (App 100%, Web 100%)"
      team="FE 1명, BE 1명, Designer 1명"
      tags={["React Native", "Next.js 14", "TypeScript", "React Query"]}
    >
      <Section title="Mobile App: 구조적 한계 극복과 최적화">
        <p className="text-slate-600 mb-8 leading-relaxed text-base">
          기존 개발자의 부재 상황에서 React Native 앱을 인계받았습니다. 가장
          시급했던 과제는{" "}
          <strong className="text-slate-900 bg-slate-100 px-2 py-0.5 ">
            유지보수가 어려운 레거시 구조를 개선
          </strong>
          하고, 사용자 경험을 저해하는{" "}
          <strong className="text-slate-900 bg-slate-100 px-2 py-0.5 ">
            성능 이슈를 해결
          </strong>
          하는 것이었습니다.
        </p>

        <div className="grid gap-6">
          <ChallengeCard
            title="MVVM 패턴 도입 및 도메인 구조 리팩토링"
            problem="기존 역할별(Layer-based) 폴더 구조로 인해 모듈 간 의존성이 높고, 기능 수정 시 영향 범위를 파악하기 어려워 유지보수 비용 과다 발생."
            solution={
              "UI(View)와 비즈니스 로직(ViewModel)을 분리하여 코드의 책임 소재를 명확화.\n도메인 중심 설계로 전환하여, 기능 추가 시 기존 코드에 영향을 주지 않는 유연한 구조 확보하고 코드 응집도 강화."
            }
            result="신규 기능 추가 및 유지보수 시 코드 탐색 시간 단축 및 사이드 이펙트 최소화."
            review="파일 개수와 구조적인 레이어는 늘어났지만 코드를 읽는 복잡도는 낮아졌습니다. 이전에는 코드 한 줄을 고치기 위해 전체 파일을 다 이해해야 했지만, 리팩토링 후에는 UI를 고치려면 View만, 로직을 고치려면 Hook만 보면 되기 때문에, 이슈별로 빠른 대응이 가능해졌고 업무 효율성이 향상을 경험하였습니다."
            image={<Mvvm />}
          />

          <ChallengeCard
            title="상태 관리 최적화 (Redux + Context API)"
            problem="모든 상태(약 6단계 견적 프로세스 등)를 Redux와 Params Drilling으로 처리하여 스토어가 비대해지고 데이터 흐름 추적이 난해함."
            solution="전역 상태(Redux)와 로컬 상태(Context API)를 명확히 분리. 특정 플로우 내에서만 유효한 데이터는 Context로 격리하고 언마운트 시 초기화."
            result="불필요한 전역 상태 제거로 메모리 효율성 증대 및 비즈니스 로직의 책임 소재 명확화."
            review="해당 이슈에 대하여 개선을 진행하면서 오류에 대한 대응이 더욱 편리해졌으며, 로직의 책임소재에 대한 명확화가 중요하다는 사실을 알게되었습니다."
            image={<Redux />}
          />

          <ChallengeCard
            title="React Query 도입 및 UX 개선"
            problem="useEffect 기반의 API 호출로 인한 중복 요청 발생 및 화면 깜빡임 현상으로 사용자 경험 저하."
            solution="React Query를 도입하여 Server State를 분리하고 캐싱 전략 적용. Spinner 대신 Skeleton UI를 도입하여 체감 로딩 속도 개선."
            result="불필요한 API 호출 제거 및 자연스러운 화면 전환 구현으로 앱 안정성 확보."
            review="List컨테이너 등을 활용할 때 클라이언트의 플릭커 현상으로 완성도가 떨어져 보이는 부분을 개선하기 위해 적용 하였습니다. 미세한 속도의 차이였지만 앱의 완성도를 높일 수 있는 방법이라고 생각하여 적용하였습니다."
          />
        </div>
      </Section>

      <Section title="Admin Web: 주도적 기획과 기술적 도전">
        <p className="text-slate-600 mb-8 leading-relaxed text-base">
          단순한 구현을 넘어, 실제 서비스를 운영하는{" "}
          <strong className="text-slate-900 bg-slate-100 px-2 py-0.5 ">
            사내 운영팀과의 인터뷰를 통해 기획 단계부터 참여
          </strong>
          했습니다. Next.js 14의 최신 기능을 적극 활용하여 생산성과 유지보수성을
          동시에 잡았습니다.
        </p>

        <div className="space-y-6">
          <div className="bg-white border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all duration-300">
            <h4 className="text-lg font-bold text-slate-900 mb-3">
              🖥️ BFF (Backend For Frontend) 아키텍처
            </h4>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              모바일 앱 기준의 API를 웹 환경에 맞게 재가공하기 위해{" "}
              <strong>Next.js Route Handlers</strong>를 도입하여 독립적인 BFF
              계층을 구축했습니다. 불필요한 데이터 노출을 막고 통신 효율을
              높였습니다.
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-2 ml-2 bg-slate-50 p-4 border border-slate-100">
              <li>
                민감한 API 키 은닉 및 클라이언트에 필요한 데이터만 선별하여
                Payload 경량화
              </li>
              <li>
                서버 컴포넌트(RSC)와 연동하여 에러 처리 및 데이터
                캐싱(Revalidation) 정책 중앙화
              </li>
              <li>
                복잡한 데이터 가공 로직을 서버로 위임하여 클라이언트 코드는 UI
                렌더링에만 집중
              </li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all duration-300">
            <h4 className="text-lg font-bold text-slate-900 mb-3">
              ⚡ Server Actions & Form Handling
            </h4>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              공통 헤더(Layout)의 '저장' 버튼이 하위 페이지의 폼을 제어해야 하는
              복잡한 구조적 요구사항을 <strong>Server Actions</strong>와{" "}
              <strong>Form Action</strong> 패턴으로 해결했습니다.
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-2 ml-2 bg-slate-50 p-4 border border-slate-100">
              <li>
                Props Drilling 없이 Form ID와 formAction을 활용해 레이아웃과
                페이지 간 데이터 흐름 제어
              </li>
              <li>
                불필요한 클라이언트 상태(useState)와 useEffect를 제거하여 코드
                복잡도 50% 이상 감소
              </li>
              <li>
                서버 단에서의 강력한 유효성 검사(Validation) 및 리다이렉션 로직
                통합 관리
              </li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all duration-300">
            <h4 className="text-lg font-bold text-slate-900 mb-3">
              🚀 AWS 기반 CI/CD 및 무중단 배포
            </h4>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              수동 배포의 비효율을 제거하고 안정적인 운영 환경을 구축하기 위해{" "}
              <strong>GitHub Actions</strong>와 <strong>AWS CodeDeploy</strong>,
              그리고 <strong>PM2</strong>를 연동한 자동화 파이프라인을
              설계했습니다.
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-2 ml-2 bg-slate-50 p-4 border border-slate-100">
              <li>
                S3를 활용,배포 파일을 날짜별로 저장하여, 문제 발생 시 바로 이전
                시점으로 되돌릴 수 있는 안전장치 마련
              </li>
              <li>
                복잡한 명령어 입력을 스크립트 하나로 자동화하여 배포 실수 방지
                및 시간 단축
              </li>
              <li>
                서버가 예기치 않게 멈추더라도 PM2가 즉시 다시 실행시켜주어 끊김
                없는 서비스 환경 유지
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </ProjectDetailLayout>
  );
};

export default index;
