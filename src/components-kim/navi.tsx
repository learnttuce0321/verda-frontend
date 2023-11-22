"use client";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import Link from "next/link";
import { List } from "react-bootstrap-icons";

interface NaviProps {
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
  click: boolean;
}

const Navi = ({ setClick, click }: NaviProps) => {
  const loadHambergerMenu = () => {
    if (click === true) {
      setClick(false);
    } else {
      setClick(true);
    }
  };
  return (
    <nav className="flex justify-between p-3 align-middle">
      <Link href={{ pathname: "/" }}>
        <TextStore textStyle={TextStyle.TEXT_E_32}>verda</TextStore>
      </Link>
      <button onClick={loadHambergerMenu}>
        <List width="2em" height="2em" />
      </button>
    </nav>
  );
};

export default Navi;
