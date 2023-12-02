import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import { ChangeEvent, forwardRef, useState } from "react";
import { ArrowUpCircleFill } from "react-bootstrap-icons";
import type { Dispatch, LegacyRef, SetStateAction } from "react";

interface Props {
  textareaHeight: string;
  setTextareaHeight: Dispatch<SetStateAction<string>>;
  submitHandler: () => void;
};

export default forwardRef(function InputMessage({ textareaHeight, setTextareaHeight, submitHandler }: Props, ref: LegacyRef<HTMLTextAreaElement> | undefined) {
  const changeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const { target } = e
    const rowCount = target.value.split(/\r\n|\r|\n/).length;
    const minHeight = "56";

    if (rowCount >= 0 && rowCount <= 3) {
      setTextareaHeight(`${minHeight}px`)
    } else {
      const newHeight = Math.min(100, rowCount * 18 + 2);
      setTextareaHeight(`${newHeight}px`);
    }
  };

  return (
    <BoxStore
      boxStyle={BoxStyle.BOX_RECTANGLE_LONG_NAVY}
      style="flex my-2 justify-between w-full"
    >
      <textarea
        ref={ref}
        className="resize-none appearance-none bg-transparent text-white w-11/12 focus:outline-none h-14 placeholder-white overflow-y-auto placeholder-shown:align-middle text-custom_24 leading-[24px] font-normal pl-8 pr-2 pb-2 pt-[0.9rem] overflow-hidden"
        placeholder="메세지를 입력하세요"
        onChange={changeInputHandler}
        style={{ height: `${textareaHeight}` }}
      />

      <button type="button" className="flex justify-center items-center pr-2" onClick={submitHandler}>
        <ArrowUpCircleFill fill="white" className="text-custom_24 " />
      </button>
    </BoxStore>
  )
})  