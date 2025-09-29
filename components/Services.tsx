import React from "react";
import { Skiper17 } from "@/components/ui/AnimatedServiceCards";
import { MobileSkiper17 } from "./ServiceCards";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full c-space my-20 md:my-28"
    >
      <div className="text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-12 text-white">
          WEB DESIGN AND
          <span className="text-indigo-400"> DEVELOPMENT</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-200 tracking-wide">
          Introducing The Best Web Design For Ambitious Businesses Like Yours
        </h2>
        <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-loose font-light">
          Speaking to your ideal client through strategic design, compelling
          copy, clean and seamless user-experience, creating digital experiences
          that just work - because they perform.
        </p>
      </div>
       <div className="md:block hidden 2xl:hidden">
         <Skiper17 />
       </div>
       <div className="block md:hidden 2xl:block">
          <MobileSkiper17 />
        </div>
    </div>
  );
};

export default Services;
