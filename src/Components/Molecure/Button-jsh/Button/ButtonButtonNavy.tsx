import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";

interface Props {
  children: React.ReactNode
}
export default function ButtonButtonNavy({ children }: Props) {
  return (
    <BoxStore boxStyle={BoxStyle.BOX_RECTANGLE_LONG_NAVY}>
      <TextStore textStyle={TextStyle.TEXT_E_32} style="text-white m-auto">{children}</TextStore>
    </BoxStore>
  )
}