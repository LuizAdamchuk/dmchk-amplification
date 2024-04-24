import { QlikIntegrationWhereUniqueInput } from "../qlikIntegration/QlikIntegrationWhereUniqueInput";
import { WorkspaceCreateNestedManyWithoutQlikWorkspacesInput } from "./WorkspaceCreateNestedManyWithoutQlikWorkspacesInput";

export type QlikWorkspaceCreateInput = {
  qlikintegration?: QlikIntegrationWhereUniqueInput | null;
  workspace?: WorkspaceCreateNestedManyWithoutQlikWorkspacesInput;
};
