import { SortOrder } from "../../util/SortOrder";

export type UserVerificationCodeOrderByInput = {
  createdAt?: SortOrder;
  expiresAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  verificationCode?: SortOrder;
};
