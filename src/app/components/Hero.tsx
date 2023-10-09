import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center text-center" id="home">
      <div className="flex justify-between">
        <div></div>
        <div className="flex flex-col w-full text-clamp-xs items-center text-center">
          <h1 className="font-poppins text-center text-clamp-xl font-bold uppercase text-white">
            Justin<span className="font-light ml-1">Chambers</span>
          </h1>
          <h2 className="font-poppins text-center text-clamp-sm font-light uppercase text-white">
            Frontend Developer
          </h2>
        </div>
        <div></div>
      </div>
    </div>
  );
}
