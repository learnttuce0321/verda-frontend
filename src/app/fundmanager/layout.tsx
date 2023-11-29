"use client";

import { useState } from "react";
import Navi from "@/components-kim/navi";
import Modal from "@/components-kim/modal";

export default function FundmanagerMainPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const [click, setClick] = useState<boolean>(false);
  return (
    <main className="bg-gradient-to-b from-indigo-800 to-indigo-300 text-white h-screen">
      <div className="p-3">{children}</div>
      {/* <Navi setClick={setClick} click={click} />
      
      {click ? <Modal /> : null} */}
    </main>
  );
}
