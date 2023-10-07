export type IUser = {
  id: string;
  fullName: string;
  handle?: string;
  altId: string;
  userType: number; // Enum type ?
  categoryId: string,
  urlPath: string;
  hasPhoto: boolean;
  about: string;
  createdUtc: string;
  updatedUtc: string;
  imageUpdatedUtc: string;
}

export enum SocialPlatform {
  instagram = 0,
  tiktok = 6,
  threads = 59,
  twitter = 7
}

export type IUserSocialPlatform = {
  id: string;
  altId: string;
  userId: IUser['id'];
  socialPlatform: number; // Enum type?
  handle?: string;
  link: string;
  createdUtc: string;
}