import { DataCreateNestedManyWithoutMetadataItemsInput } from "./DataCreateNestedManyWithoutMetadataItemsInput";

export type MetadataCreateInput = {
  dataItems?: DataCreateNestedManyWithoutMetadataItemsInput;
  key?: string | null;
  metaKey?: string | null;
  metaValue?: string | null;
  value?: string | null;
};
