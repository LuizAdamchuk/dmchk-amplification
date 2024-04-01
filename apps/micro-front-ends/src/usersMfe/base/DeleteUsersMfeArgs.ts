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
import { UsersMfeWhereUniqueInput } from "./UsersMfeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteUsersMfeArgs {
  @ApiProperty({
    required: true,
    type: () => UsersMfeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UsersMfeWhereUniqueInput)
  @Field(() => UsersMfeWhereUniqueInput, { nullable: false })
  where!: UsersMfeWhereUniqueInput;
}

export { DeleteUsersMfeArgs as DeleteUsersMfeArgs };
