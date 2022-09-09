import React from "react";
import { Flex, Text, Heading } from "@chakra-ui/layout";
import { Input, FormControl, Button } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import Sidebar from "../../components/Sidebar";
import Head from "next/head";
import { useRouter } from "next/router";
import { collection, doc, orderBy, query } from "firebase/firestore";
import { useCollectionData, useDocumentData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebaseconfig";
import getOtherEmail from "../../utils/utility";
import Topbar from "../../components/chat/Topbar";
import Bottombar from "../../components/chat/Bottombar";
import { useRef, useEffect } from "react";

function Chat() {
  const router = useRouter();
  const { id } = router.query;
  const [user] = useAuthState(auth);
  // console.log('auth--',auth)

  const q = query(collection(db, `chats/${id}/messages`), orderBy("timestamp"));

  const q2 = query(collection(db, `chats`), orderBy("timestamp"));
  const [m2] = useCollectionData(q2);
  console.log('m2--',m2);

  const [messages] = useCollectionData(q);
  const [chat] = useDocumentData(doc(db, "chats", id));
  const m = [messages];
  // console.log('query--',id,'--',db,'m--',m);

  const bottomOfChat = useRef();

  const getMessages = () => console.log("messages--", messages);
  try {
    messages?.map((msg) => {
      1;
      const sender = msg.sender === user.email;
      return (
        <Flex
          key={Math.random()}
          alignSelf={sender ? "flex-start" : "flex-end"}
          bg={sender ? "blue.100" : "green.200"}
          w="fit-content"
          minWidth="100px"
          borderRadius="lg"
          p={3}
          m={1}
        >
          <Text>{msg.text}</Text>
        </Flex>
      );
    });
  } catch (error) {
    console.log("error--", error);
  }
  //   useEffect(
  //     () =>
  //       setTimeout(bottomOfChat.current.scrollIntoView({ behavior: "smooth", block: "start" })), // console.log('useEffect--')
  //     [messages]
  //   );
  useEffect(() => {
    //   if (resultsRef.current) {
    bottomOfChat.current.scrollIntoView({ behavior: "smooth", block: "start" });
    // window.scrollTo({
    //   behavior: "smooth",
    //   top: bottomOfChat.current.offsetTop
    // });
    //   }
  }, [messages]);

  return (
    <Flex h="100vh">
      <Head>
        <title>id page Date</title>
      </Head>

      <Sidebar />
      <Flex flex={1} direction="column">
        <Topbar email={getOtherEmail(chat?.users, user)} />
        <Flex flex={1} direction="column" pt={4} mx={5} overflowX="scroll">
          {getMessages()}
          <div ref={bottomOfChat}></div>
        </Flex>
        <Bottombar id={id} user={user} />
      </Flex>
    </Flex>
  );
}

export default Chat;
