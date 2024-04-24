import { QlikWorkspace as TQlikWorkspace } from "../api/qlikWorkspace/QlikWorkspace";

export const QLIKWORKSPACE_TITLE_FIELD = "id";

export const QlikWorkspaceTitle = (record: TQlikWorkspace): string => {
  return record.id?.toString() || String(record.id);
};
