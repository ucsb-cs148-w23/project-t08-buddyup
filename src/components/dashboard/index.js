import {Box, Button, Heading, HStack, Textarea} from '@chakra-ui/react';
import { useForm } from "react-hook-form";

export default function Dashboard() {
    const {register, handleSubmit, reset} = useForm();
    function handlePost(data) {
        console.log(data);
        reset();
    }
    return <Box>
        <form onSubmit={handleSubmit(handlePost)}>
            <HStack justify="space-between">
                <Heading>
                    New Post
                </Heading>
                <Button type="submit">
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
