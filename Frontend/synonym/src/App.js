import React, { Component } from "react";
import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./components/navbar";
import Synonyms from "./components/synonyms";
import SynonymForm from "./components/synonymForm";
import NotFound from "./components/notFound";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ThemeProvider>
          <ColorModeProvider>
            <CSSReset />
            <Navbar></Navbar>
            <div className="container">
              <Switch>
                <Route path="/synonym/new" component={SynonymForm}></Route>
                <Route path="/not-found" component={NotFound}></Route>
                <Route path="/synonym" component={Synonyms}></Route>
                <Redirect to="/synonym" from="/" exact></Redirect>
                <Redirect to="/not-found"></Redirect>
              </Switch>
            </div>
          </ColorModeProvider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
