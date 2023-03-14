import {Box, Button, Heading, HStack, Stack,
        Text, useCheckboxGroup} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { usePosts } from 'hooks/posts';
import PostsLists from "components/post/PostsLists";
import { auth } from 'firebase_setup/firebase';
import { CustomCheckbox } from './CheckBox';


export default function Dashboard() {
    const { handleSubmit } = useForm();
    const id = auth.currentUser ? auth.currentUser.uid : null;
    
    const { value, getCheckboxProps } = useCheckboxGroup();
    const { value:value2, getCheckboxProps:getCheckboxProps2 } = useCheckboxGroup();

    

    const{posts, isLoading} = usePosts();
    if(!(auth.currentUser)) return "Loading..."
    return (
    <>
        <Heading size="2xl" textAlign="center" color="teal">
            Buddy Up
        </Heading>

        
        <Box maxW="750px" mx="auto" pt="30px">
        <form onSubmit={handleSubmit(/*uhhhhhh*/)}>
            <HStack justify="space-between">
                <Heading color="#264143" size="lg">
                    Filter Posts
                </Heading>
            </HStack>
            <Stack>
                <Text pt="10px" fontSize='15px' >You are looking for {value.length > 0 ? value.sort().join(' and ') : "..."}
                {value2.length > 0 ? " in " + value2.join(' and ') : ""}</Text>
                <HStack spacing="10px" fontSize='15px'>
                    <CustomCheckbox {...getCheckboxProps({ value: 'Housemate(s)' })}/>
                    <CustomCheckbox {...getCheckboxProps({ value: 'Housing' })}/>
                </HStack>
                <HStack spacing="10px" fontSize='15px' pb = "12px">
                    <CustomCheckbox {...getCheckboxProps2({ value: 'University Housing' })}/>
                    <CustomCheckbox {...getCheckboxProps2({ value: 'Isla Vista' })}/>
                    <CustomCheckbox {...getCheckboxProps2({ value: 'Goleta' })}/>
                    <CustomCheckbox {...getCheckboxProps2({ value: 'Downtown SB' })}/>
                </HStack>
            </Stack>

            <Button 
                mt="20px"
                type="submit"
                >
                    Post
            </Button>
        
        </form>
        </Box>
        {isLoading
        ? <Text>Posts are loading ...</Text>
        : <PostsLists posts={posts}/>}
        
    </>
    )

}
