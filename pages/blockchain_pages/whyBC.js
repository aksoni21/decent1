import React from "react";
import Navbar from "../../components/Navbar";
import { Image, Box, Flex, Heading, Center, Button, Link, Text } from "@chakra-ui/react";

function whyBC() {
  return (
    <Flex direction="column" bg="black" h="100vh">
      <Navbar />
      <Flex direction="column">
        <Heading pl="20px" as="h1" size="lg" color="white">
          DeCent Date uses blockchain in the following ways:
        </Heading>{" "}
        <Text pl="20px" color="white" mt="10px">
          In MVP:
        </Text>
        <Text pl="30px" color="white" mt="10px">
          1. Users can connect their Lens Protocol profile and utilize all its functionality <br />
          2. User has the option to put any of their messages (such as memes, images, etc) on
          blockchain
          <br />
          3. User can create a `relationship NFT` <br />
          4. A Bumble or Hinge user can come to DeCent to make sure that the Hinge user they matched
          with, is not in a relationship already
        </Text>
        <Text pl="20px" color="white" mt="10px">
          In 2.0:
        </Text>
        <Text pl="30px" color="white" mt="10px">
          1. More focus on blockchain-based live events <br />
          2. Combining blockchain use cases with dating/social use cases
          <br />
        </Text>
        <Link
          textDecoration="underline"
          justify="center"
          align="center"
          href="/"
          bg="blue.500"
          mt="20px"
        >
          Home
        </Link>
      </Flex>
    </Flex>
  );
}

export default whyBC;
