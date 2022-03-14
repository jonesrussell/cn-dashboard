// in src/App.js
import * as React from "react";
import { Admin, Resource } from "react-admin";
import lb4Provider from "react-admin-lb4";
// import jsonServerProvider from 'ra-data-json-server';
import MessageList from "./components/MessageList.js";

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dataProvider={lb4Provider("http://localhost:4000")}>
    <Resource name="messages" list={MessageList} />
  </Admin>
);

export default App;
