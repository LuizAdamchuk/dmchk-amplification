import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserVerificationCodeUpdateInput = {
  expiresAt?: Date;
  user?: UserWhereUniqueInput | null;
  verificationCode?: string;
};
