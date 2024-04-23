import { StringFilter } from "../../util/StringFilter";

export type WorkspaceWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  slug?: StringFilter;
};
