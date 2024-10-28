import { useIsMobile } from "@/hooks/useMediaQuery";
import TypeIt from "typeit-react";

export const AboutPage = () => {
  const isMobile = useIsMobile();

  return (
    <div
      className={`flex items-center justify-start text-white mix-blend-hard-light h-full`}
    >
      <div className="text-[8vmin] transform -rotate-90 whitespace-nowrap w-fit -mr-32">
        I’m an engineer.
      </div>
      <div className="border-l border-white h-96 mx-8"></div>
      <div className="text-xl w-full border-r-[5px] border-solid border-black overflow-hidden  text-[#00aec9]  leading-[1.4] font-bold animate-[typing_3s_steps(18),blink_.4s_step-end_infinite_alternate]">
        <TypeIt
          className="break-words whitespace-pre-wrap w-full"
          options={{
            speed: 50,
            waitUntilVisible: true,
            strings: [
              "Frontend engineer based in Osaka",
              "with 3 years experience specializing in React and TypeScript.",
              "Skilled in development, system rewrites, and maintenance",
              "while staying current with new technologies.",
            ],
          }}
        ></TypeIt>
      </div>
    </div>
  );
};
