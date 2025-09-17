// Replace your Services component with this:
import React from "react";
import { Skiper17 } from "@/components/ui/ServiceCards";

const Services = () => {
  return (
    <div className="w-full md:!h-[315vh] !h-[340vh] c-space">
      <h1 className="heading my-12">
        Web Design and Development {" "}
        <span className="dark:text-purple text-violet-700">
          Services
        </span>
      </h1>
      <Skiper17 />
    </div>
  );
};

export default Services;
