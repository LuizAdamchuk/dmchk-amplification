import { Organization } from "../organization/Organization";
import { Workspace } from "../workspace/Workspace";

export type OrganizationsWorkspace = {
  createdAt: Date;
  id: string;
  organization?: Array<Organization>;
  updatedAt: Date;
  workspace?: Array<Workspace>;
};
