import React from "react";
import { FormLabel, Input } from "@chakra-ui/core";

const InputForm = ({ label, name, register }) => {
  return (
    <div>
      <FormLabel htmlFor={label} marginTop="10px" fontWeight="bold">
        {label}
      </FormLabel>
      <Input type="text" name={name} id={label} ref={register}></Input>
    </div>
  );
};

export default InputForm;
