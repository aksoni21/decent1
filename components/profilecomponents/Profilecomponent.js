import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Image,
  Flex,
  Button,
  Link,
  Heading,
  Text,
  Textarea,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { client, recommendProfiles, getProfilebyHandle } from "../../lens_api";
import { FaTwitter, FaTelegram } from "react-icons/fa";
// import CreateRelation from "../../components/blockchain_comps/CreateRelation";

import { auth } from "../../firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth";
function Profilecomponent() {
  const router = useRouter();
  const { type } = router.query;
  const [lensprofile, setLensProfile] = useState([]);
  const [user] = useAuthState(auth);

  const buttonwidth = "250px";

  useEffect(() => {
    //  createAlice();
    // loadLensProfiles();

    getLensProfile();
    console.log("in profile component--");
  }, []);
  async function getLensProfile() {
    try {
      // const response = await client.query(getindivProfile, { id: "0x7bfe" }).toPromise();
      const response = await client.query(getProfilebyHandle, { han: "goncalo.lens" }).toPromise();
      // console.log("get profile by handle response--", response);
      setLensProfile(response.data.profile);

      // console.log("profile--", lensprofile);

      // const publicationData = await client.query(getPublications, { id }).toPromise();
      // setPubs(publicationData.data.publications.items);
    } catch (err) {
      console.log(err);
    }
  }
  function redirect() {
    // console.log("profile redirect--", id);
    router.push(`/square/Mainstage`);
  }
  
  function redirectSarah() {
    if(user){
    router.push(`/blockchain_pages/veri`);
  }else{alert('For this POC, please login at the bottom first')}}
  
  return (
    <Flex direction="column">
          <Heading pl="20px" color="white" size="lg" bg="black">
            This is the profile page, it shows Lens Protocol profile and a web2 profile. 
          </Heading>
          <Heading pl="20px" color="white" size="md" bg="black">
            To proceed, click on "Save Profile and go to Town Square" button at the bottom 
          </Heading>
          <Heading color="white" as="h1" size="md" bg="black">
          A separate part of this site is Sarah journey where a user of any other app can use.
          Explore that capability
          <Button bg='black' fontSize='25px' onClick={redirectSarah} color="red">
            here
          </Button>
        </Heading>
      <Flex
        className="profcomp"
        direction="column"
        align="center"
        pt="25px"
        pb="25px"
        color="white"
        bg="tomato"
        width="100vw"
      >
        <Heading as="h1" size="md">
          Web2(Firebase) Profile
        </Heading>
        <Heading as="h1" size="lg" color="blue">
          {lensprofile.name}
        </Heading>

        <img
          src="https://cdna.artstation.com/p/assets/images/images/021/642/742/medium/ian-singh-naruto-and-sasuke-logo.jpg?1572436450"
          // https://cryptoslate.com/wp-content/uploads/2022/08/lens-protocol-cover.jpg
          // {lensprofile.picture.original.url}
          width="60px"
          height="60px"
        />

        <Text>@aksoni21</Text>
        <Text>Welcome to my Decent Date Profile!</Text>
        <Text>Follow me on:</Text>
        <Flex>
          <Link href="https://www.lensfrens.xyz/goncalo.lens">
            <Image
              borderRadius="full"
              boxSize="3rem"
              src="https://cryptoslate.com/wp-content/uploads/2022/08/lens-protocol-cover.jpg"
              alt="Lens Profile"
            />
          </Link>
          <Link href="https://www.twitter.com/aksoni21">
            <FaTwitter size="3rem" color="#1DA1F2" />
          </Link>{" "}
          <Link href="https://t.me/aksoni_21">
            <FaTelegram size="3rem" color="#0088CC" />
          </Link>
        </Flex>
      </Flex>
      <Flex
        className="profcomp"
        align="center"
        direction="column"
        pt="25px"
        pb="25px"
        color="white"
        bg="green.800"
      >
        <Heading as="h1" size="md">
          Web3(Lens Protocol) Profile
        </Heading>
        <Heading as="h1" size="lg" color="blue">
          {lensprofile.name}
        </Heading>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Atlanta_Hawks_logo.svg/1200px-Atlanta_Hawks_logo.svg.png"
          // {lensprofile.picture.original.url}
          width="60px"
          height="60px"
        />
        <Text>@{lensprofile.handle}</Text>
        <Text>{lensprofile.bio}</Text>
        {lensprofile.stats ? (
          <div align="center">
            <Text>{lensprofile.stats.totalFollowers} followers</Text>
            <Text>{lensprofile.stats.totalFollowing} following</Text>
            <Text>{lensprofile.stats.totalComments} comments made</Text>{" "}
          </div>
        ) : (
          <div style={{ width: "60px", height: "60px", backgroundColor: "crimson" }}></div>
        )}

        <Text>Follow me on:</Text>
        <Flex>
          <Link href="https://www.lensfrens.xyz/goncalo.lens">
            <Image
              borderRadius="full"
              boxSize="3rem"
              src="https://cryptoslate.com/wp-content/uploads/2022/08/lens-protocol-cover.jpg"
              alt="Lens Profile"
            />
          </Link>
          <Link href="https://www.twitter.com/aksoni21">
            <FaTwitter size="3rem" color="#1DA1F2" />
          </Link>

          <Link href="https://t.me/aksoni_21">
            <FaTelegram size="3rem" color="#0088CC" />
          </Link>
        </Flex>
      </Flex>

      <Flex mt="10px" justify="center" align="center">
        <Button bg="blue.300" onClick={redirect}>
          Save Profile and go to Town Square
        </Button>
      </Flex>
    </Flex>
  );
}

export default Profilecomponent;
