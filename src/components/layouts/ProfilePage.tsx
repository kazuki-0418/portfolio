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

export const ProfilePage = () => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev === 4 ? 1 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen w-full justify-around absolute left-0 top-0 bg-black">
      <div className="w-1/2  flex flex-col items-center justify-center text-white">
        <div className="w-1/2">
          <h1 className="text-4xl mb-8 ">Kazuki Jo</h1>
          <div className="space-y-4 ">
            <p>2018.01 Born in Osaka, Japan</p>
            <p>2018.01 Born in Osaka, Japan</p>
            <p>
              2018.01 experience mainly in front end. We develop applications
              and corporate
            </p>
            <p>2018.01 Born in Osaka, Japan</p>
            <p>
              2018.01 experience mainly in front end. We develop applications
              and corporate
            </p>
            <p>2018.01 Born in Osaka, Japan</p>
            <p>
              2018.01 experience mainly in front end. We develop applications
              and corporate
            </p>
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
  );
};
