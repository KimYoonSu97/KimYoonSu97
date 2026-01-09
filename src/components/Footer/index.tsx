import React from "react";

const index = () => {
  return (
    <div className="w-full bg-[#000000] h-[70vh] text-white p-7 flex flex-col justify-between">
      <section className="flex justify-between">
        <div>
          <p className={"mb-2 text-[24px] bold"}>menu</p>
          <div className={"text-[16px] font-light"}>
            <p>portfolio</p>
            <p>profile</p>
          </div>
        </div>
        <div>
          <p className={"mb-2 text-[24px] bold"}>link</p>
          <div className={"text-[16px] font-light"}>
            <p>github</p>
            <p>velog</p>
          </div>
        </div>
        <div>
          <p className={"mb-2 text-[24px] bold"}>contact</p>
          <div className={"text-[16px] font-light"}>
            <p>Tel. 010-3004-5854</p>
            <p>E-mail. zkzk625@naver.com</p>
          </div>
        </div>
      </section>
      <section>
        <p className="font-bold text-[16px]">The art of executing ideas</p>
        <p className="text-[240px] leading-none">Thomas()</p>
      </section>
    </div>
  );
};

export default index;
