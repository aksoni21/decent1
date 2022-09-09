import React, { useState, useEffect } from "react";
// Chakra UI
import { IconButton } from "@chakra-ui/button";
import { Avatar } from "@chakra-ui/avatar";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Flex, Text, Textarea, Button, Input } from "@chakra-ui/react";

import { ethers } from "ethers";
import { localcontractaddress, mumbaicontractaddress } from "../../contractconfig";
import Navbar from "../../components/Navbar";
import ContractABI from "../../utils/abi/DeCentDate.json";
// import { async } from "@firebase/util";

function Veri() {
  const [value, setValue] = useState("");
  const [areacode, setAreaCode] = useState("");
  const [number, setNumber] = useState("");

  const [encphone, setEncPhone] = useState("");
  const [decphone, setDecPhone] = useState("empty");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // console.log('provider--',provider);
  const contract = new ethers.Contract(
    mumbaicontractaddress,
    ContractABI.abi,
    provider.getSigner()
  );

  const EthCrypto = require("eth-crypto");

  async function verify() {
    if (value) {
      const area = value.substring(0, 3);
      const remaining = value.substring(3, 10);
      setAreaCode(area);
      setNumber(remaining);
      // console.log("in verify change--", areacode, remaining, value);

      const data = await contract.fetchallnumbers(area);
      console.log("data--", data);

      if (data[0][2].length) {
        // console.log("in if data--", data);
        setEncPhone(data[0][2]);
        data.map(async (d) => {
          if (remaining === d[2]) {
            console.log("d--", d[2], "--", d);
            const profId = d[0];
            const relId = d[3];
            const c = await contract.fetchIndivProfile(profId);
            console.log("Searched Number is--", c[0][2], "--", c[0][3]);
            const r = await contract.fetchIndivRelation(relId);
            // console.log("in rel data--", profId, "--", relId, "--", r);
            const partnerid = r[0][2];
            const p = await contract.fetchIndivProfile(partnerid);
            console.log("Partner Info is-", p[0][2], "--", p[0][3]);
          } else {
            // console.log("no match found", remaining, d[2]);
          }
          // const decrypted = await decrypt(data[0][2]);//test
        });

        // const decrypted = await decrypt(data[0][2]);
        // if (remaining === decrypted) {
        //   console.log("found a match--", remaining, decrypted);
        //   const profId = data[0][0];
        //   const relId = data[0][3];
        //   const c = await contract.fetchIndivProfile(profId);
        //   console.log("in search data--", c);
        //   const r = await contract.fetchIndivRelation(relId);
        //   console.log("in rel data--", profId, "--", relId, "--", r);
        //   const partnerid = r[0][2];
        //   const p = await contract.fetchIndivProfile(partnerid);
        //   console.log("in partner data--", p);
        // } else {
        //   console.log("no match found", remaining, decrypted);
        // }
      } else {
        console.log("in verify, no number found based on that areacode");
      }
      // console.log("verify--", data, "--", encphone, "--", data[0][2]);
    } else alert("Please input a number");
  }
  async function decrypt(str) {
    if (str.length) {
      console.log("in decrypt--", str);
      // const decrypted = await EthCrypto.decryptWithPrivateKey(createAlice().privateKey, str);
      // console.log("in decrypt 2--", decrypted);
      setDecPhone(str);
      return str; //return decrypted
    } else {
      console.log("in decrypt, no number found");
    }
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
  //http://localhost:3000/blockchain_pages/veri

  return (
    <Flex direction="column">
      <Navbar />
      <Textarea>
        This is completely separate from DeCentDate. Anyone can come to this site and use its
        functionality. Suppose Sarah is on Bumble and she found a cute guy that she has been texting
        him for few weeks now. She is starting to like him and wants to check him out online. She
        decides to come here, put in his number and make sure he is not married or in committed
        relationship with someone else.
      </Textarea>

      <Flex
        w="300px"
        h="100%"
        mt="50px"
        borderEnd="1px solid"
        borderColor="gray.200"
        direction="column"
      >
        <Flex align="center" direction="column">
          <Text>Phone number you want to find</Text>
          <Input placeholder="Number.." value={value} onChange={handleChange} />
          <Button m={5} p={4} onClick={() => verify()}>
            Check
          </Button>
          <Text>Value: {value}</Text>
          <Text onClick={() => decrypt(encphone)}>Value: {decphone}</Text>
        </Flex>{" "}
      </Flex>
    </Flex>
  );
}

export default Veri;
