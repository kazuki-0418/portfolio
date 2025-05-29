"use client";

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

  return (
    <div className="flex h-screen w-full lg:flex-row flex-col lg:justify-around left-0 top-0 bg-black relative">
      {/* テキストコンテンツエリア */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-white lg:z-auto z-10">
        <div className="w-4/5 lg:w-1/2 lg:static absolute top-10">
          <h1 className="text-[6vmin] lg:text-4xl mb-8">Job Experience</h1>
          <div className="space-y-4">
            {/* SinProject Inc. */}
            <div className="flex items-start pl-0 flex-col">
              <span className="text-[3vmin] lg:text-2xl">SinProject Inc.</span>
              <span className="text-[3vmin] lg:text-base">
                2022/02/01 〜 2022/09/01
              </span>
            </div>
            <ul className="list-disc pl-4 text-[2.5vmin] lg:text-base">
              <li>
                Rewriting an existing Windows application written in VBA for a
                ledger system migrate it to a web system. - Svelte
              </li>
              <li>
                Customer support, functional improvements, and bug fixes for
                Twitter clone applications. - Flutter
              </li>
            </ul>

            {/* Liac Inc. */}
            <div className="flex items-start pl-0 flex-col">
              <span className="text-[3vmin] lg:text-2xl">Liac Inc.</span>
              <span className="text-[3vmin] lg:text-base">
                2022/09/01 〜 2023/03/01
              </span>
            </div>
            <ul className="list-disc pl-4 text-[2.5vmin] lg:text-base">
              <li>
                Development of a new web application to manage a cryptocurrency
                wallet. - Next.js, Node.js
              </li>
            </ul>

            {/* Osaka Gas co. ltd */}
            <div className="flex items-start pl-0 flex-col">
              <span className="text-[3vmin] lg:text-2xl">
                Osaka Gas co. ltd
              </span>
              <span className="text-[3vmin] lg:text-base">
                2023/02/01 〜 current
              </span>
            </div>
            <ul className="list-disc pl-4 text-[2.5vmin] lg:text-base">
              <li>
                Development of an application that can detect and analyze
                abnormalities in energy facilities. - Next.js
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 画像エリア */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full overflow-hidden relative lg:z-auto z-0">
        {seasonsImages.map((season, index) => (
          <Image
            key={season.name}
            src={season.src}
            alt={season.name}
            width={1920}
            height={1080}
            className={`
              absolute 
              left-[20%] lg:left-0 lg:right-0 
              bottom-10 lg:top-0
              w-2/3 lg:w-full 
              h-1/2 lg:h-full
              object-cover
              ${counter - 1 === index ? "animate-fadeIn12s" : "hidden"}
            `}
          />
        ))}
      </div>
    </div>
  );
};
