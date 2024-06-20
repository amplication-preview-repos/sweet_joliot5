import { DataUpdateManyWithoutMetadataItemsInput } from "./DataUpdateManyWithoutMetadataItemsInput";

export type MetadataUpdateInput = {
  dataItems?: DataUpdateManyWithoutMetadataItemsInput;
  key?: string | null;
  metaKey?: string | null;
  metaValue?: string | null;
  value?: string | null;
};
