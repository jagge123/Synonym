import React from "react";
import { Input } from "@chakra-ui/core";

const Search = ({ onChange, placeholder, inputRef, ...props }) => {
  return (
    <Input
      isInvalid
      errorBorderColor="blue.400"
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      ref={inputRef}
      {...props}
    ></Input>
  );
};

export default Search;
