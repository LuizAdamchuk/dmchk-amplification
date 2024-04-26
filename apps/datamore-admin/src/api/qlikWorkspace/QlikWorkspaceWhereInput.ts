import { StringFilter } from "../../util/StringFilter";
import { QlikIntegrationListRelationFilter } from "../qlikIntegration/QlikIntegrationListRelationFilter";
import { WorkspaceListRelationFilter } from "../workspace/WorkspaceListRelationFilter";

export type QlikWorkspaceWhereInput = {
  id?: StringFilter;
  qlikintegration?: QlikIntegrationListRelationFilter;
  workspace?: WorkspaceListRelationFilter;
};
