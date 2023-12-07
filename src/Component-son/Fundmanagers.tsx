import React, { ReactElement } from "react";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";

interface FundManagersProps {
  name: string;
  record: string;
  location: string;
  investmentAmount: string;
  solution: string;
};

export default function FundManagers({
  name,
  location,
  record,
  investmentAmount,
  solution,
}: FundManagersProps): ReactElement {
  return (
    <BoxStore boxStyle={BoxStyle.BOX_SQUARE_WHITE} style="w-60 ml-5 mb-5">
      <div>
        <div className="flex">
          <TextStore textStyle={TextStyle.TEXT_R_16}>{name}</TextStore>
          <TextStore textStyle={TextStyle.TEXT_R_16} style="ml-2.5">
            펀드매니저
          </TextStore>
        </div>
        <div>
          <TextStore textStyle={TextStyle.TEXT_R_15}>{location}</TextStore>
        </div>
        <div className="flex">
          <div className="flex flex-col w-28 mt-2">
            <TextStore textStyle={TextStyle.TEXT_R_11}>수익률</TextStore>
            <TextStore textStyle={TextStyle.TEXT_R_11}>투자금</TextStore>
            <TextStore textStyle={TextStyle.TEXT_R_11}>해결방향</TextStore>
          </div>
          <div className="flex flex-col ml-3.5 mt-2">
            <TextStore textStyle={TextStyle.TEXT_R_11}>{record}</TextStore>
            <TextStore textStyle={TextStyle.TEXT_R_11}>
              {investmentAmount}
            </TextStore>
            <TextStore textStyle={TextStyle.TEXT_R_11}>{solution}</TextStore>
          </div>
        </div>
      </div>
    </BoxStore>
  );
};

