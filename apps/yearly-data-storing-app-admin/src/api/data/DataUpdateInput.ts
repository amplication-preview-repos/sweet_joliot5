import { MetadataWhereUniqueInput } from "../metadata/MetadataWhereUniqueInput";

export type DataUpdateInput = {
  content?: string | null;
  metadata?: MetadataWhereUniqueInput | null;
  relatedMetadata?: string | null;
  year?: number | null;
};
