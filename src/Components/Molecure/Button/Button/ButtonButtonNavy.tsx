import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";

interface Props {
  children: React.ReactNode;
  style?: string;
  clickHandler?: () => void;
}
export default function ButtonButtonNavy({ children, style, clickHandler }: Props) {
  return (
    <BoxStore boxStyle={BoxStyle.BOX_RECTANGLE_LONG_NAVY} clickHandler={clickHandler} style={`${style}`}>
      <TextStore textStyle={TextStyle.TEXT_R_32} style="text-white m-auto">{children}</TextStore>
    </BoxStore>
  )
}