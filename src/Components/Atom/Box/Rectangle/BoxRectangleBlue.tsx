"use client"

interface Props {
  children: React.ReactNode;
  style?: string;
  clickHandler?: () => void;
};

export default function BoxRectangeBlue({ children, clickHandler, style }: Props) {
  return (
    <div className={`bg-custom_blue w-[18.3rem] rounded-lg p-3 ${style}`} onClick={clickHandler}>
      {children}
    </div>
  )
}