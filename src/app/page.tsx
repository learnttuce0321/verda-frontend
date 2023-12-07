import React from "react";
import Contents from "@/Component-son/Contents";
import InfoLogin from "@/Component-son/InfoLogin";
import Reviews from "@/Component-son/Reviews";

export default function Home() {
  return (
    <div className="pt-[100px] mb-5">
      <div className="flex flex-col items-center ">
        <div>
          <Contents />
        </div>
        <div>
          <Reviews />
        </div>
        <div>
          <InfoLogin />
        </div>
      </div>
    </div>
  );
}
