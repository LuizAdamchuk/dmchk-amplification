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
import { UsersService } from "../users.service";
import { UsersCreateInput } from "./UsersCreateInput";
import { Users } from "./Users";
import { UsersFindManyArgs } from "./UsersFindManyArgs";
import { UsersWhereUniqueInput } from "./UsersWhereUniqueInput";
import { UsersUpdateInput } from "./UsersUpdateInput";
import { MfeFindManyArgs } from "../../mfe/base/MfeFindManyArgs";
import { Mfe } from "../../mfe/base/Mfe";
import { MfeWhereUniqueInput } from "../../mfe/base/MfeWhereUniqueInput";

export class UsersControllerBase {
  constructor(protected readonly service: UsersService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Users })
  async createUsers(@common.Body() data: UsersCreateInput): Promise<Users> {
    return await this.service.createUsers({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Users] })
  @ApiNestedQuery(UsersFindManyArgs)
  async usersItems(@common.Req() request: Request): Promise<Users[]> {
    const args = plainToClass(UsersFindManyArgs, request.query);
    return this.service.usersItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Users })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async users(
    @common.Param() params: UsersWhereUniqueInput
  ): Promise<Users | null> {
    const result = await this.service.users({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
        username: true,
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
  @swagger.ApiOkResponse({ type: Users })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUsers(
    @common.Param() params: UsersWhereUniqueInput,
    @common.Body() data: UsersUpdateInput
  ): Promise<Users | null> {
    try {
      return await this.service.updateUsers({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
          username: true,
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
  @swagger.ApiOkResponse({ type: Users })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUsers(
    @common.Param() params: UsersWhereUniqueInput
  ): Promise<Users | null> {
    try {
      return await this.service.deleteUsers({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
          username: true,
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

  @common.Get("/:id/mfes")
  @ApiNestedQuery(MfeFindManyArgs)
  async findMfes(
    @common.Req() request: Request,
    @common.Param() params: UsersWhereUniqueInput
  ): Promise<Mfe[]> {
    const query = plainToClass(MfeFindManyArgs, request.query);
    const results = await this.service.findMfes(params.id, {
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

  @common.Post("/:id/mfes")
  async connectMfes(
    @common.Param() params: UsersWhereUniqueInput,
    @common.Body() body: MfeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mfes: {
        connect: body,
      },
    };
    await this.service.updateUsers({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/mfes")
  async updateMfes(
    @common.Param() params: UsersWhereUniqueInput,
    @common.Body() body: MfeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mfes: {
        set: body,
      },
    };
    await this.service.updateUsers({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/mfes")
  async disconnectMfes(
    @common.Param() params: UsersWhereUniqueInput,
    @common.Body() body: MfeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mfes: {
        disconnect: body,
      },
    };
    await this.service.updateUsers({
      where: params,
      data,
      select: { id: true },
    });
  }
}