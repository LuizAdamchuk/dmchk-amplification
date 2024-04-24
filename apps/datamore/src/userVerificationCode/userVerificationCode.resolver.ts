import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserVerificationCodeResolverBase } from "./base/userVerificationCode.resolver.base";
import { UserVerificationCode } from "./base/UserVerificationCode";
import { UserVerificationCodeService } from "./userVerificationCode.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserVerificationCode)
export class UserVerificationCodeResolver extends UserVerificationCodeResolverBase {
  constructor(
    protected readonly service: UserVerificationCodeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
