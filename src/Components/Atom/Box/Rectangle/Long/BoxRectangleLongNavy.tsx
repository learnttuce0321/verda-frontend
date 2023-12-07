"use client";

interface Props {
  children: React.ReactNode;
  style?: string;
  clickHandler?: () => void;
}

export default function BoxRectangeLongNavy({
  children,
  clickHandler,
  style,
}: Props) {
  return (
    <div
      className={`bg-custom_navy w-[24.75rem] rounded-[50px] flex justify-center ${style}`}
      onClick={clickHandler}
    >
      {children}
    </div>
  );
}
