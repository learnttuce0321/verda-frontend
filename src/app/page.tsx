import React from "react";

import Contents from "@/Component-son/Contents";
import Header from "@/Component-son/Header";
import InfoLogin from "@/Component-son/InfoLogin";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex flex-col items-center">
        <div>
          <Contents />
        </div>
        <div>
          <InfoLogin />
        </div>
        <h1>asdf</h1>
      </div>
    </div>
  );
}
