import React from "react";
import { Input } from "@chakra-ui/core";

const Search = () => {
  return (
    <Input
      isInvalid
      errorBorderColor="red.300"
      placeholder="Search"
      width="500px"
    ></Input>
  );
};

export default Search;
