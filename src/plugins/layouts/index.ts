import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps as NextAppProps } from "next/app";
import MainLayout from "./main";
import MarkDownLayout from "./markdown";

type Page = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppProps = NextAppProps & {
  Component: Page;
};

export type { Page, AppProps };
export { MainLayout, MarkDownLayout };
