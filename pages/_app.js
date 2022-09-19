import Login from "../components/Login";
import ConnectWallet from "../components/blockchain_comps/ConnectWallet";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { ChakraProvider, Spinner, Center, Button, Flex, Text } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseconfig";
import Landing from "../components/landing/Landing";
import "../styles/style.css";
import ErrorBoundary from "../components/ErrorBoundary";

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);
  // const [explore, setExplore] = useState('landing');//landing for prod instead of test

  // function setExploreValue() {
  //   setExplore("explore");
  //   console.log("explore--", explore);
  // }

  if (loading) {
    return (
      <ChakraProvider>
        <Center h="100vh">
          <Spinner size="xl" />
        </Center>
      </ChakraProvider>
    );
  }

  // if (explore == "landing") {
  //   return (
  //     <ChakraProvider>
  //       <Button
  //         onClick={setExploreValue}
  //         colorScheme="teal"
  //         size="md"
  //         rightIcon={<ArrowRightIcon />}
  //       >
  //         Set Explore
  //       </Button>
  //       <Landing />
  //     </ChakraProvider>
  //   );
  // } else if (explore == "explore") {
  //   return <Text>explore= {explore}</Text>;
  // }

  if (!user) {
    // console.log('in _app not user--')
    return (
      <ChakraProvider>
        <Flex direction="column">
          <Landing />
          <Login />
        </Flex>
      </ChakraProvider>
    );
  }

  return (
    <ErrorBoundary FallbackComponent={Landing}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ErrorBoundary>
  );
}

export default MyApp;
