import React, { useState } from "react";
import { post } from "../services/synonymService";
import { useForm } from "react-hook-form";
import { times } from "lodash";
import InputForm from "../common/inputForm";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Icon,
  Button,
  useToast,
} from "@chakra-ui/core";

function SynonymForm() {
  const { handleSubmit, register, formState } = useForm();
  const [index, setIndex] = useState(1);
  const toast = useToast();

  async function onSubmit(values) {
    try {
      await post(values);
      toast({
        title: "Success",
        description: "Synonyms added!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (ex) {
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
          <FormLabel htmlFor="keyword" fontWeight="bold">
            Word
          </FormLabel>
          <Input
            name="keyword"
            type="text"
            id="keyword"
            aria-describedby="helper-text"
            ref={register()}
          ></Input>
          <FormHelperText id="helper-text">
            Write the word you want to add synonyms to!
          </FormHelperText>
          {times(index, String).map((myIndex) => (
            <InputForm
              key={myIndex}
              label="Synonym"
              name={`Synonyms[${myIndex}]`}
              register={register()}
            ></InputForm>
          ))}
          <Icon
            name="plus-square"
            size="30px"
            color="blue.400"
            marginTop="7px"
            focusable="true"
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
