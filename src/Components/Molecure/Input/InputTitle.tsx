import { forwardRef } from "react";
import type { LegacyRef } from "react";

interface Props {
  style?: string
}

export default forwardRef(function InputTitle({ style }: Props, ref: (LegacyRef<HTMLInputElement> | undefined)) {
  return (
    <input type="text" ref={ref} placeholder="제목" className={`px-[20px] p-4 mb-4 rounded-[50px] ${style}`} />
  )
})