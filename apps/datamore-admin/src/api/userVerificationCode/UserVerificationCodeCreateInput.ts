import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserVerificationCodeCreateInput = {
  expiresAt: Date;
  user?: UserWhereUniqueInput | null;
  verificationCode: string;
};
