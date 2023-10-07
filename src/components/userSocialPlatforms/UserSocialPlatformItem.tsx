import Image from "next/image";
import Link from "next/link";
import { getSocialIconNameByType } from "@/src/helpers/socialIcons";
import { IUserSocialPlatform } from "@/src/types/user";

import styles from "./UserSocialPlatformItem.module.scss";

interface UserSocialPlatformItemProps {
  platform: IUserSocialPlatform;
}
const UserSocialPlatformItem: React.FC<UserSocialPlatformItemProps> = ({
  platform,
}) => {
  const { link, socialPlatform } = platform;

  const icon = getSocialIconNameByType(socialPlatform);

  return (
    <div className={styles.userSocialPlatformItem}>
      <Link href={link} target="_blank">
        <Image
          src={`/assets/${icon}.svg`}
          width="24"
          height="24"
          alt="hoo.be coding exercise"
        />
      </Link>
    </div>
  );
};

export default UserSocialPlatformItem;
