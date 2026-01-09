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
        className="flex justify-between items-start gap-8 cursor-pointer py-6 transition-all duration-300 hover:opacity-80"
      >
        <div className="flex gap-3 flex-col flex-1">
          <h3 className="font-bold text-[28px] leading-tight text-slate-900 group-hover:text-slate-700 transition-colors">
            {title}
          </h3>
          <p className="text-[18px] font-semibold text-slate-600 leading-relaxed">
            {caption}
          </p>
          <div className="flex flex-col gap-1.5 mt-2">
            <p className="text-[14px] text-slate-500">{period}</p>
            <p className="text-[14px] text-slate-500">{team}</p>
            <p className="text-[14px] text-slate-500">{role}</p>
          </div>
        </div>
        <div
          className="shrink-0 transition-transform duration-300 group-hover:scale-105 cursor-pointer -"
          onClick={() => {
            if (link) {
              window.open(link, "_blank");
            }
          }}
        >
          {image}
          {link && <p className="text-[12px] text-slate-500">바로가기</p>}
        </div>
      </div>
      {isOpen && (
        <div className="border border-slate-200 p-6 mt-6 bg-white shadow-sm animate-in fade-in slide-in-from-top-2 duration-300">
          {page}
        </div>
      )}
    </div>
  );
};

export default Card;
