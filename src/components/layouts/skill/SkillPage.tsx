"use client";
import Image from "next/image";
import React, { FC } from "react";
const skills = [
  {
    category: "language",
    items: [
      { name: "HTML5", img: "/skill_icons/language/html_5.png" },
      { name: "CSS3", img: "/skill_icons/language/css_3.png" },
      {
        name: "JavaScript",
        img: "/skill_icons/language/java_script.png",
      },
      {
        name: "TypeScript",
        img: "/skill_icons/language/type_script.png",
      },
      { name: "Dart", img: "/skill_icons/language/dart.png" },
      { name: "Python", img: "/skill_icons/language/python.png" },
    ],
    description:
      "2 and a half years of development experience mainly in front endWe develop applications",
  },
  {
    category: "front end",
    items: [
      { name: "Tailwind CSS", img: "/skill_icons/front_end/tailwind_css.png" },
      { name: "React", img: "/skill_icons/front_end/react.png" },
      { name: "Next.js", img: "/skill_icons/front_end/next_js.png" },
      { name: "Remix.js", img: "/skill_icons/front_end/remix_js.png" },
      { name: "Svelte", img: "/skill_icons/front_end/svelte.png" },
      { name: "Flutter", img: "/skill_icons/front_end/flutter.png" },
    ],
    description:
      "2 and a half years of development experience mainly in front endWe develop applications",
  },
  {
    category: "Tool",
    items: [
      { name: "GitHub", img: "/skill_icons/tool/git_hub.png" },
      { name: "Docker", img: "/skill_icons/tool/docker.png" },
      { name: "Notion", img: "/skill_icons/tool/notion.png" },
      { name: "Figma", img: "/skill_icons/tool/figma.png" },
    ],
    description:
      "2 and a half years of development experience mainly in front endWe develop applications",
  },
];

type SkillCardProps = {
  category: string;
  items: { name: string; img: string }[];
  description: string;
};

const SkillCard: FC<SkillCardProps> = ({ category, items, description }) => (
  <div className="bg-gray-200 rounded-lg shadow-lg p-6 m-4 w-80 ">
    <h2 className="text-2xl font-light mb-4">{category}</h2>
    <div className="grid grid-cols-3 gap-4 mb-4">
      {items.map((item) => (
        <SkillIcon key={item.name} src={item.img} name={item.name} />
      ))}
    </div>
    <p className="text-sm text-gray-700">{description}</p>
  </div>
);

type SkillIconProps = {
  src: string;
  name: string;
};

const SkillIcon: FC<SkillIconProps> = ({ src, name }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex justify-center items-center mr-auto ml-auto w-16 h-16 text-lg font-semibold pie rounded-full">
        <Image src={src} alt={name} width="64" height="64" className="z-10" />
      </div>
      <p className="text-sm text-center">{name}</p>
      <style jsx>{`
        .pie {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          margin: auto;
          width: 60px;
          height: 60px;
          font-size: 26px;
          font-weight: 700;
        }
        .pie::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          border: 3px solid #ddd;
          border-radius: 50%;
          z-index: -1;
        }

        .pie::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          background-image: radial-gradient(#e4e7eb 65%, transparent 66%),
            conic-gradient(#fff 0% 60%, transparent 60% 100%);
          border-radius: 50%;
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export const SkillPage = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center ">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
      <div className="flex justify-center w-full">
        <div className="bg-gray-200 rounded-lg shadow-lg p-6 m-4 w-80">
          <h2 className="text-2xl font-light mb-4">back end</h2>
          <div className="flex items-center space-x-4">
            <SkillIcon src="/skill_icons/back_end/node_js.png" name="Node.js" />
            <div className="text-sm text-gray-700">
              <p>
                2 and a half years of development experience mainly in front end
              </p>
              <p>We develop applications</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 p-6 m-4 max-w-2xl rounded-lg shadow-lg flex flex-col items-start">
          <div className="text-2xl font-light">DB</div>
          <div className="flex space-x-8">
            <div className="flex gap-10 mb-4 ml-2">
              <SkillIcon src="/skill_icons/db/my_sql.png" name="MYSQL" />
              <SkillIcon src="/skill_icons/db/sq_lite.png" name="SQLite" />
              <SkillIcon src="/skill_icons/db/fire_base.png" name="FireStore" />
            </div>
            <div className="text-sm text-gray-700">
              <p>
                2 and a half years of development experience mainly in front end
              </p>
              <p>We develop applications</p>
              <p>
                2 and a half years of development experience mainly in front end
              </p>
              <p>We develop applications</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
