import { Box, Flex, Text } from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";

export default function Comment({ comment }) {
  const { text, date, name } = comment;
  


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