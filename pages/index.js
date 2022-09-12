import Head from "next/head";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import TS_Sidebar from "../components/townsquarecomponents/TS_Sidebar";
import { Flex, Box, ChakraProvider, Spinner, Center, Button, Text } from "@chakra-ui/react";
import Explore from "../components/Explore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseconfig";
import ProfileComponent from "../components/profilecomponents/Profilecomponent";
import ProfileComponent2 from "../components/profilecomponents/Profilecomponent2";
import ProfileComponent3 from "../components/profilecomponents/Profilecomponent3";
import Landing from "../components/landing/Landing";
import Navbar from "../components/Navbar";
import ScreenSize from "../components/ScreenSize";

export default function Home() {
  return (
    <Flex direction="column">
      <Head>
        <title>DeCent Date</title>
      </Head>
      {/* <Text>Index page</Text> */}
      <Navbar />
      {/* <ScreenSize /> */}
      <Flex direction="column" justify="center">
        <ProfileComponent />
        <Flex direction="column">
          <ProfileComponent2 />
          <ProfileComponent3 />
        </Flex>
      </Flex>
    </Flex>
  );
}
