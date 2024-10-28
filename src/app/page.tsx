"use client";

import { Outside } from "@/components/elements/Outside";
import { About } from "@/components/layouts/about";
import { Skill } from "@/components/layouts/skill";
import { Experience } from "@/components/layouts/experience";
import { Contact } from "@/components/layouts/contact";
import { Top } from "@/components/layouts/top";
import { RecoilRoot } from "recoil";
import { MediaQueryProvider } from "@/hooks/useMediaQuery";
import { Toast } from "@/components/elements/Toast";

export default function App() {
  return (
    <RecoilRoot>
      <MediaQueryProvider>
        <Outside>
          <Top />
          <About />
          <Skill />
          <Experience />
          <Contact />
        </Outside>
        <Toast />
      </MediaQueryProvider>
    </RecoilRoot>
  );
}
