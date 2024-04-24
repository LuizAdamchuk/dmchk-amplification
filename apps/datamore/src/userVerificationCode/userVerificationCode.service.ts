import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserVerificationCodeServiceBase } from "./base/userVerificationCode.service.base";

@Injectable()
export class UserVerificationCodeService extends UserVerificationCodeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
