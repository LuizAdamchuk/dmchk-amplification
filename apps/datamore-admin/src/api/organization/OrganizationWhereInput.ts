import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type OrganizationWhereInput = {
  domain?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  owner?: StringNullableFilter;
  slug?: StringFilter;
};
