import { UserVerificationCodeWhereInput } from "./UserVerificationCodeWhereInput";
import { UserVerificationCodeOrderByInput } from "./UserVerificationCodeOrderByInput";

export type UserVerificationCodeFindManyArgs = {
  where?: UserVerificationCodeWhereInput;
  orderBy?: Array<UserVerificationCodeOrderByInput>;
  skip?: number;
  take?: number;
};
