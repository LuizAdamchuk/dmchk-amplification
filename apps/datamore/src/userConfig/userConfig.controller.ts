import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserConfigService } from "./userConfig.service";
import { UserConfigControllerBase } from "./base/userConfig.controller.base";

@swagger.ApiTags("userConfigs")
@common.Controller("userConfigs")
export class UserConfigController extends UserConfigControllerBase {
  constructor(
    protected readonly service: UserConfigService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
