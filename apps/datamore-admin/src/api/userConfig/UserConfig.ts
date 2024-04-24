import { User } from "../user/User";

export type UserConfig = {
  alias: string | null;
  createdAt: Date;
  id: string;
  language: string | null;
  mode: string | null;
  picture: string | null;
  updatedAt: Date;
  user?: User | null;
};
