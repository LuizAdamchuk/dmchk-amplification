import { JsonValue } from "type-fest";
import { UserConfig } from "../userConfig/UserConfig";
import { UsersWorkspace } from "../usersWorkspace/UsersWorkspace";
import { UserVerificationCode } from "../userVerificationCode/UserVerificationCode";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  status: boolean | null;
  updatedAt: Date;
  userConfigs?: Array<UserConfig>;
  username: string;
  usersWorkspaces?: Array<UsersWorkspace>;
  userVerificationCodes?: Array<UserVerificationCode>;
};
