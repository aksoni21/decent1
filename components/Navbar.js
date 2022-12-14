// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import { Link, Flex, Heading, Avatar } from "@chakra-ui/react";
// import {Logo} from "../components/Logo.tsx";
// import { FaWallet } from "react-icons/fa";
// import { MdTravelExplore, MdOutlineCreate } from "react-icons/md";
// import { GiAngelWings, GiAbstract062 } from "react-icons/gi";

// const Navbar = () => {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   const closeMenu = () => setClick(false);

//   return (
//     <div>
//       <nav className="navbar">
//         <Logo />
//         <Link className="nla" to="/">
//           {/*<GiAbstract062 size='4rem' style={{marginLeft:'2rem'}}/>  */}
//         </Link>
//         <a href="#" className="toggle-button" onClick={handleClick}>
//           <span className="bar"></span>
//           <span className="bar"></span>
//           <span className="bar"></span>
//         </a>
//         <div className={click ? "navbar-links.active" : "navbar-links "}>
//           <ul className="nse">
//             <li className="nli">
//               <Link className="nla" to="/ExploreAll">
//                 <MdTravelExplore size="2rem" /> Explore
//               </Link>
//             </li>
//             <li className="nli">
//               <Link className="nla" to="/CreateItem">
//                 <MdOutlineCreate size="2rem" /> Create
//               </Link>
//             </li>
//             <li className="nli">
//               <Link className="nla" to="/MyNFTs">
//                 <GiAngelWings size="2rem" /> My NFTs
//               </Link>
//             </li>
//             {/* <li className="nli">
//             <Link className='nla' to="/Generative">Generative Art</Link>
//             </li> */}
//             <li className="nli">
//               <Link className="nla" to="/Wallet">
//                 <FaWallet size="2rem" /> Wallet
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// // import { Link } from "react-router-dom";
// import { Logo } from "../components/Logo.tsx";
// import { FaWallet } from "react-icons/fa";
// import { MdTravelExplore, MdOutlineCreate } from "react-icons/md";
// import { GiAngelWings, GiAbstract062 } from "react-icons/gi";
// import {
//   Flex,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuItemOption,
//   MenuGroup,
//   MenuOptionGroup,
//   MenuDivider,
//   IconButton,
// } from "@chakra-ui/react";
// import {
//   HamburgerIcon,
//   ExternalLinkIcon,
//   RepeatIcon,
//   EditIcon,
//   AddIcon,
//   CloseIcon,
// } from "@chakra-ui/icons";

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);
//   // const closeMenu = () => setClick(false);
//   const [isOpen, setIsOpen] = React.useState(false);

//   const toggle = () => setIsOpen(!isOpen);
//   return (
//     <Flex>
//       <Logo />
//       <Menu>
//         {/* <MenuButton
//           as={IconButton}
//           aria-label="Options"
//           icon={<HamburgerIcon />}
//           variant="outline"
//         /> */}
//         {/* <MenuButton>Actions</MenuButton> */}
//         <Flex justify="space-between" flex="1">
//           <ButtonGroup variant="link" spacing="8">
//             {["Product", "Pricing", "Resources", "Support"].map((item) => (
//               <Button key={item}>{item}</Button>
//             ))}
//           </ButtonGroup>
//           <HStack spacing="3">
//             <Button variant="ghost">Sign in</Button>
//             <Button variant="primary">Sign up</Button>
//           </HStack>
//         </Flex>
//         <MenuList>
//           <MenuItem>Download</MenuItem>
//           <MenuItem>Create a Copy</MenuItem>
//           <MenuItem>Mark as Draft</MenuItem>
//           <MenuItem>Delete</MenuItem>
//           <MenuItem as="a" href="#">
//             Attend a Workshop
//           </MenuItem>
//         </MenuList>
//       </Menu>
//     </Flex>
//   );
// }

// export default Navbar;

import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { auth } from "../firebaseconfig";
import { BsSuitClub } from "react-icons/bs";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

function Navbar() {
  // const isDesktop = useBreakpointValue({ base: false, sm: true });
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  function redirecttoWhy() {
    if (user) {
      router.push(`/blockchain_pages/whyBC`);
    } else {
      alert("For this POC, please login at the bottom first");
    }
  }
  function redirecttoHome() {
    console.log('redirect to home');
    router.push(`/`);
  }

  return (
    // <Box as="section" bg='purple.500' pb={{ base: "1", md: "24" }}>
    <Box
      pb="25px"
      as="nav"
      bg="black"
      color="blue.500"
      boxShadow={useColorModeValue("sm", "sm-dark")}
    >
      <Flex p={[1,2,3]} direction="row" justify="space-between" w={[380, 700, 800,1000]}>
        {/* <Container w={[300, 1400, 1500]}> */}
       {/*    <HStack spacing="1"> */}
        <Flex w={[120, 300, 300,300]} >
          <Link href="/">
            <BsSuitClub size={40} />
          </Link>
          <Link href="/" ml="3">
            <Text fontSize={{ base: '20px', md: '30px' }}>DeCent Date</Text>
          </Link>
        </Flex>
        {/* {isDesktop ? (
            <Flex justify="space-evenly" flex="1">
              <Link href="/general/about">About</Link>
              <Link href="/general/faq">How it works</Link>
            </Flex>
          ) : (
            <Flex justify="space-evenly" flex="1">
              <Link href="/general/about">About</Link>
              <Link href="/general/faq">How it works</Link>
            </Flex>
          )} */}
        {/* </HStack> */}

         <Flex justify="center"  align="center">
          <Button bg="blue.300" color="black" justify="end" size="sm" onClick={redirecttoWhy}>
            Blockchain Uses
          </Button>
        </Flex> 

        {user ? (
          <Flex justify="right"  align="center">
            <Button
              bg="blue.300"
              justify="end"
              color="black"
              size="sm"
              onClick={() => {
                redirecttoHome();
                signOut(auth);
              }}
            >
              Sign Out
            </Button>
          </Flex>
        ) : (
          <Flex justify="space-evenly" flex="1"></Flex>
        )}
        {/* </Container>  */}

      </Flex>
    </Box>
  );
}
export default Navbar;
