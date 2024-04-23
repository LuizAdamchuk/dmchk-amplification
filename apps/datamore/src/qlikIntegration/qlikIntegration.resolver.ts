import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QlikIntegrationResolverBase } from "./base/qlikIntegration.resolver.base";
import { QlikIntegration } from "./base/QlikIntegration";
import { QlikIntegrationService } from "./qlikIntegration.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QlikIntegration)
export class QlikIntegrationResolver extends QlikIntegrationResolverBase {
  constructor(
    protected readonly service: QlikIntegrationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
