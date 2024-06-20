import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DataServiceBase } from "./base/data.service.base";

@Injectable()
export class DataService extends DataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
