import { Module } from "@nestjs/common";
import { UsersModuleBase } from "./base/users.module.base";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";

@Module({
  imports: [UsersModuleBase],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
