import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QlikIntegrationService } from "./qlikIntegration.service";
import { QlikIntegrationControllerBase } from "./base/qlikIntegration.controller.base";

@swagger.ApiTags("qlikIntegrations")
@common.Controller("qlikIntegrations")
export class QlikIntegrationController extends QlikIntegrationControllerBase {
  constructor(
    protected readonly service: QlikIntegrationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
