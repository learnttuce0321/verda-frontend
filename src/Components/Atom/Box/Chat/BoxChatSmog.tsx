"use client"

interface Props {
  children: React.ReactNode,
  style?: string,
  clickHandler?: () => void
};

export default function BoxChatSmog({ children, clickHandler, style }: Props) {
  return (
    <div className="flex justify-start w-[100%]">
      <div className="
          bg-custom_smog
          relative 
          inline-block
          w-[250px]
          p-[10px]
          mt-[7px]
          ml-[15px]
          rounded-lg
          break-keep
          before:absolute
          before:block
          before:top-0
          before:left-[-12.5px]
          before:content-['◀']
          before:text-white
          before:border-0">
        {children}
      </div>
    </div>
  )
}