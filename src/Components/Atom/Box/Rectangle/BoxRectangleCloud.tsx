"use client"

interface Props {
  children: React.ReactNode;
  style?: string;
  clickHandler?: () => void;
};

export default function BoxRectangeCloud({ children, clickHandler, style }: Props) {
  return (
    <div className={`bg-custom_cloud w-[11rem] rounded-lg p-3 ${style}`} onClick={clickHandler}>
      {children}
    </div>
  )
}