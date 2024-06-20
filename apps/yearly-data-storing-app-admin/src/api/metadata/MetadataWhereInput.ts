import { DataListRelationFilter } from "../data/DataListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MetadataWhereInput = {
  dataItems?: DataListRelationFilter;
  id?: StringFilter;
  key?: StringNullableFilter;
  metaKey?: StringNullableFilter;
  metaValue?: StringNullableFilter;
  value?: StringNullableFilter;
};
