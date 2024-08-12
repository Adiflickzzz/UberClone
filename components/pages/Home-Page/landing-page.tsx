import Image from "next/image";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

export const LandingPage = () => {
  return (
    <div className=" text-white flex items-center justify-between gap-10 ">
      <div>
        <h1 className="lg:leading-[64px] leading-relaxed mb-4 lg:mb-0 font-semibold text-3xl lg:text-[52px]">
          Go anywhere with Uber
        </h1>
        <div className="flex flex-col pt-4 lg:pt-10 lg:w-[348px] gap-y-3 ">
          <p className="mb-2">Request a ride, hop in, and go.</p>
          <Input placeholder="Enter location" className=" py-6 text-black" />
          <Input placeholder="Enter Destination" className="py-6 text-black" />
          <Button className="w-32 my-5   text-md" variant="secondary">
            See prices
          </Button>
        </div>
      </div>
      <div>
        <Image
          className="hidden lg:block"
          src="/landingpage.webp"
          alt="image"
          width={560}
          height={560}
        />
      </div>
    </div>
  );
};
