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
import { MfeWhereUniqueInput } from "../../mfe/base/MfeWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { UserMfeCreateNestedManyWithoutUsersInput } from "./UserMfeCreateNestedManyWithoutUsersInput";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => MfeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MfeWhereUniqueInput)
  @IsOptional()
  @Field(() => MfeWhereUniqueInput, {
    nullable: true,
  })
  mfes?: MfeWhereUniqueInput | null;

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

  @ApiProperty({
    required: false,
    type: () => UserMfeCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserMfeCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserMfeCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  usersMfes?: UserMfeCreateNestedManyWithoutUsersInput;
}

export { UserCreateInput as UserCreateInput };
