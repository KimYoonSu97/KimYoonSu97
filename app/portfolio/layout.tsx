import Footer from "@/src/components/Footer";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-dvw h-dvh overflow-y-scroll snap-y snap-mandatory no-scrollbar">
      <section className="w-full min-h-screen pt-24 md:pt-30 pb-10 md:pb-30">
        {children}
      </section>
      <Footer />
    </div>
  );
};

export default layout;
