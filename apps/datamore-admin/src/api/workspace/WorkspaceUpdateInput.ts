import { OrganizationsWorkspaceUpdateManyWithoutWorkspacesInput } from "./OrganizationsWorkspaceUpdateManyWithoutWorkspacesInput";
import { QlikWorkspaceUpdateManyWithoutWorkspacesInput } from "./QlikWorkspaceUpdateManyWithoutWorkspacesInput";
import { UsersWorkspaceUpdateManyWithoutWorkspacesInput } from "./UsersWorkspaceUpdateManyWithoutWorkspacesInput";

export type WorkspaceUpdateInput = {
  name?: string;
  organizationsWorkspaces?: OrganizationsWorkspaceUpdateManyWithoutWorkspacesInput;
  qlikWorkspaces?: QlikWorkspaceUpdateManyWithoutWorkspacesInput;
  slug?: string;
  usersWorkspaces?: UsersWorkspaceUpdateManyWithoutWorkspacesInput;
};
