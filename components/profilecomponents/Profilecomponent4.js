import React from "react";
import { Flex, Text } from "@chakra-ui/react";

function Profilecomponent4() {
  return (
    <Flex direction="column">
      <Text pl="20px" color="white" fontSize="25px" bg="black">
        This is the profile page, it shows Lens Protocol profile and a web2 profile.
      </Text>
      <Text pl="20px" color="white" size="md" bg="black">
        The option to start a space with this person shows here if there is a connection between the
        viewer and this profile
      </Text>
    </Flex>
  );
}

export default Profilecomponent4;
