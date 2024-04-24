import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OrganizationsWorkspaceResolverBase } from "./base/organizationsWorkspace.resolver.base";
import { OrganizationsWorkspace } from "./base/OrganizationsWorkspace";
import { OrganizationsWorkspaceService } from "./organizationsWorkspace.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OrganizationsWorkspace)
export class OrganizationsWorkspaceResolver extends OrganizationsWorkspaceResolverBase {
  constructor(
    protected readonly service: OrganizationsWorkspaceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
