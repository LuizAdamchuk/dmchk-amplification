/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { UserAWhereUniqueInput } from "../../userA/base/UserAWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class UserAUpdateManyWithoutMfesInput {
  @Field(() => [UserAWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserAWhereUniqueInput],
  })
  connect?: Array<UserAWhereUniqueInput>;

  @Field(() => [UserAWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserAWhereUniqueInput],
  })
  disconnect?: Array<UserAWhereUniqueInput>;

  @Field(() => [UserAWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserAWhereUniqueInput],
  })
  set?: Array<UserAWhereUniqueInput>;
}

export { UserAUpdateManyWithoutMfesInput as UserAUpdateManyWithoutMfesInput };
