import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const QlikIntegrationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"QlikIntegrations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
