import { User } from "../user/User";
import { Workspace } from "../workspace/Workspace";

export type UsersWorkspace = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
  workspace?: Workspace | null;
};
