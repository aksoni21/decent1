import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Image, Flex, Button, Link, Heading, Text } from "@chakra-ui/react";
import { client, recommendProfiles, getProfilebyHandle } from "../../lens_api";
import { FaTwitter, FaTelegram } from "react-icons/fa";

import { auth } from "../../firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth";

function Profilecomponent6() {
  const router = useRouter();
  const [lensprofile, setLensProfile] = useState([]);

  useEffect(() => {
    getLensProfile();
  }, []);
  async function getLensProfile() {
    try {
      const response = await client.query(getProfilebyHandle, { han: "goncalo.lens" }).toPromise();
      setLensProfile(response.data.profile);
    } catch (err) {
      console.log(err);
    }
  }
  function redirect() {
    router.push(`/square/Mainstage`);
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
          John Doe
          </Heading>
        </Flex>
        <Flex width="50%" direction="column">
          <img
            src="https://ctl.s6img.com/society6/img/lqeI3AR1BvyeX729VqUU9fIPwLA/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/20936982ae93493caa5e3239fb24e45e/~~/albert-einstein-artwork-with-his-famous-photo-showing-tongue-tshirts-prints-posters-bags2379009-prints.jpg?wait=0&attempt=0"
            width="60px"
            height="60px"
          />
          <Text>@test1</Text>
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
    </Flex>
  );
}

export default Profilecomponent6;
