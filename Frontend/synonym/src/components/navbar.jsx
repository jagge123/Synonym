import React from "react";
import { Link } from "react-router-dom";
import { SiTwitter, SiFacebook } from "react-icons/si";
import { Heading, Flex, Button, IconButton } from "@chakra-ui/core";

const Navbar = () => {
  return (
    <Flex as="nav" align="center" wrap="wrap" padding="1.5rem" bg="blue.500">
      <Flex align="center" mr={5}>
        <Heading
          as="h1"
          size="lg"
          letterSpacing={"-.1rem"}
          color="white"
          as={Link}
          to="/"
        >
          Synonyms
        </Heading>
      </Flex>
      <IconButton
        icon={SiTwitter}
        variant="outline"
        color="white"
        fontSize="25px"
        marginLeft="auto"
        marginRight="10px"
      />
      <IconButton
        icon={SiFacebook}
        variant="outline"
        color="white"
        fontSize="25px"
        marginRight="15px"
      />
    </Flex>
  );
};

export default Navbar;
