"use client";
import { slide as Menu } from "react-burger-menu";
import { useState, useEffect } from "react";
import { Link, Events, scroller } from "react-scroll";
import { useIsMobile } from "@/hooks/useMediaQuery";

// メニューのスタイル

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "2em",
    height: "1.6em",
    right: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#f0f0f0",
    height: "1px",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
    mixBlendMode: "difference",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    width: "240px",
    fontSize: "1.15em",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
    width: "100%",
    color: "white",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

type Props = {
  isActive?: boolean;
  to: string;
  children: React.ReactNode;
  closeMenu: () => void;
};

const NavLink = ({ to, children, closeMenu }: Props) => {
  const handleSetActive = (to: string) => {
    window.history.pushState(null, "", `#${to}`);
  };

  return (
    <Link
      to={to}
      duration={500}
      smooth={true}
      spy={true}
      className="hover:underline cursor-pointer block py-2"
      onSetActive={handleSetActive}
      onClick={() => closeMenu()}
    >
      {children}
    </Link>
  );
};

export const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  // スクロールイベントの設定
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");

    if (hash) {
      scroller.scrollTo(hash, {
        duration: 800,
        delay: 0,
        smooth: "smooth",
      });
    }

    Events.scrollEvent.register("begin", () => {
      console.log("scroll begun");
    });

    Events.scrollEvent.register("end", () => {
      console.log("scroll ended");
    });

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleStateChange = (state: { isOpen: boolean }) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // PCサイズの時のナビゲーション
  if (!isMobile) {
    return (
      <div className=" m-4 text-lg flex flex-col space-y-4 z-30">
        <NavLink to="top" closeMenu={closeMenu}>
          Top
        </NavLink>
        <NavLink to="about" closeMenu={closeMenu}>
          About
        </NavLink>
        <NavLink to="skill" closeMenu={closeMenu}>
          Skill
        </NavLink>
        <NavLink to="experience" closeMenu={closeMenu}>
          Experience
        </NavLink>
        <NavLink to="contact" closeMenu={closeMenu}>
          Contact
        </NavLink>
      </div>
    );
  }

  // タブレットサイズ以下の時のハンバーガーメニュー
  return (
    <Menu
      right
      isOpen={isOpen}
      onStateChange={handleStateChange}
      styles={styles}
    >
      <NavLink to="top" closeMenu={closeMenu}>
        Top
      </NavLink>
      <NavLink to="about" closeMenu={closeMenu}>
        About
      </NavLink>
      <NavLink to="skill" closeMenu={closeMenu}>
        Skill
      </NavLink>
      <NavLink to="experience" closeMenu={closeMenu}>
        Experience
      </NavLink>
      <NavLink to="contact" closeMenu={closeMenu}>
        Contact
      </NavLink>
    </Menu>
  );
};
