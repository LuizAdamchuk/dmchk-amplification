import { OrganizationsWorkspace as TOrganizationsWorkspace } from "../api/organizationsWorkspace/OrganizationsWorkspace";

export const ORGANIZATIONSWORKSPACE_TITLE_FIELD = "id";

export const OrganizationsWorkspaceTitle = (
  record: TOrganizationsWorkspace
): string => {
  return record.id?.toString() || String(record.id);
};
