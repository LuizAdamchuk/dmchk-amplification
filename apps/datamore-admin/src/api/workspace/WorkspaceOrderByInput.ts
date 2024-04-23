import { SortOrder } from "../../util/SortOrder";

export type WorkspaceOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
  updatedAt?: SortOrder;
};
