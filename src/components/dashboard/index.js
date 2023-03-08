import {Box, Button, Heading, HStack, Stack,
        Textarea, Text, useCheckboxGroup, Flex} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { useAddPost, usePosts } from 'hooks/posts';
import PostsLists from "components/post/PostsLists"
import { useLogout } from "hooks/auth";
import { useGoToProfile } from 'hooks/users';
import { auth } from 'firebase_setup/firebase';
import { CustomCheckbox } from './CheckBox';

function NewPost() {
    const {register, handleSubmit, reset} = useForm();
    const {addPost} = useAddPost();
    const { value, getCheckboxProps } = useCheckboxGroup();
    const { value:value2, getCheckboxProps:getCheckboxProps2 } = useCheckboxGroup();

    function handleAddPost(data) {
        console.log(data.location);
        console.log(data.looking);
        addPost({
            title: data.title,
            text: data.text,
            looking: data.looking,
            location: data.location,
            
        })
        reset();
    }

    return <Box maxW="600px" mx="auto" py="10">
    <form onSubmit={handleSubmit(handleAddPost)}>
        <HStack justify="space-between">
            <Heading>
                New Post
            </Heading>
            <Button 
            type="submit"
            >
                Post
            </Button>
        </HStack>
        <Textarea resize="none" 
        mt="5" 
        placeholder="Title your post"
        height={"30px"}
        minRows={1}
        {...register("title")}
        />
        <Stack>
            <Text>You are looking for {value.length > 0 ? value.sort().join(' and ') : "nothing"}
            {value2.length > 0 ? " in " + value2.join(' and ') : ""}</Text>
            <Flex {...register("looking")}>
                <CustomCheckbox {...getCheckboxProps({ value: 'Housemates' })}/>
                <CustomCheckbox {...getCheckboxProps({ value: 'Housing' })}/>
            </Flex>
            <Flex {...register("location")}>
                <CustomCheckbox {...getCheckboxProps2({ value: 'Isla Vista' })}/>
                <CustomCheckbox {...getCheckboxProps2({ value: 'University Housing' })}/>
                <CustomCheckbox {...getCheckboxProps2({ value: 'Elsewhere' })}/>
            </Flex>
        </Stack>

        <Textarea resize="none" 
         
        placeholder="Create your post..."
        minRows={3}
        {...register("text")}
        />
       
    </form>
    
</Box>
}




export default function Dashboard() {
    const {logout} = useLogout();
    const { handleSubmit } = useForm();
    const { goToProfile, isLoading:profileLoading} = useGoToProfile();
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
        <HStack spacing={"10"}>
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
        </HStack>
        <NewPost />
        {isLoading
        ? <Text>Posts are loading ...</Text>
        : <PostsLists posts={posts}/>}
        
    </>
    )

}
