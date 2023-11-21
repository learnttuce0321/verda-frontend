"use client"

import BoxMint from "./BoxMint";
import BoxNavy from "./BoxNavy";
import BoxOrange from "./BoxOrange";

export enum BoxStyle {
  ORANGE = "ORANGE",
  NAVY = "NAVY",
  MINT = "MINT",
};

enum TextStyle {
  TEXT_R_40 = "TEXT_R_40",
}

interface Props {
  boxStyle: BoxStyle,
  children: React.ReactNode,
  clickHandler?: () => void
};

export default function BoxStore({ boxStyle, children, clickHandler }: Props) {
  const SelectBox = () => {
    switch (boxStyle) {

      case "ORANGE":
        return <BoxOrange clickHandler={clickHandler}>{children}</BoxOrange>

      case "NAVY":
        return <BoxNavy clickHandler={clickHandler}>{children}</BoxNavy>

      case "MINT":
        return <BoxMint clickHandler={clickHandler}>{children}</BoxMint>
    }
  }

  return (
    <>
      {SelectBox()}
    </>
  )
}