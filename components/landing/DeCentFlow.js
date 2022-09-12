import React from "react";
import { Image, Box, Flex, Heading, Center, Square, Circle, Text } from "@chakra-ui/react";

function DeCentFlow() {
  const imgfest =
    "https://downtownstatecollege.com/wp-content/uploads/2018/06/Allen-Street-w-Banners.jpg";
  const imggroup = "https://www.plumdeluxe.com/wp-content/uploads/2013/06/piazza-2.jpg";
  const imgcouple =
    "https://media.istockphoto.com/photos/couple-of-tourists-discovering-the-beauty-of-the-city-picture-id1317644048?b=1&k=20&m=1317644048&s=170667a&w=0&h=MTIwOi5xA14uAiTdWJgzncByoaENBCqcc7h5Li6IUyI=";

  return (
    <Flex direction="column">
      <Flex bg="black" justify='center' alignContent='center'>
      <Heading p="10px"  as="h1" f="lg">
          Our Approach at DeCent Date
        </Heading>
      </Flex>

      <Flex pl='20px' direction="column" color="white" bg="green.700">
      <Heading pt="10px" as="h1" f="lg">
          Natural Conversations in Squares, Stages and Spaces:
        </Heading>
        {/* <Text>Each townsquare is like a chatroom where anyone can chat about different topics. Group of friends can chat in a groupchat, and individual conversations become a space </Text> */}
        <Text pt="15px">
        The users have access to different topic based “squares” (i.e. chat rooms) where a group connects and makes friends at a “stage” (i.e. group chats), and eventually builds a more “familiar” 1:1 connection in a “space” (i.e. individual chats)
        </Text>
      </Flex>
      <Flex pl='20px' direction="column" color="white" bg="green.700">
      {/* <Text pt="15px">This flow makes it more interactive and natural for people to meet </Text> */}
      <Text pt="15px">
          Ready to get started? Choose a way to log in
        </Text>
        {/* <Image objectFit="cover" p="5" src={imgcouple} /> */}
      </Flex>
    </Flex>
  );
}

export default DeCentFlow;
