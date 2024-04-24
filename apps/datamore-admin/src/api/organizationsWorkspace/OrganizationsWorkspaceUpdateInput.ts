import { OrganizationUpdateManyWithoutOrganizationsWorkspacesInput } from "./OrganizationUpdateManyWithoutOrganizationsWorkspacesInput";
import { WorkspaceUpdateManyWithoutOrganizationsWorkspacesInput } from "./WorkspaceUpdateManyWithoutOrganizationsWorkspacesInput";

export type OrganizationsWorkspaceUpdateInput = {
  organization?: OrganizationUpdateManyWithoutOrganizationsWorkspacesInput;
  workspace?: WorkspaceUpdateManyWithoutOrganizationsWorkspacesInput;
};
