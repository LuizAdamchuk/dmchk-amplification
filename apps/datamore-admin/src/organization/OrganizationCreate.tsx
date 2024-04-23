import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const OrganizationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Domain" source="domain" />
        <TextInput label="Name" source="name" />
        <TextInput label="Owner" source="owner" />
        <TextInput label="Slug" source="slug" />
      </SimpleForm>
    </Create>
  );
};
