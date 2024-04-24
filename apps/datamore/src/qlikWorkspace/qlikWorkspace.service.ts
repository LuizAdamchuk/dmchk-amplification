import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QlikWorkspaceServiceBase } from "./base/qlikWorkspace.service.base";

@Injectable()
export class QlikWorkspaceService extends QlikWorkspaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
