import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const WorkspaceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Slug" source="slug" />
      </SimpleForm>
    </Create>
  );
};
