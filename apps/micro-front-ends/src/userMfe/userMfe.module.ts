import { Module } from "@nestjs/common";
import { UserMfeModuleBase } from "./base/userMfe.module.base";
import { UserMfeService } from "./userMfe.service";
import { UserMfeController } from "./userMfe.controller";

@Module({
  imports: [UserMfeModuleBase],
  controllers: [UserMfeController],
  providers: [UserMfeService],
  exports: [UserMfeService],
})
export class UserMfeModule {}
