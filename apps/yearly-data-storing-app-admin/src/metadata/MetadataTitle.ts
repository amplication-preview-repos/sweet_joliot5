import { Metadata as TMetadata } from "../api/metadata/Metadata";

export const METADATA_TITLE_FIELD = "key";

export const MetadataTitle = (record: TMetadata): string => {
  return record.key?.toString() || String(record.id);
};
