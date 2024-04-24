import { InputJsonValue } from "../../types";
import { UserConfigCreateNestedManyWithoutUsersInput } from "./UserConfigCreateNestedManyWithoutUsersInput";
import { UsersWorkspaceCreateNestedManyWithoutUsersInput } from "./UsersWorkspaceCreateNestedManyWithoutUsersInput";
import { UserVerificationCodeCreateNestedManyWithoutUsersInput } from "./UserVerificationCodeCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  status?: boolean | null;
  userConfigs?: UserConfigCreateNestedManyWithoutUsersInput;
  username: string;
  usersWorkspaces?: UsersWorkspaceCreateNestedManyWithoutUsersInput;
  userVerificationCodes?: UserVerificationCodeCreateNestedManyWithoutUsersInput;
};
