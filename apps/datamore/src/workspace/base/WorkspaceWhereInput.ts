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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { OrganizationsWorkspaceListRelationFilter } from "../../organizationsWorkspace/base/OrganizationsWorkspaceListRelationFilter";
import { QlikWorkspaceListRelationFilter } from "../../qlikWorkspace/base/QlikWorkspaceListRelationFilter";
import { UsersWorkspaceListRelationFilter } from "../../usersWorkspace/base/UsersWorkspaceListRelationFilter";

@InputType()
class WorkspaceWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => OrganizationsWorkspaceListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OrganizationsWorkspaceListRelationFilter)
  @IsOptional()
  @Field(() => OrganizationsWorkspaceListRelationFilter, {
    nullable: true,
  })
  organizationsWorkspaces?: OrganizationsWorkspaceListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => QlikWorkspaceListRelationFilter,
  })
  @ValidateNested()
  @Type(() => QlikWorkspaceListRelationFilter)
  @IsOptional()
  @Field(() => QlikWorkspaceListRelationFilter, {
    nullable: true,
  })
  qlikWorkspaces?: QlikWorkspaceListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  slug?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => UsersWorkspaceListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UsersWorkspaceListRelationFilter)
  @IsOptional()
  @Field(() => UsersWorkspaceListRelationFilter, {
    nullable: true,
  })
  usersWorkspaces?: UsersWorkspaceListRelationFilter;
}

export { WorkspaceWhereInput as WorkspaceWhereInput };
