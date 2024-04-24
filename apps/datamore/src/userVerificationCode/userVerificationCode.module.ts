import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserVerificationCodeModuleBase } from "./base/userVerificationCode.module.base";
import { UserVerificationCodeService } from "./userVerificationCode.service";
import { UserVerificationCodeController } from "./userVerificationCode.controller";
import { UserVerificationCodeResolver } from "./userVerificationCode.resolver";

@Module({
  imports: [UserVerificationCodeModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserVerificationCodeController],
  providers: [UserVerificationCodeService, UserVerificationCodeResolver],
  exports: [UserVerificationCodeService],
})
export class UserVerificationCodeModule {}
