import TypeIt from "typeit-react";

export const AboutPage = () => {
  return (
    <div className="flex items-center justify-center text-white mix-blend-hard-light h-full">
      <div className="left-48 text-6xl transform -rotate-90 whitespace-nowrap w-fit -mr-32 ">
        I’m an engineer.
      </div>
      <div className="border-l border-white h-96 mx-8"></div>
      <div className="text-xl w-full border-r-[5px] border-solid border-black overflow-hidden  text-[#00aec9]  leading-[1.4] font-bold animate-[typing_3s_steps(18),blink_.4s_step-end_infinite_alternate]">
        <TypeIt
          className="break-words"
          options={{
            speed: 50,
            waitUntilVisible: true,
            strings: [
              "As a frontend engineer from Osaka,",
              "I bring 3 years of hands-on experience in web application development using React, Next.js, and TypeScript.",
              "My expertise spans across new development projects, system rewrites, and maintenance operations,",
              "allowing me to propose and implement optimal solutions for client challenges.",
              "I maintain a proactive approach to staying current with technology trends and",
              "embrace new technologies and methodologies in my work.",
            ],
          }}
        ></TypeIt>
      </div>
    </div>
  );
};
