import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { IContent } from "@/src/types/content";
import { getMediaFileUrl } from "@/src/helpers/media";

import styles from "./ContentItem.module.scss";

const itemVariants: Variants = {
  offscreen: {
    y: 90,
  },
  onscreen: {
    y: 15,
    rotate: -0.2,
    transition: {
      type: "wawe",
      bounce: 0.4,
      duration: 0.4,
    },
  },
};

interface ContentItemProps {
  contentData: IContent;
}

const ContentItem: React.FC<ContentItemProps> = ({ contentData }) => {
  const {
    content: { id, link, title, hasPhoto },
  } = contentData;

  const ItemWithImage = () => (
    <Link href={link} target="_blank">
      {" "}
      <div
        className={styles.contentItemWithImage}
        style={{ backgroundImage: `url(${getMediaFileUrl(id)})` }}
      >
        <div className={styles.contentItemAssetsInfo}>
          <span>{title}</span>
          <Image
            src={"/assets/hoobe.svg"}
            width="24"
            height="24"
            alt="hoo.be"
          />
        </div>
      </div>
    </Link>
  );

  const ItemWithIframe = () => (
    <div className={styles.contentItemIframe}>
      <iframe
        width="640"
        height="360"
        src={link}
        title={title}
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  );

  const getItemLayout = () => {
    if (hasPhoto && link) {
      return <ItemWithImage />;
    } else {
      return <ItemWithIframe />;
    }
  };

  const itemLayout = getItemLayout();

  return (
    <motion.div
      className={styles.contentItem}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
      variants={itemVariants}
    >
      {itemLayout}
    </motion.div>
  );
};

export default ContentItem;
