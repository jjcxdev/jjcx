import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center text-center" id="home">
      <div className="relative h-[50px] w-full lg:h-[100px]">
        <div className="absolute inset-0 flex items-end  justify-center">
          <TypeAnimation
            sequence={[
              "problem solver",
              500,
              "critical thinker",
              500,
              "musician",
              500,
              "creator",
              500,
              "liverpool supporter",
              500,
            ]}
            cursor={false}
            speed={70}
            repeat={Infinity}
            className="font-poppins text-clamp-lg flex justify-center font-bold uppercase text-zinc-500"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <div></div>
        <div className="flex w-full text-clamp-xs items-baseline justify-end gap-2 text-right text-slate-500">
          ...and
          <h1 className="font-poppins text-clamp-xl font-bold uppercase text-white">
            Frontend Developer
          </h1>
        </div>
        <div></div>
      </div>
    </div>
  );
}
