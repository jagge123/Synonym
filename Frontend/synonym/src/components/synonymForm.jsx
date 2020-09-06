import React, { useState } from "react";
import { post } from "../services/synonymService";
import { useForm } from "react-hook-form";
import InputForm from "../common/inputForm";
import DisplayToast from "../common/toast";
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
  const { handleSubmit, errors, register, formState } = useForm();
  const [index, setIndex] = useState(1);
  const toast = useToast();

  const [inputs, addInput] = useState([
    <InputForm
      label="Synonym"
      name={`Synonyms[0]`}
      register={register()}
    ></InputForm>,
  ]);

  const renderNewInput = () => {
    addInput([
      ...inputs,
      <InputForm
        label="Synonym"
        name={`Synonyms[${index}]`}
        register={register()}
      ></InputForm>,
    ]);
  };

  async function onSubmit(values) {
    try {
      await post(values);
    } catch (ex) {
      DisplayToast();
    }
  }

  const DisplayToast = () => {
    return toast({
      title: "An error occurred.",
      description: "Unable to add word with synonyms!",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <div className="formContent">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel htmlFor="keyword" fontWeight="bold">
            New word
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
          {inputs}
          <Icon
            name="plus-square"
            size="30px"
            color="blue.400"
            marginTop="7px"
            focusable="true"
            onClick={() => renderNewInput()}
          />
        </FormControl>
        <Button
          type="submit"
          variantColor="blue"
          size="md"
          width="100px"
          float="right"
          marginBottom="20px"
          onClick={() => setIndex(index + 1)}
          isLoading={formState.isSubmitting}
        >
          Add
        </Button>
      </form>
    </div>
  );
}

export default SynonymForm;
