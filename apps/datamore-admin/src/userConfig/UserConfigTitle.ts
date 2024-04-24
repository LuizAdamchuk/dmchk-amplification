import { UserConfig as TUserConfig } from "../api/userConfig/UserConfig";

export const USERCONFIG_TITLE_FIELD = "alias";

export const UserConfigTitle = (record: TUserConfig): string => {
  return record.alias?.toString() || String(record.id);
};
