import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserConfigModuleBase } from "./base/userConfig.module.base";
import { UserConfigService } from "./userConfig.service";
import { UserConfigController } from "./userConfig.controller";
import { UserConfigResolver } from "./userConfig.resolver";

@Module({
  imports: [UserConfigModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserConfigController],
  providers: [UserConfigService, UserConfigResolver],
  exports: [UserConfigService],
})
export class UserConfigModule {}
