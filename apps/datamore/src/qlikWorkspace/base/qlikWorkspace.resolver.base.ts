/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { QlikWorkspace } from "./QlikWorkspace";
import { QlikWorkspaceCountArgs } from "./QlikWorkspaceCountArgs";
import { QlikWorkspaceFindManyArgs } from "./QlikWorkspaceFindManyArgs";
import { QlikWorkspaceFindUniqueArgs } from "./QlikWorkspaceFindUniqueArgs";
import { CreateQlikWorkspaceArgs } from "./CreateQlikWorkspaceArgs";
import { UpdateQlikWorkspaceArgs } from "./UpdateQlikWorkspaceArgs";
import { DeleteQlikWorkspaceArgs } from "./DeleteQlikWorkspaceArgs";
import { QlikIntegrationFindManyArgs } from "../../qlikIntegration/base/QlikIntegrationFindManyArgs";
import { QlikIntegration } from "../../qlikIntegration/base/QlikIntegration";
import { WorkspaceFindManyArgs } from "../../workspace/base/WorkspaceFindManyArgs";
import { Workspace } from "../../workspace/base/Workspace";
import { QlikWorkspaceService } from "../qlikWorkspace.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QlikWorkspace)
export class QlikWorkspaceResolverBase {
  constructor(
    protected readonly service: QlikWorkspaceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "QlikWorkspace",
    action: "read",
    possession: "any",
  })
  async _qlikWorkspacesMeta(
    @graphql.Args() args: QlikWorkspaceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [QlikWorkspace])
  @nestAccessControl.UseRoles({
    resource: "QlikWorkspace",
    action: "read",
    possession: "any",
  })
  async qlikWorkspaces(
    @graphql.Args() args: QlikWorkspaceFindManyArgs
  ): Promise<QlikWorkspace[]> {
    return this.service.qlikWorkspaces(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => QlikWorkspace, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "QlikWorkspace",
    action: "read",
    possession: "own",
  })
  async qlikWorkspace(
    @graphql.Args() args: QlikWorkspaceFindUniqueArgs
  ): Promise<QlikWorkspace | null> {
    const result = await this.service.qlikWorkspace(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => QlikWorkspace)
  @nestAccessControl.UseRoles({
    resource: "QlikWorkspace",
    action: "create",
    possession: "any",
  })
  async createQlikWorkspace(
    @graphql.Args() args: CreateQlikWorkspaceArgs
  ): Promise<QlikWorkspace> {
    return await this.service.createQlikWorkspace({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => QlikWorkspace)
  @nestAccessControl.UseRoles({
    resource: "QlikWorkspace",
    action: "update",
    possession: "any",
  })
  async updateQlikWorkspace(
    @graphql.Args() args: UpdateQlikWorkspaceArgs
  ): Promise<QlikWorkspace | null> {
    try {
      return await this.service.updateQlikWorkspace({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => QlikWorkspace)
  @nestAccessControl.UseRoles({
    resource: "QlikWorkspace",
    action: "delete",
    possession: "any",
  })
  async deleteQlikWorkspace(
    @graphql.Args() args: DeleteQlikWorkspaceArgs
  ): Promise<QlikWorkspace | null> {
    try {
      return await this.service.deleteQlikWorkspace(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [QlikIntegration], { name: "qlikintegration" })
  @nestAccessControl.UseRoles({
    resource: "QlikIntegration",
    action: "read",
    possession: "any",
  })
  async findQlikintegration(
    @graphql.Parent() parent: QlikWorkspace,
    @graphql.Args() args: QlikIntegrationFindManyArgs
  ): Promise<QlikIntegration[]> {
    const results = await this.service.findQlikintegration(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Workspace], { name: "workspace" })
  @nestAccessControl.UseRoles({
    resource: "Workspace",
    action: "read",
    possession: "any",
  })
  async findWorkspace(
    @graphql.Parent() parent: QlikWorkspace,
    @graphql.Args() args: WorkspaceFindManyArgs
  ): Promise<Workspace[]> {
    const results = await this.service.findWorkspace(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
