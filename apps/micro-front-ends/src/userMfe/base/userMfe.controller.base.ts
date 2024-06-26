/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { UserMfeService } from "../userMfe.service";
import { UserMfeCreateInput } from "./UserMfeCreateInput";
import { UserMfe } from "./UserMfe";
import { UserMfeFindManyArgs } from "./UserMfeFindManyArgs";
import { UserMfeWhereUniqueInput } from "./UserMfeWhereUniqueInput";
import { UserMfeUpdateInput } from "./UserMfeUpdateInput";
import { MfeFindManyArgs } from "../../mfe/base/MfeFindManyArgs";
import { Mfe } from "../../mfe/base/Mfe";
import { MfeWhereUniqueInput } from "../../mfe/base/MfeWhereUniqueInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

export class UserMfeControllerBase {
  constructor(protected readonly service: UserMfeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserMfe })
  async createUserMfe(
    @common.Body() data: UserMfeCreateInput
  ): Promise<UserMfe> {
    return await this.service.createUserMfe({
      data: data,
      select: {
        createdAt: true,
        id: true,
        mfeId: true,
        updatedAt: true,
        userId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UserMfe] })
  @ApiNestedQuery(UserMfeFindManyArgs)
  async userMfes(@common.Req() request: Request): Promise<UserMfe[]> {
    const args = plainToClass(UserMfeFindManyArgs, request.query);
    return this.service.userMfes({
      ...args,
      select: {
        createdAt: true,
        id: true,
        mfeId: true,
        updatedAt: true,
        userId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserMfe })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async userMfe(
    @common.Param() params: UserMfeWhereUniqueInput
  ): Promise<UserMfe | null> {
    const result = await this.service.userMfe({
      where: params,
      select: {
        createdAt: true,
        id: true,
        mfeId: true,
        updatedAt: true,
        userId: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UserMfe })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUserMfe(
    @common.Param() params: UserMfeWhereUniqueInput,
    @common.Body() data: UserMfeUpdateInput
  ): Promise<UserMfe | null> {
    try {
      return await this.service.updateUserMfe({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          mfeId: true,
          updatedAt: true,
          userId: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: UserMfe })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUserMfe(
    @common.Param() params: UserMfeWhereUniqueInput
  ): Promise<UserMfe | null> {
    try {
      return await this.service.deleteUserMfe({
        where: params,
        select: {
          createdAt: true,
          id: true,
          mfeId: true,
          updatedAt: true,
          userId: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/mfe")
  @ApiNestedQuery(MfeFindManyArgs)
  async findMfe(
    @common.Req() request: Request,
    @common.Param() params: UserMfeWhereUniqueInput
  ): Promise<Mfe[]> {
    const query = plainToClass(MfeFindManyArgs, request.query);
    const results = await this.service.findMfe(params.id, {
      ...query,
      select: {
        active: true,
        authenticationRequired: true,
        createdAt: true,
        description: true,
        id: true,
        key: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/mfe")
  async connectMfe(
    @common.Param() params: UserMfeWhereUniqueInput,
    @common.Body() body: MfeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mfe: {
        connect: body,
      },
    };
    await this.service.updateUserMfe({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/mfe")
  async updateMfe(
    @common.Param() params: UserMfeWhereUniqueInput,
    @common.Body() body: MfeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mfe: {
        set: body,
      },
    };
    await this.service.updateUserMfe({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/mfe")
  async disconnectMfe(
    @common.Param() params: UserMfeWhereUniqueInput,
    @common.Body() body: MfeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mfe: {
        disconnect: body,
      },
    };
    await this.service.updateUserMfe({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/user")
  @ApiNestedQuery(UserFindManyArgs)
  async findUser(
    @common.Req() request: Request,
    @common.Param() params: UserMfeWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findUser(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
        username: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/user")
  async connectUser(
    @common.Param() params: UserMfeWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      user: {
        connect: body,
      },
    };
    await this.service.updateUserMfe({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/user")
  async updateUser(
    @common.Param() params: UserMfeWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      user: {
        set: body,
      },
    };
    await this.service.updateUserMfe({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/user")
  async disconnectUser(
    @common.Param() params: UserMfeWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      user: {
        disconnect: body,
      },
    };
    await this.service.updateUserMfe({
      where: params,
      data,
      select: { id: true },
    });
  }
}
