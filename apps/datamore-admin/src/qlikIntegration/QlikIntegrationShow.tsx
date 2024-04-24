import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { QLIKINTEGRATION_TITLE_FIELD } from "./QlikIntegrationTitle";

export const QlikIntegrationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Alias" source="alias" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Domain" source="domain" />
        <TextField label="ID" source="id" />
        <BooleanField label="Issuer" source="issuer" />
        <TextField label="KeyId" source="keyId" />
        <TextField label="QlikId" source="qlikId" />
        <TextField label="QlikTheme" source="qlikTheme" />
        <TextField label="QlikWebIntegrationId" source="qlikWebIntegrationId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="QlikWorkspace"
          target="qlikd"
          label="QlikWorkspaces"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="QlikIntegration"
              source="qlikintegration.id"
              reference="QlikIntegration"
            >
              <TextField source={QLIKINTEGRATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
