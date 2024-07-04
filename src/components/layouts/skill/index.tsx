import { Outside } from "@/components/elements/Outside";
import { SkillPage } from "./SkillPage";

export const Skill = () => {
  return (
    <main className="h-screen w-full bg-gray-200 sticky left-0 p-16" id="skill">
      {/* <Outside blend="difference"> */}
      <SkillPage />
      {/* </Outside> */}
    </main>
  );
};
