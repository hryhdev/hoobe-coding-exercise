import { IUser } from "./user";

export type IContent = {
  content: {
    id: string;
    altId: string;
    title: string;
    contentType: number; // Enum type ?
    mimeType?: number; // Enum type ?
    categoryAltId: string;
    link: string;
    isDraft: boolean;
    isDirectLinkEnabled: boolean;
    isEmbedEnabled: boolean;
    hasPhoto: boolean;
    sortOrder?: number;
    isFeatured: boolean;
    isDeleted: boolean;
    isEditable: boolean;
    socialPlatform: number;
    userId: IUser['id'];
    createdUtc?: string;
    updatedUtc?: string;
    imageUpdatedUtc?: string;
  },
  childCount: number;
  imageCount: number;
  videoCount: number;
  contentSettings: Object;
}

