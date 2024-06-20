import { SortOrder } from "../../util/SortOrder";

export type DataOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  metadataId?: SortOrder;
  relatedMetadata?: SortOrder;
  updatedAt?: SortOrder;
  year?: SortOrder;
};
