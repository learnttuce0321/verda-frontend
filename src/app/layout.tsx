import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Github } from "react-bootstrap-icons";
import Link from "next/link";
import "./globals.css";
import Navigation from "@/Components/Organism/Navigation/Navigation";
import RecoilProvider from "@/utils/provider/RecoilProvider";
import ReactQueryProvider from "@/utils/provider/ReactQueryProvider";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";

export const metadata: Metadata = {
  title: "Verda",
  description: "Matching User and Fundmanager",
  icons: {
    icon: "/mainLogo.ico"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen w-screen overflow-x-hidden relative" id="pc-screen">
        <ReactQueryProvider>
          <RecoilProvider>
            <div className="flex justify-center min-h-full gap-[8rem]">
              <div className="hidden xl:flex flex-col justify-between py-8">
                <section>
                  <Image
                    src="/verda_logo-removebg-preview.png"
                    width={100}
                    height={70}
                    alt="verda_logo"
                    priority />
                </section>
                <section>
                  <div>
                    <TextStore textStyle={TextStyle.TEXT_R_40}>
                      투자가 어려울 때,
                    </TextStore>
                    <TextStore textStyle={TextStyle.TEXT_R_40} style="mt-4">
                      <span className="text-white bg-custom_navy leading-[40px]">
                        VERDA
                      </span>
                      에서 물어봐
                    </TextStore>
                  </div>
                  <div className="mt-[47px]">
                    <TextStore textStyle={TextStyle.TEXT_R_24}>
                      투자에 대한 견해를 올리고
                    </TextStore>
                    <TextStore textStyle={TextStyle.TEXT_R_24}>
                      금융 전문가들에게 피드백을
                    </TextStore>
                    <TextStore textStyle={TextStyle.TEXT_R_24}>
                      받아보세요!
                    </TextStore>
                  </div>
                </section>
                <section className="flex gap-[5px]">
                  <Link href="https://github.com/kdt8-Team5-verda-project">
                    <Github className="w-[50px] h-[50px]" />
                    Github
                  </Link>
                  <Link href="https://kimmr.notion.site/verda-9362c1a22c00470da7a544b8f068bea1?pvs=4">
                    <Image
                      src="/icons8-notion-150-removebg-preview.png"
                      width={50}
                      height={50}
                      alt="" />
                    Notion
                  </Link>
                </section>
              </div>

              <div className="h-screen overflow-y-scroll overflow-x-hidden">
                <div className="h-screen">
                  <div className="w-[432px] min-h-screen border-[1px] relative bg-white">
                    <Navigation />

                    <div className="w-full top-[72px] h-full">
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RecoilProvider>
        </ReactQueryProvider>
        <div className="hidden bg-custom_ice bg-custom_skyBlue bg-custom_lightBlue bg-custom_blue bg-custom_navy bg-custom_yellow bg-custom_peach bg-custom_orange bg-custom_lightGrey bg-custom_cloud bg-custom_skyGrey bg-custom_smog bg-custom_mint " />
      </body>
    </html>
  );
}
