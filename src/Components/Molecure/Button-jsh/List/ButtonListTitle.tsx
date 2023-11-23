import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import { ChevronRight } from "react-bootstrap-icons";

// todos: 변경해야됨
interface Props {
  title: string
}

export default function ButtonListInfo({ title }: Props) {
  return (
    <BoxStore boxStyle={BoxStyle.BOX_CORNER_LONG} style="flex my-2 justify-between">
      <TextStore textStyle={TextStyle.TEXT_R_40}>{title}</TextStore>

      <div className="flex justify-center items-center">
        <ChevronRight className="text-custom_24" />
      </div>
    </BoxStore>
  )
}
