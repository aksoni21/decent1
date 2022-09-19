import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Image, Flex, Button, Link, Heading, Text } from "@chakra-ui/react";
import { client, recommendProfiles, getProfilebyHandle } from "../../lens_api";
import { FaTwitter, FaTelegram } from "react-icons/fa";
import Location from "../townsquarecomponents/Location";

import { auth } from "../../firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth";

function Profilecomponent3() {
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

  function getLocation() {
    alert("in get location");
  }
  function redirect() {
    // console.log("profile redirect--", id);
    router.push(`/square/Mainstage`);
  }

  function redirectSarah() {
    if (user) {
      router.push(`/blockchain_pages/veri`);
    } else {
      alert("For this POC, please login at the bottom first");
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
        bg="green.700"
        width="100vw"
      >
        <Flex width="50%" align="center" justify="left" direction="column">
          <Heading as="h1" fontSize={[15, 25]}>
            Web3(Lens Protocol)
          </Heading>
          <Heading as="h1" fontSize={[18, 30]}>
            {lensprofile.name}
          </Heading>
        </Flex>
        <Flex width="50%" direction="column">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Atlanta_Hawks_logo.svg/1200px-Atlanta_Hawks_logo.svg.png"
            // {lensprofile.picture.original.url}
            width="60px"
            height="60px"
          />
          <Text>@{lensprofile.handle}</Text>
          <Text>{lensprofile.bio}</Text>
          {lensprofile.stats ? (
            <div>
              <Text>
                {lensprofile.stats.totalFollowers} followers; {lensprofile.stats.totalFollowing}{" "}
                following
              </Text>
            </div>
          ) : (
            <div style={{ width: "60px", height: "60px", backgroundColor: "crimson" }}></div>
          )}

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
            </Link>

            <Link href="https://t.me/aksoni_21">
              <FaTelegram size="2rem" color="#0088CC" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex h="200px" pt="10px" justify="center" bg="black">
        <Button bg="blue.300" onClick={redirect}>
          Save Profile and go to Town Square
        </Button>
      </Flex>
      <Flex h="200px" pt="10px" justify="center" bg="black">
<Location/>
        <Button bg="blue.300" onClick={getLocation}>
          Get Location
        </Button>
      </Flex>
    </Flex>
  );
}

export default Profilecomponent3;
