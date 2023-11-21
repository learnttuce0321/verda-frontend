"use client";

import { useRouter } from "next/navigation";
import Modal from "@/components-kim/modal";
import { useState } from "react";
import Navi from "@/components-kim/navi";

export default function FundmanagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [click, setClick] = useState<boolean>(false);
  const router = useRouter();

  const loadUserRequestHandler = () => {
    router.push("/fundmanager/clientrequest");
  };
  const loadChatHandler = () => {
    router.push("/fundmanager/chatlist");
  };

  return (
    <div className="bg-gradient-to-b from-indigo-800 to-indigo-300">
      <Navi setClick={setClick} click={click} />

      <section className="text-white">
        <span className="text-2xl font-semibold">
          안녕하세요 fundmanager01님!
        </span>
        <br />
        <button
          onClick={loadUserRequestHandler}
          className="box-border border-4"
        >
          투자문의 보러가기{" "}
        </button>{" "}
        <button onClick={loadChatHandler} className="box-border border-4">
          채팅
        </button>
        {click ? <Modal /> : null}
      </section>
    </div>
  );
}
