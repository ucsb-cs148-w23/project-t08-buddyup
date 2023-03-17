import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "hooks/auth";
import { useDeleteComment } from "hooks/comments";
import { useForm } from "react-hook-form";
import { FaTrash } from "react-icons/fa";

export default function Comment({ comment }) {
  const { text, date, name, uid, id } = comment;
  const { user } = useAuth();
  const { deleteComment } = useDeleteComment();
  const { handleSubmit } = useForm();

  async function handleDeleteComment(){
    deleteComment(id);
  }
  
  return (
    <Box px="4" py="2" maxW="600px" mx="auto" textAlign="left">
      <Flex pb="2">
        <Box flex="1" ml="4">
          <Flex borderBottom="1px solid" borderColor="teal.100" pb="2">
            <Text>{name}</Text>
            <Text fontSize="xs" color="gray.500" ml={"10px"} mt={"4px"}>
                {formatDistanceToNow(date)} ago
              </Text>
            { user.uid === uid
            ? <form onSubmit={handleSubmit(handleDeleteComment)}>
                <IconButton
                aria-label="Delete Comment"
                type="submit"
                size="xs"
                colorScheme="red"
                variant="ghost"
                icon={<FaTrash/>}
                isRound
                />
            </form> 
            : ""
            }
          </Flex>
          <Box pt="2" fontSize="sm">
            <Text>{text}</Text>
          </Box>
        </Box>

      </Flex>
    </Box>
  );
}