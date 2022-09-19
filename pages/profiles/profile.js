// import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Profilecomponent4 from "../../components/profilecomponents/Profilecomponent4";
import Profilecomponent5 from "../../components/profilecomponents/Profilecomponent5";
import Profilecomponent6 from "../../components/profilecomponents/Profilecomponent6";
import CreateRelation from "../../components/blockchain_comps/CreateRelation";

function Profile({useremail}) {
    return (
    <Flex direction="column">
      <Navbar />
      {console.log('prof 1--')}
      {useremail}
      {console.log('prof 2--')}
      <Profilecomponent4 />
      {console.log('prof 3--')}
      <Profilecomponent5 />
      {console.log('prof 4--')}
      <Flex pt="20px" pb="20px" justify="center" align="center" bg="beige">
        <CreateRelation />
      </Flex>
      {console.log('prof 5--')}
      <Profilecomponent6 />
      {console.log('prof 6--')}
    </Flex>
  );
}

export default Profile;
