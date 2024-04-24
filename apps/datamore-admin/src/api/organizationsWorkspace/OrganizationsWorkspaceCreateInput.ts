import { OrganizationCreateNestedManyWithoutOrganizationsWorkspacesInput } from "./OrganizationCreateNestedManyWithoutOrganizationsWorkspacesInput";
import { WorkspaceCreateNestedManyWithoutOrganizationsWorkspacesInput } from "./WorkspaceCreateNestedManyWithoutOrganizationsWorkspacesInput";

export type OrganizationsWorkspaceCreateInput = {
  organization?: OrganizationCreateNestedManyWithoutOrganizationsWorkspacesInput;
  workspace?: WorkspaceCreateNestedManyWithoutOrganizationsWorkspacesInput;
};
