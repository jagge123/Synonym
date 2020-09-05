import React, { Component } from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import { Route, Switch, Redirect } from "react-router-dom";
import Synonyms from "./components/synonyms";
import SynonymForm from "./components/synonymForm";
import NotFound from "./components/notFound";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ThemeProvider>
          <CSSReset />
          <div className="container">
            <Switch>
              <Route path="/synonym/new" component={SynonymForm}></Route>
              <Route path="/" component={Synonyms}></Route>
              <Route path="/not-found" component={NotFound}></Route>
              <Redirect to="/" from="/" exact></Redirect>
              <Redirect to="/not-found"></Redirect>
            </Switch>
          </div>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
