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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { QlikIntegrationService } from "../qlikIntegration.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { QlikIntegrationCreateInput } from "./QlikIntegrationCreateInput";
import { QlikIntegration } from "./QlikIntegration";
import { QlikIntegrationFindManyArgs } from "./QlikIntegrationFindManyArgs";
import { QlikIntegrationWhereUniqueInput } from "./QlikIntegrationWhereUniqueInput";
import { QlikIntegrationUpdateInput } from "./QlikIntegrationUpdateInput";
import { QlikWorkspaceFindManyArgs } from "../../qlikWorkspace/base/QlikWorkspaceFindManyArgs";
import { QlikWorkspace } from "../../qlikWorkspace/base/QlikWorkspace";
import { QlikWorkspaceWhereUniqueInput } from "../../qlikWorkspace/base/QlikWorkspaceWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class QlikIntegrationControllerBase {
  constructor(
    protected readonly service: QlikIntegrationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QlikIntegration })
  @nestAccessControl.UseRoles({
    resource: "QlikIntegration",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createQlikIntegration(
    @common.Body() data: QlikIntegrationCreateInput
  ): Promise<QlikIntegration> {
    return await this.service.createQlikIntegration({
      data: data,
      select: {
        alias: true,
        createdAt: true,
        domain: true,
        id: true,
        issuer: true,
        keyId: true,
        qlikId: true,
        qlikTheme: true,
        qlikWebIntegrationId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [QlikIntegration] })
  @ApiNestedQuery(QlikIntegrationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "QlikIntegration",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async qlikIntegrations(
    @common.Req() request: Request
  ): Promise<QlikIntegration[]> {
    const args = plainToClass(QlikIntegrationFindManyArgs, request.query);
    return this.service.qlikIntegrations({
      ...args,
      select: {
        alias: true,
        createdAt: true,
        domain: true,
        id: true,
        issuer: true,
        keyId: true,
        qlikId: true,
        qlikTheme: true,
        qlikWebIntegrationId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: QlikIntegration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QlikIntegration",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async qlikIntegration(
    @common.Param() params: QlikIntegrationWhereUniqueInput
  ): Promise<QlikIntegration | null> {
    const result = await this.service.qlikIntegration({
      where: params,
      select: {
        alias: true,
        createdAt: true,
        domain: true,
        id: true,
        issuer: true,
        keyId: true,
        qlikId: true,
        qlikTheme: true,
        qlikWebIntegrationId: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: QlikIntegration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QlikIntegration",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateQlikIntegration(
    @common.Param() params: QlikIntegrationWhereUniqueInput,
    @common.Body() data: QlikIntegrationUpdateInput
  ): Promise<QlikIntegration | null> {
    try {
      return await this.service.updateQlikIntegration({
        where: params,
        data: data,
        select: {
          alias: true,
          createdAt: true,
          domain: true,
          id: true,
          issuer: true,
          keyId: true,
          qlikId: true,
          qlikTheme: true,
          qlikWebIntegrationId: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: QlikIntegration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QlikIntegration",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteQlikIntegration(
    @common.Param() params: QlikIntegrationWhereUniqueInput
  ): Promise<QlikIntegration | null> {
    try {
      return await this.service.deleteQlikIntegration({
        where: params,
        select: {
          alias: true,
          createdAt: true,
          domain: true,
          id: true,
          issuer: true,
          keyId: true,
          qlikId: true,
          qlikTheme: true,
          qlikWebIntegrationId: true,
          updatedAt: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/qlikWorkspaces")
  @ApiNestedQuery(QlikWorkspaceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "QlikWorkspace",
    action: "read",
    possession: "any",
  })
  async findQlikWorkspaces(
    @common.Req() request: Request,
    @common.Param() params: QlikIntegrationWhereUniqueInput
  ): Promise<QlikWorkspace[]> {
    const query = plainToClass(QlikWorkspaceFindManyArgs, request.query);
    const results = await this.service.findQlikWorkspaces(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        qlikintegration: {
          select: {
            id: true,
          },
        },

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

  @common.Post("/:id/qlikWorkspaces")
  @nestAccessControl.UseRoles({
    resource: "QlikIntegration",
    action: "update",
    possession: "any",
  })
  async connectQlikWorkspaces(
    @common.Param() params: QlikIntegrationWhereUniqueInput,
    @common.Body() body: QlikWorkspaceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      qlikWorkspaces: {
        connect: body,
      },
    };
    await this.service.updateQlikIntegration({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/qlikWorkspaces")
  @nestAccessControl.UseRoles({
    resource: "QlikIntegration",
    action: "update",
    possession: "any",
  })
  async updateQlikWorkspaces(
    @common.Param() params: QlikIntegrationWhereUniqueInput,
    @common.Body() body: QlikWorkspaceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      qlikWorkspaces: {
        set: body,
      },
    };
    await this.service.updateQlikIntegration({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/qlikWorkspaces")
  @nestAccessControl.UseRoles({
    resource: "QlikIntegration",
    action: "update",
    possession: "any",
  })
  async disconnectQlikWorkspaces(
    @common.Param() params: QlikIntegrationWhereUniqueInput,
    @common.Body() body: QlikWorkspaceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      qlikWorkspaces: {
        disconnect: body,
      },
    };
    await this.service.updateQlikIntegration({
      where: params,
      data,
      select: { id: true },
    });
  }
}
