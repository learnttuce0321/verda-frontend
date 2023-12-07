import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import { ChevronRight } from "react-bootstrap-icons";

// todos: 변경해야됨
interface Props {
  style?: string;
  type: string;
  placeholder: string;
  id: string;
  name: string;
}

export default function InputForm({
  style,
  type,
  placeholder,
  id,
  name,
}: Props) {
  return (
    <input
      className={`w-[24.75rem] rounded-3xl p-3 border-2 border-solid border-blue-900 ${style}`}
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
    />
  );
}
