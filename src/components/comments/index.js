import { Box, ChakraProvider, Button } from "@chakra-ui/react";
import Post from "components/post";
import { useParams } from "react-router-dom";
import { usePost } from "hooks/posts";
import NewComment from "./NewComment";
import CommentList from "./CommentList";
import { useForm } from "react-hook-form";
import { useGoToDashboard } from "hooks/users";
import theme from "components/theme.js";

export default function Comments() {
  const { postID } = useParams();
  const { post, isLoading } = usePost(postID);

  const { handleSubmit } = useForm();
  const { goToDashboard } = useGoToDashboard();

  async function handleDashboard() {
    console.log("going to dashboard");
    await goToDashboard();
  }

  if (isLoading) return "Loading...";
  return (
    <ChakraProvider theme={theme}>

    {/* <Box>
      <form onSubmit = {handleSubmit(handleDashboard)}>
        <Button type="submit" ml="50px" >
            Return to Dashboard
        </Button>
      </form>
    </Box> */}

    <Box align="center">
      <Post post={post}/>
    </Box>

    <Box>
      <form onSubmit = {handleSubmit(handleDashboard)}>
        <Button type="submit" ml="670px" mt="20px">
            Return to Dashboard
        </Button>
      </form>
    </Box>

    <Box align="center">
      <NewComment post={post} />
      <CommentList post={post}/>
    </Box>
    
    </ChakraProvider>
  );
}