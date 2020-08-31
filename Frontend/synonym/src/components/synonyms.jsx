import React, { Component } from "react";
import { Input, Grid } from "@chakra-ui/core";

class Synonyms extends Component {
  state = {};
  render() {
    return (
      <div>
        <Input isInvalid errorBorderColor="red.300" placeholder="Search" />
      </div>
    );
  }
}

export default Synonyms;
