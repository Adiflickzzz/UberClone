import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface MainCardProps {
  link?: string;
  title: string;
  text: string;
  src: String;
  isInverted?: boolean;
}

export const MainCards = ({
  link,
  title,
  text,
  src,
  isInverted,
}: MainCardProps) => {
  return (
    <div className="lg:flex items-center gap-20 ">
      <img
        //@ts-ignore
        src={src}
        alt="image"
        className={cn(
          "mr-10 w-full lg:w-[558px]",
          isInverted && "lg:pl-10 order-2"
        )}
      />
      <div className="flex flex-col mt-10 gap-4 lg:gap-8">
        <h1
          className={cn(
            "text-3xl lg:text-5xl lg:leading-[64px] font-semibold",
            isInverted && " text-gray-800/95"
          )}
        >
          {title}
        </h1>
        <p className="leading-relaxed">{text}</p>
        <div className="flex items-center">
          <Button className="bg-black text-white ">Get Started</Button>
          <Button
            variant="link"
            className="text-xs lg:text-base text-left text-wrap"
          >
            {link}
          </Button>
        </div>
      </div>
    </div>
  );
};
