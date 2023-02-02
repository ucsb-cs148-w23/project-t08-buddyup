import {Box, Button, Heading, HStack, Textarea} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { useAddPost } from 'hooks/posts';

export default function Dashboard() {
    const {register, handleSubmit, reset} = useForm();
    const {addPost, isLoading: addingPost} = useAddPost();
const {user, isLoading: authLoading} = useAuth()

    function handleAddPost(data) {
        addPost({
            uid: user.id,
            text: data.text,
        })
        reset();
    }

    return <Box>
        <form onSubmit={handleSubmit(handlePost)}>
            <HStack justify="space-between">
                <Heading>
                    New Post
                </Heading>
                <Button 
                type="submit" 
                isLoading={authLoading || addingPost} 
                loadingText="Loading">
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
