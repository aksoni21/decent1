import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Image,
  Flex,
  Button,
  Link,
  Heading,
  Text,
  Textarea,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { client, recommendProfiles, getProfilebyHandle } from "../../lens_api";
import { FaTwitter, FaTelegram } from "react-icons/fa";
// import CreateRelation from "../../components/blockchain_comps/CreateRelation";

import { auth } from "../../firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth";

function Profilecomponent() {
  const router = useRouter();
  const { type } = router.query;
  const [user] = useAuthState(auth);

  function redirectSarah() {
    if(user){
    router.push("/blockchain_pages/veri");
  }else{alert('For this POC, please login at the bottom first')}}
  

  return (
    <Flex  direction="column">
          <Text pl='20px' color="white" fontSize="25px" bg="black">
            This is the profile page, it shows Lens Protocol profile and a web2 profile. 
          </Text>
          <Text pl='20px'color="white" f="md" bg="black">
            To proceed, click on `Save Profile and go to Town Square` button at the bottom 
            </Text>
          <Text pl='20px'color="white" f="md" bg="black">
          *A separate part of this site is Sarah journey where a user of any other app can use.
          Explore that capability
          <Button bg='black' p='0' f='md' onClick={redirectSarah} color="red">
            here
          </Button>
          </Text>
      </Flex>
  );
}

export default Profilecomponent;
