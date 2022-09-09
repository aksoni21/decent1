import React from "react";
import { useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

// Chakra UI
import { Flex, Text } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { Avatar } from "@chakra-ui/avatar";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

function Connect() {
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

  return (
    <Flex w="300px" h="100%" borderEnd="1px solid" borderColor="gray.200" direction="column">
      <Flex align="center">
        <Button m={5} p={4} onClick={() => connectMetaMask()}>
          Connect with MetaMask
        </Button>
      </Flex>
      <Flex align="center">
        <Button m={5} p={4} onClick={() => wallconn()}>
          Connect with WalletConnect
        </Button>
      </Flex>
    </Flex>
  );
}

export default Connect;
