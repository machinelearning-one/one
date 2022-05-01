import Head from "next/head";
import { useRouter } from "next/router";

type TitleAndMetaTagsProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  pathname?: string;
};

const Meta = ({
  title = "Machine Learning One",
  description = "A resource compendium for building performant and sustainable AI systems.",
  image,
  url = "https://machinelearning.one",
  pathname,
}: TitleAndMetaTagsProps) => {
  const router = useRouter();

  const imageUrl = `${url}/social/${image || "default.png"}`;
  const path = pathname || router.pathname;

  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta property="og:url" content={`${url}${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
    </Head>
  );
};

export default Meta;
export type { TitleAndMetaTagsProps };
