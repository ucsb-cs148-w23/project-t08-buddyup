import { Box, Button, Code, Stack, Image } from "@chakra-ui/react";
import { PROTECTED, USERS } from "lib/routes";
import { Link } from "react-router-dom";
import Avatar from "components/profile/Avatar";
import { auth } from "firebase_setup/firebase";
import { useUser } from "hooks/users";

function ActiveUser() {
    const { user, isLoading } = useUser(auth.currentUser.uid);
  
    if (isLoading) return "Loading...";
  
    return (
      <Stack align="center" spacing="5" my="8">
        <Image 
                    boxSize={"75px"}
                    borderRadius="full"
                    src= { isLoading
                      ? "https://freesvg.org/img/abstract-user-flat-4.png"
                      : user.pfpURL}
                >
                </Image>
        <Code>{auth.currentUser.displayName}</Code>
        <Button
          colorScheme="teal"
          w="full"
          as={Link}
          to={`${PROTECTED}/profile/${auth.currentUser.uid}`}
        >
          Edit Profile
        </Button>
      </Stack>
    );
  }

export default function Sidebar() {
    return (
        <Box
        px="6"
        height="100vh"
        w="100%"
        maxW="300px"
        borderLeft="1px solid"
        borderLeftColor="teal.100"
        position="sticky"
        top="16"
        display={{ base: "none", md: "block" }}
        >
        <ActiveUser />
        <Box align="center">
        <Box as="ul" borderBottom="2px solid" borderColor="teal.200"/>
        <Button
          variant="outline"
          colorScheme="teal"
          mt="4"
          size="sm"
        >
          ALL USERS
        </Button>
        </Box>
        </Box>
    );
}