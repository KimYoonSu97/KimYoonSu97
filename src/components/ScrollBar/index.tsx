"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

const index = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname(); // 페이지 이동 감지용

  // 1. 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    const totalScroll = scrollHeight - clientHeight;

    // 0으로 나누기 방지 (내용이 짧을 때)
    const currentProgress = totalScroll > 0 ? scrollTop / totalScroll : 0;
    setScrollProgress(currentProgress);
  };

  // 2. 페이지 변경 시 스크롤 맨 위로 초기화 (선택사항)
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
      setScrollProgress(0);
    }
  }, [pathname]);

  return (
    <div className="relative w-full h-dvh overflow-hidden bg-black text-white">
      {/* 왼쪽 커스텀 스크롤 인디케이터 */}
      <div className="absolute left-4 top-0 bottom-0 w-[2px] h-full flex items-center z-50 pointer-events-none">
        <div className="absolute w-full h-full bg-white/10 rounded-full" />
        <div
          className="absolute w-[4px] h-20 bg-pink-500 shadow-[0_0_10px_#ec4899] rounded-full transition-all duration-100 ease-out -left-[1px]"
          style={{
            top: `calc(${scrollProgress * 100}% - ${scrollProgress * 80}px)`,
          }}
        />
      </div>

      {/* 메인 스크롤 컨테이너 */}
      <main
        ref={containerRef}
        onScroll={handleScroll} // 리액트 이벤트로 직접 연결
        className="h-full w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar scroll-smooth"
      >
        {children} {/* 여기에 각 페이지의 내용이 들어옵니다 */}
      </main>
    </div>
  );
};

export default index;
