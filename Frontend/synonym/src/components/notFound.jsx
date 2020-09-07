import React from "react";
import {
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
} from "@chakra-ui/core";

const NotFound = () => {
  return (
    <div>
      <Alert
        status="warning"
        variant="subtle"
        backgroundColor="none"
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
        height="200px"
        width="400px"
        marginLeft="auto"
        marginRight="auto"
      >
        <AlertIcon size="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          This page doesn´t exist!
        </AlertTitle>
      </Alert>
    </div>
  );
};

export default NotFound;
