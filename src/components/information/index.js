import {Box, Button, Heading, HStack, Textarea, Stack, Text, Spacer, List, UnorderedList, ListItem, Link, ChakraProvider, Divider, Grid, GridItem} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { useAddPost, usePosts } from 'hooks/posts';
import PostsLists from "components/post/PostsLists"
import { useLogout } from "hooks/auth";
import { useGoToDashboard, useEditProfile, useUser } from "hooks/users";
import { auth } from 'firebase_setup/firebase';
import theme from "components/theme";

export default function Information() {
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
       
        <Text fontSize="16px" px="20px">
            Key facts to know about private housing options:
        </Text>

        <UnorderedList fontSize="16px" spacing="5px" pl="50px" pr="20px">
            <ListItem> Students usually live in either Isla Vista (IV), Goleta, or Santa Barbara</ListItem>
            <ListItem>IV housing is the most popular and competitive to secure</ListItem>
            <ListItem>IV leasing companies usually open applications between November and January, although some companies vary year by year. </ListItem>
            <ListItem>Most Goleta and Santa Barbara leases are available after the IV housing cycle</ListItem>
        </UnorderedList>

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

        <Divider orientation='horizontal' borderWidth='3px' borderColor="teal"/>
        
        <Text fontSize="23px" fontWeight="bold" paddingTop='20px'>
            On-Campus Housing:
        </Text>

        <Text fontSize="16px" textIndent="25px" pt="10px" px="20px" pb="20px">
        Take note of on-campus housing application deadlines {' '} 
        <Link color='teal.500' href='https://www.housing.ucsb.edu/quick-link/important-dates'>
            (posted here) 
        </Link> 
        . Make sure that you are up to date on all required vaccinations and documents and are a full-time UCSB student (12 units) to make sure that you are eligible to live on campus. Select residence halls and undergraduate apartments are primarily for freshmen and sophomores, whereas others have a greater number of upperclassmen.
        </Text>

        <Text fontSize="23px" fontWeight="bold" pl="20px" pt='10px' pb="20px">
            Undergraduate Dorms
        </Text>

        <Grid templateColumns='repeat(2, 1fr)' gap="70px" pl="40px" pr="20px">
            <GridItem>
            <Box>
                <Link  color='teal.500' href='https://www.housing.ucsb.edu/housing-options/options-filter/santa-rosa'>
                <Heading size = 'sm'>
                Santa Rosa
                </Heading>
                </Link> 
                <Text>
                Room Type: Doubles, Triples
                </Text>
                <Text>
                Bathroom Type: Communal
                </Text>
                <Text>
                Distance: On Main Campus
                </Text>
                <Text>
                Closest Dining Commons: De La Guerra
                </Text>
                <Text>
                Number Of Residents: 575
                </Text>
                <Text>
                Building Type: 2-Story Residence Hall
                </Text>
            </Box>
            </GridItem>

            <GridItem>
            <Box>
                <Link  color='teal.500' href='https://www.housing.ucsb.edu/housing-options/options-filter/san-nicolas'>
                <Heading size = 'sm'>
                San Miguel
                </Heading>
                </Link> 
                <Text>
                Room Type: Doubles, Triples
                </Text>
                <Text>
                Bathroom Type: Communal
                </Text>
                <Text>
                Distance: On Main Campus
                </Text>
                <Text>
                Closest Dining Commons: Ortega
                </Text>
                <Text>
                Number Of Residents: 525
                </Text>
                <Text>
                Building Type: Residence Hall Towers
                </Text>
            </Box>
            </GridItem>
        </Grid>

        <Grid templateColumns='repeat(2, 1fr)' gap="70px" pl="40px" pr="20px" pt="40px">
            <GridItem>
            <Box>
                <Link  color='teal.500' href='https://www.housing.ucsb.edu/housing-options/options-filter/san-rafael'>
                <Heading size = 'sm'>
                San Rafael
                </Heading>
                </Link> 
                <Text>
                Room Type: Doubles, Singles (Limited)
                </Text>
                <Text>
                Bathroom Type: Semi-Private, Suite-Style
                </Text>
                <Text>
                Distance: On Main Campus
                </Text>
                <Text>
                Closest Dining Commons: Carillo
                </Text>
                <Text>
                Number Of Residents: 575
                </Text>
                <Text>
                Building Type: Res Hall Towers & Clusters
                </Text>
            </Box>
            </GridItem>

            <GridItem>
            <Box>
                <Link  color='teal.500' href='https://www.housing.ucsb.edu/housing-options/options-filter/manzanita-village'>
                <Heading size = 'sm'>
                Manzanita Village
                </Heading>
                </Link> 
                <Text>
                Room Type: Doubles, Singles (Limited), Small Doubles (Limited), Triples
                </Text>
                <Text>
                Bathroom Type: Semi-Private
                </Text>
                <Text>
                Distance: On Main Campus
                </Text>
                <Text>
                Closest Dining Commons: Carrillo
                </Text>
                <Text>
                Number Of Residents: 1,100
                </Text>
                <Text>
                Building Type: 3 & 4-Story Residence Hall
                </Text>
            </Box>
            </GridItem>
        </Grid>

        <Grid templateColumns='repeat(2, 1fr)' gap="70px" pl="40px" pr="20px" pt="40px">
            <GridItem>
            <Box>
                <Link color='teal.500' href='https://www.housing.ucsb.edu/housing-options/options-filter/anacapa'>
                <Heading size = 'sm'>
                    Anacapa Hall
                </Heading>
                </Link> 
                <Text>
                Room Type: Doubles, Triples
                </Text>
                <Text>
                Bathroom Type: Communal
                </Text>
                <Text>
                Distance: On Main Campus
                </Text>
                <Text>
                Closest Dining Commons: De La Guerra
                </Text>
                <Text>
                Number Of Residents: 600
                </Text>
                <Text>
                Building Type: 2-Story Residence Hall
                </Text>
            </Box>
            </GridItem>
            
            <GridItem>
            <Box>
                <Link  color='teal.500' href='https://www.housing.ucsb.edu/housing-options/options-filter/santa-cruz'>
                <Heading size = 'sm'>
                Santa Cruz
                </Heading>
                </Link> 
                <Text>
                Room Type: Doubles, Triples
                </Text>
                <Text>
                Bathroom Type: Communal
                </Text>
                <Text>
                Distance: On Main Campus
                </Text>
                <Text>
                Closest Dining Commons: De La Guerra
                </Text>
                <Text>
                Number Of Residents: 600
                </Text>
                <Text>
                Building Type: 2-Story Residence Hall
                </Text>
            </Box>
            </GridItem>
        </Grid>

        <Grid templateColumns='repeat(2, 1fr)' gap="70px" pl="40px" pr="20px" pt="40px">
            <GridItem>
            <Box>
                <Link  color='teal.500' href='https://www.housing.ucsb.edu/housing-options/options-filter/santa-catalina'>
                <Heading size = 'sm'>
                Santa Catalina
                </Heading>
                </Link> 
                <Text>
                Room Type: Doubles, Triples
                </Text>
                <Text>
                Bathroom Type: Suite-Style
                </Text>
                <Text>
                Distance: 10-Minute Bike Ride
                </Text>
                <Text>
                Closest Dining Commons: Portola
                </Text>
                <Text>
                Number Of Residents: 1,475
                </Text>
                <Text>
                Building Type: Residence Hall Towers
                </Text>
            </Box>
            </GridItem>

            <GridItem>
            <Box>
                <Link  color='teal.500' href='https://www.tropicanagardens.com/'>
                <Heading size = 'sm'>
                Tropicana Gardens
                </Heading>
                </Link>
                <Text>
                    Check out their website for more info!
                </Text>
            </Box>
            </GridItem>
        </Grid>

        <Text fontSize="23px" fontWeight="bold" pl="20px" pt='30px'>
            Undergraduate Apartments
        </Text>

        <Grid templateColumns='repeat(2, 1fr)' gap="70px" pl="40px" pr="20px" pt="20px">
            <GridItem>
            <Box>
                <Link  color='teal.500' href='https://www.housing.ucsb.edu/housing-options/options-filter/el-dorado'>
                <Heading size = 'sm'>
                El Dorado
                </Heading>
                </Link> 
                <Text>
                Room Type: Doubles
                </Text>
                <Text>
                Bathroom Type: Apartment-Style
                </Text>
                <Text>
                Distance: 5-Minute Bike Ride
                </Text>
                <Text>
                Closest Dining Commons: Portola
                </Text>
                <Text>
                Number Of Residents: 140
                </Text>
                <Text>
                Building Type: 2-Story Apartment
                </Text>
            </Box>
            </GridItem>

            <GridItem>
            <Box>
                <Link  color='teal.500' href='https://www.housing.ucsb.edu/housing-options/options-filter/san-joaquin-villages'>
                <Heading size = 'sm'>
                San Joaquin Villages
                </Heading>
                </Link> 
                <Text>
                Room Type: Doubles, Triples
                </Text>
                <Text>
                Bathroom Type: Apartment-Style
                </Text>
                <Text>
                Distance: 10-Minute Bike Ride
                </Text>
                <Text>
                Closest Dining Commons: Portola
                </Text>
                <Text>
                Number Of Residents: 1,000
                </Text>
                <Text>
                Building Type: Apt Towers & Clusters
                </Text>
            </Box>
            </GridItem>
        </Grid>

        <Grid templateColumns='repeat(2, 1fr)' gap="70px" pl="40px" pr="20px" pt="40px">
            <GridItem>
            <Box>
                <Link  color='teal.500' href='https://www.housing.ucsb.edu/housing-options/options-filter/santa-ynez'>
                <Heading size = 'sm'>
                Santa Ynez
                </Heading>
                </Link> 
                <Text>
                Room Type: Doubles, Triples
                </Text>
                <Text>
                Bathroom Type: Apartment-Style
                </Text>
                <Text>
                Distance: 5-Minute Bike Ride
                </Text>
                <Text>
                Closest Dining Commons: Portola
                </Text>
                <Text>
                Number Of Residents: 800
                </Text>
                <Text>
                Building Type: 2-Story Apartment
                </Text>
            </Box>
            </GridItem>

            <GridItem>
            <Box>
                <Link  color='teal.500' href='https://www.housing.ucsb.edu/housing-options/options-filter/sierra-madre-villages'>
                <Heading size = 'sm'>
                Sierra Madre Villages
                </Heading>
                </Link> 
                <Text>
                Room Type: Doubles, Triples
                </Text>
                <Text>
                Bathroom Type: Apartment-Style
                </Text>
                <Text>
                Distance: 10-Minute Bike Ride
                </Text>
                <Text>
                Closest Dining Commons: Portola
                </Text>
                <Text>
                Number Of Residents: 500
                </Text>
                <Text>
                Building Type: 3-Story Apartment
                </Text>
            </Box>
            </GridItem>
        </Grid>

        <Grid templateColumns='repeat(2, 1fr)' gap="70px" pl="40px" pr="20px" pt="40px">
            <GridItem>
            <Box>
                <Link  color='teal.500' href='https://www.housing.ucsb.edu/housing-options/options-filter/westgate'>
                <Heading size = 'sm'>
                Westgate Apartments
                </Heading>
                </Link> 
                <Text>
                Room Type: Doubles, Singles (Limited)
                </Text>
                <Text>
                Bathroom Type: Apartment-Style
                </Text>
                <Text>
                Distance: 5-Minute Bike Ride
                </Text>
                <Text>
                Closest Dining Commons: Portola
                </Text>
                <Text>
                Number Of Residents: 60
                </Text>
                <Text>
                Building Type: 2-Story Apartment
                </Text>
            </Box>
            </GridItem>

            <GridItem>
            <Box>
                <Link  color='teal.500' href='https://www.tropvillas.com/'>
                <Heading size = 'sm'>
                Tropicana Villas
                </Heading>
                </Link>
                <Text>
                    Check out their website for more info!
                </Text>
            </Box>
            </GridItem>
        </Grid>

    


        </Stack>    
    </ChakraProvider>
    </Box>
    )
};
