import { DataWhereUniqueInput } from "./DataWhereUniqueInput";
import { DataUpdateInput } from "./DataUpdateInput";

export type UpdateDataArgs = {
  where: DataWhereUniqueInput;
  data: DataUpdateInput;
};
