import { User } from "../user/User";

export type UserVerificationCode = {
  createdAt: Date;
  expiresAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
  verificationCode: string;
};
