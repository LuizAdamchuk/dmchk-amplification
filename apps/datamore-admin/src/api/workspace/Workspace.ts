import { OrganizationsWorkspace } from "../organizationsWorkspace/OrganizationsWorkspace";
import { QlikWorkspace } from "../qlikWorkspace/QlikWorkspace";
import { UsersWorkspace } from "../usersWorkspace/UsersWorkspace";

export type Workspace = {
  createdAt: Date;
  id: string;
  name: string;
  organizationsWorkspaces?: Array<OrganizationsWorkspace>;
  qlikWorkspaces?: Array<QlikWorkspace>;
  slug: string;
  updatedAt: Date;
  usersWorkspaces?: Array<UsersWorkspace>;
};
