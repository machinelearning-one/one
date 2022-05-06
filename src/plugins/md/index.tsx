import { MDXProvider } from "@mdx-js/react";
import { ReactNode } from "react";
import H1 from "./H1";

interface MDXProps {
  children?: ReactNode;
}

const components = {
  h1: H1,
};

const MDX = (props: MDXProps) => {
  return <MDXProvider components={components}>{props.children}</MDXProvider>;
};

export default MDX;
