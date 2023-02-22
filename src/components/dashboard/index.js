import {Box, Button, Heading, HStack, Textarea, Avatar} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { useAddPost, usePosts } from 'hooks/posts';
import PostsLists from "components/post/PostsLists"
import { useLogout } from "hooks/auth";
import { useGoToProfile } from 'hooks/users';
import { auth } from 'firebase_setup/firebase';
import { Link } from 'react-router-dom';
import { PROTECTED } from 'lib/routes';

function NewPost() {
    const {register, handleSubmit, reset} = useForm();
    const {addPost} = useAddPost();
//const {user, isLoading: authLoading} = useAuth()

    function handleAddPost(data) {
        addPost({
            //uid: user.id,
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
            //isLoading={authLoading || addingPost} 
            //loadingText="Loading"
            >
                Post
            </Button>
        </HStack>
        <Textarea resize="none" 
        mt="5" 
        placeholder="Title your post"
        minRows={1}
        {...register("title", {requred: true})}
        />
        <Textarea resize="none" 
         
        placeholder="Off campus or on campus"
        minRows={1}
        {...register("pref", {requred: true})}
        />
        <Textarea resize="none" 
         
        placeholder="Create your post..."
        minRows={3}
        {...register("text", {requred: true})}
        />
       
    </form>
    
</Box>
}




export default function Dashboard() {
    const {logout, load} = useLogout();
    const { handleSubmit } = useForm();
    const { goToProfile, loading  } = useGoToProfile();
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
        <PostsLists posts={posts}/>
    </>
    )

}
