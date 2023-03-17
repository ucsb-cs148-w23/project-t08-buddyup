import { Flex, IconButton } from "@chakra-ui/react";
import {
  FaComment,
  FaRegComment,
  FaTrash,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useComments, useDeleteComment } from "hooks/comments";
import { useDeletePost } from "hooks/posts";
import { useAuth } from "hooks/auth";
import { useForm } from "react-hook-form";
import { useGoToDashboard } from "hooks/users";

export default function Actions({ post }) {
  const { id , uid } = post;
  const { comments, isLoading: commentsLoading } = useComments(id);
  const { deletePost } = useDeletePost();
  const { deleteCommentUnsafe } = useDeleteComment();
  const { user } = useAuth();
  const { handleSubmit } = useForm();
  
  const { goToDashboard } = useGoToDashboard();


  async function handleDeletePost() {
    if(deletePost(id)){
      for (let i = 0; i < comments.length; i++){
        deleteCommentUnsafe(comments[i].id);
      }
    }
    await goToDashboard();
  }


  return (
    <Flex bg="gray.100" p="2">
      <Flex alignItems="center" ml="2">
        <IconButton
          as={Link}
          to={`comments/${id}`}
          aria-label="Comments"
          size="md"
          colorScheme="teal"
          variant="ghost"
          icon={comments?.length === 0 ? <FaRegComment /> : <FaComment />}
          isRound
        />
        { commentsLoading 
          ? ""
          : comments?.length}
        { user.uid === uid
          ? <form onSubmit={handleSubmit(handleDeletePost)}>
              <IconButton
              aria-label="Delete Post"
              type="submit"
              size="md"
              colorScheme="red"
              variant="ghost"
              icon={<FaTrash/>}
              isRound
              />
           </form> 
          : ""
          }
        
      </Flex>

    </Flex>
  );
}