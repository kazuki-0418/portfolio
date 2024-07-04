import { Outside } from "@/components/elements/Outside";
import { About } from "@/components/layouts/about";
import Skill from "./skill/page";
import { Profile } from "@/components/layouts/profile";
import { Contact } from "@/components/layouts/contact";
import { Top } from "@/components/layouts/top";

export default function _() {
  return (
    <>
      <Outside>
        <Top />
        <About />
        <Skill />
        <Profile />
        <Contact />
      </Outside>
    </>
  );
}
