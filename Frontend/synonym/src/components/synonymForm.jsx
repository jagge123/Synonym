import React from "react";
import { MdAddBox } from "react-icons/md";
import {
  FormControl,
  FormLabel,
  Form,
  FormErrorMessage,
  FormHelperText,
  Input,
  Icon,
} from "@chakra-ui/core";

function SynonymForm() {
  return (
    <FormControl>
      <FormLabel htmlFor="keyword">New word</FormLabel>
      <Input type="text" id="keyword" aria-describedby="helper-text"></Input>
      <FormHelperText id="helper-text">
        Write the word you want to add synonyms to!
      </FormHelperText>
      <FormLabel htmlFor="synonym" marginTop="10px">
        Synonym
      </FormLabel>
      <Input type="text" id="synonym"></Input>
      <Icon as={MdAddBox} size="30px" color="blue.500" />
    </FormControl>
  );
}
export default SynonymForm;
