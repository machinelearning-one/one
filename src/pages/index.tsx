import type { Page } from "../types";
import { ReactNode } from "react";
import { MainLayout } from "../layouts";
import Meta from "../components/core/Meta";

import type { HeroProps } from "../components/home/Hero";
import type { PartiallyStyledProps } from "../components/core/PartiallyStyled";
import Hero from "../components/home/Hero";
import FeatureList, { FeatureListProps } from "../components/home/FeatureList";
import { PatternIcon } from "../components/core/Icons";
import {
  AnnotationIcon,
  CodeIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";
import SubscriptionForm, {
  SubscriptionProps,
} from "../components/home/SubscriptionForm";

const titleInfo: PartiallyStyledProps = {
  content: "Learn to build performant and sustainable AI systems.",
  tokens: ["performant", "sustainable"],
  styles: [
    "text-gradient from-amber-400 to-orange-500",
    "text-gradient from-lime-500 to-emerald-500",
  ],
};

const heroInfo: HeroProps = {
  titleInfo,
  subtitle:
    "Navigate the ever-changing landscape of deep learning and its applications with the help of powerful design patterns.",
  callToActionText: "Get Started",
  callToActionURL: "/",
};

const features = [
  {
    name: "Pattern Catalogue",
    description:
      "Design models resilient to resource limitations without sacrificing accuracy.",
    icon: PatternIcon,
    clsx: "bg-gradient-to-r from-amber-400 to-orange-500",
  },
  {
    name: "Code Scaffolds",
    description:
      "Avoid boilerplate and be productive with our customizable generators right from your browser.",
    icon: CodeIcon,
    clsx: "bg-gradient-to-r from-purple-400 to-violet-500",
  },
  {
    name: "Paper Reviews",
    description:
      "Stay updated on the field with in-depth reviews on promising Artificial Intelligence research.",
    icon: AnnotationIcon,
    clsx: "bg-gradient-to-r from-blue-400 to-indigo-500",
  },
  {
    name: "Integration Guides",
    description:
      "Learn how to build tooling and APIs around your models as a part of larger ecosystems.",
    icon: LightningBoltIcon,
    clsx: "bg-gradient-to-r from-green-400 to-teal-500",
  },
];

const featureInfo: FeatureListProps = {
  tag: "Be a part of journey to",
  title: "Make AI accessible again",
  motivation: `You have probably heard scarcity breeds innovation. However, prominent research increasingly relies upon scaling up to chase performance on benchmarks.`,
  description: `Focusing in the right direction can be hard when cluttered and advertised with attractive publications implementable if you merely pay enough. We aim to filter the noise through our offerings.`,
  features,
};

const newsletterInfo: SubscriptionProps = {
  tag: "We’ve got more coming...",
  description: `Never miss an update on the latest innovations in AI.`,
};

const Home: Page = () => {
  return (
    <>
      <Meta></Meta>
      <Hero {...heroInfo}></Hero>
      <FeatureList {...featureInfo}></FeatureList>
      <SubscriptionForm {...newsletterInfo}></SubscriptionForm>
    </>
  );
};

Home.getLayout = (children: ReactNode) => {
  return (
    <>
      <MainLayout>{children}</MainLayout>
    </>
  );
};

export default Home;
