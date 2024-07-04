"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Link, Events, scroller } from "react-scroll";

const scrollConfig = {
  duration: 500,
  smooth: true,
  spy: true,
};

type props = {
  isActive?: boolean;
  to: string;
  children: React.ReactNode;
};

const NavLink = ({ to, children }: props) => {
  const handleSetActive = (to: string) => {
    window.history.pushState(null, "", `#${to}`);
    // router.push(`#${to}`);
  };

  return (
    <Link
      to={to}
      {...scrollConfig}
      className="hover:underline cursor-pointer"
      onSetActive={handleSetActive}
    >
      {children}
    </Link>
  );
};

export const Menu = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    // URLからハッシュを取得してスクロール

    if (hash) {
      scroller.scrollTo(hash, {
        duration: 800,
        delay: 0,
        smooth: "smooth",
      });
    }

    // スクロールイベントのリスナーを追加
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    // スクロールイベントのリスナーを追加
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });
  }, []);

  return (
    <div className="m-8 text-lg flex flex-col space-y-4 ">
      <NavLink to="top">Top</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="skill">Skill</NavLink>
      <NavLink to="profile">Profile</NavLink>
      <NavLink to="contact">Contact</NavLink>
    </div>
  );
};
