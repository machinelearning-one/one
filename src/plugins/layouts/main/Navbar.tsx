import Router from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import DarkMode from "../../../components/core/DarkMode";
import {
  OptionsIcon,
  CloseIcon,
  GithubIcon,
  MLOneIcon,
} from "../../../components/core/Icons";

interface LinkProps {
  href: string;
  text: string;
}

const NavLink = (props: LinkProps) => {
  // Determine if href points to internal or external
  const isInternal = props.href.startsWith("/");
  if (isInternal) {
    return (
      <Link href={props.href}>
        <a className="hover:text-sky-500">{props.text}</a>
      </Link>
    );
  } else {
    return (
      <a
        href={props.href}
        className="hover:text-sky-500"
        target="_blank"
        rel="noreferrer"
      >
        {props.text}
      </a>
    );
  }
};

const GitHubLink = (props: LinkProps) => {
  return (
    <a
      href={props.href}
      className="block h-6 w-6 text-gray-500 hover:text-gray-600"
      target="_blank"
      rel="noreferrer"
    >
      <GithubIcon label={props.text} />
    </a>
  );
};

interface NavListProps {
  navInfo: LinkProps[];
  githubInfo: LinkProps;
}

const NavList = (props: NavListProps) => {
  let links = props.navInfo.map((it) => (
    <li key={it.text}>
      <NavLink href={it.href} text={it.text} />
    </li>
  ));
  links = [
    ...links,
    <li key="Github">
      <GitHubLink {...props.githubInfo} />
    </li>,
  ];
  return <>{links}</>;
};

const NavPopover = (props: NavListProps) => {
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleRouteChange = () => {
      setIsOpen(false);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="flex h-8 w-8 items-center justify-center text-gray-500 hover:text-gray-600"
        onClick={() => setIsOpen(true)}
      >
        <OptionsIcon label="Navigation" />
      </button>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 md:hidden"
        open={isOpen}
        onClose={setIsOpen}
      >
        <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
        <div className="fixed top-4 right-4 w-full max-w-xs rounded-lg bg-white p-6 text-base font-semibold text-gray-900 shadow-lg">
          <button
            type="button"
            className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center text-gray-500 hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon label="Close navigation" />
          </button>
          <ul className="space-y-6">
            <NavList {...props} />
          </ul>
        </div>
      </Dialog>
    </>
  );
};

interface NavbarProps {
  darkModeEnabled: boolean;
  navListInfo: NavListProps;
}

const Navbar = (props: NavbarProps) => {
  return (
    <header className="relative px-4 sm:px-6 md:px-8">
      <div className="flex items-center justify-between pt-6 text-sm font-semibold leading-6 text-gray-700 lg:pt-8">
        <Link href="/">
          <a>
            <MLOneIcon />
          </a>
        </Link>
        <div className="flex items-center">
          <div className="-my-1 ml-2 -mr-1 flex items-center md:hidden">
            {props.darkModeEnabled && <DarkMode />}
            <NavPopover {...props.navListInfo} />
          </div>
          <nav className="hidden md:block">
            <ol className="flex items-center space-x-8">
              <NavList {...props.navListInfo} />
              {props.darkModeEnabled && <DarkMode />}
            </ol>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
export type { LinkProps, NavListProps, NavbarProps };
