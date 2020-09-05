import React from "react";
import { Input } from "@chakra-ui/core";

const Search = ({ onChange, placeholder }) => {
  return (
    <Input
      isInvalid
      errorBorderColor="blue.500"
      placeholder={placeholder}
      width="500px"
      onChange={(e) => onChange(e)}
    ></Input>
  );
};

export default Search;
