import React from "react";
import { Image, Flex, Link, Heading, Text } from "@chakra-ui/react";
import { FaTwitter, FaTelegram } from "react-icons/fa";

function Profilecomponent5() {
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
            John Doe
          </Heading>
        </Flex>
        <Flex width="50%" direction="column">
          <img
            src="https://www.stonedsanta.in/wp-content/uploads/2019/07/SriPriyatham-Caricature-artist-digital-illustrations-stoned-santa-Mark.jpg"
            width="60px"
            height="60px"
          />

          <Text>@test1</Text>
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

export default Profilecomponent5;
