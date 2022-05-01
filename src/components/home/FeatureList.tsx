import { styleCat } from "../../utils/styleUtils";
import Section from "../core/Section";

interface FeatureProps {
  name: string;
  description: string;
  icon: React.ComponentType<{ className: string }>;
  clsx?: string;
}

interface FeatureListProps {
  tag: string;
  title: string;
  motivation: string;
  description: string;
  features: FeatureProps[];
}

const FeatureList = (props: FeatureListProps) => {
  return (
    <Section className="mx-auto max-w-7xl pt-24 pb-8 lg:pt-32 lg:pb-16">
      <div className="sm:text-center">
        <h2 className="text-sm font-semibold uppercase text-blue-600">
          {props.tag}
        </h2>
        <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          {props.title}
        </p>
        <div className="mt-6 max-w-2xl space-y-4 text-left text-lg text-gray-600 sm:space-y-6 sm:text-center md:mx-auto">
          <p>{props.motivation}</p>
          <p>{props.description}</p>
        </div>
      </div>
      <div className="mt-10 sm:mt-16">
        <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
          {props.features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <span className={feature.clsx}>
                  <div
                    className={styleCat([
                      "absolute flex h-12 w-12 items-center justify-center rounded-md text-white",
                      feature.clsx,
                    ])}
                  >
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </span>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-700">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
};

export default FeatureList;
export type { FeatureListProps, FeatureProps };
