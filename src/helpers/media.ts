import { IContent } from "../types/content";

export const getMediaFileUrl = (id: IContent['content']['id']) => {
  return `/assets/content-id-${id}-image.jpg`;
}