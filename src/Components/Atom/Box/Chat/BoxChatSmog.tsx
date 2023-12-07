interface Props {
  children: React.ReactNode;
  style?: string;
};

export default function BoxChatSmog({ children, style }: Props) {
  return (
    <div className="flex justify-start w-[100%]">
      <div className={`
          bg-custom_smog
          relative 
          inline-block
          w-[250px]
          p-[10px]
          ml-[15px]
          rounded-lg
          break-keep
          my-4
          before:absolute
          before:block
          before:top-0
          before:left-[-12.5px]
          before:content-['◀']
          before:text-custom_smog
          before:border-0
          ${style}`}>
        {children}
      </div>
    </div>
  )
}