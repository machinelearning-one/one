import type { Page } from "../types";
import type { ReactNode } from "react";
import { MainLayout } from "../plugins/layouts";
import Meta from "../components/core/Meta";
import PageHeader from "../components/core/PageHeader";
import type { PageHeaderProps } from "../components/core/PageHeader";
import type { PartiallyStyledProps } from "../components/core/PartiallyStyled";

const titleInfo: PartiallyStyledProps = {
  content: "About",
  tokens: ["About"],
  styles: ["text-gradient from-gray-800 to-gray-600"],
};

const text = [
  `Machine Learning One is a collective focused on performant yet sustainable machine learning research and development.`,
  `Improved hardware capabilities have boosted the speed of prototyping and publishing new research over the years. 
    As a result, AI has been increasingly permeating our everyday lives.`,
  `Larger models open up a pathway by proving a solution exists to problems previously thought unsolvable and drive up an influx of interest in the field. 
    Yet simply relying on scaling up isn't without its demerits. 
    Acceptance criteria at major conferences have become murkier in line with an unprecedented rise in research throughput to maintain an air of exclusivity. 
    The research community's imbalanced focus on chasing a state-of-the-art label on a few metrics while ignoring others has stagnated efforts to make AI more efficient and accessible.`,
  `Machine Learning One aims to strike a balance between exploration (seeking novel methods) to exploitation (repeating decisions that have worked well so far) 
    by promoting, developing, and collaborating on solutions that take a holistic view of the field.`,
];

const headerInfo: PageHeaderProps = {
  titleInfo,
  text,
  centered: false,
  increase_hspace: true,
};

const About: Page = () => {
  return (
    <>
      <Meta {...{ title: "About | Machine Learning One" }}></Meta>
      <PageHeader {...headerInfo} />
    </>
  );
};

About.getLayout = (children: ReactNode) => {
  return (
    <>
      <MainLayout>{children}</MainLayout>
    </>
  );
};

export default About;
