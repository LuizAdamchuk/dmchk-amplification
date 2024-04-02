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
import { MfeCreateNestedManyWithoutUsersItemsInput } from "./MfeCreateNestedManyWithoutUsersItemsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UsersCreateInput {
  @ApiProperty({
    required: false,
    type: () => MfeCreateNestedManyWithoutUsersItemsInput,
  })
  @ValidateNested()
  @Type(() => MfeCreateNestedManyWithoutUsersItemsInput)
  @IsOptional()
  @Field(() => MfeCreateNestedManyWithoutUsersItemsInput, {
    nullable: true,
  })
  mfes?: MfeCreateNestedManyWithoutUsersItemsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string | null;
}

export { UsersCreateInput as UsersCreateInput };