"use client";
import Link from "next/link";

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
    <div>
      <nav className="text-white">
        <Link href={{ pathname: "/" }}>verda</Link>
        <button onClick={loadHambergerMenu}>햄버거</button>
      </nav>
    </div>
  );
};

export default Navi;
