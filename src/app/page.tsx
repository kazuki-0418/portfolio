"use client";

import { Outside } from "@/components/elements/Outside";
import { About } from "@/components/layouts/about";
import { Skill } from "@/components/layouts/skill";
import { Profile } from "@/components/layouts/profile";
import { Contact } from "@/components/layouts/contact";
import { Top } from "@/components/layouts/top";
import { RecoilRoot } from "recoil";
import { MediaQueryProvider } from "@/hooks/useMediaQuery";

export default function _() {
  return (
    <RecoilRoot>
      <MediaQueryProvider>
        <Outside>
          <Top />
          <About />
          <Skill />
          <Profile />
          <Contact />
        </Outside>
      </MediaQueryProvider>
    </RecoilRoot>
  );
}
