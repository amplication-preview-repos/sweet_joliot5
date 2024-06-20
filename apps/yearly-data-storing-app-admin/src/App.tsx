import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DataList } from "./data/DataList";
import { DataCreate } from "./data/DataCreate";
import { DataEdit } from "./data/DataEdit";
import { DataShow } from "./data/DataShow";
import { MetadataList } from "./metadata/MetadataList";
import { MetadataCreate } from "./metadata/MetadataCreate";
import { MetadataEdit } from "./metadata/MetadataEdit";
import { MetadataShow } from "./metadata/MetadataShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"YearlyDataStoringApp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Data"
          list={DataList}
          edit={DataEdit}
          create={DataCreate}
          show={DataShow}
        />
        <Resource
          name="Metadata"
          list={MetadataList}
          edit={MetadataEdit}
          create={MetadataCreate}
          show={MetadataShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
