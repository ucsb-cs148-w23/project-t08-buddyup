import { Flex, IconButton } from "@chakra-ui/react";
import {
  FaComment,
  FaRegComment,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useComments } from "hooks/comments";

export default function Actions({ post }) {
  const { id } = post;
  const { comments, isLoading: commentsLoading } = useComments(id);
  return (
    <Flex p="2">
      <Flex alignItems="center" ml="2">
        <IconButton
          as={Link}
          to={`comments/${id}`}
          size="md"
          colorScheme="teal"
          variant="ghost"
          icon={comments?.length === 0 ? <FaRegComment /> : <FaComment />}
          isRound
        />
        { commentsLoading 
          ? ""
          : comments?.length}
      </Flex>

    </Flex>
  );
}