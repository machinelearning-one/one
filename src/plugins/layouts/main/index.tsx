import type { ReactNode } from "react";
import Navbar from "./Navbar";
import type { LinkProps, NavListProps, NavbarProps } from "./Navbar";

const navInfo: LinkProps[] = [
  { href: "/articles", text: "Articles" },
  { href: "/tools", text: "Tools" },
  { href: "/about", text: "About" },
];

const githubInfo: LinkProps = {
  href: "https://github.com/machinelearning-one",
  text: "Machine Learning One on Github",
};

const navListInfo: NavListProps = { navInfo, githubInfo };
const darkModeEnabled = false;
const navbarInfo: NavbarProps = { navListInfo, darkModeEnabled };

const DevelBanner = () => {
  return (
    <div className="flex w-full justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 text-center font-bold text-white">
      <p>
        Machine Learning One is under active construction. Please check again
        later.
      </p>
    </div>
  );
};

const underConstruction = true;

export interface LayoutProps {
  children?: ReactNode;
}

const MainLayout = (props: LayoutProps) => {
  return (
    <>
      {underConstruction ? <DevelBanner /> : null}
      <Navbar {...navbarInfo}></Navbar>
      {props.children}
    </>
  );
};

export default MainLayout;
