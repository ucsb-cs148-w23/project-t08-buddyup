import { Box, ChakraProvider } from "@chakra-ui/react";
import Post from "components/post";
import { useParams } from "react-router-dom";
import { usePost } from "hooks/posts";
import NewComment from "./NewComment";
import CommentList from "./CommentList";
import theme from "components/theme.js";

export default function Comments() {
  const { postID } = useParams();
  const { post, isLoading } = usePost(postID);
  if (isLoading) return "Loading...";
  return (
    <ChakraProvider theme={theme}>

    <Box align="center" pt="50">
      <Post post={post}/>
      <NewComment post={post} />
      <CommentList post={post}/>
    </Box>
    
    </ChakraProvider>
  );
}