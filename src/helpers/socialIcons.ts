import { IUserSocialPlatform, SocialPlatform } from "../types/user";

export const getSocialIconNameByType = (socialPlatform: IUserSocialPlatform['socialPlatform']) => {
  switch (socialPlatform) {
    case SocialPlatform['instagram']:
      return 'instagram';
    case SocialPlatform['tiktok']:
      return 'tiktok';
    case SocialPlatform['tiktok']:
      return 'tiktok';
    case SocialPlatform['threads']:
      return 'threads';
    case SocialPlatform['twitter']:
      return 'twitter';
    default:
      return 'not-found-img';
  }
}


