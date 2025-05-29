"use client";

import { Outside } from "@/components/elements/Outside";
import { About } from "@/components/layouts/about";
import { Skill } from "@/components/layouts/skill";
import { Experience } from "@/components/layouts/experience";
import { Contact } from "@/components/layouts/contact";
import { Top } from "@/components/layouts/top";
import { RecoilRoot } from "recoil";
import { Toast } from "@/components/elements/Toast";
import { Suspense } from "react";

export default function App() {
  return (
    <>
      <RecoilRoot>
          <Outside>
            <Top />
            <About />
            <Skill />
            <Experience />
            <Contact />
          </Outside>
          <Toast />
      </RecoilRoot>
    </>
  );
}
