/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { QlikWorkspaceWhereInput } from "./QlikWorkspaceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class QlikWorkspaceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => QlikWorkspaceWhereInput,
  })
  @ValidateNested()
  @Type(() => QlikWorkspaceWhereInput)
  @IsOptional()
  @Field(() => QlikWorkspaceWhereInput, {
    nullable: true,
  })
  every?: QlikWorkspaceWhereInput;

  @ApiProperty({
    required: false,
    type: () => QlikWorkspaceWhereInput,
  })
  @ValidateNested()
  @Type(() => QlikWorkspaceWhereInput)
  @IsOptional()
  @Field(() => QlikWorkspaceWhereInput, {
    nullable: true,
  })
  some?: QlikWorkspaceWhereInput;

  @ApiProperty({
    required: false,
    type: () => QlikWorkspaceWhereInput,
  })
  @ValidateNested()
  @Type(() => QlikWorkspaceWhereInput)
  @IsOptional()
  @Field(() => QlikWorkspaceWhereInput, {
    nullable: true,
  })
  none?: QlikWorkspaceWhereInput;
}
export { QlikWorkspaceListRelationFilter as QlikWorkspaceListRelationFilter };