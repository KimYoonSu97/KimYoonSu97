import Footer from "@/src/components/Footer";
import VisualText from "@/src/components/VisualText";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-dvh overflow-y-scroll snap-y snap-mandatory no-scrollbar">
      {/* <p className="font-bold">SF mono Bold</p>
      <p className="font-medium">SF mono Medium</p>
      <p className="font-light">SF mono Light</p>
      <p className="font-bold">안녕하세요</p>
      <p className="font-medium">안녕하세요</p>
      <p className="font-light">안녕하세요</p> */}
      {/* 섹션 1 */}
      <section className="h-dvh w-full snap-start flex items-center justify-center ">
        <VisualText />
      </section>

      {/* 섹션 2 */}
      <section className="h-dvh w-full snap-start flex items-center justify-center ">
        <h1 className=" text-4xl">두 번째 페이지</h1>
      </section>

      {/* 섹션 3 */}
      <section className="h-dvh w-full snap-start flex items-center justify-center ">
        <h1 className=" text-4xl">세 번째 페이지</h1>
      </section>
      <section className="h-[70dvh] w-full snap-start flex items-center justify-center ">
        <Footer />
      </section>
    </div>
  );
}
