import React from "react";
import { Flex, Text, Heading } from "@chakra-ui/layout";
import { Link, Input, FormControl, Button } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import TS_Sidebar from "../../components/townsquarecomponents/TS_Sidebar";
import Head from "next/head";
import { useRouter } from "next/router";
import { collection, doc, getDocs, orderBy, query, where, setDoc } from "firebase/firestore";
import { useCollection, useCollectionData, useDocumentData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebaseconfig";
import getOtherEmail from "../../utils/utility";
import Topbar from "../../components/chat/Topbar";
import Bottombar from "../../components/townsquarecomponents/TS_Bottombar";
import { useRef, useEffect } from "react";

function Square() {
  const router = useRouter();
  const { id } = router.query;
  const [user] = useAuthState(auth);
  console.log("user in square--", user);
  const bottomOfsquare = useRef();

  const q = query(collection(db, `squares/${id}/messages`), orderBy("timestamp"));
  //   const q = query(collection(db, `chats/${id}/messages`), orderBy("timestamp"));
  const [messages] = useCollectionData(q);
  const [square] = useDocumentData(doc(db, "squares", id));
  const [snapshot, loading, error] = useCollection(collection(db, `squares/${id}/messages`));
  const chats = snapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  //   const [chat] = useDocumentData(doc(db, "chats", id));
  const m = [messages];
  const s = [square];
  const cha = [chats];
  const sna = [snapshot];
  console.log("query--", id, "--", "m--", m, "s--", s, "--ch", cha, "--snap", sna);
  const getMessages = () =>
    messages?.map((msg) => {
      //   const sender = msg.sender === user.email;
      console.log("msg--", msg);
      return (
        <Flex
          key={Math.random()}
          //   alignSelf={sender ? "flex-start" : "flex-end"}
          //   bg={sender ? "blue.100" : "green.100"}
          w="fit-content"
          minWidth="100px"
          borderRadius="lg"
          p={3}
          m={1}
        >
          {/* {console.log('msg--',msg)} */}
          <Text>
            <Link onClick={() => redirectProfile(user.uid)}>{msg.sender}:</Link> {msg.text}
          </Text>
        </Flex>
      );
    });

  function redirectProfile(id) {
    console.log("profile redirect--", id);
    router.push(`/profiles/profile`);
  }

  const chatlist = () => {
    return (
      chats
        //.filter((chat) => chat.users.includes(user.email))
        ?.map((chat) => (
          <Flex
            key={Math.random()}
            p={3}
            align="center"
            _hover={{ bg: "gray.100", cursor: "pointer" }}
            onClick={() => redirect(chat.id)}
          >
            {/* <Avatar sr="" marginEnd={3} /> */}
            {/* {console.log("users--", chat.users, "--", user.email)} */}
            {/* <Text>{getOtherEmail(chat.users, user)}</Text> */}
          </Flex>
        ))
    );
  };

  //   useEffect(
  //     () =>
  //       setTimeout(bottomOfsquare.current.scrollIntoView({ behavior: "smooth", block: "start" })), // console.log('useEffect--')
  //     [messages]
  //   );
  useEffect(() => {
    //   if (resultsRef.current) {
    bottomOfsquare.current.scrollIntoView({ behavior: "smooth", block: "start" });
    // window.scrollTo({
    //   behavior: "smooth",
    //   top: bottomOfChat.current.offsetTop
    // });
    //   }
  }, [messages]);

  return (
    <Flex h="100vh">
      <Head>
        <title>ts id page </title>
      </Head>

      <TS_Sidebar />
      <Flex flex={1} direction="column">
        <Topbar email={id} />
        <Flex flex={1} direction="column" pt={4} mx={5} overflowX="scroll">
          {getMessages()}

          <div ref={bottomOfsquare}></div>
          <Button bg='blue.100' onClick={()=>(alert('Under construction'))}>Create NFT of my above message on Polygon</Button>

        </Flex>

        <Bottombar id={id} user={user} />
      </Flex>
    </Flex>
  );
}

export default Square;
