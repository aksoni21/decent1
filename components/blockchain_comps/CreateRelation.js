import React, { useState, useEffect } from "react";
import { Flex, Button, Link, Heading, Text, Box } from "@chakra-ui/react";
import { ethers } from "ethers";
import { localcontractaddress, mumbaicontractaddress } from "../../contractconfig";

import ContractABI from "../../utils/abi/DeCentDate.json";
import { useRouter } from "next/router";
  
function CreateRelation() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(mumbaicontractaddress, ContractABI.abi, provider.getSigner());
  const router = useRouter();

  const [creator, setCreator] = useState([]);
  const [partner, setPartner] = useState([]);

  useEffect(() => {
    // test();
  }, []);

  async function test() {
    const profiles = await contract.fetchallprofiles();
    // const profiles2 = await contract.createRelationship(profiles[2][0],profiles[3][0], 0, 0, 4, true);
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
  }

  function redirect() {
    // console.log("profile redirect--", id);
    router.push(`/blockchain_pages/veri`);
  }

  return (
    <Flex direction="column">
      <Button width="250px" bg="purple.500" onClick={test}>
        Create Relationship NFT with this person
      </Button>
      <Text>creator: {creator[2]}</Text>
      <Text>partner: {partner[2]}</Text>
      <Button width="250px" bg="purple.500" onClick={redirect}>
        Explore Sarah Journey
      </Button>{" "}
    </Flex>
  );
}

export default CreateRelation;
