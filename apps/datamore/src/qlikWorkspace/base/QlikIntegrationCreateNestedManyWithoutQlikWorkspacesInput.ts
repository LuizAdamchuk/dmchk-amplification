/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { QlikIntegrationWhereUniqueInput } from "../../qlikIntegration/base/QlikIntegrationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class QlikIntegrationCreateNestedManyWithoutQlikWorkspacesInput {
  @Field(() => [QlikIntegrationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QlikIntegrationWhereUniqueInput],
  })
  connect?: Array<QlikIntegrationWhereUniqueInput>;
}

export { QlikIntegrationCreateNestedManyWithoutQlikWorkspacesInput as QlikIntegrationCreateNestedManyWithoutQlikWorkspacesInput };
