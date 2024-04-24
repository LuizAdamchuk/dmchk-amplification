import { StringFilter } from "../../util/StringFilter";
import { OrganizationListRelationFilter } from "../organization/OrganizationListRelationFilter";
import { WorkspaceListRelationFilter } from "../workspace/WorkspaceListRelationFilter";

export type OrganizationsWorkspaceWhereInput = {
  id?: StringFilter;
  organization?: OrganizationListRelationFilter;
  workspace?: WorkspaceListRelationFilter;
};
