import React, { useState, useEffect } from "react";
import { Flex, Box, ChakraProvider, Spinner, Center, Button, Text } from "@chakra-ui/react";

export default function ScreenSize() {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winWidthEM: window.innerWidth / 16,
    winHeight: window.innerHeight,
    winHeightEM: window.innerHeight / 16,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);

  return (
    <Flex direction="row">
      <Flex direction="column">
        <p>
          Width: <strong>{windowDimenion.winWidth}</strong>
        </p>
        <p>
          Width EM: <strong>{windowDimenion.winWidthEM}</strong>
        </p>
        <Flex direction="column">
          <p>
            Height: <strong>{windowDimenion.winHeight}</strong>
          </p>
          <p>
            Height EM: <strong>{windowDimenion.winHeightEM}</strong>
          </p>
        </Flex>
      </Flex>
      <Flex pl='20px' direction="column">
        <Text>sm: 30em,</Text><Text> md: 48em,</Text><Text> lg: 62em,</Text>
        <Text> xl: 80em, 2xl: 96em,</Text>
      </Flex>
    </Flex>
  );
}
