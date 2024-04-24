import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrganizationsWorkspaceServiceBase } from "./base/organizationsWorkspace.service.base";

@Injectable()
export class OrganizationsWorkspaceService extends OrganizationsWorkspaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
