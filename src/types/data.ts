
import { IUser, IUserSocialPlatform } from '@/src/types/user';
import { IContent } from '@/src/types/content';

export type IData = {
  user: IUser,
  userSocialPlatform: IUserSocialPlatform[],
  content: IContent[],
}