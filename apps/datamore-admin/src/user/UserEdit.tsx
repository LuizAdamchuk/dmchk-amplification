import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  BooleanInput,
  ReferenceArrayInput,
} from "react-admin";

import { UserConfigTitle } from "../userConfig/UserConfigTitle";
import { UsersWorkspaceTitle } from "../usersWorkspace/UsersWorkspaceTitle";
import { UserVerificationCodeTitle } from "../userVerificationCode/UserVerificationCodeTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <BooleanInput label="Status" source="status" />
        <ReferenceArrayInput
          source="userConfigs"
          reference="UserConfig"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserConfigTitle} />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
        <ReferenceArrayInput
          source="usersWorkspaces"
          reference="UsersWorkspace"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UsersWorkspaceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userVerificationCodes"
          reference="UserVerificationCode"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserVerificationCodeTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
