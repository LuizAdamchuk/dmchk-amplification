import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserConfigServiceBase } from "./base/userConfig.service.base";

@Injectable()
export class UserConfigService extends UserConfigServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
