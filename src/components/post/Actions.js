import { Flex, IconButton } from "@chakra-ui/react";
//import { useAuth } from "hooks/auth";
import {
  FaRegHeart,
  FaHeart,
  FaComment,
  FaRegComment,
  FaTrash,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { PROTECTED } from "lib/routes";
import { useComments } from "hooks/comments";

export default function Actions({ post }) {
  const { id, likes, uid } = post;
  //const { user, isLoading: userLoading } = useAuth();

  //const isLiked = likes.includes(user?.id);
 // const config = {
 //   id,
 //   isLiked,
  //  uid: user?.id,
  //};

  //const { toggleLike, isLoading: likeLoading } = useToggleLike(config);
  //const { deletePost, isLoading: deleteLoading } = useDeletePost(id);
  //const { comments, isLoading: commentsLoading } = useComments(id);
  const length = 0;
  return (
    <Flex p="2">
      <Flex alignItems="center" ml="2">
        <IconButton
          as={Link}
          to={`comments/${id}`}
          //isLoading={commentsLoading}
          size="md"
          colorScheme="teal"
          variant="ghost"
          icon={length === 0 ? <FaRegComment /> : <FaComment />}
          isRound
        />
      </Flex>

    </Flex>
  );
}