import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrganizationsWorkspaceService } from "./organizationsWorkspace.service";
import { OrganizationsWorkspaceControllerBase } from "./base/organizationsWorkspace.controller.base";

@swagger.ApiTags("organizationsWorkspaces")
@common.Controller("organizationsWorkspaces")
export class OrganizationsWorkspaceController extends OrganizationsWorkspaceControllerBase {
  constructor(
    protected readonly service: OrganizationsWorkspaceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
