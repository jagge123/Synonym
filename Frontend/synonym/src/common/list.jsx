import React from "react";
import { List, ListItem, ListIcon, Text, Icon, Flex } from "@chakra-ui/core";
import { SiVerizon } from "react-icons/si";
import { BiSad } from "react-icons/bi";

const RenderList = ({ data }) => {
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
      return (
        <Flex align="center" marginTop="20px">
          <Text fontWeight="bold">
            We couldn't find what you where looking for...
          </Text>
          <Icon as={BiSad} size="40px" color="red.400"></Icon>
        </Flex>
      );
    }
  }
};

export default RenderList;
