"use client";
import React from "react";
import { usePathname } from "next/navigation";

const index = () => {
  const pathname = usePathname();
  return (
    <div className="fixed top-0 z-50 w-full backdrop-blur-md  border-white/20">
      <div className="flex justify-between pr-7 pl-7 pt-5 pb-5">
        <div className="cursor-pointer pr-3">
          <p className="font-bold text-[24px]">Thomas</p>
        </div>
        <div className="cursor-pointer pl-3 pr-3">
          <p className="font-bold text-[40px]">{pathname.split("/")[1]}</p>
        </div>
        <div className="cursor-pointer pl-3">
          <p className="font-bold text-[24px]">menu</p>
        </div>
      </div>
    </div>
  );
};

export default index;
