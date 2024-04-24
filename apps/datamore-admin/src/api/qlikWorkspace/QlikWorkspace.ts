import { QlikIntegration } from "../qlikIntegration/QlikIntegration";
import { Workspace } from "../workspace/Workspace";

export type QlikWorkspace = {
  createdAt: Date;
  id: string;
  qlikintegration?: Array<QlikIntegration>;
  updatedAt: Date;
  workspace?: Array<Workspace>;
};
