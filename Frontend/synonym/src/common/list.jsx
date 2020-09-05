import React from "react";
import { List, ListItem } from "@chakra-ui/core";

const RenderList = ({ data, styleType }) => {
  if (!data) {
    return null;
  } else {
    if (data.length > 0) {
      return (
        <List styleType={styleType} marginTop="20px">
          {data && data.map((data) => <ListItem key={data}>{data}</ListItem>)}
        </List>
      );
    } else {
      return <h2>Not found</h2>;
    }
  }
};

export default RenderList;
