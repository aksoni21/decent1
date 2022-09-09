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
          <Avatar src="" marginEnd={3} />
        </Link>

        <Link onClick={() => redirectProfile(user.uid)}>
          <Heading size="lg">{email}</Heading>
        </Link>
      </Flex>
      <Button bg='blue.300' justify="end" size="sm" onClick={() => signOut(auth)}>
        Sign Out
      </Button>
    </Flex>
  );
}
