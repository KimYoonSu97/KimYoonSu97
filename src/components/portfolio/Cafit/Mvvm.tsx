import React, { useState } from "react";
import Image from "next/image";
import mvvmAsis from "@/public/image/mvvm-asis.png";
import mvvmTobe from "@/public/image/mvvm-tobe.png";

const Mvvm = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={"w-full flex flex-col justify-center items-center"}>
      <div
        className={
          "w-full border border-gray-200 hover:border-gray-400 p-2 cursor-pointer mb-4"
        }
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-center text-[12px]">{`AsIs => ToBe 이미지 ${
          isOpen ? "닫기" : "보기"
        }`}</p>
      </div>
      {isOpen && (
        <div className={"w-full flex gap-2 items-center justify-between"}>
          <div className={"relative w-1/2"}>
            <Image src={mvvmAsis} alt="mvvm-asis" />
          </div>
          <div>{" => "}</div>
          <div className={"relative w-1/2"}>
            <Image src={mvvmTobe} alt="mvvm-tobe" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Mvvm;
