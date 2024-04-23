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
import { UserMfeWhereUniqueInput } from "./UserMfeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserMfeUpdateInput } from "./UserMfeUpdateInput";

@ArgsType()
class UpdateUserMfeArgs {
  @ApiProperty({
    required: true,
    type: () => UserMfeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserMfeWhereUniqueInput)
  @Field(() => UserMfeWhereUniqueInput, { nullable: false })
  where!: UserMfeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UserMfeUpdateInput,
  })
  @ValidateNested()
  @Type(() => UserMfeUpdateInput)
  @Field(() => UserMfeUpdateInput, { nullable: false })
  data!: UserMfeUpdateInput;
}

export { UpdateUserMfeArgs as UpdateUserMfeArgs };
