import { QlikIntegrationWhereUniqueInput } from "../qlikIntegration/QlikIntegrationWhereUniqueInput";
import { WorkspaceUpdateManyWithoutQlikWorkspacesInput } from "./WorkspaceUpdateManyWithoutQlikWorkspacesInput";

export type QlikWorkspaceUpdateInput = {
  qlikintegration?: QlikIntegrationWhereUniqueInput | null;
  workspace?: WorkspaceUpdateManyWithoutQlikWorkspacesInput;
};
