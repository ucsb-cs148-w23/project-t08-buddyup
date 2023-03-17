import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "hooks/auth";
import { useDeleteComment } from "hooks/comments";
import { useUser } from "hooks/users";
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
  const { user: user2, isLoading } = useUser(user ? user.uid : "pBvdbPyaEi79xLYvgffv");


  return (
    <Box px="4" py="2" maxW="600px" mx="auto" textAlign="left" >
      <Flex pb="2">
        <Box flex="1" ml="4" borderWidth="2px" borderColor="gray.200">

          <Flex borderBottom="2px solid" borderColor="gray.600" bg="gray.200" pl="15px" py="10px">
            <Text>{name}</Text>
            <Text fontSize="12px" color="gray.500" ml="20px" mt="4px">
                {formatDistanceToNow(date)} ago
              </Text>
            { (user.uid === uid || (user2 ? user2.admin : "False") === "True")
            ? <form onSubmit={handleSubmit(handleDeleteComment)}>
                <IconButton
                aria-label="Delete Comment"
                type="submit"
                size="xs"
                pl="10px"
                colorScheme="red"
                variant="ghost"
                icon={<FaTrash/>}
                isRound
                />
            </form> 
            : ""
            }
          </Flex>

          <Box pt="10px" pl="15px" fontSize="15px" bg="white">
            <Text pb="15px">{text}</Text>
          </Box>
        </Box>

      </Flex>
    </Box>
  );
}