import React from "react";
import {
  ArrowLeft,
  Calendar,
  User,
  Code2,
  CheckCircle2,
  ArrowUp,
} from "lucide-react";
import Link from "next/link";
interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <section className="mb-20">
    <h3 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-gray-500 pl-4">
      {title}
    </h3>
    <div className="space-y-6">{children}</div>
  </section>
);

export const ChallengeCard = ({
  title,
  problem,
  solution,
  result,
  review,
  image,
}: {
  title: string;
  problem: string;
  solution: string;
  result: string;
  review: string;
  image?: React.ReactNode;
}) => (
  <div className="bg-white border border-slate-200  p-6 hover:border-pink-500 hover:shadow-lg transition-all duration-300">
    {image && <div className={"mb-4"}>{image}</div>}

    <h4 className="text-xl font-bold text-gray-700 mb-4">{title}</h4>
    <div className="space-y-4">
      <div>
        <span className="text-xs font-bold text-red-500 uppercase tracking-wider bg-red-50 px-2 py-1 ">
          Problem
        </span>
        <p className="text-slate-700 mt-2 text-sm leading-relaxed">{problem}</p>
      </div>
      <div>
        <span className="text-xs font-bold text-blue-500 uppercase tracking-wider bg-blue-50 px-2 py-1 ">
          Solution
        </span>
        <p className="text-slate-700 mt-2 text-sm leading-relaxed whitespace-pre-wrap">
          {solution}
        </p>
      </div>
      <div>
        <span className="text-xs font-bold text-green-600 uppercase tracking-wider bg-green-50 px-2 py-1 ">
          Result
        </span>
        <p className="text-slate-700 mt-2 text-sm leading-relaxed whitespace-pre-wrap">
          {result}
        </p>
      </div>
      <div>
        <span className="text-xs font-bold text-pink-600 uppercase tracking-wider bg-pink-50 px-2 py-1 ">
          Review
        </span>
        <p className="text-slate-700 mt-2 text-sm leading-relaxed">{review}</p>
      </div>
    </div>
  </div>
);

interface ProjectDetailLayoutProps {
  title: string;
  subtitle: string;
  period: string;
  role: string;
  team: string;
  tags: string[];
  children: React.ReactNode;
}

export default function ProjectDetailLayout({
  title,
  subtitle,
  period,
  role,
  tags,
  children,
}: ProjectDetailLayoutProps) {
  return (
    <div className="">
      <div className="p-4">
        <header className="mb-16">
          <div className={"mb-4"}>
            <p className="text-[36px] font-bold leading-relaxed">{title}</p>
            <p className="text-[24px] leading-relaxed">{subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-y border-slate-200 py-8 bg-white  px-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5" />
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                  Period
                </p>
                <p className="text-sm font-semibold text-gray-700">{period}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 " />
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                  Role
                </p>
                <p className="text-sm font-semibold text-gray-700">{role}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Code2 className="w-5 h-5 " />
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white border border-gray-200 px-2 py-0.5 text-gray-600 font-medium shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>{children}</main>
      </div>
    </div>
  );
}

export { Section };
