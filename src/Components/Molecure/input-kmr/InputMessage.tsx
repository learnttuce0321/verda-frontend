import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import { useState, forwardRef, useEffect } from "react";
import type { ChangeEvent, LegacyRef } from "react";
import { ArrowUpCircleFill } from "react-bootstrap-icons";

interface Props {
  placeHolder: string;
  style?: string;
}

export default forwardRef(function InputContent(
  { placeHolder, style }: Props,
  ref: LegacyRef<HTMLTextAreaElement> | undefined,
) {
  const [textareaHeight, setTextareaHeight] = useState<number>(30);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const targetTextarea = event.target;
    const rowCount = targetTextarea.value.split(/\r\n|\r|\n/).length;
    const minHeight = 100;

    const newHeight = Math.max(minHeight, rowCount * 18);
    setTextareaHeight(newHeight + 2);

    targetTextarea.style.height = `${newHeight}px`;
  };

  useEffect(() => {
    const targetTextarea = document.querySelector("textarea");

    if (targetTextarea) {
      targetTextarea.style.height = `${textareaHeight}px`;
    }
  }, [ref, textareaHeight]);

  return (
    <BoxStore
      boxStyle={BoxStyle.BOX_RECTANGLE_LONG_NAVY}
      style="flex my-2 justify-between w-full"
    >
      <textarea
        ref={ref}
        className={`appearance-none bg-transparent text-white w-10/12 focus:outline-none text-custom_24 leading-[24px] font-normal pl-3 overflow-hidden ${style}`}
        placeholder={placeHolder}
        onChange={handleInputChange}
      />

      <button className="flex justify-center items-center pr-2">
        <ArrowUpCircleFill fill="white" className="text-custom_24 " />
      </button>
    </BoxStore>
  );
});
