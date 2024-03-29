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
import { useGoToDashboard, useUser } from "hooks/users";

export default function Actions({ post }) {
  const { id , uid } = post;
  const { comments, isLoading: commentsLoading } = useComments(id);
  const { deletePost } = useDeletePost();
  const { deleteCommentUnsafe } = useDeleteComment();
  const { user } = useAuth();
  const { handleSubmit } = useForm();
  
  const { goToDashboard } = useGoToDashboard();

  const { user: user2 } = useUser(user ? user.uid : "pBvdbPyaEi79xLYvgffv");


  async function handleDeletePost() {
    const res = window.confirm("Are you sure you want to delete this post?");
    if(res){
      await goToDashboard();
      await deletePost(id);
      for (let i = 0; i < comments.length; i++){
        deleteCommentUnsafe(comments[i].id);
      }
    }
    
  }

  const pathname = window.location.pathname;

  return (
    <Flex bg="gray.100" p="2">
      <Flex alignItems="center" ml="2">
        <IconButton
          as={Link}
          to={ pathname.includes("comments") ? pathname : `comments/${id}`}
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
        { (user.uid === uid || (user2 ? user2.admin : "False") === "True")
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