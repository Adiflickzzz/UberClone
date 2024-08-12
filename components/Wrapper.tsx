import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-[1280px] p-6  lg:p-20 mx-auto">{children}</div>;
};

export default Wrapper;
