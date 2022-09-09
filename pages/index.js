import Head from "next/head";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import TS_Sidebar from "../components/townsquarecomponents/TS_Sidebar";
import { Flex, Box, ChakraProvider, Spinner, Center, Button, Text } from "@chakra-ui/react";
import Explore from "../components/Explore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseconfig";
import ProfileComponent from "../components/profilecomponents/Profilecomponent";
import Landing from "../components/landing/Landing";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <Flex direction="column">
      <Head>
        <title>DeCent Date</title>
      </Head>
      {/* <Text>Index page</Text> */}
      <Navbar />
      <Flex direction="row" justify="center">
        <ProfileComponent />
      </Flex>
    </Flex>
  );
}
