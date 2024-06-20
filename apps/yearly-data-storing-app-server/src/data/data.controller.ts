import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DataService } from "./data.service";
import { DataControllerBase } from "./base/data.controller.base";

@swagger.ApiTags("data")
@common.Controller("data")
export class DataController extends DataControllerBase {
  constructor(
    protected readonly service: DataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
