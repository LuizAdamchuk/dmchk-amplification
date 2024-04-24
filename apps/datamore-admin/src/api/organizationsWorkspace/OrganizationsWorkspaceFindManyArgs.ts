import { OrganizationsWorkspaceWhereInput } from "./OrganizationsWorkspaceWhereInput";
import { OrganizationsWorkspaceOrderByInput } from "./OrganizationsWorkspaceOrderByInput";

export type OrganizationsWorkspaceFindManyArgs = {
  where?: OrganizationsWorkspaceWhereInput;
  orderBy?: Array<OrganizationsWorkspaceOrderByInput>;
  skip?: number;
  take?: number;
};
