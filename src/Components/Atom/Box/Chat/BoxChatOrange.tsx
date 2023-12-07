interface Props {
  children: React.ReactNode;
  style?: string;
};

export default function BoxChatOrange({ children, style }: Props) {
  return (
    <div className="flex justify-end w-[100%]">
      <div className={`
          bg-custom_orange
          relative
          inline-block
          w-[250px]
          p-[10px]
          mr-[15px]
          rounded-lg
          break-keep
          my-4
          before:absolute
          before:right-[-12.5px]
          before:block
          before:top-0
          before:content-['▶']
          before:text-custom_orange
          before:border-0
          ${style}`}>
        {children}
      </div>
    </div>
  )
}