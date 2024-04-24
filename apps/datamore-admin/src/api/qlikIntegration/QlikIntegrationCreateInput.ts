import { QlikWorkspaceCreateNestedManyWithoutQlikIntegrationsInput } from "./QlikWorkspaceCreateNestedManyWithoutQlikIntegrationsInput";

export type QlikIntegrationCreateInput = {
  alias?: string | null;
  domain: string;
  issuer?: boolean | null;
  keyId?: string | null;
  qlikId?: string | null;
  qlikTheme?: string | null;
  qlikWebIntegrationId?: string | null;
  qlikWorkspaces?: QlikWorkspaceCreateNestedManyWithoutQlikIntegrationsInput;
};
