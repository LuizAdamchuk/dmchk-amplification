import { OrganizationsWorkspace } from "../organizationsWorkspace/OrganizationsWorkspace";

export type Organization = {
  createdAt: Date;
  domain: string | null;
  id: string;
  name: string;
  organizationsWorkspaces?: Array<OrganizationsWorkspace>;
  owner: string | null;
  slug: string;
  updatedAt: Date;
};
