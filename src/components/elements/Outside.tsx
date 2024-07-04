"use client";

import { FC, useEffect, useState } from "react";
import { Menu } from "./Menu";
import { browser } from "process";
import { useHash } from "@/hooks/useHash";

type OutsideProps = {
  children: any;
};

export const Outside: FC<OutsideProps> = ({ children }) => {
  const hash = useHash();

  return (
    <div className="h-full bg-black">
      <div
        className={`
          flex justify-end items-start gap-x-56 font-light 
          ${
            hash === "#skill"
              ? "bg-blend-difference text-black"
              : "bg-blend-screen text-white"
          } fixed top-4 right-4 z-10 w-full`}
      >
        <div className=" flex justify-around text-sm w-1/2 h-10 ">
          <div className="w-36 text-start ">
            My engineering skills are like this.
          </div>
          <div className="w-32 text-start">I’m an engineer born in Japan.</div>
        </div>
        <Menu />
        <div
          className={`absolute left-8 top-96 text-sm -rotate-90 ${
            hash === "#contact" || hash === "#skill"
              ? "text-black"
              : "text-white"
          }`}
        >
          jo.kazuki.com
        </div>
      </div>
      {children}
    </div>
  );
};
