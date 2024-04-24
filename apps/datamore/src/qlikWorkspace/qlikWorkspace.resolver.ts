import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QlikWorkspaceResolverBase } from "./base/qlikWorkspace.resolver.base";
import { QlikWorkspace } from "./base/QlikWorkspace";
import { QlikWorkspaceService } from "./qlikWorkspace.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QlikWorkspace)
export class QlikWorkspaceResolver extends QlikWorkspaceResolverBase {
  constructor(
    protected readonly service: QlikWorkspaceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
