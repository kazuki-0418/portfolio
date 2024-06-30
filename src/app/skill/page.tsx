import { Outside } from "@/components/elements/Outside";
import { SkillPage } from "@/components/layouts/SkillPage";

export default function Skill() {
  return (
    <main className="h-screen">
      <Outside blend="difference">
        <SkillPage />
      </Outside>
    </main>
  );
}
