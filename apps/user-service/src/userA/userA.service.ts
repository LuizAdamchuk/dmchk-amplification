import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserAServiceBase } from "./base/userA.service.base";

@Injectable()
export class UserAService extends UserAServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
