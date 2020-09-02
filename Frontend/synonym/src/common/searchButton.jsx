import React from "react";
import { Button } from "@chakra-ui/core";

const SearchButton = ({ onClick }) => {
  return (
    <Button
      variantColor="pink"
      variant="solid"
      size="md"
      marginTop="10px"
      onClick={() => onClick()}
    >
      Search
    </Button>
  );
};

export default SearchButton;
