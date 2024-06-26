/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MfeWhereUniqueInput } from "../../mfe/base/MfeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MfeUpdateManyWithoutUserMfesInput {
  @Field(() => [MfeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MfeWhereUniqueInput],
  })
  connect?: Array<MfeWhereUniqueInput>;

  @Field(() => [MfeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MfeWhereUniqueInput],
  })
  disconnect?: Array<MfeWhereUniqueInput>;

  @Field(() => [MfeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MfeWhereUniqueInput],
  })
  set?: Array<MfeWhereUniqueInput>;
}

export { MfeUpdateManyWithoutUserMfesInput as MfeUpdateManyWithoutUserMfesInput };
