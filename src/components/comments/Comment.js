import { Box, Flex, Text } from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";

export default function Comment({ comment }) {
  const { text, date, name } = comment;
  
  return (
    <Box px="4" py="2" maxW="600px" mx="auto" textAlign="left">
      <Flex pb="2">
        <Box flex="1" ml="4" border="2px solid" borderColor="gray.300">

          <Box pt="2" pl="10px" bg="gray.300">
            <Text>{name}</Text>
            <Text fontSize="xs" color="gray.500" pb="8px">
                  {formatDistanceToNow(date)} ago
            </Text>
          </Box>

          <Flex borderBottom="2px solid" borderColor="gray.600">
          </Flex>
          
          <Box pt="2" pl="10px" pb="10px" fontSize="sm" bg="white">
            <Text>{text}</Text>
          </Box>
        </Box>

      </Flex>
    </Box>
  );
}