import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QlikIntegrationModuleBase } from "./base/qlikIntegration.module.base";
import { QlikIntegrationService } from "./qlikIntegration.service";
import { QlikIntegrationController } from "./qlikIntegration.controller";
import { QlikIntegrationResolver } from "./qlikIntegration.resolver";

@Module({
  imports: [QlikIntegrationModuleBase, forwardRef(() => AuthModule)],
  controllers: [QlikIntegrationController],
  providers: [QlikIntegrationService, QlikIntegrationResolver],
  exports: [QlikIntegrationService],
})
export class QlikIntegrationModule {}
