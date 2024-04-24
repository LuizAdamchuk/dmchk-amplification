import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QlikWorkspaceService } from "./qlikWorkspace.service";
import { QlikWorkspaceControllerBase } from "./base/qlikWorkspace.controller.base";

@swagger.ApiTags("qlikWorkspaces")
@common.Controller("qlikWorkspaces")
export class QlikWorkspaceController extends QlikWorkspaceControllerBase {
  constructor(
    protected readonly service: QlikWorkspaceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
