import { QlikIntegrationUpdateManyWithoutQlikWorkspacesInput } from "./QlikIntegrationUpdateManyWithoutQlikWorkspacesInput";
import { WorkspaceUpdateManyWithoutQlikWorkspacesInput } from "./WorkspaceUpdateManyWithoutQlikWorkspacesInput";

export type QlikWorkspaceUpdateInput = {
  qlikintegration?: QlikIntegrationUpdateManyWithoutQlikWorkspacesInput;
  workspace?: WorkspaceUpdateManyWithoutQlikWorkspacesInput;
};
