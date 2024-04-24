import { StringFilter } from "../../util/StringFilter";
import { OrganizationsWorkspaceListRelationFilter } from "../organizationsWorkspace/OrganizationsWorkspaceListRelationFilter";
import { QlikWorkspaceListRelationFilter } from "../qlikWorkspace/QlikWorkspaceListRelationFilter";
import { UsersWorkspaceListRelationFilter } from "../usersWorkspace/UsersWorkspaceListRelationFilter";

export type WorkspaceWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  organizationsWorkspaces?: OrganizationsWorkspaceListRelationFilter;
  qlikWorkspaces?: QlikWorkspaceListRelationFilter;
  slug?: StringFilter;
  usersWorkspaces?: UsersWorkspaceListRelationFilter;
};
