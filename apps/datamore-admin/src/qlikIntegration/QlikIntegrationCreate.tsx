import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { QlikWorkspaceTitle } from "../qlikWorkspace/QlikWorkspaceTitle";

export const QlikIntegrationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Alias" source="alias" />
        <TextInput label="Domain" source="domain" />
        <BooleanInput label="Issuer" source="issuer" />
        <TextInput label="KeyId" source="keyId" />
        <TextInput label="QlikId" source="qlikId" />
        <TextInput label="QlikTheme" source="qlikTheme" />
        <TextInput label="QlikWebIntegrationId" source="qlikWebIntegrationId" />
        <ReferenceArrayInput
          source="qlikWorkspaces"
          reference="QlikWorkspace"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QlikWorkspaceTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
