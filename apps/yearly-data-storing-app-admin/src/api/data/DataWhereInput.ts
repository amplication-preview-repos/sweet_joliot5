import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MetadataWhereUniqueInput } from "../metadata/MetadataWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type DataWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  metadata?: MetadataWhereUniqueInput;
  relatedMetadata?: StringNullableFilter;
  year?: IntNullableFilter;
};
