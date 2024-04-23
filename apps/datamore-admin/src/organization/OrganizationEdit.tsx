import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const OrganizationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Domain" source="domain" />
        <TextInput label="Name" source="name" />
        <TextInput label="Owner" source="owner" />
        <TextInput label="Slug" source="slug" />
      </SimpleForm>
    </Edit>
  );
};
