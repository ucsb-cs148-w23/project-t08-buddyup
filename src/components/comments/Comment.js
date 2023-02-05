import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import Avatar from "components/profile/Avatar";
import { useDeleteComment } from "hooks/comments";
import { FaTrash } from "react-icons/fa";

export default function Comment({ comment }) {
  const { text, uid, date, id } = comment;
  const { deleteComment, isLoading: deleteLoading } = useDeleteComment(id);


  return (
    <Box px="4" py="2" maxW="600px" mx="auto" textAlign="left">
      <Flex pb="2">
        <Box flex="1" ml="4">
          <Flex borderBottom="1px solid" borderColor="teal.100" pb="2">
            {(
              <IconButton
                size="sm"
                ml="auto"
                icon={<FaTrash />}
                colorScheme="red"
                variant="ghost"
                isRound
                onClick={deleteComment}
                isLoading={deleteLoading}
              />
            )}
          </Flex>
          <Box pt="2" fontSize="sm">
            <Text>{text}</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}