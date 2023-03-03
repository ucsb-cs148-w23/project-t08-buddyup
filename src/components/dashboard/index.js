import {Box, Button, Heading, HStack, 
        Textarea, Text, Checkbox, CheckboxGroup} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { useAddPost, usePosts } from 'hooks/posts';
import PostsLists from "components/post/PostsLists"
import { useLogout } from "hooks/auth";
import { useGoToProfile } from 'hooks/users';
import { auth } from 'firebase_setup/firebase';

function NewPost() {
    const {register, handleSubmit, reset} = useForm();
    const {addPost} = useAddPost();

    function handleAddPost(data) {
        addPost({
            title: data.title,
            text: data.text,
            pref: data.pref
            
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
        {...register("title", {requred: true})}
        />
        <CheckboxGroup colorScheme={"purple"} defaultValue={['oncampus']}>
            <HStack spacing={[1, 5]} direction={['column', 'row']}>
                <Text fontStyle={"bold"}>Where?</Text>
                <Checkbox value='oncampus' defaultChecked>University Housing</Checkbox>
                <Checkbox value='iv'>Isla Vista</Checkbox>
                <Checkbox value='other'>Other</Checkbox>
            </HStack>
        </CheckboxGroup>
        <CheckboxGroup colorScheme={"purple"} defaultValue={['oncampus']}>
            <HStack spacing={[1, 5]} direction={['column', 'row']}>
                <Text fontStyle={"bold"}>I am ...</Text>
                <Checkbox value='lfhousing' defaultChecked>Looking for housing</Checkbox>
                <Checkbox value='lfroomates'>Looking for roommates</Checkbox>
            </HStack>
        </CheckboxGroup>

        <Textarea resize="none" 
         
        placeholder="Create your post..."
        minRows={3}
        {...register("text", {requred: true})}
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
        console.log("here");
        await logout();
    }

    async function handleProfile() {
        console.log("going to profile");
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
