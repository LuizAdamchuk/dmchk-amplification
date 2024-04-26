import { QlikIntegrationCreateNestedManyWithoutQlikWorkspacesInput } from "./QlikIntegrationCreateNestedManyWithoutQlikWorkspacesInput";
import { WorkspaceCreateNestedManyWithoutQlikWorkspacesInput } from "./WorkspaceCreateNestedManyWithoutQlikWorkspacesInput";

export type QlikWorkspaceCreateInput = {
  qlikintegration?: QlikIntegrationCreateNestedManyWithoutQlikWorkspacesInput;
  workspace?: WorkspaceCreateNestedManyWithoutQlikWorkspacesInput;
};
