"use client";
import { SkillCard, SkillItem } from "./SkillCard";
import { PieChart } from "./PieChart";

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
      "2 and a half years of development experience mainly in front endWe develop applications",
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
      "2 and a half years of development experience mainly in front endWe develop applications",
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
      "2 and a half years of development experience mainly in front endWe develop applications",
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
      "2 and a half years of development experience mainly in front endWe develop applications",
  },
];

export const SkillPage = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center ">
        {skills.slice(0, 3).map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
      <div className="flex justify-center w-full">
        <div className="bg-gray-200 rounded-lg shadow-lg p-6 m-4 w-80">
          <h2 className="text-2xl font-light mb-4 text-black">back end</h2>
          <PieChart
            name={"Node.js"}
            src={"/skill_icons/back_end/node_js.png"}
            percentage={80}
          />
          <p className="text-sm text-gray-700">
            2 and a half years of development experience mainly in front end We
            develop applications
          </p>
        </div>
        <div className="bg-gray-200 p-6 m-4 max-w-2xl rounded-lg shadow-lg flex flex-col items-start">
          <div className="text-2xl font-light text-black">DB</div>
          <div className="flex space-x-8 items-center h-full">
            <div className="flex gap-10 mb-4 ml-2 ">
              {skills[3].items.map((item) => (
                <PieChart key={item.name} {...item} />
              ))}
            </div>
            <div className="text-sm text-gray-700">{skills[3].description}</div>
          </div>
        </div>
      </div>
    </>
  );
};
