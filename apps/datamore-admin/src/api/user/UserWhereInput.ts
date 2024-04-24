import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserConfigListRelationFilter } from "../userConfig/UserConfigListRelationFilter";
import { UsersWorkspaceListRelationFilter } from "../usersWorkspace/UsersWorkspaceListRelationFilter";
import { UserVerificationCodeListRelationFilter } from "../userVerificationCode/UserVerificationCodeListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  userConfigs?: UserConfigListRelationFilter;
  username?: StringFilter;
  usersWorkspaces?: UsersWorkspaceListRelationFilter;
  userVerificationCodes?: UserVerificationCodeListRelationFilter;
};
