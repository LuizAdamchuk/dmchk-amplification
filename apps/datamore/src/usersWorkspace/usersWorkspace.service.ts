import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UsersWorkspaceServiceBase } from "./base/usersWorkspace.service.base";

@Injectable()
export class UsersWorkspaceService extends UsersWorkspaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
