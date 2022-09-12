import { Link, Button, Flex, Heading, Avatar } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebaseconfig";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";

export default function Topbar({ email }) {
  const [user] = useAuthState(auth);
  const router = useRouter();

  function redirectProfile(id) {
    console.log("profile redirect--", id);
    router.push(`/profiles/profile`);
  }
  function redirecttoHome() {
    console.log("redirect to home");
    router.push(`/`);
  }

  return (
    <Flex
      bg="gray.100"
      h="81px"
      w="100%"
      align="center"
      p={5}
      direction="row"
      justify="space-between"
    >
      <Flex>
        <Link onClick={() => redirectProfile(user.uid)}>
          <Avatar src="https://www.stonedsanta.in/wp-content/uploads/2019/07/SriPriyatham-Caricature-artist-digital-illustrations-stoned-santa-Mark.jpg" marginEnd={3} />
        </Link>

        <Link onClick={() => redirectProfile(user.uid)}>
          <Heading fontSize={[0,30]}>{email}</Heading>
        </Link>
      </Flex>
      <Button
        bg="blue.300"
        justify="end"
        f="sm"
        onClick={() => {
          redirecttoHome();
          signOut(auth);
        }}
      >
        Sign Out
      </Button>
    </Flex>
  );
}
