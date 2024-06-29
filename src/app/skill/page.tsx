import Image from "next/image";
import { FC } from "react";

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
  <div className="bg-gray-200 rounded-lg shadow-lg p-6 m-4 w-80">
    <h2 className="text-2xl font-light mb-4">{category}</h2>
    <div className="grid grid-cols-3 gap-4 mb-4">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <Image
            src={item.img}
            width="64"
            height="64"
            alt={item.name}
            className="mb-2"
          />
          <span className="text-sm text-center">{item.name}</span>
        </div>
      ))}
    </div>
    <p className="text-sm text-gray-700">{description}</p>
  </div>
);

export default function _() {
  return (
    <main className="h-screen bg-gray-200">
      <div className="relative h-screen flex flex-col justify-center items-center p-6 text-black font-light">
        <div className="absolute top-0 right-0 m-8 space-y-2 text-lg">
          <div>Top</div>
          <div>About</div>
          <div>Skill</div>
          <div>Profile</div>
          <div>Contact</div>
        </div>
        <div className="absolute top-8 flex justify-around text-sm w-1/2">
          <div className="w-36 text-start">
            My engineering skills are like this.
          </div>
          <div className="w-32 text-start">I’m an engineer born in Japan.</div>
        </div>
        <div className="absolute left-0 bottom-74 m-8 text-sm -rotate-90 origin-bottom-left">
          <div>jo.kazuki.com</div>
        </div>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
        <div className="flex justify-center w-full">
          <div className="bg-gray-200 rounded-lg shadow-lg p-6 m-4 w-80">
            <h2 className="text-2xl font-light mb-4">back end</h2>
            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-center">
                <Image
                  src={"/skill_icons/back_end/node_js.png"}
                  width="64"
                  height="64"
                  alt={"Node.js logo"}
                  className="mb-2"
                />
                <span className="text-sm text-center">Node.js</span>
              </div>
              <div className="text-sm text-gray-700">
                <p>
                  2 and a half years of development experience mainly in front
                  end
                </p>
                <p>We develop applications</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 p-6 m-4 max-w-2xl rounded-lg shadow-lg flex flex-col items-start space-x-8">
            <div className="text-2xl font-light mb-4 ml-8">DB</div>
            <div className="flex space-x-8 justify-between">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex flex-col items-center">
                  <Image
                    src="/skill_icons/db/my_sql.png"
                    alt="MySQL logo"
                    width="64"
                    height="64"
                    className="mb-2"
                  />
                  <span className="text-sm">MYSQL</span>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/skill_icons/db/sq_lite.png"
                    alt="SQLite logo"
                    width="64"
                    height="64"
                    className="mb-2"
                  />
                  <span className="text-sm">SQLite</span>
                </div>

                <div className="flex flex-col items-center">
                  <Image
                    src="/skill_icons/db/fire_base.png"
                    alt="FireStore logo"
                    width="64"
                    height="64"
                    className="mb-2"
                  />
                  <span className="text-sm">FireStore</span>
                </div>
              </div>
              <div className="text-sm text-gray-700">
                <p>
                  2 and a half years of development experience mainly in front
                  end
                </p>
                <p>We develop applications</p>
                <p>
                  2 and a half years of development experience mainly in front
                  end
                </p>
                <p>We develop applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
