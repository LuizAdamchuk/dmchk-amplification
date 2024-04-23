import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QlikIntegrationServiceBase } from "./base/qlikIntegration.service.base";

@Injectable()
export class QlikIntegrationService extends QlikIntegrationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
