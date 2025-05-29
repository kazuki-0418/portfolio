"use client";

import { FC, Suspense } from "react";
import { useHash } from "@/hooks/useHash";
import { NavigationMenu } from "./Menu";

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
          } fixed top-4 right-4 w-full z-30`}
      >
        <div className="hidden md:flex justify-around text-sm w-full h-10">
          <div className="w-36 text-start">
            My engineering skills are like this.
          </div>
          <div className="w-32 text-start">I’m an engineer born in Japan.</div>
        </div>
        <NavigationMenu />
        <div
          className={`hidden md:absolute left-8 top-96 text-sm -rotate-90 ${
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
