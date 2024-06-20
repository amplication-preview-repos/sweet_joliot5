import { MetadataWhereUniqueInput } from "../metadata/MetadataWhereUniqueInput";

export type DataCreateInput = {
  content?: string | null;
  metadata?: MetadataWhereUniqueInput | null;
  relatedMetadata?: string | null;
  year?: number | null;
};
