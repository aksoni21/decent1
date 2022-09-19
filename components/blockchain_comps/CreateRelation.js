import React, { useState, useEffect } from "react";
import { Flex, Button, Link, Heading, Text, Box } from "@chakra-ui/react";
import { ethers } from "ethers";
import { localcontractaddress, mumbaicontractaddress } from "../../contractconfig";
import ConnectWallet from "../../components/blockchain_comps/ConnectWallet";

import ContractABI from "../../utils/abi/DeCentDate.json";
import { useRouter } from "next/router";

function CreateRelation() {
  
  const rpcEndpoint = "https://rpc-mumbai.matic.today"; //mumbai
  const provider = new ethers.providers.JsonRpcProvider(rpcEndpoint); //mumbai
     
  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(
    mumbaicontractaddress,
    ContractABI.abi,
    provider.getSigner()
  );
  const router = useRouter();

  const [creator, setCreator] = useState([]);
  const [partner, setPartner] = useState([]);

  useEffect(() => {
    // test();
  }, []);

  async function test() {
    // alert('in test fx');
    // const cprofile = await contract.testcreateProfile();
    // console.log("cprofile--", cprofile);
    const profiles = await contract.fetchallprofiles();
    console.log("profiles--", profiles);
    // const profiles2 = await contract.createRelationship(profiles[2][0],profiles[3][0],0,0,4,true);
    // console.log("profiless--", profiles2);
    const relations = await contract.fetchallRelations();
    console.log("relations--", relations);
    const rel = relations[0];
    console.log("rel--", rel);
    const relCreator = await contract.fetchIndivProfile(rel.creatorProfId);
    const relPartner = await contract.fetchIndivProfile(rel.partnerProfId);
    console.log("members--", relCreator, relPartner);
    setCreator(relCreator[0]);
    setPartner(relPartner[0]);
    alert('Relationship created. Click on Explore Sarah Journey')
  }

  function redirect() {
    // console.log("profile redirect--", id);
    router.push(`/blockchain_pages/veri`);
  }

  function verifyWalletConnection() {
    if (confirm("Please make sure to connect to MetaMask or a web3 wallet first") == true) {
      test();
    }
  }

  return (
    <Flex direction="column" width='300px'>
      <Button  align='center' justify='center' mt="20px"  mb="20px" bg="blue.300" >
        Start a Space with this peron
      </Button>
      <ConnectWallet />
      <Button mt="20px" bg="purple.500" onClick={verifyWalletConnection}>
        Create Relationship NFT with them
      </Button>
      
      <Button  mt="20px" bg="purple.500" onClick={redirect}>
        Explore Sarah Journey
      </Button>{" "}
    </Flex>
  );
}

export default CreateRelation;
