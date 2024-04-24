import { UserVerificationCode as TUserVerificationCode } from "../api/userVerificationCode/UserVerificationCode";

export const USERVERIFICATIONCODE_TITLE_FIELD = "verificationCode";

export const UserVerificationCodeTitle = (
  record: TUserVerificationCode
): string => {
  return record.verificationCode?.toString() || String(record.id);
};
