import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import { ArrowUpCircleFill } from "react-bootstrap-icons";

export default function InputMessage() {
  return (
    <BoxStore
      boxStyle={BoxStyle.BOX_RECTANGLE_LONG_NAVY}
      style="flex my-2 justify-between w-full"
    >
      <textarea
        className="appearance-none bg-transparent text-white w-10/12 focus:outline-none text-custom_24 leading-[24px] font-normal pl-3"
        placeholder="텍스트를 입력하세요"
      />

      <button className="flex justify-center items-center pr-2">
        <ArrowUpCircleFill fill="white" className="text-custom_24 " />
      </button>
    </BoxStore>
  );
}
