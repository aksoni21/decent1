import React from "react";
import { Image, Box, Flex, Heading, Center, Square, Circle, Text } from "@chakra-ui/react";
// import dm2 from '../images/dm2';
import DecentFlow from "./DeCentFlow";

function OverallFlow() {
  const imgfest =
    "https://downtownstatecollege.com/wp-content/uploads/2018/06/Allen-Street-w-Banners.jpg";
  const imggroup = "https://www.plumdeluxe.com/wp-content/uploads/2013/06/piazza-2.jpg";
  const imgcouple =
    "https://media.istockphoto.com/photos/couple-of-tourists-discovering-the-beauty-of-the-city-picture-id1317644048?b=1&k=20&m=1317644048&s=170667a&w=0&h=MTIwOi5xA14uAiTdWJgzncByoaENBCqcc7h5Li6IUyI=";
const imgdm2 = "../../components/images/dm2.png"

  return (
    <Flex direction="column">
      
      <Flex direction="column" color='white' bg='tomato'>
          <Heading as="h1" size="lg">
            Natural Conversations: 
          </Heading>
          <Text>
            Imagine a townsquare or a fair where there are several booths with people hanging out with each other. 
          </Text>

          <Image p='5' objectFit="cover" src={imgfest} />
      </Flex>
      <Flex direction="column" color='white' bg='green.800'>
        <Heading as="h1" size="lg">
          Group Connections:
        </Heading>
        <Text>
          Natural interactions create more friendships and socializing. You can pick up on their conversational skills, how they fit into the group etc
        </Text>
        <Image objectFit="cover" p='5' src={imggroup} />
      </Flex>
      <Flex direction="column" color='white' bg='blue.700'>
        <Heading as="h1" size="lg">
          Familiar Connection:
        </Heading>
        <Text noOfLines={[1, 2, 3]}>
          Connections built on common interests lead to natural, flowing individual conversations. No added pressure or need for cheesy pickup lines 
        </Text>
        <Text> *For starting a 1-on-1 conversation with anyone, you both would need to first talk in a fair or a group connection </Text>
        
        <Image objectFit="cover" p='5' src={imgcouple} />
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
            
      <Flex direction="column" color='white' bg='tomato'>
        <DecentFlow/>
      </Flex>

    </Flex>
  );
}

export default OverallFlow;
