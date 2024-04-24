import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { OrganizationList } from "./organization/OrganizationList";
import { OrganizationCreate } from "./organization/OrganizationCreate";
import { OrganizationEdit } from "./organization/OrganizationEdit";
import { OrganizationShow } from "./organization/OrganizationShow";
import { WorkspaceList } from "./workspace/WorkspaceList";
import { WorkspaceCreate } from "./workspace/WorkspaceCreate";
import { WorkspaceEdit } from "./workspace/WorkspaceEdit";
import { WorkspaceShow } from "./workspace/WorkspaceShow";
import { QlikIntegrationList } from "./qlikIntegration/QlikIntegrationList";
import { QlikIntegrationCreate } from "./qlikIntegration/QlikIntegrationCreate";
import { QlikIntegrationEdit } from "./qlikIntegration/QlikIntegrationEdit";
import { QlikIntegrationShow } from "./qlikIntegration/QlikIntegrationShow";
import { UserConfigList } from "./userConfig/UserConfigList";
import { UserConfigCreate } from "./userConfig/UserConfigCreate";
import { UserConfigEdit } from "./userConfig/UserConfigEdit";
import { UserConfigShow } from "./userConfig/UserConfigShow";
import { UserVerificationCodeList } from "./userVerificationCode/UserVerificationCodeList";
import { UserVerificationCodeCreate } from "./userVerificationCode/UserVerificationCodeCreate";
import { UserVerificationCodeEdit } from "./userVerificationCode/UserVerificationCodeEdit";
import { UserVerificationCodeShow } from "./userVerificationCode/UserVerificationCodeShow";
import { OrganizationsWorkspaceList } from "./organizationsWorkspace/OrganizationsWorkspaceList";
import { OrganizationsWorkspaceCreate } from "./organizationsWorkspace/OrganizationsWorkspaceCreate";
import { OrganizationsWorkspaceEdit } from "./organizationsWorkspace/OrganizationsWorkspaceEdit";
import { OrganizationsWorkspaceShow } from "./organizationsWorkspace/OrganizationsWorkspaceShow";
import { UsersWorkspaceList } from "./usersWorkspace/UsersWorkspaceList";
import { UsersWorkspaceCreate } from "./usersWorkspace/UsersWorkspaceCreate";
import { UsersWorkspaceEdit } from "./usersWorkspace/UsersWorkspaceEdit";
import { UsersWorkspaceShow } from "./usersWorkspace/UsersWorkspaceShow";
import { QlikWorkspaceList } from "./qlikWorkspace/QlikWorkspaceList";
import { QlikWorkspaceCreate } from "./qlikWorkspace/QlikWorkspaceCreate";
import { QlikWorkspaceEdit } from "./qlikWorkspace/QlikWorkspaceEdit";
import { QlikWorkspaceShow } from "./qlikWorkspace/QlikWorkspaceShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Datamore"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Organization"
          list={OrganizationList}
          edit={OrganizationEdit}
          create={OrganizationCreate}
          show={OrganizationShow}
        />
        <Resource
          name="Workspace"
          list={WorkspaceList}
          edit={WorkspaceEdit}
          create={WorkspaceCreate}
          show={WorkspaceShow}
        />
        <Resource
          name="QlikIntegration"
          list={QlikIntegrationList}
          edit={QlikIntegrationEdit}
          create={QlikIntegrationCreate}
          show={QlikIntegrationShow}
        />
        <Resource
          name="UserConfig"
          list={UserConfigList}
          edit={UserConfigEdit}
          create={UserConfigCreate}
          show={UserConfigShow}
        />
        <Resource
          name="UserVerificationCode"
          list={UserVerificationCodeList}
          edit={UserVerificationCodeEdit}
          create={UserVerificationCodeCreate}
          show={UserVerificationCodeShow}
        />
        <Resource
          name="OrganizationsWorkspace"
          list={OrganizationsWorkspaceList}
          edit={OrganizationsWorkspaceEdit}
          create={OrganizationsWorkspaceCreate}
          show={OrganizationsWorkspaceShow}
        />
        <Resource
          name="UsersWorkspace"
          list={UsersWorkspaceList}
          edit={UsersWorkspaceEdit}
          create={UsersWorkspaceCreate}
          show={UsersWorkspaceShow}
        />
        <Resource
          name="QlikWorkspace"
          list={QlikWorkspaceList}
          edit={QlikWorkspaceEdit}
          create={QlikWorkspaceCreate}
          show={QlikWorkspaceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
