import { Metadata } from "../metadata/Metadata";

export type Data = {
  content: string | null;
  createdAt: Date;
  id: string;
  metadata?: Metadata | null;
  relatedMetadata: string | null;
  updatedAt: Date;
  year: number | null;
};
