"use client";

import Link from "next/link";
import { List } from "react-bootstrap-icons";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";

interface NaviProps {
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
  click: boolean;
}

export default function Navi({ setClick, click }: NaviProps) {
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
      <button type="button" onClick={loadHambergerMenu}>
        <List width="2em" height="2em" />
      </button>
    </nav>
  );
};
