import { forwardRef } from "react";
import type { LegacyRef } from "react";

interface Props {
  rows: number;
  placeHolder: string;
  style?: string;
}

export default forwardRef(function InputContent({ rows, placeHolder, style }: Props, ref: LegacyRef<HTMLTextAreaElement> | undefined) {
  return (
    <textarea ref={ref} rows={rows} className={`p-5 rounded-[15px] ${style}`} placeholder={placeHolder} />
  )
})