import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserConfigWhereInput = {
  alias?: StringNullableFilter;
  id?: StringFilter;
  language?: StringNullableFilter;
  mode?: StringNullableFilter;
  picture?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
