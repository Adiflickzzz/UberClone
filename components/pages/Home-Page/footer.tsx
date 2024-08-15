import { FooterComponents } from "@/components/FooterComponents";
import { FooterLine } from "@/components/FooterLine";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bg-black text-white">
      <Wrapper classname=" lg:pb-6">
        <div>
          <h1 className="text-2xl">Uber</h1>
          <h2 className="text-base underline-offset-[16px] hover:underline mt-10 cursor-pointer ">
            Visit Help Center
          </h2>
        </div>
        <div className="mt-12 lg:mt-24 grid gap-16 md:grid-flow-col lg:gap-48">
          <FooterComponents
            title="Company"
            links={[
              "About us",
              "Our offerings",
              "Newsroom",
              "Investors",
              "Blog",
              "Careers",
              "Autonomous",
              "Uber AI",
              "Gift cards",
            ]}
          />
          <FooterComponents
            title="Products"
            links={[
              "Ride",
              "Drive",
              "Deliver",
              "Eat",
              "Uber for Business",
              "Uber Freight",
            ]}
          />
          <FooterComponents
            title="Global citizenship"
            links={["Safety", "Diversity and Inclusion", "Sustainability"]}
          />
          <FooterComponents
            title="Travel"
            links={["Reserve", "Airports", "Cities"]}
          />
        </div>
        <div className="my-16 ">
          <FooterLine />
        </div>
        <div className="flex items-center  gap-2">
          <Image
            src="/Playstore.svg"
            width={128}
            height={38}
            alt="PlayStore"
            className="cursor-pointer"
          />
          <Image
            src="/Applestore.svg"
            width={128}
            height={36}
            alt="PlayStore"
            className="cursor-pointer"
          />
        </div>
        <div className="py-9">
          <p className="text-xs text-white/50">
            © 2023 Uber. All rights reserved. Uber is a registered trademark of
            Lyft Inc.
          </p>
        </div>
      </Wrapper>
    </div>
  );
};
