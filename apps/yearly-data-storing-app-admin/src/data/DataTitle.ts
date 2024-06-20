import { Data as TData } from "../api/data/Data";

export const DATA_TITLE_FIELD = "relatedMetadata";

export const DataTitle = (record: TData): string => {
  return record.relatedMetadata?.toString() || String(record.id);
};
