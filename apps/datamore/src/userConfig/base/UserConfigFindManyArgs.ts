/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserConfigWhereInput } from "./UserConfigWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserConfigOrderByInput } from "./UserConfigOrderByInput";

@ArgsType()
class UserConfigFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserConfigWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserConfigWhereInput, { nullable: true })
  @Type(() => UserConfigWhereInput)
  where?: UserConfigWhereInput;

  @ApiProperty({
    required: false,
    type: [UserConfigOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserConfigOrderByInput], { nullable: true })
  @Type(() => UserConfigOrderByInput)
  orderBy?: Array<UserConfigOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UserConfigFindManyArgs as UserConfigFindManyArgs };
