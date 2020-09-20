import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { AiFillPlusSquare } from "react-icons/ai";
import { times, debounce } from "lodash";
import {
  FormControl,
  FormHelperText,
  IconButton,
  Button,
  useToast,
} from "@chakra-ui/core";

import InputForm from "../common/inputForm";
import { post, get } from "../services/synonymService";
import Search from "../common/search";
import Alert from "../common/alert";

function SynonymForm() {
  const { handleSubmit, register, formState } = useForm();
  const [index, setIndex] = useState(1);
  const [synonyms, setSynonyms] = useState([]);
  const [alertIsOpen, setIsOpen] = useState(false);
  const toast = useToast();

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
    setSynonyms([]);
    const { data } = await get(query);
    if (data.synonyms !== null) {
      console.log(data);
      setSynonyms(data.synonyms);
      setIsOpen(true);
    } else {
      console.log("failed fetch");
      setSynonyms([]);
    }
  };

  const onClose = () => {
    setIsOpen(false);
  };

  async function onSubmit(values, e) {
    try {
      //Probably better ways to remove empty inputs...
      values.Synonyms = values.Synonyms.filter((synonym) => synonym);
      await post(values);
      //Remove input and reset index
      e.target.reset();
      setIndex(1);
      toast({
        title: "Success",
        description: "Synonyms added!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (ex) {
      //Display general toast
      toast({
        title: "An error occurred.",
        description: "Unable to add word with synonyms!",
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
          <Search
            label="Word"
            name="keyword"
            type="text"
            id="..."
            placeholder="Keyword..."
            aria-describedby="helper-text"
            inputRef={register()}
            onChange={onInputChange}
          ></Search>
          <FormHelperText id="helper-text">
            Write the word you want to add synonyms to!
          </FormHelperText>
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
          isDisabled={synonyms.length > 0 ? true : false}
          marginBottom="20px"
          isLoading={formState.isSubmitting}
        >
          Add
        </Button>
      </form>
      <Alert
        isOpen={alertIsOpen}
        onClose={onClose}
        title="This word already exist!"
        dialogText="Do you want to add new synonyms to this word?"
        closeButtonText="Close"
        buttonText="Yes"
      ></Alert>
    </div>
  );
}

export default SynonymForm;
