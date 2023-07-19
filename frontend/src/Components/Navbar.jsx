import {
  Text,
  Flex,
  Box,
  HStack,
  useDisclosure,
  Stack,
  IconButton,
  Container,
  Button,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { logout } from "../Redux/Auth/Auth.action";
import { Searchbar } from "./Searchbar";
import FilterComponent from "./FilterComponent";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const dispatch = useDispatch();
  const { authData } = useSelector((store) => store.auth);
  const { isAuthenticated, token } = authData;

  const handleLogout = async () => {
    dispatch(logout());
  };

  return (
    <Container
      px={4}
      background={"#4AA6E4"}
      maxW={"100%"}
      position="fixed"
      color="white"
      padding={"20px 30px"}
      top="0px"
      margin={"auto"}
      left="0px"
      zIndex={"10"}
    >
      <Flex h={8} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <HStack
            as={"nav"}
            spacing={6}
            justifyContent={"space-between"}
            display={{ base: "none", md: "flex" }}
          >
            {isAuthenticated || token ? (
              <>
                <NavLink exact to="/" activeStyle={{ borderBottom: "5px solid" }}>
                  <Text fontSize={"20px"} fontWeight="500">
                    Home
                  </Text>
                </NavLink>
                <NavLink to="/cart" activeStyle={{ borderBottom: "5px solid" }}>
                  <Text fontSize={"20px"} fontWeight="500">
                    Cart
                  </Text>
                </NavLink>
                <NavLink to="/order" activeStyle={{ borderBottom: "5px solid" }}>
                  <Text fontSize={"20px"} fontWeight="500">
                    Order
                  </Text>
                </NavLink>
                <Button onClick={handleLogout}>Log Out</Button>
              </>
            ) : (
              <>
                <NavLink exact to="/" activeStyle={{ borderBottom: "5px solid" }}>
                  <Text fontSize={"20px"} fontWeight="500">
                    Home
                  </Text>
                </NavLink>
                <NavLink to="/cart" activeStyle={{ borderBottom: "5px solid" }}>
                  <Text fontSize={"20px"} fontWeight="500">
                    Cart
                  </Text>
                </NavLink>
                <NavLink to="/order" activeStyle={{ borderBottom: "5px solid" }}>
                  <Text fontSize={"20px"} fontWeight="500">
                    Order
                  </Text>
                </NavLink>
                <NavLink to="/login" activeStyle={{ borderBottom: "5px solid" }}>
                  <Text fontSize={"20px"} fontWeight="500">
                    Login
                  </Text>
                </NavLink>
                <NavLink to="/signup" activeStyle={{ borderBottom: "5px solid" }}>
                  <Text fontSize={"20px"} fontWeight="500">
                    Sign Up
                  </Text>
                </NavLink>
              </>
            )}
          </HStack>
        </HStack>
        {location.pathname === "/" ? (
          <Box>
            <FilterComponent />
          </Box>
        ) : null}

        <Box>
          <Searchbar />
        </Box>
      </Flex>

      {isOpen ? (
        <Box pb={4} mt={2} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {isAuthenticated || token ? (
              <>
                <NavLink exact to="/" activeStyle={{ borderBottom: "5px solid" }}>
                  <Text fontSize={"md"} fontWeight="semibold">
                    Home
                  </Text>
                </NavLink>
                <NavLink to="/cart" activeStyle={{ borderBottom: "5px solid" }}>
                  <Text fontSize={"md"} fontWeight="semibold">
                    Cart
                  </Text>
                </NavLink>
                <NavLink to="/order" activeStyle={{ borderBottom: "5px solid" }}>
                  <Text fontSize={"md"} fontWeight="semibold">
                    Order
                  </Text>
                </NavLink>
                <Button onClick={handleLogout}>Log Out</Button>
              </>
            ) : (
              <>
                <NavLink to="/login" activeStyle={{ borderBottom: "5px solid" }}>
                  <Text fontSize={"md"} fontWeight="semibold">
                    Login
                  </Text>
                </NavLink>
                <NavLink to="/signup" activeStyle={{ borderBottom: "5px solid" }}>
                  <Text fontSize={"md"} fontWeight="semibold">
                    Sign Up
                  </Text>
                </NavLink>
              </>
            )}
          </Stack>
        </Box>
      ) : null}
    </Container>
  );
};

export default Navbar;
