import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OrganizationsWorkspaceTitle } from "../organizationsWorkspace/OrganizationsWorkspaceTitle";
import { QlikWorkspaceTitle } from "../qlikWorkspace/QlikWorkspaceTitle";
import { UsersWorkspaceTitle } from "../usersWorkspace/UsersWorkspaceTitle";

export const WorkspaceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
