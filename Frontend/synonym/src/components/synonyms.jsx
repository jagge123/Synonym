import React, { Component, useState } from "react";
import Search from "../common/search";
import SearchButton from "../common/searchButton";

class Synonyms extends Component {
  state = {
    data: [],
  };

  handleSearch = () => {
    console.log("CLICKED!!");
  };
  render() {
    return (
      <div className="content">
        <Search></Search>
        <SearchButton onClick={this.handleSearch}></SearchButton>
      </div>
    );
  }
}

export default Synonyms;
