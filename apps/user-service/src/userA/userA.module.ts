import { Module } from "@nestjs/common";
import { UserAModuleBase } from "./base/userA.module.base";
import { UserAService } from "./userA.service";
import { UserAController } from "./userA.controller";

@Module({
  imports: [UserAModuleBase],
  controllers: [UserAController],
  providers: [UserAService],
  exports: [UserAService],
})
export class UserAModule {}
