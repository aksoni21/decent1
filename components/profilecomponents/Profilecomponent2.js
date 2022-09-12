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
function Profilecomponent2() {
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

  return (
    <Flex direction="column">
      <Flex
        className="profcomp"
        direction="row"
        align="center"
        pt="25px"
        pb="25px"
        color="white"
        bg="blue.700"
        width="100vw"
      >
       <Flex width="50%" align="center" justify="left" direction="column">
          <Heading as="h1"  fontSize={[15,25]}>
            Web2(Firebase) Profile
          </Heading>
          <Heading as="h1"  fontSize={[18,30]}>
          {lensprofile.name}
          </Heading>
        </Flex>
        <Flex width="50%" direction="column">
          
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
                boxSize="2rem"
                src="https://cryptoslate.com/wp-content/uploads/2022/08/lens-protocol-cover.jpg"
                alt="Lens Profile"
              />
            </Link>
            <Link href="https://www.twitter.com/aksoni21">
              <FaTwitter size="2rem" color="#1DA1F2" />
            </Link>{" "}
            <Link href="https://t.me/aksoni_21">
              <FaTelegram size="2rem" color="#0088CC" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Profilecomponent2;
