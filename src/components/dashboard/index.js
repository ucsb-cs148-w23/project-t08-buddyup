import {Box, Button, Heading, HStack, Textarea} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { useAddPost, usePosts } from 'hooks/posts';
import PostsLists from "components/post/PostsLists"
import { useLogout } from "hooks/auth";

function NewPost() {
    const {register, handleSubmit, reset} = useForm();
    const {addPost} = useAddPost();
//const {user, isLoading: authLoading} = useAuth()

    function handleAddPost(data) {
        addPost({
            //uid: user.id,
            text: data.text,
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
        placeholder="Create a new post..."
        minRows={3}
        {...register("text", {requred: true})}
        />
    </form>
</Box>
}




export default function Dashboard() {
    const {logout, load} = useLogout();
    const { handleSubmit } = useForm();

    async function handleLogout() {
        console.log("here");
        await logout();
    }
    const{posts, isLoading} = usePosts();
    return (
    <>
        <form onSubmit={handleSubmit(handleLogout)}>
                    <Button 
            type="submit" 
            >
                Sign Out
            </Button>
            </form>
        <NewPost />
        <PostsLists posts={posts}/>
    </>
    )

}