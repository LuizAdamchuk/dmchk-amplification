import { QlikWorkspaceUpdateManyWithoutQlikIntegrationsInput } from "./QlikWorkspaceUpdateManyWithoutQlikIntegrationsInput";

export type QlikIntegrationUpdateInput = {
  alias?: string | null;
  domain?: string;
  issuer?: boolean | null;
  keyId?: string | null;
  qlikId?: string | null;
  qlikTheme?: string | null;
  qlikWebIntegrationId?: string | null;
  qlikWorkspaces?: QlikWorkspaceUpdateManyWithoutQlikIntegrationsInput;
};
