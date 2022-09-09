import React from "react";
import Navbar from "../../components/Navbar";
import { Image, Box, Flex, Heading, Center, Button, Link, Text } from "@chakra-ui/react";

function whyBC() {
  return (
    <Flex direction="column" bg="black">
      <Navbar />
      <Flex direction='column'>
        <Heading as="h1" size="lg" color='white'>
          We use blockchain in following ways:
        </Heading>{" "}
        <Text color="white" mt='10px'>
          1. Users can connect their Lens Protocol profile and utilize all its functionality <br/>
          2. User has the option to put any of their messages (such as memes, images, etc) on blockchain<br/>
          3. User can create a `relationship NFT` <br/>
          4. A Bumble or Hinge user can come to DeCent to make sure that the Hinge user they matched with, is not in a relationship already
        </Text>
        <Link textDecoration='underline' justify='center' align='center' href='/' bg='purple.500'>Home</Link>
      </Flex>
    </Flex>
  );
}

export default whyBC;
