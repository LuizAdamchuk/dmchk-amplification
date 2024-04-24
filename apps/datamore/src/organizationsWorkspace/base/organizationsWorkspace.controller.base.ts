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
import { OrganizationsWorkspaceService } from "../organizationsWorkspace.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { OrganizationsWorkspaceCreateInput } from "./OrganizationsWorkspaceCreateInput";
import { OrganizationsWorkspace } from "./OrganizationsWorkspace";
import { OrganizationsWorkspaceFindManyArgs } from "./OrganizationsWorkspaceFindManyArgs";
import { OrganizationsWorkspaceWhereUniqueInput } from "./OrganizationsWorkspaceWhereUniqueInput";
import { OrganizationsWorkspaceUpdateInput } from "./OrganizationsWorkspaceUpdateInput";
import { OrganizationFindManyArgs } from "../../organization/base/OrganizationFindManyArgs";
import { Organization } from "../../organization/base/Organization";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { WorkspaceFindManyArgs } from "../../workspace/base/WorkspaceFindManyArgs";
import { Workspace } from "../../workspace/base/Workspace";
import { WorkspaceWhereUniqueInput } from "../../workspace/base/WorkspaceWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OrganizationsWorkspaceControllerBase {
  constructor(
    protected readonly service: OrganizationsWorkspaceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: OrganizationsWorkspace })
  @nestAccessControl.UseRoles({
    resource: "OrganizationsWorkspace",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createOrganizationsWorkspace(
    @common.Body() data: OrganizationsWorkspaceCreateInput
  ): Promise<OrganizationsWorkspace> {
    return await this.service.createOrganizationsWorkspace({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [OrganizationsWorkspace] })
  @ApiNestedQuery(OrganizationsWorkspaceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "OrganizationsWorkspace",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async organizationsWorkspaces(
    @common.Req() request: Request
  ): Promise<OrganizationsWorkspace[]> {
    const args = plainToClass(
      OrganizationsWorkspaceFindManyArgs,
      request.query
    );
    return this.service.organizationsWorkspaces({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: OrganizationsWorkspace })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OrganizationsWorkspace",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async organizationsWorkspace(
    @common.Param() params: OrganizationsWorkspaceWhereUniqueInput
  ): Promise<OrganizationsWorkspace | null> {
    const result = await this.service.organizationsWorkspace({
      where: params,
      select: {
        createdAt: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: OrganizationsWorkspace })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OrganizationsWorkspace",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateOrganizationsWorkspace(
    @common.Param() params: OrganizationsWorkspaceWhereUniqueInput,
    @common.Body() data: OrganizationsWorkspaceUpdateInput
  ): Promise<OrganizationsWorkspace | null> {
    try {
      return await this.service.updateOrganizationsWorkspace({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: OrganizationsWorkspace })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OrganizationsWorkspace",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteOrganizationsWorkspace(
    @common.Param() params: OrganizationsWorkspaceWhereUniqueInput
  ): Promise<OrganizationsWorkspace | null> {
    try {
      return await this.service.deleteOrganizationsWorkspace({
        where: params,
        select: {
          createdAt: true,
          id: true,
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
  @common.Get("/:id/organization")
  @ApiNestedQuery(OrganizationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  async findOrganization(
    @common.Req() request: Request,
    @common.Param() params: OrganizationsWorkspaceWhereUniqueInput
  ): Promise<Organization[]> {
    const query = plainToClass(OrganizationFindManyArgs, request.query);
    const results = await this.service.findOrganization(params.id, {
      ...query,
      select: {
        createdAt: true,
        domain: true,
        id: true,
        name: true,
        owner: true,
        slug: true,
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

  @common.Post("/:id/organization")
  @nestAccessControl.UseRoles({
    resource: "OrganizationsWorkspace",
    action: "update",
    possession: "any",
  })
  async connectOrganization(
    @common.Param() params: OrganizationsWorkspaceWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organization: {
        connect: body,
      },
    };
    await this.service.updateOrganizationsWorkspace({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/organization")
  @nestAccessControl.UseRoles({
    resource: "OrganizationsWorkspace",
    action: "update",
    possession: "any",
  })
  async updateOrganization(
    @common.Param() params: OrganizationsWorkspaceWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organization: {
        set: body,
      },
    };
    await this.service.updateOrganizationsWorkspace({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/organization")
  @nestAccessControl.UseRoles({
    resource: "OrganizationsWorkspace",
    action: "update",
    possession: "any",
  })
  async disconnectOrganization(
    @common.Param() params: OrganizationsWorkspaceWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organization: {
        disconnect: body,
      },
    };
    await this.service.updateOrganizationsWorkspace({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/workspace")
  @ApiNestedQuery(WorkspaceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Workspace",
    action: "read",
    possession: "any",
  })
  async findWorkspace(
    @common.Req() request: Request,
    @common.Param() params: OrganizationsWorkspaceWhereUniqueInput
  ): Promise<Workspace[]> {
    const query = plainToClass(WorkspaceFindManyArgs, request.query);
    const results = await this.service.findWorkspace(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        name: true,
        slug: true,
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

  @common.Post("/:id/workspace")
  @nestAccessControl.UseRoles({
    resource: "OrganizationsWorkspace",
    action: "update",
    possession: "any",
  })
  async connectWorkspace(
    @common.Param() params: OrganizationsWorkspaceWhereUniqueInput,
    @common.Body() body: WorkspaceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workspace: {
        connect: body,
      },
    };
    await this.service.updateOrganizationsWorkspace({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/workspace")
  @nestAccessControl.UseRoles({
    resource: "OrganizationsWorkspace",
    action: "update",
    possession: "any",
  })
  async updateWorkspace(
    @common.Param() params: OrganizationsWorkspaceWhereUniqueInput,
    @common.Body() body: WorkspaceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workspace: {
        set: body,
      },
    };
    await this.service.updateOrganizationsWorkspace({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/workspace")
  @nestAccessControl.UseRoles({
    resource: "OrganizationsWorkspace",
    action: "update",
    possession: "any",
  })
  async disconnectWorkspace(
    @common.Param() params: OrganizationsWorkspaceWhereUniqueInput,
    @common.Body() body: WorkspaceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workspace: {
        disconnect: body,
      },
    };
    await this.service.updateOrganizationsWorkspace({
      where: params,
      data,
      select: { id: true },
    });
  }
}
