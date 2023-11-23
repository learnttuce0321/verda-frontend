import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import { ChevronRight } from "react-bootstrap-icons";

// todos: 변경해야됨
interface Props {
  children: React.ReactNode
}

export default function ButtonListTitle({ children }: Props) {
  return (
    <BoxStore boxStyle={BoxStyle.BOX_CORNER_LONG} style="flex my-2 justify-between h-[76px]">
      <TextStore textStyle={TextStyle.TEXT_R_24} style="flex justify-center items-center">{children}</TextStore>

      <div className="flex justify-center items-center">
        <ChevronRight className="text-custom_24" />
      </div>
    </BoxStore>
  )
}
