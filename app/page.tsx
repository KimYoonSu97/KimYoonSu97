import Footer from "@/src/components/Footer";
import VisualText from "@/src/components/VisualText";
import Image from "next/image";
import emoji from "@/public/image/emoji.png";
import code from "@/public/image/code.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-dvh overflow-y-scroll snap-y snap-mandatory no-scrollbar">
      <section className="h-dvh w-full snap-start flex items-center justify-center">
        {/* <div className="flex flex-col justify-between w-full p-4 md:p-7 h-dvh">
          <div></div>
          <p className="whitespace-pre-wrap text-center font-bold text-[60px] md:text-[120px] lg:text-[160px] leading-[60px] md:leading-[120px] lg:leading-[160px]">
            {"THE ART\nOF\nEXECUTING\nIDEAS"}
          </p>
          <p className="text-base md:text-[24px] ml-auto">
            아이디어를 실행하는 기술
          </p>
        </div> */}
        <div className="w-full h-dvh overflow-hidden">
          <iframe
            src="https://my.spline.design/distortingtypography-Ij9A4LOcQsGmyVmssuRo3c8X/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="w-full h-[calc(100dvh+100px)]"
            title="Spline 3D Hero"
          ></iframe>
        </div>
      </section>

      <section className="h-dvh w-full snap-start flex flex-col gap-6 md:gap-10 items-center justify-center px-4">
        <Image
          src={emoji}
          alt="emoji"
          width={300}
          height={300}
          className="w-48 h-48 md:w-[300px] md:h-[300px]"
        />
        <div className="flex flex-col gap-2 max-w-2xl">
          <p className="text-xl md:text-[24px] font-bold text-center">
            반갑습니다👋🏻 김윤수입니다.
          </p>
          <p className="text-sm md:text-[16px] text-center px-4">
            다양한 서비스의 사용자로서 서비스의 필요성과 가치를 먼저 공감하고,
            개발자로서 그 경험을 기술로 설계하는 일에 열정을 느낍니다.
          </p>

          <div className="cursor-pointer mt-6 md:mt-10">
            <Link href="/profile">
              <p className="text-sm md:text-[16px] font-medium text-center cursor-pointer hover:text-slate-600 transition-colors">
                프로필 보러가기 →
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="h-dvh w-full snap-start flex flex-col gap-6 md:gap-10 items-center justify-center px-4">
        <Image
          src={code}
          alt="code"
          width={600}
          height={600}
          className="w-80 h-80 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]"
        />
        <div className="flex flex-col gap-2 max-w-2xl">
          <p className="text-sm md:text-[16px] text-center px-4">
            보이는 화면부터 보이지 않는 로직까지, 서비스의 시작과 끝을 온전히
            설계하는 개발자를 지향합니다.
          </p>

          <div className="cursor-pointer mt-6 md:mt-10">
            <Link href="/portfolio">
              <p className="text-sm md:text-[16px] font-medium text-center cursor-pointer hover:text-slate-600 transition-colors">
                포트폴리오 보러가기 →
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="h-[70dvh] w-full snap-start flex items-center justify-center">
        <Footer />
      </section>
    </div>
  );
}
