import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QlikWorkspaceModuleBase } from "./base/qlikWorkspace.module.base";
import { QlikWorkspaceService } from "./qlikWorkspace.service";
import { QlikWorkspaceController } from "./qlikWorkspace.controller";
import { QlikWorkspaceResolver } from "./qlikWorkspace.resolver";

@Module({
  imports: [QlikWorkspaceModuleBase, forwardRef(() => AuthModule)],
  controllers: [QlikWorkspaceController],
  providers: [QlikWorkspaceService, QlikWorkspaceResolver],
  exports: [QlikWorkspaceService],
})
export class QlikWorkspaceModule {}
