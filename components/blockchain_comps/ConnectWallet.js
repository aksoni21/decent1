import { useState } from "react";

import Head from "next/head";
import { ChatIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Stack } from "@chakra-ui/react";

import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

import { contractaddress } from "../../contractconfig";
import ContractABI from "../../utils/abi/DeCentDate.json";

function ConnectWallet() {
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
      console.log("in walletconnect--", provider);
      alert("You are connected");
    } catch (error) {
      console.log("error--", error);
    }
    // const web3 = new Web3(provider);
  }
  // --end

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
  function test() {
    console.log("signer--", getSigner(), contractaddress);
    connecttocontract();
  }
async function connecttocontract(){
    const provider = new ethers.providers.JsonRpcProvider(); //("HTTP://127.0.0.1:7545"); //localhost on 7545
    const contract = new ethers.Contract(contractaddress, ContractABI.abi, getSigner());
    const data = await contract.fetchallprofiles(1);
    console.log('data--',data)
}

  return (
    <>
      {/* <Head>
        <title>Login</title>
      </Head>
      <Center h="50vh">
        <Stack align="center" bgColor="gray.600" p={5} rounded="3xl" boxShadow="lg" spacing={12}>
          <Box bgColor="blue.500" w="fit-content" p={5} rounded="3xl" boxShadow="md">
            <ChatIcon w="100px" h="100px" color="white" />
          </Box> */}

          {/* <Button boxShadow="md" onClick={()=>signInWithGoogle("",{prompt:"select_account"})}>Sign In with Google</Button> */}
          <Button boxShadow="md" bg = 'blue.300'onClick={() => connectMetaMask()}>
            Connect with MetaMask
          </Button>
        {/*  <Button boxShadow="md" onClick={() => test()}>
            test
          </Button>
         </Stack>
      </Center> */}
    </>
  );
}

export default ConnectWallet;
