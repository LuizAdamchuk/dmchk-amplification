import { QlikWorkspaceWhereInput } from "./QlikWorkspaceWhereInput";
import { QlikWorkspaceOrderByInput } from "./QlikWorkspaceOrderByInput";

export type QlikWorkspaceFindManyArgs = {
  where?: QlikWorkspaceWhereInput;
  orderBy?: Array<QlikWorkspaceOrderByInput>;
  skip?: number;
  take?: number;
};
