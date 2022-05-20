import MainLayout from "../main";
import Section from "../../../components/core/Section";
import { ReactNode } from "react";
import Meta from "../../../components/core/Meta";

export interface LayoutProps {
  meta?: Record<string, any>;
  children?: ReactNode;
}

const MarkDownLayout = (props: LayoutProps) => {
  return (
    <MainLayout>
      {props.meta && props.meta.title && <Meta title={props.meta.title} />}
      <Section className="prose mx-auto max-w-5xl pt-16 pb-32">
        {props.children}
      </Section>
    </MainLayout>
  );
};

export default MarkDownLayout;
