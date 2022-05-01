import Section from "./Section";
import PartiallyStyled from "./PartiallyStyled";
import type { PartiallyStyledProps } from "./PartiallyStyled";
import { styleCat } from "../../utils/styleUtils";

interface PageHeaderProps {
  titleInfo: PartiallyStyledProps;
  text: string[];
  centered: boolean;
  increase_hspace?: boolean;
}

const PageHeader = (props: PageHeaderProps) => {
  const centered = props.centered ? "text-center" : "";
  const hspace = props.increase_hspace ? "mb-12" : "mb-6";
  return (
    <Section>
      <div className="mx-auto max-w-3xl pt-12 lg:pt-24">
        <h1
          className={styleCat([
            "text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl",
            hspace,
          ])}
        >
          <PartiallyStyled {...props.titleInfo} />
        </h1>
        <div
          className={styleCat([
            "mx-auto max-w-3xl space-y-4 text-lg text-gray-600",
            centered,
          ])}
        >
          {props.text.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default PageHeader;
export type { PageHeaderProps };
