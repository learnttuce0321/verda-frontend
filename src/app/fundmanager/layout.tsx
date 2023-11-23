"use client";
import Navi from "@/Components-kim/Navi";
import { useState } from "react";
import Modal from "@/Components-kim/modal";

export default function FundmanagerMainPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const [click, setClick] = useState<boolean>(false);
  return (
    <main className="bg-gradient-to-b from-indigo-800 to-indigo-300 text-white h-screen">
      <Navi setClick={setClick} click={click} />
      <div className="p-3">{children}</div>
      {click ? <Modal /> : null}
    </main>
  );
}
