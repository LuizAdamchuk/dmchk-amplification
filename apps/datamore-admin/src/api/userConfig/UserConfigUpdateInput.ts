import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserConfigUpdateInput = {
  alias?: string | null;
  language?: string | null;
  mode?: string | null;
  picture?: string | null;
  user?: UserWhereUniqueInput | null;
};
