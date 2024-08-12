import { cn } from "@/lib/utils";
import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  classname?: string;
}

const Wrapper = ({ children, classname }: WrapperProps) => {
  return (
    <div className={cn("max-w-[1280px] p-6 lg:p-20 mx-auto", classname)}>
      {children}
    </div>
  );
};

export default Wrapper;
