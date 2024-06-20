import { SortOrder } from "../../util/SortOrder";

export type MetadataOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  key?: SortOrder;
  metaKey?: SortOrder;
  metaValue?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
