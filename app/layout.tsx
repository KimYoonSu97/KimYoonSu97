import type { Metadata } from "next";

import "./globals.css";
import localFont from "next/font/local";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import ScrollBar from "@/src/components/ScrollBar";

export const metadata: Metadata = {
  // 1. 기본 메타데이터
  title: {
    template: "%s | 김윤수", // 하위 페이지에서 타이틀 설정 시 '페이지명 | 내 서비스 이름'으로 자동 조합
    default: "김윤수", // 타이틀이 없는 페이지에 보일 기본값
  },
  description: "반갑습니다! 김윤수입니다.",

  // 2. 오픈 그래프 (카카오톡, 슬랙, 페이스북 공유 시)
  openGraph: {
    title: "김윤수",
    description: "반갑습니다! 김윤수입니다.",
    url: "https://kim-yoon-su97.vercel.app/",
    siteName: "김윤수",
    locale: "ko_KR",
    type: "website",
  },

  // 3. 아이콘 (favicon 파일을 안 쓰고 코드로 할 때 - 선택 사항)
  icons: {
    icon: "/favicon.png",
  },
};

const pretendard = localFont({
  src: [
    {
      path: "../public/fonts/Pretendard-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-Light.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
});

const sfMono = localFont({
  src: [
    {
      path: "../public/fonts/SFMono-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/SFMono-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/SFMono-Light.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-sf-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`whitespace-pre-wrap ${sfMono.className} ${pretendard.className} font-sans bg-[#EFEEEA]`}
      >
        <Header />

        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
