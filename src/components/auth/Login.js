import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  Stack,
  ChakraProvider,
} from "@chakra-ui/react";
import { useLogin } from "hooks/auth";
import { useForm } from "react-hook-form";
import React from 'react';
import theme from "components/theme.js";
import ReactCurvedText from 'react-curved-text';


export default function Login() {
  const {login, isLoading} = useLogin();
  const { handleSubmit } = useForm();

  async function handleLogin() {
      await login();
  }

  return (
    <ChakraProvider theme={theme}>
    <Stack spacing={6}>
      <Heading size="2xl" textAlign="center" color="#264143" >
        <Center>
          <Box>
            <ReactCurvedText
                  width={1135}
                  height={265}
                  cx={550}
                  cy={280}
                  rx={105}
                  ry={90}
                  startOffset={22}
                  reversed={true}
                  text="Buddy Up"
                  textProps={{ style: { fontSize: 60, textAlign:"center" } }}
                  textPathProps={{ fill: "#264143"}}
                  tspanProps={null}
                  ellipseProps={null}
                  svgProps={null}
              />
          </Box>
        </Center>
      </Heading>

      <Center>

      <Box bg="gray.100" mx="1" maxW="md" p="9" borderWidth="5px" borderRadius="xs">
          <Heading mb="4" size="md" color="#264143" textAlign="center">
            Welcome!
          </Heading>
  
          <form onSubmit={handleSubmit(handleLogin)}>
            <Button
              mt="4"
              type="submit"
              colorScheme="pink"
              size="md"
              w="full"
              isLoading={isLoading}
              loadingText="Logging In"
              className="loginButton"
            >
              Log In With Google
            </Button>
          </form>
        </Box>

        <Box mx="1" maxW="xs" maxH="xs" p="9" borderRadius="xs">
          <Text mb="4" fontSize="md" color="teal" textAlign="left">
            BuddyUp is a platform for UCSB students to meet roommates for housing on-campus or in IV.
          </Text>
          <Text as='b' mb="0" fontSize="md" color="teal" textAlign="left">
            Please login with an official UCSB email address!
          </Text>
        </Box>

      </Center>


      <Text fontSize='sm' pt="220px" pb="20px" pl="125px" pr="125px" color="#264143" textAlign="center">Created By: Lauren Daniel, Sophia Moore, 
      Brenna Scholte, Kai Hilbourne, Sergio Colis Chavez, Anouki Panthagani, & Kaiwen Tang</Text>

    </Stack>
    </ChakraProvider>
    );
}
