import { OrganizationsWorkspaceCreateNestedManyWithoutWorkspacesInput } from "./OrganizationsWorkspaceCreateNestedManyWithoutWorkspacesInput";
import { QlikWorkspaceCreateNestedManyWithoutWorkspacesInput } from "./QlikWorkspaceCreateNestedManyWithoutWorkspacesInput";
import { UsersWorkspaceCreateNestedManyWithoutWorkspacesInput } from "./UsersWorkspaceCreateNestedManyWithoutWorkspacesInput";

export type WorkspaceCreateInput = {
  name: string;
  organizationsWorkspaces?: OrganizationsWorkspaceCreateNestedManyWithoutWorkspacesInput;
  qlikWorkspaces?: QlikWorkspaceCreateNestedManyWithoutWorkspacesInput;
  slug: string;
  usersWorkspaces?: UsersWorkspaceCreateNestedManyWithoutWorkspacesInput;
};
