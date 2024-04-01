import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserMfeService } from "./userMfe.service";
import { UserMfeControllerBase } from "./base/userMfe.controller.base";

@swagger.ApiTags("userMfes")
@common.Controller("userMfes")
export class UserMfeController extends UserMfeControllerBase {
  constructor(protected readonly service: UserMfeService) {
    super(service);
  }
}
