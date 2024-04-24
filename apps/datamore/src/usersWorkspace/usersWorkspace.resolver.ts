import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UsersWorkspaceResolverBase } from "./base/usersWorkspace.resolver.base";
import { UsersWorkspace } from "./base/UsersWorkspace";
import { UsersWorkspaceService } from "./usersWorkspace.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UsersWorkspace)
export class UsersWorkspaceResolver extends UsersWorkspaceResolverBase {
  constructor(
    protected readonly service: UsersWorkspaceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
