"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";
import { FormDailog } from "./form-dialog";
import { useEffect, useState } from "react";

export const Form = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="w-[380px] p-4 border-gray-200 border-2 rounded-lg">
      <h1 className="font-semibold text-xl tracking-tight">Get a ride</h1>

      <div className="mt-4 flex flex-col gap-y-3">
        <Input className="bg-gray-200 h-12" placeholder="Pickup Location" />
        <Input className="bg-gray-200 h-12" placeholder="Dropoff Location" />
        <button className="bg-gray-200 h-12 hover:bg-gray-300 text-black w-full rounded-md text-sm px-4 font-medium">
          <div className="flex items-center justify-between">
            Pickup now <ChevronDown className="size-4" />
          </div>
        </button>
        <div>
          <FormDailog />
        </div>
        <Button className="bg-gray-200 text-gray-400 cursor-not-allowed hover:bg-gray-200 h-12 mt-2">
          Search
        </Button>
      </div>
    </div>
  );
};
