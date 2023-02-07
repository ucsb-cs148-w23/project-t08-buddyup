import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import Avatar from "components/profile/Avatar";
import { useDeleteComment } from "hooks/comments";
import { FaTrash } from "react-icons/fa";
import {useUser} from "hooks/users";
import { formatDistanceToNow } from "date-fns";
import { auth } from "firebase_setup/firebase";

export default function Comment({ comment }) {
  const { text, testuid, date, id, name } = comment;
  const uid = auth.currentUser.uid;
  const { user, isLoading: userLoading } = useUser(uid);
  const { deleteComment, isLoading: deleteLoading } = useDeleteComment(id);
  


  return (
    <Box px="4" py="2" maxW="600px" mx="auto" textAlign="left">
      <Flex pb="2">
        <Box flex="1" ml="4">
          <Flex borderBottom="1px solid" borderColor="teal.100" pb="2">
          </Flex>
          <Text>{name}</Text>
          <Text fontSize="xs" color="gray.500">
                {formatDistanceToNow(date)} ago
              </Text>
          <Box pt="2" fontSize="sm">
            <Text>{text}</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}