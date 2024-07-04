"use client";

import { FC } from "react";
import { Menu } from "./Menu";

type OutsideProps = {
  children: any;
  blend?: "difference" | "screen";
};

export const Outside: FC<OutsideProps> = ({
  children,
  blend = "difference",
}) => {
  return (
    <div className="h-full bg-black">
      <div
        className={`
          flex justify-end items-start gap-x-56 font-light 
          ${blend === "difference" ? "mix-blend-difference" : ""}
          ${blend === "screen" ? "mix-blend-screen" : ""} 
          text-white fixed top-4 right-4 z-10 w-full`}
      >
        <div className=" flex justify-around text-sm w-1/2 h-10 ">
          <div className="w-36 text-start ">
            My engineering skills are like this.
          </div>
          <div className="w-32 text-start">I’m an engineer born in Japan.</div>
        </div>
        <Menu />
        <div className="absolute left-8 top-96 text-sm -rotate-90  ">
          jo.kazuki.com
        </div>
      </div>
      {children}
    </div>
  );
};
