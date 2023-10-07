import Page from "@/src/Page";
import Layout from "@/src/layouts";
import styles from "@/styles/notFoundPage.module.scss";
import Link from "next/link";

Page404.getLayout = function getLayout(pageContent: React.ReactElement) {
  return <Layout variant="frame-layout">{pageContent}</Layout>;
};

export default function Page404() {
  const SEO = {
    title: "Page Not fount",
  };

  return (
    <Page seoData={SEO}>
      <div className={styles.notFoundPage}>
        <span>🧐</span>
        <h1>Page Not Found</h1>
        <Link href="/">Home</Link>
      </div>
    </Page>
  );
}
