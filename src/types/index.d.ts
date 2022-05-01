import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps as NextAppProps } from "next/app";

type Page = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppProps = NextAppProps & {
  Component: NextPageWithLayout;
};
