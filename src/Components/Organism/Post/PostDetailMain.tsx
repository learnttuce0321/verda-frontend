import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";

export default function PostDetailMain({ post }: any) {
  return (
    <section className="mt-2.5">
      <BoxStore boxStyle={BoxStyle.BOX_RECTANGLE_LONG_WHITE} style="p-4 mb-4">
        <TextStore textStyle={TextStyle.TEXT_R_24}>
          {post.title}
        </TextStore>
      </BoxStore>
      <BoxStore boxStyle={BoxStyle.BOX_RECTANGLE_WHITE} style="h-[calc(80vh_-_144px)]">
        <TextStore textStyle={TextStyle.TEXT_R_24}>
          {post.content}
        </TextStore>
      </BoxStore>
    </section>
  )
}