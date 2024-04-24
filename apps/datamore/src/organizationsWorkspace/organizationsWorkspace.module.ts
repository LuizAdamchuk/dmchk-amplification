import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OrganizationsWorkspaceModuleBase } from "./base/organizationsWorkspace.module.base";
import { OrganizationsWorkspaceService } from "./organizationsWorkspace.service";
import { OrganizationsWorkspaceController } from "./organizationsWorkspace.controller";
import { OrganizationsWorkspaceResolver } from "./organizationsWorkspace.resolver";

@Module({
  imports: [OrganizationsWorkspaceModuleBase, forwardRef(() => AuthModule)],
  controllers: [OrganizationsWorkspaceController],
  providers: [OrganizationsWorkspaceService, OrganizationsWorkspaceResolver],
  exports: [OrganizationsWorkspaceService],
})
export class OrganizationsWorkspaceModule {}
