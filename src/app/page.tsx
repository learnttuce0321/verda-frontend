import React from "react";
import Contents from "@/Components/Organism/Main/FundManagerContent/Contents";
import InfoLogin from "@/Components/Organism/Login/LoginInfo";
import Reviews from "@/Components/Organism/Main/ReviewContent/Reviews";

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
