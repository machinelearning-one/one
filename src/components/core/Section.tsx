import { styleCat } from "../../utils/styleUtils";

interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

const Section = (props: SectionProps) => {
  return (
    <section className={styleCat(["px-4 sm:px-6 md:px-8", props.className])}>
      {props.children}
    </section>
  );
};

export default Section;
export type { SectionProps };
