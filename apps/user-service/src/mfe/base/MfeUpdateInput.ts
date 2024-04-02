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
import {
  IsBoolean,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { UsersUpdateManyWithoutMfesInput } from "./UsersUpdateManyWithoutMfesInput";
import { Type } from "class-transformer";

@InputType()
class MfeUpdateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  active?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  authenticationRequired?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  key?: string | null;

  @ApiProperty({
    required: false,
    type: () => UsersUpdateManyWithoutMfesInput,
  })
  @ValidateNested()
  @Type(() => UsersUpdateManyWithoutMfesInput)
  @IsOptional()
  @Field(() => UsersUpdateManyWithoutMfesInput, {
    nullable: true,
  })
  User?: UsersUpdateManyWithoutMfesInput;
}

export { MfeUpdateInput as MfeUpdateInput };
