import { List } from "react-bootstrap-icons";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex justify-center mt-10 bg-transparent absolute z-10">
      <div className="flex justify-between px-4 w-screen bg-transparent">
        <TextStore textStyle={TextStyle.TEXT_R_32} style="">
          <Link href={{ pathname: "/" }}>VERDA</Link>
        </TextStore>
        <button type="button" className="flex">
          <List width="2em" height="2em" />
        </button>
      </div>
    </div>
  )
}