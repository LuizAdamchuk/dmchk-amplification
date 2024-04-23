import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserMfeServiceBase } from "./base/userMfe.service.base";

@Injectable()
export class UserMfeService extends UserMfeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
