import Page from "@/src/Page";
import Layout from "@/src/layouts";
import Link from "next/link";

HomePage.getLayout = function getLayout(pageContent: React.ReactElement) {
  return <Layout variant="main-layout">{pageContent}</Layout>;
};

export default function HomePage() {
  const SEO = {
    title: "Home page",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  };

  return (
    <Page seoData={SEO}>
      <div>
        <Link href="/upwork_coding_task">upwork_coding_task</Link>
      </div>
      <div>
        <Link href="/some-url">Not found</Link>
      </div>
    </Page>
  );
}
