// import ClientRequest from "@/Components/Organism/Client-request/ClientRequest";

// export default async function ClientRequestData() {
//   return <ClientRequest />;
// }
//--------------------son----------------------
import Section from "@/Components-kim/Section";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import ClientRequerstList from "@/Component-son/ClientRequestList";

export default function ClientRequest() {
  return (
    <>
      <Section>
        <TextStore
          textStyle={TextStyle.TEXT_R_40_BLUE}
          style="!text-white mb-[2.5rem]"
        >
          투자 문의
        </TextStore>
      </Section>
      <ClientRequerstList />
    </>
  );
}
