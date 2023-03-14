import {
    Box,
    Button,
    Center,
    Heading,
    Text,
    Stack,
    ChakraProvider,
    HStack
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
                    height={207}
                    cx={575}
                    cy={230}
                    rx={105}
                    ry={90}
                    startOffset={24}
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

        {/* <HStack spacing='24px'>
    <Box w='600px' h='10' bg='teal.500' />
    <Box w='170px' h='10' bg='teal.500' ></Box>
    <Box w='180px' h='10' bg='teal.500' />
  </HStack> */}



        <Center>

          <Box mx="1" maxW="xs" maxH="xs" p="9" borderRadius="xs">
            <Text mb="4" fontSize="md" color="teal" textAlign="left">
              BuddyUp is a platform for prospective and current UCSB students to meet roommates on-campus, in IV, or in the greater SB area. 
            </Text>
            <Text as='b' mb="0" fontSize="md" color="teal" textAlign="left">
              Please login with an official UCSB email address!
            </Text>
            {/* <Text mb="0" fontSize="md" color="teal" textAlign="left">
            UCSB students to meet roommates living
            </Text>
            <Text mb="4" fontSize="md" color="teal" textAlign="left">
            on-campus, in IV, or in the greater SB area. 
            </Text>
            <Text as='b' mb="4" fontSize="md" color="teal" textAlign="left">
              Please login with an official UCSB email address!
            </Text> */}
          </Box>
          
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


        </Center>


        <Text fontSize='sm' pt="125px" pb="20px" pl="125px" pr="125px" color="#264143" textAlign="center">Created By: Lauren Daniel, Sophia Moore, 
        Brenna Scholte, Kai Hilbourne, Sergio Colis Chavez, Anouki Panthagani, & Kaiwen Tang</Text>

      </Stack>
      </ChakraProvider>
      );
}
