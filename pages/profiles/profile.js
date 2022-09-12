import { useState, useEffect } from "react";
import { Button, Flex } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Profilecomponent4 from "../../components/profilecomponents/Profilecomponent4";
import Profilecomponent5 from "../../components/profilecomponents/Profilecomponent5";
import Profilecomponent6 from "../../components/profilecomponents/Profilecomponent6";
import CreateRelation from "../../components/blockchain_comps/CreateRelation";

function Profile({useremail}) {
  console.log('useremail--',useremail);

  return (
    <Flex direction="column">
      <Navbar />
      {useremail}
      <Profilecomponent4 />
      
      <Profilecomponent5 />
      
      <Flex pt="20px" pb="20px" justify="center" align="center" bg="beige">
        <CreateRelation />
      </Flex>
      <Profilecomponent6 />
    </Flex>
  );
}

export default Profile;
