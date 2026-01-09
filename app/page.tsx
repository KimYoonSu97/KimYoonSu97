import Footer from "@/src/components/Footer";
import VisualText from "@/src/components/VisualText";
import Image from "next/image";
import emoji from "@/public/image/emoji.png";
import code from "@/public/image/code.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-dvh overflow-y-scroll snap-y snap-mandatory no-scrollbar">
      <section className="h-dvh w-full snap-start flex items-center justify-center ">
        <div className={"flex flex-col justify-between w-full p-7 h-dvh"}>
          <div></div>
          <p
            className={
              "whitespace-pre-wrap text-center font-bold text-[160px] leading-[160px]"
            }
          >
            {"THE ART\nOF\nEXECUTING\nIDEAS"}
          </p>
          <p className={"text-[24px] ml-auto"}>아이디어를 실행하는 기술</p>
        </div>
      </section>
      <section className="h-dvh w-full snap-start flex flex-col gap-10 items-center justify-center ">
        <Image src={emoji} alt="emoji" width={300} height={300} />
        <div className="flex flex-col gap-2">
          <p className=" text-[24px] font-bold text-center">
            반갑습니다👋🏻 김윤수입니다.
          </p>
          <p className=" text-[16px] text-center">
            {
              "다양한 서비스의 사용자로서 서비스의 필요성과 가치를 먼저 공감하고,\n개발자로서 그 경험을 기술로 설계하는 일에 열정을 느낍니다."
            }
          </p>

          <div className="cursor-pointer mt-10">
            <Link href="/profile">
              <p className="text-[16px] font-medium text-center cursor-pointer">
                {"프로필 보러가기 ->"}
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="h-dvh w-full snap-start flex flex-col gap-10 items-center justify-center ">
        <Image src={code} alt="code" width={600} height={600} />
        <div className="flex flex-col gap-2">
          <p className=" text-[16px] text-center">
            {
              "보이는 화면부터 보이지 않는 로직까지, 서비스의 시작과 끝을 온전히 설계하는 개발자를 지향합니다."
            }
          </p>

          <div className="cursor-pointer mt-10">
            <Link href="/portfolio">
              <p className="text-[16px] font-medium text-center cursor-pointer">
                {"포트폴리오 보러가기 ->"}
              </p>
            </Link>
          </div>
        </div>
      </section>
      <section className="h-[70dvh] w-full snap-start flex items-center justify-center ">
        <Footer />
      </section>
    </div>
  );
}
