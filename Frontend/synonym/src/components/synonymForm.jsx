import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdExposurePlus1 } from "react-icons/md";
import { times } from "lodash";
import {
  FormControl,
  FormHelperText,
  IconButton,
  Button,
  useToast,
} from "@chakra-ui/core";

import InputForm from "../common/inputForm";
import { post } from "../services/synonymService";

function SynonymForm() {
  const { handleSubmit, register, formState } = useForm();
  const [index, setIndex] = useState(1);
  const toast = useToast();

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
          <InputForm
            label="Word"
            name="keyword"
            type="text"
            id="keyword"
            aria-describedby="helper-text"
            inputRef={register()}
          ></InputForm>
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
            icon={MdExposurePlus1}
            size="sm"
            fontSize="20px"
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
          Add
        </Button>
      </form>
    </div>
  );
}

export default SynonymForm;
