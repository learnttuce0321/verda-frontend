import BoxChatOrange from "./Chat/BoxChatOrange";
import BoxChatSmog from "./Chat/BoxChatSmog";
import BoxCornerLarge from "./Corner/BoxCornerLarge";
import BoxCornerLong from "./Corner/BoxCornerLong";
import BoxCornerRegular from "./Corner/BoxCornerRegular";
import BoxRectangeBlue from "./Rectangle/BoxRectangleBlue";
import BoxRectangeCloud from "./Rectangle/BoxRectangleCloud";
import BoxRectangeLightblue from "./Rectangle/BoxRectangleLightblue";
import BoxRectangeNavy from "./Rectangle/BoxRectangleNavy";
import BoxRectangeSkygrey from "./Rectangle/BoxRectangleSkygrey";
import BoxRectangeWhite from "./Rectangle/BoxRectangleWhite";
import BoxRectangeLongNavy from "./Rectangle/Long/BoxRectangleLongNavy";
import BoxRectangeLongOrange from "./Rectangle/Long/BoxRectangleLongOrange";
import BoxRectangleLongWhite from "./Rectangle/Long/BoxRectangleLongWhite";
import BoxSquareMint from "./Square/BoxSquareMint";
import BoxSquareNavy from "./Square/BoxSquareNavy";
import BoxSquareOrange from "./Square/BoxSquareOrange";
import BoxSquareYellow from "./Square/BoxSquareYellow";
import BoxSquareWhite from "./Square/BoxSqureWhite";

export enum BoxStyle {
  BOX_SQUARE_NAVY = "BOX_SQUARE_NAVY",
  BOX_SQUARE_ORANGE = "BOX_SQUARE_ORANGE",
  BOX_SQUARE_MINT = "BOX_SQUARE_MINT",
  BOX_SQUARE_WHITE = "BOX_SQUARE_WHITE",
  BOX_SQUARE_YELLOW = "BOX_SQUARE_YELLOW",
  BOX_SQUARE_GRADIENT = "BOX_SQUARE_GRADIENT",
  BOX_RECTANGLE_CLOUD = "BOX_RECTANGLE_CLOUD",
  BOX_RECTANGLE_SKYGREY = "BOX_RECTANGLE_SKYGREY",
  BOX_RECTANGLE_WHITE = "BOX_RECTANGLE_WHITE",
  BOX_RECTANGLE_BLUE = "BOX_RECTANGLE_BLUE",
  BOX_RECTANGLE_LIGHTBLUE = "BOX_RECTANGLE_LIGHTBLUE",
  BOX_RECTANGLE_NAVY = "BOX_RECTANGLE_NAVY",
  BOX_RECTANGLE_LONG_NAVY = "BOX_RECTANGLE_LONG_NAVY",
  BOX_RECTANGLE_LONG_ORANGE = "BOX_RECTANGLE_LONG_ORANGE",
  BOX_RECTANGLE_LONG_WHITE = "BOX_RECTANGLE_LONG_WHITE",
  BOX_CORNER_REGULAR = "BOX_CORNER_REGULAR",
  BOX_CORNER_LARGE = "BOX_CORNER_LARGE",
  BOX_CORNER_LONG = "BOX_CORNER_LONG",
  BOX_CHAT_ORANGE = "BOX_CHAT_ORANGE",
  BOX_CHAT_SMOG = "BOX_CHAT_SMOG",
}

interface Props {
  boxStyle: BoxStyle;
  children: React.ReactNode;
  style?: string;
  clickHandler?: () => void;
}

export default function BoxStore({
  boxStyle,
  children,
  style,
  clickHandler,
}: Props) {
  const SelectBox = () => {
    switch (boxStyle) {
      case "BOX_SQUARE_NAVY":
        return (
          <BoxSquareNavy clickHandler={clickHandler} style={style}>
            {children}
          </BoxSquareNavy>
        );
      case "BOX_SQUARE_ORANGE":
        return (
          <BoxSquareOrange clickHandler={clickHandler} style={style}>
            {children}
          </BoxSquareOrange>
        );
      case "BOX_SQUARE_MINT":
        return (
          <BoxSquareMint clickHandler={clickHandler} style={style}>
            {children}
          </BoxSquareMint>
        );
      case "BOX_SQUARE_YELLOW":
        return (
          <BoxSquareYellow clickHandler={clickHandler} style={style}>
            {children}
          </BoxSquareYellow>
        );
      case "BOX_SQUARE_WHITE":
        return (
          <BoxSquareWhite clickHandler={clickHandler} style={style}>
            {children}
          </BoxSquareWhite>
        );
      case "BOX_SQUARE_GRADIENT":
        return;
      case "BOX_RECTANGLE_CLOUD":
        return (
          <BoxRectangeCloud clickHandler={clickHandler} style={style}>
            {children}
          </BoxRectangeCloud>
        );
      case "BOX_RECTANGLE_SKYGREY":
        return (
          <BoxRectangeSkygrey clickHandler={clickHandler} style={style}>
            {children}
          </BoxRectangeSkygrey>
        );
      case "BOX_RECTANGLE_WHITE":
        return (
          <BoxRectangeWhite clickHandler={clickHandler} style={style}>
            {children}
          </BoxRectangeWhite>
        );
      case "BOX_RECTANGLE_BLUE":
        return (
          <BoxRectangeBlue clickHandler={clickHandler} style={style}>
            {children}
          </BoxRectangeBlue>
        );
      case "BOX_RECTANGLE_LIGHTBLUE":
        return (
          <BoxRectangeLightblue clickHandler={clickHandler} style={style}>
            {children}
          </BoxRectangeLightblue>
        );
      case "BOX_RECTANGLE_NAVY":
        return (
          <BoxRectangeNavy clickHandler={clickHandler} style={style}>
            {children}
          </BoxRectangeNavy>
        );
      case "BOX_RECTANGLE_LONG_NAVY":
        return (
          <BoxRectangeLongNavy clickHandler={clickHandler} style={style}>
            {children}
          </BoxRectangeLongNavy>
        );
      case "BOX_RECTANGLE_LONG_ORANGE":
        return (
          <BoxRectangeLongOrange clickHandler={clickHandler} style={style}>
            {children}
          </BoxRectangeLongOrange>
        );
      case "BOX_RECTANGLE_LONG_WHITE":
        return (
          <BoxRectangleLongWhite clickHandler={clickHandler} style={style}>
            {children}
          </BoxRectangleLongWhite>
        );
      case "BOX_CORNER_REGULAR":
        return (
          <BoxCornerRegular clickHandler={clickHandler} style={style}>
            {children}
          </BoxCornerRegular>
        );
      case "BOX_CORNER_LARGE":
        return (
          <BoxCornerLarge clickHandler={clickHandler} style={style}>
            {children}
          </BoxCornerLarge>
        );
      case "BOX_CORNER_LONG":
        return (
          <BoxCornerLong clickHandler={clickHandler} style={style}>
            {children}
          </BoxCornerLong>
        );
      case "BOX_CHAT_ORANGE":
        return <BoxChatOrange style={style}>{children}</BoxChatOrange>
      case "BOX_CHAT_SMOG":
        return <BoxChatSmog style={style}>{children}</BoxChatSmog>
    }
  };

  return <>{SelectBox()}</>;
}
