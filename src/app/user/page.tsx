import Section from "@/Components/_LayoutComponent/Section";

import UserName from "@/Components/Organism/User/UserName";
import InvestmentTypeUpdate from "@/Components/Organism/User/InvestmentTypeUpdate";
import PageLinkMenuSection from "@/Components/Organism/User/PageLinkMenuSection";

export default function UserMainPage() {
  return (
    <>
      <UserName />
      <Section>
        {/* <div className="bg-white "> */}
        <InvestmentTypeUpdate />
        {/* </div> */}
      </Section>

      <Section>
        <PageLinkMenuSection />
      </Section>
    </>
  );
}
