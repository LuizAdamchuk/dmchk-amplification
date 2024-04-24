/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { OrganizationsWorkspaceWhereUniqueInput } from "../../organizationsWorkspace/base/OrganizationsWorkspaceWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OrganizationsWorkspaceUpdateManyWithoutWorkspacesInput {
  @Field(() => [OrganizationsWorkspaceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationsWorkspaceWhereUniqueInput],
  })
  connect?: Array<OrganizationsWorkspaceWhereUniqueInput>;

  @Field(() => [OrganizationsWorkspaceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationsWorkspaceWhereUniqueInput],
  })
  disconnect?: Array<OrganizationsWorkspaceWhereUniqueInput>;

  @Field(() => [OrganizationsWorkspaceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationsWorkspaceWhereUniqueInput],
  })
  set?: Array<OrganizationsWorkspaceWhereUniqueInput>;
}

export { OrganizationsWorkspaceUpdateManyWithoutWorkspacesInput as OrganizationsWorkspaceUpdateManyWithoutWorkspacesInput };