import { ChevronRight } from "react-bootstrap-icons";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";

interface Props {
  chat: any
}

export default function ButtonListInfo({ chat }: Props) {
  return (
    <BoxStore boxStyle={BoxStyle.BOX_CORNER_LONG} style="flex my-2 justify-between">
      <div>
        <TextStore textStyle={TextStyle.TEXT_M_24}>{chat.targetName}</TextStore>
        <TextStore textStyle={TextStyle.TEXT_R_20}>{chat.content.length > 15 ? `${chat.content.slice(0, 15)}...` : chat.content}</TextStore>
      </div>

      <div className="flex justify-center items-center">
        <ChevronRight className="text-custom_24" />
      </div>
    </BoxStore>
  )
}