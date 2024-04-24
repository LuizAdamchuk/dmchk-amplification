import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserVerificationCodeWhereInput = {
  expiresAt?: DateTimeFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  verificationCode?: StringFilter;
};
