import React, { useEffect } from "react";
import { IconButton } from "@chakra-ui/button";
import { Avatar } from "@chakra-ui/avatar";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Flex, Text,Link, Button } from "@chakra-ui/react";
import { auth, db } from "../../firebaseconfig";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, addDoc } from "@firebase/firestore";
import getOtherEmail from "../../utils/utility";
import { useRouter } from "next/router";

function TS_Sidebar() {
  const [user] = useAuthState(auth);
  const [snapshot, loading, error] = useCollection(collection(db, "squares"));
  const squares = snapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  const [snapshotU, loadingU, errorU] = useCollection(collection(db, "users"));
  const users = snapshotU?.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  const [snapshotC, loadingC, errorC] = useCollection(collection(db, "chats"));
  const chats = snapshotC?.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  const [snapshotg, loadingg, errorg] = useCollection(collection(db, "groupchats"));
  const groups = snapshotg?.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  const router = useRouter();
  console.log("squares user--", user);

  useEffect(() => {
    console.log("squares--", squares, "--u-", users, "--c-", chats, "--g-", groups);
  }, []);

  const redirect = (id) => {
    // console.log('ts_id--',id)
    router.push(`/square/${id}`);
  };

  //   const chatExists = (email) =>
  //     chats?.find((chat) => chat.users.includes(user.email) && chat.users.includes(email));

  //   const newChat = async () => {
  //     const input = prompt("Enter email of the chat recipient");
  //     if (!chatExists(input) && input != user.email) {
  //       await addDoc(collection(db, "chats"), { users: [user.email, input] });
  //     }
  //   };

  const squarelist = () => {
    return squares?.map((square) => (
      <Flex
        key={Math.random()}
        p={3}
        align="center"
        _hover={{ bg: "gray.100", cursor: "pointer" }}
        onClick={() => redirect(square.id)}
      >
        <Avatar sr="" marginEnd={3} />
        {/* {console.log("users--", chat.users, "--", user.email)} */}
        <Text>{square.id}</Text>
      </Flex>
    ));
  };

  function redirectProfile(id) {
    console.log("profile redirect--", id);
    router.push(`/profiles/profile`);
  }

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
          <Avatar
            src="https://lens.infura-ipfs.io/ipfs/QmQdZEjzxXwBc79aP9WjTSz53c7bqpk7AGhhsyhhjTHAQV"
            marginEnd={3}
          />
          <Link onClick={() => redirectProfile(user.uid)}>
            {" "}
            <Text>{user.email} </Text>
          </Link>
        </Flex>
        {/* <IconButton size="sm" isRound icon={<ArrowLeftIcon />} onClick={() => signOut(auth)} >Sign Out</IconButton> */}
        
      </Flex>
      <Flex overflow="scroll" direction="column" sx={{ scrollbarWidth: "none" }} flex={1}>
        Squares you follow:
        <br />
        {squarelist()}
      </Flex>
    </Flex>
  );
}

export default TS_Sidebar;
