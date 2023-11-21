"use client"

interface Props {
  children: React.ReactNode,
  style?: string,
  clickHandler?: () => void
};

export default function BoxChatOrange({ children, clickHandler, style }: Props) {
  return (
    <div className="flex justify-end w-[100%]">
      <div className="
          bg-custom_orange
          relative
          inline-block
          w-[250px]
          p-[10px]
          mt-[7px]
          mr-[15px]
          rounded-lg
          break-keep
          before:absolute
          before:right-[-12.5px]
          before:block
          before:top-0
          before:content-['▶']
          before:text-custom_orange
          before:border-0">
        {children}
      </div>
    </div>
  )
}