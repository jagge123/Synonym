import React from "react";
import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/core";

const Alert = ({
  isOpen,
  onClose,
  title,
  dialogText,
  closeButtonText,
  buttonText,
}) => {
  return (
    <AlertDialog isOpen={isOpen} onClose={onClose}>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader fontSize="lg" fontWeight="bold">
          {title}
        </AlertDialogHeader>

        <AlertDialogBody>{dialogText}</AlertDialogBody>

        <AlertDialogFooter>
          <Button onClick={onClose}>{closeButtonText}</Button>
          <Button variantColor="blue" onClick={() => onClose} ml={3}>
            {buttonText}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alert;
