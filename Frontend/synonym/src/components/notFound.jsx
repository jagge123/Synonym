import React from "react";
import { Alert, AlertIcon } from "@chakra-ui/core";

const NotFound = () => {
  return (
    <React.Fragment>
      <div className="not-found">
        <Alert status="error" style={{ marginTop: 20 }}>
          <AlertIcon />
          Page not found!
        </Alert>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
