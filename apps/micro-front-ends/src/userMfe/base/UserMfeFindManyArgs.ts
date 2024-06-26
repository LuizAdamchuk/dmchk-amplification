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
import { UserMfeWhereInput } from "./UserMfeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserMfeOrderByInput } from "./UserMfeOrderByInput";

@ArgsType()
class UserMfeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserMfeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserMfeWhereInput, { nullable: true })
  @Type(() => UserMfeWhereInput)
  where?: UserMfeWhereInput;

  @ApiProperty({
    required: false,
    type: [UserMfeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserMfeOrderByInput], { nullable: true })
  @Type(() => UserMfeOrderByInput)
  orderBy?: Array<UserMfeOrderByInput>;

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

export { UserMfeFindManyArgs as UserMfeFindManyArgs };
