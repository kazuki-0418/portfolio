"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";
import { useIsDesktop } from "@/hooks/useMediaQuery";
import { Db } from "./SkillCards/Db";
import { Nodejs } from "./SkillCards/Nodejs";
import { Language } from "./SkillCards/Language";
import { Frontend } from "./SkillCards/Frontend";
import { Tool } from "./SkillCards/Tool";
import "./SkillCards/Swiper.css";

export type SkillCardProps = {
  category: string;
  items: SkillItem[];
  description?: string;
};

export type SkillItem = {
  name: string;
  src: string;
  percentage: number;
};

type SkillCategory = {
  category: string;
  items: SkillItem[];
  description?: string;
};

const skills: SkillCategory[] = [
  {
    category: "language",
    items: [
      {
        name: "HTML5",
        src: "/skill_icons/language/html_5.png",
        percentage: 100,
      },
      { name: "CSS3", src: "/skill_icons/language/css_3.png", percentage: 100 },
      {
        name: "JavaScript",
        src: "/skill_icons/language/java_script.png",
        percentage: 100,
      },
      {
        name: "TypeScript",
        src: "/skill_icons/language/type_script.png",
        percentage: 90,
      },
      { name: "Dart", src: "/skill_icons/language/dart.png", percentage: 60 },
      {
        name: "Python",
        src: "/skill_icons/language/python.png",
        percentage: 60,
      },
    ],
    description:
      "Proficient in core web technologies including HTML5, CSS3, and JavaScript, with expertise in TypeScript for type-safe development. Experience with Dart and Python for cross-platform and backend development.",
  },
  {
    category: "front end",
    items: [
      {
        name: "Tailwind CSS",
        src: "/skill_icons/front_end/tailwind_css.png",
        percentage: 90,
      },
      {
        name: "React",
        src: "/skill_icons/front_end/react.png",
        percentage: 100,
      },
      {
        name: "Next.js",
        src: "/skill_icons/front_end/next_js.png",
        percentage: 100,
      },
      {
        name: "Remix.js",
        src: "/skill_icons/front_end/remix_js.png",
        percentage: 80,
      },
      {
        name: "Svelte",
        src: "/skill_icons/front_end/svelte.png",
        percentage: 80,
      },
      {
        name: "Flutter",
        src: "/skill_icons/front_end/flutter.png",
        percentage: 60,
      },
    ],
    description:
      "Specialized in modern frontend development using React and Next.js with Tailwind CSS for efficient styling. Experienced in various frameworks including Remix.js, Svelte, and Flutter for creating responsive applications.",
  },
  {
    category: "Tool",
    items: [
      { name: "GitHub", src: "/skill_icons/tool/git_hub.png", percentage: 100 },
      { name: "Docker", src: "/skill_icons/tool/docker.png", percentage: 80 },
      { name: "Notion", src: "/skill_icons/tool/notion.png", percentage: 100 },
      { name: "Figma", src: "/skill_icons/tool/figma.png", percentage: 100 },
    ],
    description:
      "Experienced in version control with GitHub, containerization with Docker, and collaborative workflows using Notion and Figma for efficient project management and design processes.",
  },
  {
    category: "back end",
    items: [
      {
        name: "Node.js",
        src: "/skill_icons/back_end/node_js.png",
        percentage: 80,
      },
    ],
    description:
      "Capable of server-side development using Node.js, enabling full-stack integration and API development.",
  },
  {
    category: "DB",
    items: [
      { name: "MYSQL", src: "/skill_icons/db/my_sql.png", percentage: 60 },
      { name: "SQLite", src: "/skill_icons/db/sq_lite.png", percentage: 60 },
      {
        name: "FireStore",
        src: "/skill_icons/db/fire_base.png",
        percentage: 80,
      },
    ],
    description:
      "Skilled in MySQL database design and optimization, ensuring efficient data management and query performance.",
  },
];

export const SkillPage = () => {
  const isDesktop = useIsDesktop();

  if (isDesktop === false)
    return (
      <Swiper
        modules={[Navigation]}
        navigation
        className="flex flex-wrap justify-center items-center"
        breakpoints={{
          840: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
      >
        <div>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <Language {...skills[0]} />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <Frontend {...skills[1]} />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <Tool {...skills[2]} />
          </SwiperSlide>
        </div>

        <div className="flex justify-center w-full">
          <div className="flex justify-center w-full">
            <SwiperSlide
              style={{
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
              }}
            >
              <Nodejs {...skills[3]} />
            </SwiperSlide>
            <SwiperSlide
              style={{
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
              }}
            >
              <Nodejs {...skills[4]} />
            </SwiperSlide>
          </div>
        </div>
      </Swiper>
    );

  return (
    <>
      <div className="flex flex-wrap justify-center ">
        <Language {...skills[0]} />
        <Frontend {...skills[1]} />
        <Tool {...skills[2]} />
      </div>
      <div className="flex justify-center w-full">
        <div className="flex justify-center w-full">
          <Nodejs {...skills[3]} />
          <Db {...skills[4]} />
        </div>
      </div>
    </>
  );
};
