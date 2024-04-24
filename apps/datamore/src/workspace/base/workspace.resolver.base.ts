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
import { Workspace } from "./Workspace";
import { WorkspaceCountArgs } from "./WorkspaceCountArgs";
import { WorkspaceFindManyArgs } from "./WorkspaceFindManyArgs";
import { WorkspaceFindUniqueArgs } from "./WorkspaceFindUniqueArgs";
import { CreateWorkspaceArgs } from "./CreateWorkspaceArgs";
import { UpdateWorkspaceArgs } from "./UpdateWorkspaceArgs";
import { DeleteWorkspaceArgs } from "./DeleteWorkspaceArgs";
import { OrganizationsWorkspaceFindManyArgs } from "../../organizationsWorkspace/base/OrganizationsWorkspaceFindManyArgs";
import { OrganizationsWorkspace } from "../../organizationsWorkspace/base/OrganizationsWorkspace";
import { QlikWorkspaceFindManyArgs } from "../../qlikWorkspace/base/QlikWorkspaceFindManyArgs";
import { QlikWorkspace } from "../../qlikWorkspace/base/QlikWorkspace";
import { UsersWorkspaceFindManyArgs } from "../../usersWorkspace/base/UsersWorkspaceFindManyArgs";
import { UsersWorkspace } from "../../usersWorkspace/base/UsersWorkspace";
import { WorkspaceService } from "../workspace.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Workspace)
export class WorkspaceResolverBase {
  constructor(
    protected readonly service: WorkspaceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Workspace",
    action: "read",
    possession: "any",
  })
  async _workspacesMeta(
    @graphql.Args() args: WorkspaceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Workspace])
  @nestAccessControl.UseRoles({
    resource: "Workspace",
    action: "read",
    possession: "any",
  })
  async workspaces(
    @graphql.Args() args: WorkspaceFindManyArgs
  ): Promise<Workspace[]> {
    return this.service.workspaces(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Workspace, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Workspace",
    action: "read",
    possession: "own",
  })
  async workspace(
    @graphql.Args() args: WorkspaceFindUniqueArgs
  ): Promise<Workspace | null> {
    const result = await this.service.workspace(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Workspace)
  @nestAccessControl.UseRoles({
    resource: "Workspace",
    action: "create",
    possession: "any",
  })
  async createWorkspace(
    @graphql.Args() args: CreateWorkspaceArgs
  ): Promise<Workspace> {
    return await this.service.createWorkspace({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Workspace)
  @nestAccessControl.UseRoles({
    resource: "Workspace",
    action: "update",
    possession: "any",
  })
  async updateWorkspace(
    @graphql.Args() args: UpdateWorkspaceArgs
  ): Promise<Workspace | null> {
    try {
      return await this.service.updateWorkspace({
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

  @graphql.Mutation(() => Workspace)
  @nestAccessControl.UseRoles({
    resource: "Workspace",
    action: "delete",
    possession: "any",
  })
  async deleteWorkspace(
    @graphql.Args() args: DeleteWorkspaceArgs
  ): Promise<Workspace | null> {
    try {
      return await this.service.deleteWorkspace(args);
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
  @graphql.ResolveField(() => [OrganizationsWorkspace], {
    name: "organizationsWorkspaces",
  })
  @nestAccessControl.UseRoles({
    resource: "OrganizationsWorkspace",
    action: "read",
    possession: "any",
  })
  async findOrganizationsWorkspaces(
    @graphql.Parent() parent: Workspace,
    @graphql.Args() args: OrganizationsWorkspaceFindManyArgs
  ): Promise<OrganizationsWorkspace[]> {
    const results = await this.service.findOrganizationsWorkspaces(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [QlikWorkspace], { name: "qlikWorkspaces" })
  @nestAccessControl.UseRoles({
    resource: "QlikWorkspace",
    action: "read",
    possession: "any",
  })
  async findQlikWorkspaces(
    @graphql.Parent() parent: Workspace,
    @graphql.Args() args: QlikWorkspaceFindManyArgs
  ): Promise<QlikWorkspace[]> {
    const results = await this.service.findQlikWorkspaces(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [UsersWorkspace], { name: "usersWorkspaces" })
  @nestAccessControl.UseRoles({
    resource: "UsersWorkspace",
    action: "read",
    possession: "any",
  })
  async findUsersWorkspaces(
    @graphql.Parent() parent: Workspace,
    @graphql.Args() args: UsersWorkspaceFindManyArgs
  ): Promise<UsersWorkspace[]> {
    const results = await this.service.findUsersWorkspaces(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}