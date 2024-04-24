import { UserConfigWhereInput } from "./UserConfigWhereInput";
import { UserConfigOrderByInput } from "./UserConfigOrderByInput";

export type UserConfigFindManyArgs = {
  where?: UserConfigWhereInput;
  orderBy?: Array<UserConfigOrderByInput>;
  skip?: number;
  take?: number;
};
