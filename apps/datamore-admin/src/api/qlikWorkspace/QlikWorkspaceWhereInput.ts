import { StringFilter } from "../../util/StringFilter";
import { QlikIntegrationWhereUniqueInput } from "../qlikIntegration/QlikIntegrationWhereUniqueInput";
import { WorkspaceListRelationFilter } from "../workspace/WorkspaceListRelationFilter";

export type QlikWorkspaceWhereInput = {
  id?: StringFilter;
  qlikintegration?: QlikIntegrationWhereUniqueInput;
  workspace?: WorkspaceListRelationFilter;
};
