import {Box, Button, Heading, HStack, Stack,
        Textarea, Text, useCheckboxGroup, Flex, Spacer} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { useAddPost, usePosts } from 'hooks/posts';
import PostsLists from "components/post/PostsLists"
import { useLogout } from "hooks/auth";
import { useGoToProfile } from 'hooks/users';
import { auth } from 'firebase_setup/firebase';
import { CustomCheckbox } from './CheckBox';
import ReactCurvedText from 'react-curved-text';

function NewPost() {
    const {register, handleSubmit, reset} = useForm();
    const {addPost} = useAddPost();
    const { value, getCheckboxProps } = useCheckboxGroup();
    const { value:value2, getCheckboxProps:getCheckboxProps2 } = useCheckboxGroup();

    function handleAddPost(data) {
        addPost({
            title: data.title,
            text: data.text,
            looking: value.sort().join(' and '),
            location: value2.sort().join(' and '),
            
        })
        reset();
    }

    return <Box maxW="750px" mx="auto" pt="30px">
    
        
    <form onSubmit={handleSubmit(handleAddPost)}>
        <HStack justify="space-between">
            <Heading color="#264143" size="lg">
                Get Started
            </Heading>
            {/* <Button 
            type="submit"
            >
                Post
            </Button> */}
        </HStack>
        <Textarea 
        minH="unset"
        fontSize='15px'
        resize="none" 
        mt="5" 
        placeholder="Title your post"
        height={"35px"}
        minRows={1}
        {...register("title")}
        />
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

        <Textarea 
        fontSize='15px'
        resize="none" 
        placeholder="What are you looking for?"
        minRows={3}
        {...register("text")}
        />

        <Button 
             mt="20px"
            type="submit"
            >
                Post
        </Button>
       
    </form>
    
</Box>
}


export default function Dashboard() {
    const {logout} = useLogout();
    const { handleSubmit } = useForm();
    const { goToProfile } = useGoToProfile();
    const id = auth.currentUser.uid;
    
    async function handleLogout() {
        await logout();
    }

    async function handleProfile() {
        await goToProfile(id);
    }

    const{posts, isLoading} = usePosts();
    return (
    <>
        <Heading size="2xl" textAlign="center" color="teal">
            Buddy Up
        </Heading>

        {/* <HStack spacing={"10"}>
            <form onSubmit={handleSubmit(handleLogout)}>
                <Button type="submit" >
                    Sign Out
                </Button>
            </form>
            <form onSubmit = {handleSubmit(handleProfile)}>
                <Button type="submit">
                    Profile
                </Button>
            </form>
        
        </HStack> */}

        <NewPost />
        {isLoading
        ? <Text>Posts are loading ...</Text>
        : <PostsLists posts={posts}/>}
        
    </>
    )

}
