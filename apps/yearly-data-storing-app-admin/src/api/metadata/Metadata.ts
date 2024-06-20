import { Data } from "../data/Data";

export type Metadata = {
  createdAt: Date;
  dataItems?: Array<Data>;
  id: string;
  key: string | null;
  metaKey: string | null;
  metaValue: string | null;
  updatedAt: Date;
  value: string | null;
};
