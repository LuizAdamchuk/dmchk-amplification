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
import { OrganizationUpdateManyWithoutOrganizationsWorkspacesInput } from "./OrganizationUpdateManyWithoutOrganizationsWorkspacesInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { WorkspaceUpdateManyWithoutOrganizationsWorkspacesInput } from "./WorkspaceUpdateManyWithoutOrganizationsWorkspacesInput";

@InputType()
class OrganizationsWorkspaceUpdateInput {
  @ApiProperty({
    required: false,
    type: () => OrganizationUpdateManyWithoutOrganizationsWorkspacesInput,
  })
  @ValidateNested()
  @Type(() => OrganizationUpdateManyWithoutOrganizationsWorkspacesInput)
  @IsOptional()
  @Field(() => OrganizationUpdateManyWithoutOrganizationsWorkspacesInput, {
    nullable: true,
  })
  organization?: OrganizationUpdateManyWithoutOrganizationsWorkspacesInput;

  @ApiProperty({
    required: false,
    type: () => WorkspaceUpdateManyWithoutOrganizationsWorkspacesInput,
  })
  @ValidateNested()
  @Type(() => WorkspaceUpdateManyWithoutOrganizationsWorkspacesInput)
  @IsOptional()
  @Field(() => WorkspaceUpdateManyWithoutOrganizationsWorkspacesInput, {
    nullable: true,
  })
  workspace?: WorkspaceUpdateManyWithoutOrganizationsWorkspacesInput;
}

export { OrganizationsWorkspaceUpdateInput as OrganizationsWorkspaceUpdateInput };