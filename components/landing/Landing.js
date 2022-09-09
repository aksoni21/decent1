import React from "react";
import {
  Wrap,
  WrapItem,
  Image,
  Box,
  Flex,
  Spacer,
  Center,
  Square,
  Link,
  Text,
  Textarea,
  Heading,
  Button,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../Navbar";
import Flow from "./OverallFlow";
import NextLink from "next/link";
import { auth } from "../../firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

// src="https://assets.hinge.co/Home_01_Hero_mobile_c3e6a77bdb.jpg"
function Landing() {
  const imglink = "https://assets.hinge.co/Home_01_Hero_mobile_c3e6a77bdb.jpg";
  const [user] = useAuthState(auth);
  const router = useRouter();

  function redirect() {
    if(user){
    router.push(`/blockchain_pages/veri`);
  }else{alert('For this POC, please login at the bottom first')}}
  return (
    <Flex direction="column">
      {/* <Flex class="fcontainer">Hello From Landing</Flex> */}
      <Flex w="100%" borderEnd="1px solid" borderColor="gray.200" direction="column">
        <Navbar />
        <Heading color="white" size="xl" bg="black">
          Welcome to first Blockchain based dating/social media site.{" "}
        </Heading>
        <Heading color="white" as="h1" size="md" bg="black">
          Our approach is to emulate real life and foster natural conversations
        </Heading>
        <Heading color="white" as="h1" size="md" bg="black">
          A separate part of this site is Sarah journey where a user of any other app can use.
          Explore that capability
          <Button bg='black' fontSize='25px' onClick={redirect} color="red">
            here
          </Button>
        </Heading>
      </Flex>

      <Flex>
        <Flow />
      </Flex>
    </Flex>
  );
}

export default Landing;
