import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";

export type UsersWorkspaceWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  workspace?: WorkspaceWhereUniqueInput;
};
