import { mainDataService } from "@/src/services/main-data";
import Layout from "../src/layouts";
import Page from "@/src/Page";
import { IUser, IUserSocialPlatform } from "@/src/types/user";
import { IContent } from "@/src/types/content";
import { ContentItem, UserSocialPlatforms } from "@/src/components";

import styles from "@/styles/contentPage.module.scss";

interface ContentPageProps {
  user: IUser;
  userSocialPlatform: IUserSocialPlatform[];
  content: IContent[];
}

ContentPage.getLayout = function getLayout(pageContent: React.ReactElement) {
  return <Layout variant="frame-layout">{pageContent}</Layout>;
};

export default function ContentPage({
  user,
  userSocialPlatform,
  content,
}: ContentPageProps) {
  const SEO = {
    title: user.fullName,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  };

  return (
    <Page seoData={SEO}>
      <h1 className={styles.contentPageTitle}>{user.fullName}</h1>
      <UserSocialPlatforms socialPlatforms={userSocialPlatform} />
      <div className={styles.contentPageItems}>
        {content.map((contentData) => (
          <ContentItem key={contentData.content.id} contentData={contentData} />
        ))}
      </div>
    </Page>
  );
}

export async function getStaticPaths() {
  // Replace with dynamic data that contain all urlPaths[] =>
  const urlPaths = ["upwork_coding_task"];

  const paths = urlPaths.map((path) => ({
    params: { urlPath: path },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({
  params,
}: {
  params: {
    urlPath: IUser["urlPath"];
  };
}) {
  try {
    const data = await mainDataService(params.urlPath);
    const { user, userSocialPlatform, content } = data;

    return {
      props: {
        user,
        userSocialPlatform,
        content,
      },
    };
  } catch (e) {
    return {
      props: {
        user: {},
        userSocialPlatform: [],
        content: [],
      },
    };
  }
}
