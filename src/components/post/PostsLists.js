import Post from "./index";
import { Box, Text } from "@chakra-ui/react";



export default function PostsLists({posts}){
    return (
    <Box px="4" align="center">
    {posts?.length ===0 ? (
    <Text textAlign="center" pt="15px" color="teal" fontSize="18px">
        No posts yet...Make the first one and find a roommate!</Text>
    ) : (
        posts?.map((post) => <Post key={post.id} post={post}/>)
    )}

    </Box>
);
}