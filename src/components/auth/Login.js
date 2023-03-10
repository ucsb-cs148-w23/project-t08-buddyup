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
  import theme from "components/theme";

  
  export default function Login() {
    const {login, isLoading} = useLogin();
    const { handleSubmit } = useForm();

    async function handleLogin() {
        await login();
    }

    return (
      <ChakraProvider theme={theme}>
      <Stack spacing={6}>
        <Heading mt="60px" size="2xl" textAlign="center" color="#264143">
              Buddy Up
        </Heading>

        {/* <Image
          boxSize='125px'
          objectFit='cover'
          src='https://png.pngitem.com/pimgs/s/143-1435945_house-building-outline-hd-png-download.png'
          alt='house'
        /> */}

        <Text fontSize='md' pl="125px" pr="125px" color="teal" textAlign="center">BuddyUp is a platform for 
        UCSB students to meet roommates living on-campus, in IV, or in 
        the greater SB area. </Text>

        <Center w="100%" h="250px">
          <Box mx="1" maxW="md" p="9" borderWidth="5px" borderRadius="lg">
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

        <Text fontSize='md' pt="20px" pl="125px" pr="125px" color="teal" textAlign="center">Please login with an official UCSB email address!</Text>

        <Text fontSize='sm' pt="125px" pb="20px" pl="125px" pr="125px" color="#264143" textAlign="center">Created By: Lauren Daniel, Sophia Moore, 
        Brenna Scholte, Kai Hilbourne, Sergio Colis Chavez, Anouki Panthagani, & Kaiwen Tang</Text>

      </Stack>
      </ChakraProvider>
      );
}
