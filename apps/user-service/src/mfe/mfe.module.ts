import { Module } from "@nestjs/common";
import { MfeModuleBase } from "./base/mfe.module.base";
import { MfeService } from "./mfe.service";
import { MfeController } from "./mfe.controller";

@Module({
  imports: [MfeModuleBase],
  controllers: [MfeController],
  providers: [MfeService],
  exports: [MfeService],
})
export class MfeModule {}
