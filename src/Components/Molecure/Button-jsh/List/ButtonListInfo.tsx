import { ChevronRight } from "react-bootstrap-icons";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";

// todos: 변경해야됨
interface Props {
  chat: any
}

export default function ButtonListInfo({ chat }: Props) {
  return (
    <BoxStore boxStyle={BoxStyle.BOX_CORNER_LONG} style="flex my-2 justify-between">
      <div>
        <TextStore textStyle={TextStyle.TEXT_M_24}>{chat.fundManagerName}</TextStore>
        <TextStore textStyle={TextStyle.TEXT_R_20}>{chat.firstMessage.length > 15 ? `${chat.firstMessage.slice(0, 15)}...` : chat.firstMessage}</TextStore>
      </div>

      <div className="flex justify-center items-center">
        <ChevronRight className="text-custom_24" />
      </div>
    </BoxStore>
  )
}