"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";
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
      "Experienced in core web languages with TypeScript, Dart, and Python.",
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
      "Focused on React and Next.js development with experience in other frameworks.",
  },
  {
    category: "Tool",
    items: [
      { name: "GitHub", src: "/skill_icons/tool/git_hub.png", percentage: 100 },
      { name: "Docker", src: "/skill_icons/tool/docker.png", percentage: 80 },
      { name: "Notion", src: "/skill_icons/tool/notion.png", percentage: 100 },
      { name: "Figma", src: "/skill_icons/tool/figma.png", percentage: 100 },
    ],
    description: "Proficient in development workflows and design tools.",
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
    description: "Experience with both SQL and NoSQL databases.",
  },
];

export const SkillPage = () => {
  return (
    <div className="w-full">
      {/* モバイル表示: Swiperスライダー (lg未満で表示) */}
      <div className="lg:hidden">
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          className="w-full"
        >
          <SwiperSlide className="flex justify-center items-center">
            <Language {...skills[0]} />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Frontend {...skills[1]} />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Tool {...skills[2]} />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Nodejs {...skills[3]} />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Db {...skills[4]} />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* デスクトップ表示: グリッドレイアウト (lg以上で表示) */}
      <div className="hidden lg:block">
        {/* 最初の行: Language, Frontend, Tool */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex-shrink-0">
            <Language {...skills[0]} />
          </div>
          <div className="flex-shrink-0">
            <Frontend {...skills[1]} />
          </div>
          <div className="flex-shrink-0">
            <Tool {...skills[2]} />
          </div>
        </div>

        {/* 2番目の行: Node.js, DB */}
        <div className="flex justify-center gap-4">
          <div className="flex-shrink-0">
            <Nodejs {...skills[3]} />
          </div>
          <div className="flex-shrink-0">
            <Db {...skills[4]} />
          </div>
        </div>
      </div>
    </div>
  );
};
