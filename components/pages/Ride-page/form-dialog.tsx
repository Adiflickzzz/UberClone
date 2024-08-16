import { FaUser, FaUserPlus } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserButton } from "@clerk/nextjs";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
export const FormDailog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="bg-gray-200 hover:bg-gray-300 text-black w-28 rounded-full text-sm py-2 px-2 font-medium text-nowrap">
          <div className="flex items-center justify-evenly">
            <FaUser className="size-3 mr-1" /> For me{" "}
            <ChevronDown className="size-4" />
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader className="font-medium text-lg px-6 ">
          Switch rider
        </DialogHeader>
        <DialogDescription>
          <button className="h-[72px] hover:bg-gray-300 text-black w-full text-sm px-6 font-medium rounded-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8 text-lg font-normal">
                <UserButton />
                Me
              </div>
              <FaCircleDot className="size-4" />
            </div>
          </button>
          <button className=" h-[72px] hover:bg-gray-300 text-black w-full text-sm px-6 font-medium rounded-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8 text-lg font-normal tracking-tighter">
                <FaUserPlus className="ml-2" />
                Order ride for someone else
              </div>
              <FaCircleDot className="size-4 hidden" />
            </div>
          </button>
          <Button className="w-full h-14 bg-black hover:bg-black/95 text-base mt-3">
            Done
          </Button>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
