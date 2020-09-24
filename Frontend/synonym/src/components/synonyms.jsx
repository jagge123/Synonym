import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/core";
import { debounce } from "lodash";

import RenderList from "../common/list";
import Search from "../common/search";
import { get } from "../services/synonymService";

function Synonyms() {
  const [synonyms, setSynonyms] = useState();
  const [keyword, setKeyword] = useState();
  const [disableUpdate, setDisableUpdate] = useState(true);

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
    if (data.synonyms.length > 0) {
      setSynonyms(data.synonyms);
      setKeyword(data.keyWord);
      setDisableUpdate(false);
    } else {
      setSynonyms([]);
      setDisableUpdate(true);
    }
  };

  return (
    <div className="content">
      <div style={{ display: "flex", textDecoration: "none" }}>
        <Search
          onChange={onInputChange}
          placeholder="Search..."
          width="500px"
        ></Search>
        <Button
          variantColor="blue"
          marginLeft="10px"
          width="75px"
          as={Link}
          to="/synonym/new"
        >
          New
        </Button>
        <Button
          variantColor="blue"
          marginLeft="10px"
          isDisabled={disableUpdate}
          as={Link}
          to={`/synonym/update?keyword=${keyword}`}
        >
          Update
        </Button>
      </div>
      <div>
        <RenderList data={synonyms}></RenderList>
      </div>
    </div>
  );
}

export default Synonyms;
