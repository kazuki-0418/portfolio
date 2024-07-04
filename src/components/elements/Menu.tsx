"use client";
import { Link, animateScroll as scroll } from "react-scroll";

const scrollConfig = {
  duration: 500,
  smooth: true,
};

const NavLink = ({ to, children }: { to: string; children: string }) => {
  return (
    <Link to={to} {...scrollConfig} className="hover:underline cursor-pointer">
      {children}
    </Link>
  );
};

export const Menu = () => {
  return (
    <div className="m-8 text-lg flex flex-col space-y-4 ">
      <div
        onClick={() => scroll.scrollToTop(scrollConfig)}
        className="hover:underline cursor-pointer"
      >
        Top
      </div>
      <NavLink to="about">About</NavLink>
      <NavLink to="skill">Skill</NavLink>
      <NavLink to="profile">Profile</NavLink>
      <NavLink to="contact">Contact</NavLink>
    </div>
  );
};
