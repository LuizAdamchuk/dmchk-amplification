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

export const OrganizationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Domain" source="domain" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="organizationsWorkspaces"
          reference="OrganizationsWorkspace"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationsWorkspaceTitle} />
        </ReferenceArrayInput>
        <TextInput label="Owner" source="owner" />
        <TextInput label="Slug" source="slug" />
      </SimpleForm>
    </Create>
  );
};
