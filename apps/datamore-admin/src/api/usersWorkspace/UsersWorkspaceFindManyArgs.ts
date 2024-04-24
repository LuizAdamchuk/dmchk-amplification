import { UsersWorkspaceWhereInput } from "./UsersWorkspaceWhereInput";
import { UsersWorkspaceOrderByInput } from "./UsersWorkspaceOrderByInput";

export type UsersWorkspaceFindManyArgs = {
  where?: UsersWorkspaceWhereInput;
  orderBy?: Array<UsersWorkspaceOrderByInput>;
  skip?: number;
  take?: number;
};
