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
      <Flex bg="black">
        <Heading as="h1" size="2xl">
          Our Approach at DeCent Date
        </Heading>
      </Flex>

      <Flex direction="column" color="white" bg="tomato">
        <Heading as="h1" size="lg">
          Natural Conversations in Squares, Stages and Spaces:
        </Heading>
        {/* <Text>Each townsquare is like a chatroom where anyone can chat about different topics. Group of friends can chat in a groupchat, and individual conversations become a space </Text> */}
        <Text>
          A fair is Chatroom, group connection is groupchat, Familiar connection is individual chat
        </Text>
      </Flex>
      <Flex direction="column" color="white" bg="blue.700">
      <Text>This flow makes it more interactive and natural for people to meet </Text>
        <Text noOfLines={[1, 2, 3]}>
          Ready to get started? Choose a way to log in
        </Text>
        {/* <Image objectFit="cover" p="5" src={imgcouple} /> */}
      </Flex>
    </Flex>
  );
}

export default DeCentFlow;
