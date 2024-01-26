import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import { ChevronRight } from "react-bootstrap-icons";

// todos: 변경해야됨
interface Props {
  title: string;
  title1: string;
  style?: string;
}

export default function ButtonLinkButton({ title, title1, style }: Props) {
  return (
    <BoxStore
      boxStyle={BoxStyle.BOX_RECTANGLE_LONG_NAVY}
      style={`flex my-2 justify-between w-1/4 ${style}`}
    >
      <TextStore textStyle={TextStyle.TEXT_R_11}>
        {title}
        <br />
        {title1}
      </TextStore>
    </BoxStore>
  );
}
