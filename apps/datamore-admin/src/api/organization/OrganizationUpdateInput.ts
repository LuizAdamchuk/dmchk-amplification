import { OrganizationsWorkspaceUpdateManyWithoutOrganizationsInput } from "./OrganizationsWorkspaceUpdateManyWithoutOrganizationsInput";

export type OrganizationUpdateInput = {
  domain?: string | null;
  name?: string;
  organizationsWorkspaces?: OrganizationsWorkspaceUpdateManyWithoutOrganizationsInput;
  owner?: string | null;
  slug?: string;
};
