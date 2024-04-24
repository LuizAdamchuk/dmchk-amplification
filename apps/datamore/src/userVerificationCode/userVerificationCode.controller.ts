import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserVerificationCodeService } from "./userVerificationCode.service";
import { UserVerificationCodeControllerBase } from "./base/userVerificationCode.controller.base";

@swagger.ApiTags("userVerificationCodes")
@common.Controller("userVerificationCodes")
export class UserVerificationCodeController extends UserVerificationCodeControllerBase {
  constructor(
    protected readonly service: UserVerificationCodeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
