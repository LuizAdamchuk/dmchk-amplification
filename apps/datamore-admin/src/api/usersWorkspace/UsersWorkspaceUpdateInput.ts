import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";

export type UsersWorkspaceUpdateInput = {
  user?: UserWhereUniqueInput | null;
  workspace?: WorkspaceWhereUniqueInput | null;
};
