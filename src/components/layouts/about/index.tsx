import { Outside } from "@/components/elements/Outside";
import { AboutPage } from "@/components/layouts/about/AboutPage";

export function About() {
  return (
    <main className="h-screen bg-black" id="about">
      {/* <Outside blend="difference"> */}
      <AboutPage />
      {/* </Outside> */}
    </main>
  );
}
