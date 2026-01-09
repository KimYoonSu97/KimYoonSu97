import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#000000] min-h-[70vh] text-white p-4 md:p-7 flex flex-col justify-between">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:flex md:justify-between">
        <div>
          <p className="mb-2 text-lg md:text-[24px] font-bold">menu</p>
          <div className="text-sm md:text-[16px] font-light space-y-1">
            <Link
              className="cursor-pointer hover:text-slate-300 transition-colors block"
              href="/portfolio"
            >
              <p>portfolio</p>
            </Link>
            <Link
              className="cursor-pointer hover:text-slate-300 transition-colors block"
              href="/profile"
            >
              <p>profile</p>
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-2 text-lg md:text-[24px] font-bold">link</p>
          <div className="text-sm md:text-[16px] font-light space-y-1">
            <Link
              className="cursor-pointer hover:text-slate-300 transition-colors block"
              href="https://github.com/kimyoonsu97"
              target="_blank"
            >
              <p>github</p>
            </Link>
            <Link
              className="cursor-pointer hover:text-slate-300 transition-colors block"
              href="https://velog.io/@zkzk625/posts"
              target="_blank"
            >
              <p>velog</p>
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-2 text-lg md:text-[24px] font-bold">contact</p>
          <div className="text-sm md:text-[16px] font-light space-y-1">
            <p>Tel. 010-3004-5854</p>
            <p>E-mail. zkzk625@naver.com</p>
          </div>
        </div>
      </section>
      <section className="mt-8 md:mt-0">
        <p className="font-bold text-sm md:text-[16px]">
          The art of executing ideas
        </p>
        <p className="text-6xl md:text-[120px] lg:text-[240px] leading-none">
          Thomas()
        </p>
      </section>
    </div>
  );
};

export default Footer;
