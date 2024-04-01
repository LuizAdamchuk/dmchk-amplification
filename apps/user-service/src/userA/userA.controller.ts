import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserAService } from "./userA.service";
import { UserAControllerBase } from "./base/userA.controller.base";

@swagger.ApiTags("userAs")
@common.Controller("userAs")
export class UserAController extends UserAControllerBase {
  constructor(protected readonly service: UserAService) {
    super(service);
  }
}
