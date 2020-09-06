import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "@chakra-ui/core";
import { debounce } from "lodash";
import RenderList from "../common/list";
import Search from "../common/search";
import { get } from "../services/synonymService";

function Synonyms() {
  const [synonyms, setSynonyms] = useState();

  var debounceGetSynonyms = debounce(
    (query) => {
      handleInput(query);
    },
    700,
    { maxWait: 700 }
  );

  const onInputChange = (e) => {
    const query = e.target.value;
    if (query.length >= 2) debounceGetSynonyms(e.target.value);
  };

  const handleInput = async (query) => {
    const { data } = await get(query);
    if (data.synonyms !== null) {
      setSynonyms(data.synonyms);
    } else {
      setSynonyms([]);
    }
  };

  return (
    <div className="content">
      <div style={{ display: "flex", textDecoration: "none" }}>
        <Search onChange={onInputChange} placeholder="Search..."></Search>
        <Button
          variantColor="blue"
          marginLeft="10px"
          width="75px"
          as={Link}
          to="/synonym/new"
        >
          New
        </Button>
      </div>
      <div>
        <RenderList data={synonyms} styleType="disc"></RenderList>
      </div>
    </div>
  );
}

export default Synonyms;
