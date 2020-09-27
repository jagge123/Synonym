import React, { useState, useEffect } from "react";
import { get, put } from "../services/synonymService";
import GetValueFromQuery from "./../utils/stringHelper";
import InputForm from "../common/inputForm";

import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { AiFillPlusSquare } from "react-icons/ai";
import { times } from "lodash";
import {
  FormControl,
  FormHelperText,
  IconButton,
  Button,
  useToast,
} from "@chakra-ui/core";

function SynonymUpdateForm({ location, props }) {
  const { handleSubmit, register, formState } = useForm();
  const toast = useToast();
  const [data, setData] = useState();
  const [index, setIndex] = useState(1);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    console.log("hej");
    var keyWord = GetValueFromQuery(location.search, "keyword");
    console.log(keyWord);
    const { data } = await get(keyWord);
    if (data.synonyms.length > 0) {
      setData(data);
    } else {
      setData([]);
    }
  };

  async function onSubmit(values, e) {
    try {
      let synonyms = data.synonyms.concat(values.Synonyms);
      let updateData = { keyWord: data.keyWord, synonyms: synonyms };
      await put(updateData);
      //Remove input and reset index
      setData();
      e.target.reset();
      setIndex(1);
      toast({
        title: "Success",
        description: "Synonyms added!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setTimeout(() => (window.location.href = "/"), 1500);
    } catch (ex) {
      //Display general toast
      toast({
        title: "An error occurred.",
        description: "Unable to update word with synonyms!",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }

  return (
    <div className="formContent">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <InputForm
            label="Keyword"
            name="keyWord"
            value={data ? data.keyWord : ""}
            readOnly={true}
          ></InputForm>
          {data
            ? data.synonyms.map((data) => (
                <InputForm
                  key={data}
                  label="Synonym"
                  name={data}
                  value={data}
                  readOnly={true}
                ></InputForm>
              ))
            : null}
          {times(index, String).map((myIndex) => (
            <InputForm
              key={myIndex}
              label="Synonym"
              name={`Synonyms[${myIndex}]`}
              inputRef={register()}
            ></InputForm>
          ))}
          <IconButton
            icon={AiFillPlusSquare}
            size="0px"
            fontSize="30px"
            color="white"
            variantColor="blue"
            marginTop="7px"
            onClick={() => setIndex(index + 1)}
          />
        </FormControl>
        <Button
          type="submit"
          variantColor="blue"
          size="md"
          width="100px"
          float="right"
          marginBottom="20px"
          isLoading={formState.isSubmitting}
        >
          Update
        </Button>
      </form>
    </div>
  );
}

export default SynonymUpdateForm;
