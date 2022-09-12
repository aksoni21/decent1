import React from "react";
import { Image, Box, Flex, Heading, Center, Square, Circle, Text, Button } from "@chakra-ui/react";
// import dm2 from '../images/dm2';
import DecentFlow from "./DeCentFlow";
// import { Button } from "bootstrap";

function OverallFlow() {
  const imgfest =
    "https://downtownstatecollege.com/wp-content/uploads/2018/06/Allen-Street-w-Banners.jpg";
  const imggroup = "https://www.plumdeluxe.com/wp-content/uploads/2013/06/piazza-2.jpg";
  const imgcouple =
    "https://media.istockphoto.com/photos/couple-of-tourists-discovering-the-beauty-of-the-city-picture-id1317644048?b=1&k=20&m=1317644048&s=170667a&w=0&h=MTIwOi5xA14uAiTdWJgzncByoaENBCqcc7h5Li6IUyI=";
  const imgdm2 = "../../components/images/dm2.png";

  return (
    <Flex direction="column">
      <Flex direction="row" color="white" bg="blue.700">
        <Flex pl="20px" direction="column" width="50%">
          <Heading pt="10px" as="h1" f="lg">
            SQUARE:
          </Heading>
          <Text pt="15px">
            Imagine a townsquare or a fair where there are several booths with people hanging out
            with each other.
          </Text>

          <Flex mt="20px" align="center" justify="center">
            {/* <Button bg="transparent" border="1px" color="white" width="250px">
            Natural Conversations
            </Button> */}
            <Text
              align="center"
              justify="center"
              fontSize="20px"
              p="10px"
              bg="transparent"
              color="white"
              width="250px"
              borderRadius="5px"
              border="1px"
            >
              Natural Conversations
            </Text>
          </Flex>
        </Flex>
        <Flex width="50%">
          <Image p="5" objectFit="cover" src={imgfest} />
        </Flex>
      </Flex>
      <Flex direction="row" color="white" bg="green.700">
        <Flex width="50%">
          <Image objectFit="cover" p="5" src={imggroup} />
        </Flex>
        <Flex pr="20px" width="50%" direction="column">
          <Heading pt="10px" as="h1" f="lg">
            STAGE:
          </Heading>
          <Text pt="15px">
            Natural interactions create more friendships and socializing. You can pick up on their
            conversational skills, how they fit into the group etc
          </Text>
          <Flex mt="20px" align="center" justify="center">
            <Text
              align="center"
              justify="center"
              fontSize="20px"
              p="10px"
              bg="transparent"
              color="white"
              width="250px"
              borderRadius="5px"
              border="1px"
            >
              Group Connections
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex pl="20px" direction="row" color="white" bg="blue.700">
        <Flex width="50%" direction="column">
          <Heading pt="10px" as="h1" f="lg">
            SPACE:
          </Heading>
          <Text pt="15px">
            Connections built on common interests lead to natural, flowing individual conversations.
            No added pressure or need for cheesy pickup lines
          </Text>
          <Text mt="15px">
            {" "}
            *For starting a 1-on-1 conversation with anyone, you both would need to first talk in a
            square or a group connection{" "}
          </Text>
          <Flex mt="20px" align="center" justify="center">
            <Text
              align="center"
              justify="center"
              fontSize="20px"
              p="10px"
              bg="transparent"
              color="white"
              width="250px"
              borderRadius="5px"
              border="1px"
            >
              Familiar Connection
            </Text>
          </Flex>
        </Flex>

        <Flex>
          <Image objectFit="cover" p="5" src={imgcouple} />
        </Flex>
      </Flex>
      {/* <Flex direction="column" color='white' bg='blue.700'>
        <Heading as="h1" size="lg">
          Dating:
        </Heading>
        <Text noOfLines={[1, 2, 3]}>
          Go on dates, tell your friends you are dating and take you both off the market
        </Text>
        <Image objectFit="cover" p='5' src={imgcouple} />
      </Flex> */}

      <Flex direction="column" color="white" bg="tomato">
        <DecentFlow />
      </Flex>
    </Flex>
  );
}

export default OverallFlow;
