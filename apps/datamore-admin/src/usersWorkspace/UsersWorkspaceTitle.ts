import { UsersWorkspace as TUsersWorkspace } from "../api/usersWorkspace/UsersWorkspace";

export const USERSWORKSPACE_TITLE_FIELD = "id";

export const UsersWorkspaceTitle = (record: TUsersWorkspace): string => {
  return record.id?.toString() || String(record.id);
};
