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
import { MfeCreateNestedManyWithoutUserMfesInput } from "./MfeCreateNestedManyWithoutUserMfesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { UserCreateNestedManyWithoutUserMfesInput } from "./UserCreateNestedManyWithoutUserMfesInput";

@InputType()
class UserMfeCreateInput {
  @ApiProperty({
    required: false,
    type: () => MfeCreateNestedManyWithoutUserMfesInput,
  })
  @ValidateNested()
  @Type(() => MfeCreateNestedManyWithoutUserMfesInput)
  @IsOptional()
  @Field(() => MfeCreateNestedManyWithoutUserMfesInput, {
    nullable: true,
  })
  mfe?: MfeCreateNestedManyWithoutUserMfesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  mfeId?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutUserMfesInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutUserMfesInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutUserMfesInput, {
    nullable: true,
  })
  user?: UserCreateNestedManyWithoutUserMfesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  userId?: string | null;
}

export { UserMfeCreateInput as UserMfeCreateInput };
