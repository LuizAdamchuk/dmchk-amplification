import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { QlikWorkspaceListRelationFilter } from "../qlikWorkspace/QlikWorkspaceListRelationFilter";

export type QlikIntegrationWhereInput = {
  alias?: StringNullableFilter;
  domain?: StringFilter;
  id?: StringFilter;
  issuer?: BooleanNullableFilter;
  keyId?: StringNullableFilter;
  qlikId?: StringNullableFilter;
  qlikTheme?: StringNullableFilter;
  qlikWebIntegrationId?: StringNullableFilter;
  qlikWorkspaces?: QlikWorkspaceListRelationFilter;
};
