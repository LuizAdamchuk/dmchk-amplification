/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Mfe, // @ts-ignore
  UserMfe,
} from "@prisma/client";

export class MfeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MfeCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.MfeCountArgs>
  ): Promise<number> {
    return this.prisma.mfe.count(args);
  }

  async mfes<T extends Prisma.MfeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MfeFindManyArgs>
  ): Promise<Mfe[]> {
    return this.prisma.mfe.findMany(args);
  }
  async mfe<T extends Prisma.MfeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MfeFindUniqueArgs>
  ): Promise<Mfe | null> {
    return this.prisma.mfe.findUnique(args);
  }
  async createMfe<T extends Prisma.MfeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MfeCreateArgs>
  ): Promise<Mfe> {
    return this.prisma.mfe.create<T>(args);
  }
  async updateMfe<T extends Prisma.MfeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MfeUpdateArgs>
  ): Promise<Mfe> {
    return this.prisma.mfe.update<T>(args);
  }
  async deleteMfe<T extends Prisma.MfeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MfeDeleteArgs>
  ): Promise<Mfe> {
    return this.prisma.mfe.delete(args);
  }

  async findUsersMfes(
    parentId: string,
    args: Prisma.UserMfeFindManyArgs
  ): Promise<UserMfe[]> {
    return this.prisma.mfe
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .usersMfes(args);
  }
}
