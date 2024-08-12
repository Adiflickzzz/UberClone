import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronDown, Globe, Menu } from "lucide-react";

export const NavBar = () => {
  const buttons = ["Ride", "Drive", "Bussiness"];
  return (
    <div className="bg-black">
      <div className="max-w-[1280px] h-16 text-white flex mx-auto px-6 justify-between">
        <div className="flex items-center gap-5">
          <button className="text-lg xl:text-2xl">Uber</button>
          <div className="xl:flex items-center hidden">
            {buttons.map((buttons) => (
              <Button
                key={buttons}
                size="sm"
                variant="ghost"
                className="rounded-full"
              >
                {buttons}
              </Button>
            ))}
            <Button variant="ghost" className="rounded-full">
              About <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-x-1">
            <Button
              size="sm"
              variant="ghost"
              className="rounded-full gap-2 ml-2"
            >
              <Globe className="w-4 h-4 -rotate-45" /> EN
            </Button>

            <Button size="sm" variant="ghost" className="rounded-full">
              Help
            </Button>
          </div>

          <div className="flex">
            <Button
              size="sm"
              variant="secondary"
              className="relative rounded-full xl:px-2 text-nowrap overflow-hidden"
            >
              S.Adithya
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
            <Button size="sm" className="bg-transparent hover:bg-transparent">
              <Menu className="h-6 w-6 ml-2 block xl:hidden" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
