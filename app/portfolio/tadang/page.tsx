import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Link href={"/portfolio/tadang/admin"}>admin</Link>
      <Link href={"/portfolio/tadang/app"}>app</Link>
    </div>
  );
};

export default page;
