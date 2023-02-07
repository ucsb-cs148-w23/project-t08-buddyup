import Post from "./index";
import { Box, Text } from "@chakra-ui/react";



export default function PostsLists({posts}){
    return (
    <Box px="4">
    {posts?.length ===0 ? (
    <Text textAlign="center" fontSize="xl">No posts yet...Make the first one and find a roommate!</Text>
    ) : (
        posts?.map((post) => <Post key={post.id} post={post}/>)
    )}

    </Box>
);
}