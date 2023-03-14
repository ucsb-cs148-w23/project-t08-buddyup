```js
import {Box, Button, Heading, HStack, Textarea, Text, Spacer, List, UnorderedList, ListItem, Link} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { useAddPost, usePosts } from 'hooks/posts';
import PostsLists from "components/post/PostsLists"
import { useLogout } from "hooks/auth";
import { useGoToProfile } from 'hooks/users';
import { auth } from 'firebase_setup/firebase';

export default function Information() {
    return <Box maxW="600px" mx="auto" py="10">
        <Heading size='xl'>
            UCSB Housing Information
        </Heading>
        <Text>
        Housing as a UCSB student is infamous for being difficult to find, unreliable, and expensive. The goal of this information page is to help students efficiently navigate the living options offered by UCSB and private landlords. 
        </Text>
    
        <Heading size='lg'>
        Off-campus housing
        </Heading>
        <Text>
        Key facts to know about private housing options:
        </Text>
        <UnorderedList>
            <ListItem> Students usually live in either Isla Vista (IV), Goleta, or Santa Barbara</ListItem>
            <ListItem>IV housing is the most popular and competitive to secure</ListItem>
            <ListItem>IV leasing companies usually open applications between November and January, although some companies vary year by year. </ListItem>
            <ListItem>Most Goleta and Santa Barbara leases are available after the IV housing cycle</ListItem>
        </UnorderedList>

        <Heading size="md">
        Isla Vista
        </Heading>
        <Text>
        For a (non-exhaustive) list of leasing companies in IV, visit {' '}
        <Link color='teal.500' href='https://pardallcenter.as.ucsb.edu/isla-vista-community-resource-guide/housing-in-isla-vista/leasing-companies/'>
            this site
        </Link> 
        .
        </Text>

        <Heading size='sm'>
        Tips for securing a lease in IV:
        </Heading>
        <UnorderedList>
            <ListItem> Start looking early during Fall quarter. It’s never too early for house-hunting.</ListItem>
            <ListItem>Look through the list of leasing companies, visit their websites, and find properties they own that you would be interested in.</ListItem>
            <ListItem>Many companies don’t list properties that will be available until a few days before their applications open, so check their websites often.  </ListItem>
            <ListItem>Many companies allow you to add roommates after securing a lease, so it’s not the end of the world if you don’t have a full party upon applying. But make sure to double-check with each individual leasing company.</ListItem>
            <ListItem>Have a guarantor and security deposit prepared. Most companies only offer 48 or 72 hours to sign a lease and send the security deposit. </ListItem>
            <ListItem>Beware of scams. If a housing offer seems too good to be true, it probably is. </ListItem>
            <ListItem>Look through and make a post on our app BuddyUp to find roommates and housing listings. :)</ListItem>
        </UnorderedList>
    </Box>
}```
