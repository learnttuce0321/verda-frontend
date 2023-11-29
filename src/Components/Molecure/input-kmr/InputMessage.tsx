import { ArrowUpCircleFill } from "react-bootstrap-icons";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";

import { useState, forwardRef, useEffect } from "react";
import type { ChangeEvent, LegacyRef } from "react";

interface Props {
  placeHolder: string;
  style?: string;
}

export default forwardRef(function InputContent(
  { placeHolder, style }: Props,
  ref: LegacyRef<HTMLTextAreaElement> | undefined,
) {
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const targetTextarea = event.target;
    const rowCount = targetTextarea.value.split(/\r\n|\r|\n/).length;
    console.log(rowCount);
    const textareaHeight = 56;
    const newH = 100;

    if (rowCount >= 0 && rowCount <= 3) {
      targetTextarea.style.height = textareaHeight.toString();
      console.log("rowCount", rowCount);
      console.log("세로", targetTextarea.style.height);
    } else {
      const newHeight = Math.min(newH, rowCount * 18 + 2);
      targetTextarea.style.height = `${newHeight}px`;
    }
  };

  return (
    <BoxStore
      boxStyle={BoxStyle.BOX_RECTANGLE_LONG_NAVY}
      style="flex my-2 justify-between w-full"
    >
      <textarea
        ref={ref}
        className={`resize-none appearance-none bg-transparent text-white w-10/12 focus:outline-none h-14 placeholder-white overflow-y-auto placeholder-shown:align-middle text-custom_24 leading-[24px] font-normal px-7 py-2 overflow-hidden ${style}`}
        placeholder={placeHolder}
        onChange={handleInputChange}
      />

      <button type="button" className="flex justify-center items-center pr-2">
        <ArrowUpCircleFill fill="white" className="text-custom_24 " />
      </button>
    </BoxStore>
  );
});
