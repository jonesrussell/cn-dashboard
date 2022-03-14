import * as React from "react";
import { Admin, Resource } from "react-admin";
import lb4Provider from "react-admin-lb4";
import MessageList from "./components/MessageList.js";
import { authProvider } from "./Auth";
import CustomLoginPage from "./CustomLoginPage";

const App = () => (
  <Admin
    loginPage={CustomLoginPage}
    dataProvider={lb4Provider("http://localhost:4000")}
    authProvider={authProvider}
  >
    <Resource name="messages" list={MessageList} />
  </Admin>
);

export default App;
