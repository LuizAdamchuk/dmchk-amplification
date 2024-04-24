import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";

export type UsersWorkspaceCreateInput = {
  user?: UserWhereUniqueInput | null;
  workspace?: WorkspaceWhereUniqueInput | null;
};
