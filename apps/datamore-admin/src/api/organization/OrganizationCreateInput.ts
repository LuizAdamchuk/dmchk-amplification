import { OrganizationsWorkspaceCreateNestedManyWithoutOrganizationsInput } from "./OrganizationsWorkspaceCreateNestedManyWithoutOrganizationsInput";

export type OrganizationCreateInput = {
  domain?: string | null;
  name: string;
  organizationsWorkspaces?: OrganizationsWorkspaceCreateNestedManyWithoutOrganizationsInput;
  owner?: string | null;
  slug: string;
};
