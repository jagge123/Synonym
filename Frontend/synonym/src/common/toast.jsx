import React from "react";
import { useToast } from "@chakra-ui/core";

function DisplayToast() {
  const toast = useToast();

  return toast({
    title: "An error occurred.",
    description: "Unable to create user account.",
    status: "error",
    duration: 9000,
    isClosable: true,
  });
}

export default DisplayToast;
