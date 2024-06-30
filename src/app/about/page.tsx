import { Outside } from "@/components/elements/Outside";
import { AboutPage } from "@/components/layouts/AboutPage";

export default function About() {
  return (
    <main className="h-screen">
      <Outside blend="difference">
        <AboutPage />
      </Outside>
    </main>
  );
}
