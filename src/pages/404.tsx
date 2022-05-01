import { useRouter } from "next/router";
import type { Page } from "../types";
import type { ReactNode } from "react";
import Layout from "../layouts/main";
import Meta from "../components/core/Meta";
import PageHeader from "../components/core/PageHeader";
import type { PageHeaderProps } from "../components/core/PageHeader";
import type { PartiallyStyledProps } from "../components/core/PartiallyStyled";

const titleInfo: PartiallyStyledProps = {
  content: "404",
  tokens: ["404"],
  styles: ["text-gradient from-red-400 to-red-600"],
};

const text = [`The page you are looking for doesn't exist`];

const headerInfo: PageHeaderProps = {
  titleInfo,
  text,
  centered: true,
};

const Custom404: Page = () => {
  const router = useRouter();
  return (
    <>
      <Meta {...{ title: "404 | Machine Learning One" }}></Meta>
      <PageHeader {...headerInfo} />
      <div className="mt-6 flex justify-center space-x-6 text-sm sm:mt-10">
        <button
          className="flex h-12 w-full items-center justify-center rounded-lg bg-gray-900 px-6 font-semibold text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-auto"
          onClick={() => router.back()}
        >
          Back
        </button>
      </div>
    </>
  );
};

Custom404.getLayout = (children: ReactNode) => {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
};

export default Custom404;
