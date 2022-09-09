import React from "react";
import { Flex, Text } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { Avatar } from "@chakra-ui/avatar";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { auth, db } from "../firebaseconfig";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, addDoc } from "@firebase/firestore";
import getOtherEmail from "../utils/utility";
import { useRouter } from "next/router";

function Sidebar() {
  const [user] = useAuthState(auth);
  const [snapshot, loading, error] = useCollection(collection(db, "chats"));
  const chats = snapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  const router = useRouter();

  const redirect = (id) => {
    router.push(`/chat/${id}`);
  };

  const chatExists = (email) =>
    chats?.find((chat) => chat.users.includes(user.email) && chat.users.includes(email));

  const newChat = async () => {
    const input = prompt("Enter email of the chat recipient");
    if (!chatExists(input) && input != user.email) {
      console.log('add new chat --', user.email,input, user);
      await addDoc(collection(db, "chats"), { users: [user.email, input] });
    }
  };

  const groupChatExists = (email) =>
    chats?.find((chat) => chat.users.includes(user.email) && chat.users.includes(email));

  const newGroupChat = async () => {
    const input = prompt("Enter the name of the group chat");
    const input2 = prompt("Enter email of group chat recipients");
    if (input != user.email) {
      if (!groupChatExists(input)) {
        await addDoc(collection(db, "groupchats"), { name: [input], users: [user.email, input2] });
      }
    }
  };

  const chatlist = () => {
    return chats
      ?.filter((chat) => chat.users.includes(user.email))
      .map((chat) => (
        <Flex
          key={Math.random()}
          p={3}
          align="center"
          _hover={{ bg: "gray.100", cursor: "pointer" }}
          onClick={() => redirect(chat.id)}
        >
          <Avatar sr="" marginEnd={3} />
          {/* {console.log("users--", chat.users, "--", user.email)} */}
          <Text>{getOtherEmail(chat.users, user)}</Text>
        </Flex>
      ));
  };

  return (
    <Flex w="300px" h="100%" borderEnd="1px solid" borderColor="gray.200" direction="column">
      <Flex
        h="79px"
        w="100%"
        align="center"
        justifyContent="space-between"
        p={3}
        borderBottom="1px solid"
        borderColor="red.200"
      >
        <Flex align="center">
          <Avatar src={user.photoURL} marginEnd={3} />
          <Text>{user.displayName}</Text>
        </Flex>
        {/* <IconButton size="sm" isRound icon={<ArrowLeftIcon />} onClick={() => signOut(auth)} /> */}
        <Button onClick={() => signOut(auth)}>Sign Out</Button>
      </Flex>
      <Button m={5} p={4} onClick={() => newChat()}>
        New Chat
      </Button>
      <Button m={5} p={4} onClick={() => newGroupChat()}>
        New Group Chat
      </Button>
      <Flex overflow="scroll" direction="column" sx={{ scrollbarWidth: "none" }} flex={1}>
        Individual Chats
        <br />
        {chatlist()}
      </Flex>
    </Flex>
  );
}

export default Sidebar;
