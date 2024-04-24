import { QlikWorkspace } from "../qlikWorkspace/QlikWorkspace";

export type QlikIntegration = {
  alias: string | null;
  createdAt: Date;
  domain: string;
  id: string;
  issuer: boolean | null;
  keyId: string | null;
  qlikId: string | null;
  qlikTheme: string | null;
  qlikWebIntegrationId: string | null;
  qlikWorkspaces?: Array<QlikWorkspace>;
  updatedAt: Date;
};
