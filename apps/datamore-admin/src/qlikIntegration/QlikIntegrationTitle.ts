import { QlikIntegration as TQlikIntegration } from "../api/qlikIntegration/QlikIntegration";

export const QLIKINTEGRATION_TITLE_FIELD = "alias";

export const QlikIntegrationTitle = (record: TQlikIntegration): string => {
  return record.alias?.toString() || String(record.id);
};
