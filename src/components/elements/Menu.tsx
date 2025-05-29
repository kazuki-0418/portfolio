"use client";

import { useState, useEffect } from "react";
import { Events, scroller } from "react-scroll";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  closeMenu: () => void;
  className?: string;
}

const NavLink = ({ to, children, closeMenu, className = "" }: NavLinkProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // 現在のハッシュをチェック
    const checkActiveSection = () => {
      const hash = window.location.hash.replace("#", "");
      setIsActive(hash === to);
    };

    checkActiveSection();

    // ハッシュ変更を監視
    window.addEventListener("hashchange", checkActiveSection);

    return () => {
      window.removeEventListener("hashchange", checkActiveSection);
    };
  }, [to]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMenu();

    // スムーススクロール
    scroller.scrollTo(to, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });

    // URLハッシュを更新
    window.history.pushState(null, "", `#${to}`);
    setIsActive(true);
  };

  return (
    <a
      href={`#${to}`}
      className={`hover:underline cursor-pointer transition-colors duration-200 ${
        isActive ? "text-blue-400 underline" : ""
      } ${className}`}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 初期ハッシュスクロール処理
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (hash) {
      // 少し遅延させてレンダリング完了を待つ
      setTimeout(() => {
        scroller.scrollTo(hash, {
          duration: 800,
          delay: 0,
          smooth: "smooth",
        });
      }, 100);
    }

    // scroll イベントリスナー登録
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

  // ESCキーでメニューを閉じる
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // スクロール無効化
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset"; // スクロール復元
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed top-4 right-4 z-40">
      {/* デスクトップナビゲーション - md以上で表示 */}
      <nav className="hidden md:block z-30">
        <div className="flex flex-col space-y-4 text-lg font-light">
          <NavLink to="top" closeMenu={closeMenu} className="block py-2">
            Top
          </NavLink>
          <NavLink to="about" closeMenu={closeMenu} className="block py-2">
            About
          </NavLink>
          <NavLink to="skill" closeMenu={closeMenu} className="block py-2">
            Skill
          </NavLink>
          <NavLink to="experience" closeMenu={closeMenu} className="block py-2">
            Experience
          </NavLink>
          <NavLink to="contact" closeMenu={closeMenu} className="block py-2">
            Contact
          </NavLink>
        </div>
      </nav>

      {/* モバイルハンバーガーメニュー - md未満で表示 */}
      <div className="md:hidden">
        {/* ハンバーガーメニューボタン */}
        <button
          onClick={toggleMenu}
          className="relative w-8 h-6 p-1 focus:outline-none group"
          aria-label="メニューを開く"
          aria-expanded={isOpen}
        >
          <span className="sr-only">メニュー</span>

          {/* ハンバーガーアイコン */}
          <div className="relative flex flex-col justify-between w-full h-full">
            <span
              className={`block h-0.5 w-full bg-white transform transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transform transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </div>
        </button>

        {/* オーバーレイ */}
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-50 z-40" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* サイドメニュー */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="menu-title"
        >
          {/* メニューヘッダー */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h2 id="menu-title" className="text-lg font-semibold">
              Navigation
            </h2>
            <button
              onClick={closeMenu}
              className="p-2 hover:bg-gray-700 rounded-full transition-colors"
              aria-label="メニューを閉じる"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* メニューアイテム */}
          <nav className="p-4" role="navigation">
            <div className="space-y-4">
              <NavLink
                to="top"
                closeMenu={closeMenu}
                className="block py-3 px-2 text-lg hover:bg-gray-700 rounded"
              >
                Top
              </NavLink>
              <NavLink
                to="about"
                closeMenu={closeMenu}
                className="block py-3 px-2 text-lg hover:bg-gray-700 rounded"
              >
                About
              </NavLink>
              <NavLink
                to="skill"
                closeMenu={closeMenu}
                className="block py-3 px-2 text-lg hover:bg-gray-700 rounded"
              >
                Skill
              </NavLink>
              <NavLink
                to="experience"
                closeMenu={closeMenu}
                className="block py-3 px-2 text-lg hover:bg-gray-700 rounded"
              >
                Experience
              </NavLink>
              <NavLink
                to="contact"
                closeMenu={closeMenu}
                className="block py-3 px-2 text-lg hover:bg-gray-700 rounded"
              >
                Contact
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
