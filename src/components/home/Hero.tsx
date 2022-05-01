import Link from "next/link";
import Section from "../core/Section";
import PartiallyStyled from "../core/PartiallyStyled";
import type { PartiallyStyledProps } from "../core/PartiallyStyled";

interface HeroProps {
  titleInfo: PartiallyStyledProps;
  subtitle: string;
  callToActionText: string;
  callToActionURL: string;
}

const Hero = (props: HeroProps) => {
  return (
    <Section className="mx-auto max-w-5xl pt-[7.5rem] lg:pt-40">
      <h1 className="text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
        <PartiallyStyled {...props.titleInfo} />
      </h1>
      <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-600">
        {props.subtitle}
      </p>
      <div className="mt-6 flex justify-center space-x-6 text-sm sm:mt-10">
        <Link href={props.callToActionURL}>
          <a className="flex h-12 w-full items-center justify-center rounded-lg bg-gray-900 px-6 font-semibold text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-auto">
            {props.callToActionText}
          </a>
        </Link>
      </div>
    </Section>
  );
};

export default Hero;
export type { HeroProps };
