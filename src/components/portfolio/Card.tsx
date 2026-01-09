"use client";

import React, { useState } from "react";
import Cafit from "./Cafit";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";

const Card = ({
  title,
  caption,
  period,
  team,
  role,
  image,
  page,
  link,
}: {
  title: string;
  caption: string;
  period: string;
  team: string;
  role: string;
  image: React.ReactNode;
  page: React.ReactNode;
  link?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-8 cursor-pointer py-4 md:py-6 transition-all duration-300 hover:opacity-80"
      >
        <div className="flex gap-2 md:gap-3 flex-col flex-1 w-full">
          <h3 className="font-bold text-xl md:text-[28px] leading-tight text-slate-900 group-hover:text-slate-700 transition-colors">
            {title}
          </h3>
          <p className="text-base md:text-[18px] font-semibold text-slate-600 leading-relaxed">
            {caption}
          </p>
          <div className="flex flex-col gap-1 md:gap-1.5 mt-1 md:mt-2">
            <p className="text-xs md:text-[14px] text-slate-500">{period}</p>
            <p className="text-xs md:text-[14px] text-slate-500">{team}</p>
            <p className="text-xs md:text-[14px] text-slate-500">{role}</p>
          </div>
        </div>
        <div
          className="shrink-0 transition-transform duration-300 group-hover:scale-105 cursor-pointer self-end md:self-auto"
          onClick={() => {
            if (link) {
              window.open(link, "_blank");
            }
          }}
        >
          {image}
          {link && (
            <p className="text-[10px] md:text-[12px] text-slate-500">
              바로가기
            </p>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="border border-slate-200 p-4 md:p-6 mt-4 md:mt-6 bg-white shadow-sm animate-in fade-in slide-in-from-top-2 duration-300">
          {page}
        </div>
      )}
    </div>
  );
};

export default Card;
