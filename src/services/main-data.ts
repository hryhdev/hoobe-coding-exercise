import { IData } from "../types/data";
import { IUser } from "../types/user";

export const mainDataService = async (urlPath: IUser['urlPath']) => {
  // handle fetch by urlPath param...

  const request = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || ''}api/data`);
  const data = await request.json();
  return data;
} 