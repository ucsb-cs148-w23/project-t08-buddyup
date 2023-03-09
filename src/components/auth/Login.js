import {
    Box,
    Button,
    Center,
    Heading,
  } from "@chakra-ui/react";
  import { useLogin } from "hooks/auth";
  import { useForm } from "react-hook-form";
  import React from 'react';
  
  
  export default function Login() {
    const {login, isLoading} = useLogin();
    const { handleSubmit } = useForm();

    async function handleLogin() {
        await login();
    }

    return (
        <Center w="100%" h="100vh">
          <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
            <Heading mb="4" size="lg" textAlign="center">
              Welcome!
            </Heading>
    
            <form onSubmit={handleSubmit(handleLogin)}>
              <Button
                mt="4"
                type="submit"
                colorScheme="teal"
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
      );
}
