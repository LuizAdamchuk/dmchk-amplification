import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { QlikIntegrationTitle } from "../qlikIntegration/QlikIntegrationTitle";
import { WorkspaceTitle } from "../workspace/WorkspaceTitle";

export const QlikWorkspaceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="qlikintegration"
          reference="QlikIntegration"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QlikIntegrationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workspace"
          reference="Workspace"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkspaceTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
