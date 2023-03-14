import { Box, Button, Stack, Image, Text} from "@chakra-ui/react";
import { PROTECTED } from "lib/routes";
import { Link } from "react-router-dom";
import { auth } from "firebase_setup/firebase";
import { useUser } from "hooks/users";
import { useLogout } from "hooks/auth";
import { useForm } from "react-hook-form";

function ActiveUser() {

    const { user , isLoading} = useUser(auth.currentUser ? auth.currentUser.uid : "pBvdbPyaEi79xLYvgffv"); // uid for non-existent user

    if(!(auth.currentUser)) return "Loading..."
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
        <Text color="#264143" fontSize="18px" fontWeight="bold">{isLoading ? "unknown user" : user.name}</Text>
        <Button
          colorScheme="teal"
          w="full"
          as={Link}
          to={`${PROTECTED}/profile/${auth.currentUser.uid}`}
        >
          View Profile
        </Button>
      </Stack>
    );
  }

export default function Sidebar() {
    const {logout} = useLogout();
    const { handleSubmit } = useForm();;
    
    async function handleLogout() {
        await logout();
    }

    return (
        <Box
        px="6"
        height="100vh"
        w="100%"
        maxW="300px"
        borderLeft="1px solid"
        borderLeftColor="teal"
        position="sticky"
        top="16"
        display={{ base: "none", md: "block" }}
        >
        <ActiveUser />
        
        <Box align="center">
          <Box as="ul" borderBottom="2px solid" borderColor="teal" pt="5px"/>
          <Button
            variant="outline"
            colorScheme="pink"
            mt="4"
            size="md"
          >
            On-Campus Housing Info
          </Button>
        </Box>

        <Box align="center">
          <Box as="ul" borderColor="teal" pt="5px"/>
          <Button
            variant="outline"
            colorScheme="pink"
            mt="4"
            size="md"
          >
            Off-Campus Housing Info
          </Button>
        </Box>

        <Box align="center" paddingTop='30px'>
        <form onSubmit={handleSubmit(handleLogout)}>
                <Button type="submit" colorScheme="pink">
                    Sign Out
                </Button>
            </form>
        </Box>


        </Box>
    );
}