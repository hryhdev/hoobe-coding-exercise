import { IUserSocialPlatform } from "../../types/user";
import UserSocialPlatformItem from "./UserSocialPlatformItem";
import styles from "./UserSocialPlatforms.module.scss";

interface UserSocialPlatformsProps {
  socialPlatforms: IUserSocialPlatform[];
}
const UserSocialPlatforms: React.FC<UserSocialPlatformsProps> = ({
  socialPlatforms,
}) => {
  return (
    <div className={styles.userSocialPlatforms}>
      {socialPlatforms.map((socialPlatform) => (
        <UserSocialPlatformItem
          key={socialPlatform.id}
          platform={socialPlatform}
        />
      ))}
    </div>
  );
};

export default UserSocialPlatforms;
