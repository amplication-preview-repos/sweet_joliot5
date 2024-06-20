import { DataWhereInput } from "./DataWhereInput";
import { DataOrderByInput } from "./DataOrderByInput";

export type DataFindManyArgs = {
  where?: DataWhereInput;
  orderBy?: Array<DataOrderByInput>;
  skip?: number;
  take?: number;
};
