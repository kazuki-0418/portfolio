"use client";
import { useIsDesktop, useIsMobile } from "@/hooks/useMediaQuery";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const seasonsImages = [
  {
    name: "spring",
    src: "/seasons/spring.png",
  },
  {
    name: "summer",
    src: "/seasons/summer.png",
  },
  {
    name: "autumn",
    src: "/seasons/autumn.png",
  },
  {
    name: "winter",
    src: "/seasons/winter.png",
  },
];

export const ExperiencePage = () => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev === 4 ? 1 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const isDesktop = useIsDesktop();

  return (
    <>
      {isDesktop ? (
        <div className="flex h-screen w-full justify-around  left-0 top-0 bg-black">
          <div className="w-1/2  flex flex-col items-center justify-center text-white">
            <div className="w-1/2">
              <h1 className="text-4xl mb-8 ">Job Experience</h1>
              <div className="space-y-4 ">
                <div className="flex items-start pl-0 flex-col">
                  <span className="text-2xl">SinProject Inc. </span>
                  <span>2022/02/01 〜 2022/09/01 </span>
                </div>
                <ul className="list-disc pl-4">
                  <li>
                    Rewriting an existing Windows application written in VBA for
                    a ledger system migrate it to a web system. - Svelte
                  </li>
                  <li>
                    Customer support, functional improvements, and bug fixes for
                    Twitter clone applications. - Flutter
                  </li>
                </ul>
                <div className="flex items-start pl-0 flex-col">
                  <span className="text-2xl">Liac Inc. </span>
                  <span>2022/09/01 〜 2023/03/01 </span>
                </div>
                <ul className="list-disc pl-4">
                  <li>
                    Development of a new web application to manage a
                    cryptocurrency wallet. - Next.js, Node.js
                  </li>
                </ul>
                <div className="flex items-start pl-0 flex-col">
                  <span className="text-2xl">Osaka Gas co. ltd </span>
                  <span>2023/02/01 〜 current </span>
                </div>
                <ul className="list-disc pl-4">
                  <li>
                    Development of an application that can detect and analyze
                    abnormalities in energy facilities. - Next.js
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full overflow-hidden relative ">
            {seasonsImages.map((season, index) => (
              <Image
                key={season.name}
                src={season.src}
                alt={season.name}
                width={1920}
                height={1080}
                className={`
          absolute top-0 right-0 w-full h-full
          object-cover
            ${counter - 1 === index ? "animate-fadeIn12s" : "hidden"}
          `}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex h-screen w-full flex-col left-0 top-0 bg-black relative">
          <div className="flex flex-col items-center justify-center text-white z-10">
            <div className="w-1/2 absolute top-10">
              <h1 className="text-[6vmin] mb-8 ">Job Experience</h1>
              <div className="space-y-4 ">
                <div className="flex items-start pl-0 flex-col">
                  <span className="text-[3vmin]">SinProject Inc. </span>
                  <span className="text-[3vmin]">2022/02/01 〜 2022/09/01</span>
                </div>
                <ul className="list-disc pl-4 text-[2.5vmin]">
                  <li>
                    Rewriting an existing Windows application written in VBA for
                    a ledger system migrate it to a web system. - Svelte
                  </li>
                  <li>
                    Customer support, functional improvements, and bug fixes for
                    Twitter clone applications. - Flutter
                  </li>
                </ul>
                <div className="flex items-start pl-0 flex-col">
                  <span className="text-[3vmin]">Liac Inc. </span>
                  <span className="text-[3vmin]">2022/09/01 〜 2023/03/01</span>
                </div>
                <ul className="list-disc pl-4 text-[2.5vmin]">
                  <li>
                    Development of a new web application to manage a
                    cryptocurrency wallet. - Next.js, Node.js
                  </li>
                </ul>
                <div className="flex items-start pl-0 flex-col">
                  <span className="text-[3vmin]">Osaka Gas co. ltd </span>
                  <span className="text-[3vmin]">2023/02/01 〜 current </span>
                </div>
                <ul className="list-disc pl-4 text-[2.5vmin]">
                  <li>
                    Development of an application that can detect and analyze
                    abnormalities in energy facilities. - Next.js
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-1/2 overflow-hidden z-0">
            {seasonsImages.map((season, index) => (
              <Image
                key={season.name}
                src={season.src}
                alt={season.name}
                width={1920}
                height={1080}
                className={`
          absolute left-[20%] bottom-10 w-2/3 h-1/2
          object-cover
            ${counter - 1 === index ? "animate-fadeIn12s" : "hidden"}
          `}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
