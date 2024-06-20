import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MetadataService } from "./metadata.service";
import { MetadataControllerBase } from "./base/metadata.controller.base";

@swagger.ApiTags("metadata")
@common.Controller("metadata")
export class MetadataController extends MetadataControllerBase {
  constructor(
    protected readonly service: MetadataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
