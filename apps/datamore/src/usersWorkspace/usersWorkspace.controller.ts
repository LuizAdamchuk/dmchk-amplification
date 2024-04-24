import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UsersWorkspaceService } from "./usersWorkspace.service";
import { UsersWorkspaceControllerBase } from "./base/usersWorkspace.controller.base";

@swagger.ApiTags("usersWorkspaces")
@common.Controller("usersWorkspaces")
export class UsersWorkspaceController extends UsersWorkspaceControllerBase {
  constructor(
    protected readonly service: UsersWorkspaceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
