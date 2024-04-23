import { QlikIntegrationWhereInput } from "./QlikIntegrationWhereInput";
import { QlikIntegrationOrderByInput } from "./QlikIntegrationOrderByInput";

export type QlikIntegrationFindManyArgs = {
  where?: QlikIntegrationWhereInput;
  orderBy?: Array<QlikIntegrationOrderByInput>;
  skip?: number;
  take?: number;
};
