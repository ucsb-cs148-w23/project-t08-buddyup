import {Box, Button, Heading, Stack, Text, Image, UnorderedList, Center, ListItem, Link, ChakraProvider, Divider, Grid, GridItem} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { useAddPost, usePosts } from 'hooks/posts';
import PostsLists from "components/post/PostsLists"
import { useLogout } from "hooks/auth";
import { useGoToDashboard, useGoToInformation2, useEditProfile, useUser } from "hooks/users";
import { auth } from 'firebase_setup/firebase';
import theme from "components/theme";

export default function Information2() {
    const { handleSubmit } = useForm();
    const { goToDashboard, isLoading: dashboardLoading} = useGoToDashboard();

    async function handleDashboard() {
        console.log("going to dashboard");
        await goToDashboard();
    }

    <form onSubmit = {handleSubmit(handleDashboard)}>
            <Button type="submit" ml={"5"}>
                Dashboard
            </Button>
    </form>

    return ( 
        <Box maxW="800px" ml="70px" mr="70px">
        <ChakraProvider theme={theme}>
        <Stack spacing={1}> 
        <Heading size="2xl" pb="30px" textAlign="center" color="#264143">
            Buddy Up
        </Heading>

        <Box>
            <form onSubmit = {handleSubmit(handleDashboard)}>
                <Button type="submit">
                    Return to Dashboard
                </Button>
            </form>
        </Box>

        <Heading fontSize="28px" textAlign="center" color="teal" pt="25px">
            UCSB Housing Information
        </Heading>
     
        <Text fontSize="16px" textIndent="25px" pt="10px" px="20px" pb="20px">
            Housing as a UCSB student is infamous for being difficult to find, 
            unreliable, and expensive. The goal of this information page is to help 
            students efficiently navigate the living options offered by UCSB and 
            private landlords. 
        </Text>

        <Divider orientation='horizontal' borderWidth='3px' borderColor="teal"/>
    
        <Text fontSize="23px" fontWeight="bold" paddingTop='20px'>
            Off-Campus Housing:
        </Text>
       
        <Text fontSize="16px" px="20px" pt="10px">
            Key facts to know about private housing options:
        </Text>

        <UnorderedList fontSize="16px" spacing="5px" pl="50px" pr="20px" pb="20px">
            <ListItem> Students usually live in either Isla Vista (IV), Goleta, or Santa Barbara</ListItem>
            <ListItem>IV housing is the most popular and competitive to secure</ListItem>
            <ListItem>IV leasing companies usually open applications between November and January, although some companies vary year by year. </ListItem>
            <ListItem>Most Goleta and Santa Barbara leases are available after the IV housing cycle</ListItem>
        </UnorderedList>

        <Box >
            <Center>
            <Image width="400px"  src='https://s.hdnux.com/photos/01/26/07/70/22576665/4/rawImage.jpg' alt='isla vista' />
            </Center>
        </Box>
        
        <Text fontSize="23px" fontWeight="bold" pl="20px" paddingTop='20px'>
            Isla Vista
        </Text>

        <Text fontSize="16px" pl="40px" pr="20px">
            For a (non-exhaustive) list of leasing companies in IV, visit {' '}
            <Link color='teal.500' href='https://pardallcenter.as.ucsb.edu/isla-vista-community-resource-guide/housing-in-isla-vista/leasing-companies/'>
                this site
            </Link> 
            .
        </Text>

        <Text fontSize="16px" fontWeight="bold" px="20px" pt="10px">
            Tips for securing a lease in IV:
        </Text>

        <UnorderedList fontSize="16px" spacing="5px"  pl="50px" pr="20px" pb="30px"> 
            <ListItem> Start looking early during Fall quarter. It's never too early for house-hunting.</ListItem>
            <ListItem>Look through the list of leasing companies, visit their websites, and find properties they own that you would be interested in.</ListItem>
            <ListItem>Many companies don't list properties that will be available until a few days before their applications open, so check their websites often.  </ListItem>
            <ListItem>Many companies allow you to add roommates after securing a lease, so it's not the end of the world if you don't have a full party upon applying. But make sure to double-check with each individual leasing company.</ListItem>
            <ListItem>Have a guarantor and security deposit prepared. Most companies only offer 48 or 72 hours to sign a lease and send the security deposit. </ListItem>
            <ListItem>Beware of scams. If a housing offer seems too good to be true, it probably is. </ListItem>
            <ListItem>Look through and make a post on our app BuddyUp to find roommates and housing listings. :)</ListItem>
        </UnorderedList>

        </Stack>    
    </ChakraProvider>
    </Box>
    )
};
