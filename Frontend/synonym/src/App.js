import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Synonyms from "./components/synonyms";

import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ThemeProvider>
          <CSSReset />
          <div className="container">
            <Synonyms></Synonyms>
          </div>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
