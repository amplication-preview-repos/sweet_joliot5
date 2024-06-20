import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DataModuleBase } from "./base/data.module.base";
import { DataService } from "./data.service";
import { DataController } from "./data.controller";
import { DataResolver } from "./data.resolver";

@Module({
  imports: [DataModuleBase, forwardRef(() => AuthModule)],
  controllers: [DataController],
  providers: [DataService, DataResolver],
  exports: [DataService],
})
export class DataModule {}
