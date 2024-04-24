import { InputJsonValue } from "../../types";
import { UserConfigUpdateManyWithoutUsersInput } from "./UserConfigUpdateManyWithoutUsersInput";
import { UsersWorkspaceUpdateManyWithoutUsersInput } from "./UsersWorkspaceUpdateManyWithoutUsersInput";
import { UserVerificationCodeUpdateManyWithoutUsersInput } from "./UserVerificationCodeUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  status?: boolean | null;
  userConfigs?: UserConfigUpdateManyWithoutUsersInput;
  username?: string;
  usersWorkspaces?: UsersWorkspaceUpdateManyWithoutUsersInput;
  userVerificationCodes?: UserVerificationCodeUpdateManyWithoutUsersInput;
};
