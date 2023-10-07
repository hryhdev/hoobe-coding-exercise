import Head from "next/head";
import { ReactNode } from "react";
import { ISEOData } from "./types/seo";

interface PageProps {
  children: ReactNode;
  seoData?: ISEOData;
}

const Page: React.FC<PageProps> = ({ children, seoData = {} }) => {
  const { title = "", description = "" } = seoData;
  return (
    <div className="page-layout">
      <Head>
        <title>{`${title} | hoo.be`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
};

export default Page;
