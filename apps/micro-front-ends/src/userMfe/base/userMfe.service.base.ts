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
  UserMfe, // @ts-ignore
  Mfe, // @ts-ignore
  User,
} from "@prisma/client";

export class UserMfeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.UserMfeCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserMfeCountArgs>
  ): Promise<number> {
    return this.prisma.userMfe.count(args);
  }

  async userMfes<T extends Prisma.UserMfeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserMfeFindManyArgs>
  ): Promise<UserMfe[]> {
    return this.prisma.userMfe.findMany(args);
  }
  async userMfe<T extends Prisma.UserMfeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserMfeFindUniqueArgs>
  ): Promise<UserMfe | null> {
    return this.prisma.userMfe.findUnique(args);
  }
  async createUserMfe<T extends Prisma.UserMfeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserMfeCreateArgs>
  ): Promise<UserMfe> {
    return this.prisma.userMfe.create<T>(args);
  }
  async updateUserMfe<T extends Prisma.UserMfeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserMfeUpdateArgs>
  ): Promise<UserMfe> {
    return this.prisma.userMfe.update<T>(args);
  }
  async deleteUserMfe<T extends Prisma.UserMfeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserMfeDeleteArgs>
  ): Promise<UserMfe> {
    return this.prisma.userMfe.delete(args);
  }

  async findMfe(
    parentId: string,
    args: Prisma.MfeFindManyArgs
  ): Promise<Mfe[]> {
    return this.prisma.userMfe
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .mfe(args);
  }

  async findUser(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.userMfe
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .user(args);
  }
}
