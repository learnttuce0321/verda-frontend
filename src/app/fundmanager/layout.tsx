import { useState } from "react";

export default function FundmanagerMainPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-gradient-to-b from-custom_fmbg_start to-custom_fmbg_end text-white min-h-screen">
      <div className="px-5 pb-3 pt-[100px]">
        {children}
      </div>
    </main>
  );
}
