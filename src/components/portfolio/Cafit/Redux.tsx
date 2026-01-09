import React, { useState } from "react";
import Image from "next/image";
import reduxAsis from "@/public/image/redux-asis.png";
import reduxTobe from "@/public/image/redux-tobe.png";

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
            <Image src={reduxAsis} alt="mvvm-asis" />
          </div>
          <div>{" => "}</div>
          <div className={"relative w-1/2"}>
            <Image src={reduxTobe} alt="mvvm-tobe" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Mvvm;
