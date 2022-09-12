import React, { useState } from "react";
import Head from "next/head";
import { ChatIcon } from "@chakra-ui/icons";
import { Flex, Box, Button, Center, Stack, Input, Text } from "@chakra-ui/react";
import {
  useAuthState,
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
  useSignInWithTwitter,
} from "react-firebase-hooks/auth";

import { collection, doc, getDocs, orderBy, query, where, setDoc } from "firebase/firestore";
import { useCollection, useCollectionData, useDocumentData } from "react-firebase-hooks/firestore";

("c:/Users/nkrso/workspace/chakra_chatapp/node_modules/@chakra-ui/icons/dist/chakra-ui-icons.cjs");
("c:/Users/nkrso/workspace/chakra_chatapp/node_modules/@chakra-ui/icons/dist/chakra-ui-icons.cjs");
import { auth, db } from "../firebaseconfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  TwitterAuthProvider,
  EmailAuthProvider,
  signInWithPopup,
  signInWithPhoneNumber,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/router";
import Explore from "./Explore";
// import { walletconnect } from "web3modal/dist/providers/connectors";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

import {
  client,
  getindivProfile,
  recommendProfiles,
  mySearchProfile,
  searchProfiles,
  getProfilebyHandle,
} from "../lens_api";

function Login() {
  // const [signInWithGoogle, user2, loading, error] = useSignInWithGoogle(auth);
  // const [signInWithTwitter2, user, loading2, error2] = useSignInWithTwitter(auth);
  const [user] = useAuthState(auth);
  console.log("user--", user);
  const router = useRouter();
  const [lenshandle, setLensHandle] = useState("");
  const [lensprofile, setLensProfile] = useState([]);
  const [account, setAccount] = useState("");

  // #firebase Code
  const signInWithTwitter = () => {
    const provider = new TwitterAuthProvider();
    signInWithPopup(auth, provider)
      .then((re) => {
        console.log("login signin--", re);
        // console.log("login signin 2--", re.user.reloadUserInfo.profile);
        addUser(re.user, "aksoni twitter");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((re) => {
        console.log("login signin--", re);
        console.log("login signin 2--", re.user.reloadUserInfo.profile);
        addUser(re.user, "nkr2 gmail");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const signInWithEmail = async () => {
    // e.preventDefault();
    console.log("in sign in with email--");
    const user1 = await signInWithEmailAndPassword(auth, "test1@gmail.com", "test1@");
    console.log("user1--", user1);
  };
  const signInWithWallet = async () => {
    // e.preventDefault();

    console.log("in sign in with wallet email--");
    const em = account + "@bcwallet.com";
    const pin = "83Esl!34";
    console.log("em, pin--", em, pin);
    let user1;
    try {
      user1 = await signInWithEmailAndPassword(auth, em, pin);
      console.log("wallet signin user1 --", user1);

      console.log("userf1--", user1);
    } catch (error) {
      console.log("error--", error);
      user1 = await createUserWithEmailAndPassword(auth, em, pin);
      console.log("userf1--", user1);
    }
  };
  async function addUser(_user, _name) {
    //firestore profile
    await setDoc(doc(db, "users", `${_user.uid}`), {
      Bio: "here es mi bio, hombre",
      Name: _name,
      Displayname: "CryptoRadhu",
      Number: "770-605-4384",
      SMcheck: "https://twitter.com/aksoni21",
      SM2Check: "",
      RelationshipStage: "single",
      CanBeContacted: "true",
    });
  }
  // --end firebase code

  // #blockchain code
  async function wallconn() {
    try {
      console.log("in walletconnect2--");
      const providerOptions = {
        walletconnect: {
          package: WalletConnectProvider, // required
          options: {
            infuraId: "7316f55bb4114cdcad0ae0ae2b1bb1d4", // required
          },
        },
      };
      const web3Modal = new Web3Modal({ providerOptions });
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      console.log("in walletconnect--", provider, "---", signer);
      // alert("You are connected");
      const acc = await signer.getAddress();
      setAccount(acc);
      console.log("account--", account);
      if (account) {
        signInWithWallet();
      } else {
        console.log("no account");
      }
    } catch (error) {
      console.log("error--", error);
    }
    // const web3 = new Web3(provider);
  }

  async function connecttocontract() {
    const provider = new ethers.providers.JsonRpcProvider(); //("HTTP://127.0.0.1:7545"); //localhost on 7545
    const contract = new ethers.Contract(contractaddress, ContractABI.abi, getSigner());
    const data = await contract.fetchallprofiles(1);
    console.log("data--", data);
  }

  async function lensConn() {
    try {
      alert("Lens Protocol connection is still under construction");
      //   const l = "lens";
      //   // const response = await client.query(getindivProfile, { id: "0x7bfe" }).toPromise();
      //   console.log("lens handle--", lenshandle);
      //   const bcuser = getSigner();
      //   if (bcuser) {
      //     if (lenshandle) {
      //       const response = await client.query(getProfilebyHandle, { han: lenshandle }).toPromise();
      //       // const response = await client.query(getProfilebyHandle, { han: "fazelaram.lens"}).toPromise();
      //       console.log("get profile by handle response--", response, response.data.profile);
      //       setLensProfile(response.data.profile);
      //   console.log("lens conn profile--", lensprofile);
      //   if(lensprofile){
      //     console.log('lens--')

      //   }

      //     } else {
      //       alert("please enter your lens handle");
      //     }
      //   }
    } catch (err) {
      console.log(err);
    }
  }

  const handleChange = (event) => {
    const h = event.target.value + ".lens";
    setLensHandle(h);
    // console.log("lenshandle--", lenshandle);
  };

  async function connectMetaMask() {
    try {
      console.log("connecting to metamask");
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      console.log("in metamask--", provider);
      if (signer) {
        alert("You are connected to MetaMask");
      } else {
      }
    } catch (error) {
      console.log("error--", error);
      alert("error connecting to MetaMask. Do you have Metamask Browser Extension installed?");
    }
  }

  function getSigner() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    return provider.getSigner();
  }
  // --end blockchain code

  function test() {
    // console.log("signer--", getSigner(), contractaddress);
    // connecttocontract();
    console.log("sign in with email--");
    // router.push("/blockchain_pages/veri");
    signInWithEmail();
  }

  return (
    <>
      <Head>
        <title>DeCent Date</title>
      </Head>
      <Center h="100vh" bg="green.700">
        <Stack align="center" bgColor="gray.600" p={5} rounded="3xl" boxShadow="lg" spacing={5}>
          <Box bgColor="blue.500" w="fit-content" p={5} rounded="3xl" boxShadow="md">
            <ChatIcon w="100px" h="100px" color="white" />
          </Box>
          {/* <Button boxShadow="md" onClick={()=>signInWithGoogle("",{prompt:"select_account"})}>Sign In with Google</Button> */}
          <Button boxShadow="md" bg="blue.300" onClick={() => test()}>
            Login as Test User
          </Button>
          <Button boxShadow="md" bg="blue.300" onClick={() => wallconn()}>
            Sign In with a Blockchain Wallet
          </Button>

          <Button boxShadow="md" bg="blue.300" onClick={() => signInWithGoogle()}>
            Sign In with Google
          </Button>
          <Button boxShadow="md" bg="blue.300" onClick={() => signInWithTwitter()}>
            Sign In with Twitter
          </Button>
          <Button boxShadow="md" bg="blue.300" onClick={() => lensConn()}>
            Connect with Lens Protocol Profile
          </Button>
        </Stack>
      </Center>
    </>
  );
}

export default Login;
