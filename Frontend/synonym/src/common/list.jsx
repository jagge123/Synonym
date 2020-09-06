import React from "react";
import { List, ListItem, ListIcon } from "@chakra-ui/core";
import { SiVerizon } from "react-icons/si";
const RenderList = ({ data, styleType }) => {
  if (!data) {
    return null;
  } else {
    if (data.length > 0) {
      return (
        <List spacing={3} marginTop="20px">
          {data &&
            data.map((data) => (
              <ListItem key={data}>
                <ListIcon icon={SiVerizon} color="blue.400" />
                {data}
              </ListItem>
            ))}
        </List>
      );
    } else {
      return <h2>Not found</h2>;
    }
  }
};

export default RenderList;
