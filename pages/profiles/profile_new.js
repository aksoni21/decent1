import { useState, useEffect } from "react";
import Image from "next/image";
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  where,
  addDoc,
  setDoc,
} from "firebase/firestore";
import { useCollection, useCollectionData, useDocumentData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebaseconfig";
import { ethers } from "ethers";
import { useRouter } from "next/router";

import Connect from "../../components/blockchain_comps/ConnectWallet";
import CreateRelation from "../../components/blockchain_comps/CreateRelation";
import Profilecomponent from "../../components/profilecomponents/Profilecomponent";

import { contractaddress } from "../../contractconfig";
import ContractABI from "../../utils/abi/DeCentDate.json";
import { client, recommendProfiles, getProfilebyHandle } from "../../lens_api";

// Chakra UI
import { IconButton } from "@chakra-ui/button";
import { Avatar } from "@chakra-ui/avatar";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Flex, Button, Link, Heading, Text, Box } from "@chakra-ui/react";

function Profile_new() {
  const [user] = useAuthState(auth);
  const [messages, setMessages] = useState([]);
  const [lensprofiles, setLensProfiles] = useState([]);
  const [lensprofile, setLensProfile] = useState([]);
  const router = useRouter();

  let collref = collection(db, `chats`);
  //   let collref= collection(db, `chats/FrsHqDJsD5vtlpSf0I9W/messages`);
  const q = query(collref, where("users", "array-contains", "nkr.soni@gmail.com"));
  //    const q = query(collref,where ('sender', '==','soniperfin@gmail.com'))
  // FrsHqDJsD5vtlpSf0I9W
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  // const provider = new ethers.providers.JsonRpcProvider(); //("HTTP://127.0.0.1:7545"); //localhost on 7545
  // console.log('provider--',provider);

  const contract = new ethers.Contract(contractaddress, ContractABI.abi, provider.getSigner());
  // console.log('contract--',contract);
  async function add() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    // console.log("accounts: ", accounts, accounts[0]);

    // const data = await contract.createProfile(1,789,5016504917,true);
    // console.log("data--", data);

    // alert('will add');
    // console.log("id--", `${id}`, "--", id, "uid--", user.uid);
    await setDoc(doc(db, "users", `${user.uid}`), {
      Bio: "here es mi bio, hombre",
      Name: "Crypto Radhu",
      Displayname: "CryptoRadhu",
      Number: "770-605-4384",
      SMcheck: "https://twitter.com/aksoni21",
      SM2Check: "",
      RelationshipStage: "single",
      CanBeContacted: "true",
    });
  }

  function createAlice() {
    const alice_keypair = {};

    alice_keypair["address"] = "0x0ca111d3ADF1C52755BE7C422AA00B32A26Bd4E9";
    alice_keypair["privateKey"] =
      "0xa8247df197b985aad7b7573687dbb4b90045f366edbb5736290328112b84b8c0";
    alice_keypair["publicKey"] =
      "66680ab3ab6f285dd405a6a6110d164f6fba77b5618e6499c9454430be0323fede0554f76b7299737645bd30dac001fcbd4b5e795d6a6284de0d59e5b7dbf6fc";

    // console.log("in create Alice--", alice_keypair);
    return alice_keypair;
  }

  async function loadLensProfiles() {
    try {
      const response = await client.query(recommendProfiles).toPromise();
      setLensProfiles(response.data.recommendedProfiles);
      console.log("Lens response--", { response });
    } catch (err) {
      console.log({ err });
    }
  }

  const EthCrypto = require("eth-crypto");

  // console.log("alice identity--3", typeof(alice_created), '-----',typeof(alice_keypair));
  // 0xdb6456ce98b5e10f3623d1419cff450748cdce4f5125094f67b4559b7774cdcf

  async function encrypt(number) {
    const encrypted = await EthCrypto.encryptWithPublicKey(createAlice().publicKey, number);
    console.log("1 encrypted--", number, "--", encrypted);

    const str = EthCrypto.cipher.stringify(encrypted);
    console.log("1 stringify--", str, "--", str.length);
    return str;
  }

  async function decrypt(str) {
    const decrypted = await EthCrypto.decryptWithPrivateKey(createAlice().privateKey, str);
    const s = decrypted;
    return s;
  }
  // http://localhost:3000/profiles/profile

  async function badMac() {
    const data = await contract.fetchallprofiles();
    console.log("data--", data);
    const data2 = await contract.createRelationship(data[2][0], data[3][0], 0, 0, 4, true);
    // // single,friendly,exploring,'--',verify,dating,commited,'--',open,notActive
    const data3 = await contract.fetchallRelations();
    console.log("data3--", data3);
  }

  let p = "";
  async function getProfiles() {
    // encrypt('5016504917');
    const data = await contract.fetchallprofiles();
    console.log("data--", data, "--");
  }
  async function createProfile() {
    // console.log('in create profile--', createAlice(), '--', createAlice().privateKey)

    const data = await contract.testcreateProfile();
    // const data = await contract.createProfile("Radhu","Ghosh","770", encrypt("6054846"));
    // const data2 = await contract.createProfile("Ankur","Soni","501", encrypt("6504918"));
    // const data3 = await contract.createProfile("Dr Radhu","Ghosh","770", encrypt("6054343"));
    // const data4 = await contract.createProfile("Gangsta","Soni","501", encrypt("6504917"));
    console.log("data--", data);
  }
  async function getProfCount() {
    // console.log("in prof count--", contract, "--", window.ethereum);
    const data = await contract.getProfCount();
    console.log("data--", data.toString());
  }

  async function getmessages_() {
    // console.log('in getmsgs--',q)
    const querySnapshot = await getDocs(q);
    console.log("in getmsgs--", querySnapshot);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  }

  async function getmessages() {
    const msgs = [];
    // console.log('in getmsgs--',q)
    const querySnapshot = await getDocs(q);
    //    console.log('getmessages--1',querySnapshot)
    querySnapshot.forEach(async (v) => {
      // console.log('getmessages--3')
      const colref2 = collection(db, `chats/${v.id}/messages`);
      const q2 = query(colref2, where("sender", "==", "nkr.soni@gmail.com"));
      const qs2 = await getDocs(q2);
      //   console.log('getmessages--2', colref2,'--',v.id,'q2--',q2,'qs2--',qs2)
      qs2.forEach((doc2) => {
        console.log("qs2--", doc2.id, "=>", doc2.data(), "--", doc2.data().text);
        const k = doc2.data().text;
        msgs.push(k);
      });
    });
    console.log("msgs--", msgs);
    setMessages(msgs);
    console.log("messages--", messages);
  }
  function getMsgList() {
    return messages.map((msg) => (
      <Flex key={Math.random()} p={3} align="left" _hover={{ bg: "gray.100", cursor: "pointer" }}>
        <Text>Text: {msg}</Text>
        <Button m={5} p={4}>
          Put on BC
        </Button>
      </Flex>
    ));
  }
  const [snapshot, loading, error] = useCollection(collection(db, "chats"));
  const chats = snapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  const chatExists = (email) =>
    chats?.find((chat) => chat.users.includes(user.email) && chat.users.includes(email));

  const found = (email) => {
    chats?.find((chat) => {
      chat.users.includes(user.email) && chat.users.includes(email);
      console.log("chat id --", chat.id);
      return chat.id;
    });
  };

  const newChat = async () => {
    const input = prompt("Enter email of the chat recipient");
    if (!chatExists(input) && input != user.email && input) {
      console.log("add new chat --", user.email, input, user);
      await addDoc(collection(db, "chats"), { users: [user.email, input] });
    } else {
      // console.log('found something--',found(input))
      // const d= found(input);
      // console.log('d--',d)
      router.push("/chat/KA8hWNgV4sDKLC5mXxUL");
    }
  };

  return (
    <Flex direction="column">
      <Flex borderEnd="1px solid" borderColor="gray.200" direction="column">
        <Profilecomponent />
      </Flex>

      <Flex direction="column">
        {" "}
        <Button width="250px" colorScheme="green">
          Add to a Group Chat *
        </Button>
        <br />
        <Button width="250px" colorScheme="green" onClick={() => newChat()}>
          Chat *
        </Button>
        <Text>* Cannot directly chat with this person or add them to a group.</Text>
        <Text>You both have to talk in a townsquare first.</Text>{" "}
        <CreateRelation/>
      </Flex>
    </Flex>
  );
}

export default Profile_new;


