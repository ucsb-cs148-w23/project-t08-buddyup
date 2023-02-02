import Post from "./index"
import {Box} from "@chakra-ui/react";


export default function PostsLists({posts}){
    return <Box px="4">
    {posts?.length ===0 
    ? ("no posts") 
    : posts?.map(post => <Post key={post.id} post={post}/>)}

    </Box>
}