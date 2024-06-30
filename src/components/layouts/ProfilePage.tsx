import Image from "next/image";
import React from "react";

export const ProfilePage = () => {
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
      <div className="w-1/2 ">
        <Image
          src="/seasons/spring.png"
          alt="Cherry blossoms over a river at night with city lights in the background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover "
        />
      </div>
    </div>
  );
};
