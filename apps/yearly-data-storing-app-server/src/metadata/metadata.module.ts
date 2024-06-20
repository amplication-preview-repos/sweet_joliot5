import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MetadataModuleBase } from "./base/metadata.module.base";
import { MetadataService } from "./metadata.service";
import { MetadataController } from "./metadata.controller";
import { MetadataResolver } from "./metadata.resolver";

@Module({
  imports: [MetadataModuleBase, forwardRef(() => AuthModule)],
  controllers: [MetadataController],
  providers: [MetadataService, MetadataResolver],
  exports: [MetadataService],
})
export class MetadataModule {}
