import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserConfigCreateInput = {
  alias?: string | null;
  language?: string | null;
  mode?: string | null;
  picture?: string | null;
  user?: UserWhereUniqueInput | null;
};
