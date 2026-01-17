import { motion } from "framer-motion";
import React from "react";

const index = ({ image }: { image: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative aspect-[9/19] w-full max-w-[320px] mx-auto bg-slate-200 rounded-[3rem] shadow-2xl border-[8px] border-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-white">
        {image}
      </div>
      {/* <Image src="/your-app-screen.png" alt="App Screen" fill className="object-cover" /> */}
    </motion.div>
  );
};

export default index;
