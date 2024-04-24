import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { QlikIntegrationTitle } from "../qlikIntegration/QlikIntegrationTitle";
import { WorkspaceTitle } from "../workspace/WorkspaceTitle";

export const QlikWorkspaceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="qlikintegration.id"
          reference="QlikIntegration"
          label="QlikIntegration"
        >
          <SelectInput optionText={QlikIntegrationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="workspace"
          reference="Workspace"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkspaceTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
