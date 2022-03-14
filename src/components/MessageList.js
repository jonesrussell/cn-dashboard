import React from "react";
import { List, Filter, Datagrid, TextField, SearchInput } from "react-admin";

// ------------- filter component which filters by customer email -------------
const MessageFilter = (props) => (
  <Filter {...props}>
    <SearchInput placeholder="Email" source="email" resettable alwaysOn />
  </Filter>
);

const MessageList = (props) => (
  <List {...props} filters={<MessageFilter />} title="Portfolio Messages">
    <Datagrid
      rowClick={(id, basePath, record) => {
        return `/messages`;
      }}
    >
      <TextField disabled source="id" />
      <TextField source="email" />
      <TextField source="message" />
    </Datagrid>
  </List>
);

export default MessageList;
