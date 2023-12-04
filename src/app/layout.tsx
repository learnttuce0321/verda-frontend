import type { Metadata } from "next";
import "./globals.css";
import RecoilProvider from "@/utils/provider/RecoilProvider";
import ReactQueryProvider from "@/utils/provider/ReactQueryProvider";
import Navigation from "@/Components/Organism/Navigation/Navigation";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen w-screen overflow-x-hidden relative">

        <ReactQueryProvider>
          <RecoilProvider>
            <Navigation />

            <div className="w-screen top-[72px]">
              {children}
            </div>
          </RecoilProvider>
        </ReactQueryProvider>
        <div className="hidden bg-custom_ice bg-custom_skyBlue bg-custom_lightBlue bg-custom_blue bg-custom_navy bg-custom_yellow bg-custom_peach bg-custom_orange bg-custom_lightGrey bg-custom_cloud bg-custom_skyGrey bg-custom_smog bg-custom_mint " />
      </body>
    </html>
  );
}
