import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MfeService } from "./mfe.service";
import { MfeControllerBase } from "./base/mfe.controller.base";

@swagger.ApiTags("mfes")
@common.Controller("mfes")
export class MfeController extends MfeControllerBase {
  constructor(protected readonly service: MfeService) {
    super(service);
  }
}
