import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OrganizationsWorkspaceTitle } from "../organizationsWorkspace/OrganizationsWorkspaceTitle";
import { QlikWorkspaceTitle } from "../qlikWorkspace/QlikWorkspaceTitle";
import { UsersWorkspaceTitle } from "../usersWorkspace/UsersWorkspaceTitle";

export const WorkspaceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="organizationsWorkspaces"
          reference="OrganizationsWorkspace"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationsWorkspaceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="qlikWorkspaces"
          reference="QlikWorkspace"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QlikWorkspaceTitle} />
        </ReferenceArrayInput>
        <TextInput label="Slug" source="slug" />
        <ReferenceArrayInput
          source="usersWorkspaces"
          reference="UsersWorkspace"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UsersWorkspaceTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
