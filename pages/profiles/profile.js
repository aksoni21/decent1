import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import Navbar from '../../components/Navbar';
import Profilecomponent from '../../components/profilecomponents/Profilecomponent';
import CreateRelation from "../../components/blockchain_comps/CreateRelation";

function Profile() {

  return (
    <Flex direction="column">
      <Navbar />
      <Profilecomponent />
      
      <Flex mt="20px" justify="center" align="center">
        <CreateRelation />
      </Flex>
    </Flex>
  );
}

export default Profile;
