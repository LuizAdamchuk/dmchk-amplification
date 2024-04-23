import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const QlikIntegrationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Alias" source="alias" />
        <TextInput label="Domain" source="domain" />
        <BooleanInput label="Issuer" source="issuer" />
        <TextInput label="KeyId" source="keyId" />
        <TextInput label="QlikId" source="qlikId" />
        <TextInput label="QlikTheme" source="qlikTheme" />
        <TextInput label="QlikWebIntegrationId" source="qlikWebIntegrationId" />
      </SimpleForm>
    </Edit>
  );
};
