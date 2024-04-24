import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UsersWorkspaceModuleBase } from "./base/usersWorkspace.module.base";
import { UsersWorkspaceService } from "./usersWorkspace.service";
import { UsersWorkspaceController } from "./usersWorkspace.controller";
import { UsersWorkspaceResolver } from "./usersWorkspace.resolver";

@Module({
  imports: [UsersWorkspaceModuleBase, forwardRef(() => AuthModule)],
  controllers: [UsersWorkspaceController],
  providers: [UsersWorkspaceService, UsersWorkspaceResolver],
  exports: [UsersWorkspaceService],
})
export class UsersWorkspaceModule {}
